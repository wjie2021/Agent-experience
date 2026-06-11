"""
synthesize-edge-tts.py — Read audio-segments.json and synthesize each
segment with edge-tts. Incremental (skips existing files), with timeout
and retry logic.

Usage:
  python scripts/synthesize-edge-tts.py [--force] [--voice zh-CN-YunxiNeural]
"""
import json
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SEGMENTS_FILE = ROOT / "audio-segments.json"
OUT_DIR = ROOT / "public" / "audio"

# Defaults
VOICE = "zh-CN-YunxiNeural"
TIMEOUT_SEC = 60
MAX_RETRIES = 3


def synthesize(text: str, out_path: Path, voice: str) -> bool:
    """Run edge-tts with timeout and retry. Returns True on success."""
    out_path.parent.mkdir(parents=True, exist_ok=True)

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            result = subprocess.run(
                [
                    "edge-tts",
                    "--text", text,
                    "--voice", voice,
                    "--write-media", str(out_path),
                ],
                capture_output=True,
                text=True,
                timeout=TIMEOUT_SEC,
            )
            if result.returncode == 0 and out_path.exists():
                return True

            # Failed — clean up partial file
            out_path.unlink(missing_ok=True)
            if attempt < MAX_RETRIES:
                print(f"  [WARN] attempt {attempt} failed (exit {result.returncode}), retrying...")
                time.sleep(2)
            else:
                print(f"  [FAIL] failed after {MAX_RETRIES} attempts: {result.stderr.strip()}")
                return False

        except subprocess.TimeoutExpired:
            out_path.unlink(missing_ok=True)
            if attempt < MAX_RETRIES:
                print(f"  [WARN] attempt {attempt} timed out ({TIMEOUT_SEC}s), retrying...")
                time.sleep(2)
            else:
                print(f"  [FAIL] timed out after {MAX_RETRIES} attempts ({TIMEOUT_SEC}s each)")
                return False

    return False


def main():
    force = "--force" in sys.argv
    voice = VOICE

    # Parse --voice flag
    for i, arg in enumerate(sys.argv):
        if arg == "--voice" and i + 1 < len(sys.argv):
            voice = sys.argv[i + 1]
        elif arg.startswith("--voice="):
            voice = arg.split("=", 1)[1]

    if not SEGMENTS_FILE.exists():
        print(f"✗ {SEGMENTS_FILE} not found. Run: npm run extract-narrations", file=sys.stderr)
        sys.exit(1)

    segments = json.loads(SEGMENTS_FILE.read_text("utf-8"))
    total = len(segments)
    synthesized = 0
    skipped = 0
    failed = 0

    print(f"Synthesizing {total} segments with edge-tts (voice={voice}, timeout={TIMEOUT_SEC}s)")
    # Force UTF-8 output on Windows
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

    for i, seg in enumerate(segments, 1):
        chapter = seg["chapter"]
        step = seg["step"]
        text = seg["text"]
        out = OUT_DIR / chapter / f"{step}.mp3"

        if out.exists() and not force:
            skipped += 1
            print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  skip (exists)")
            continue

        start = time.time()
        ok = synthesize(text, out, voice)
        elapsed = time.time() - start

        if ok:
            synthesized += 1
            print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  OK {elapsed:.1f}s")
        else:
            failed += 1
            print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  FAILED", file=sys.stderr)

    print(f"\nDone (edge-tts) -- synthesized {synthesized}, skipped {skipped}, failed {failed}")
    if failed > 0:
        sys.exit(2)


if __name__ == "__main__":
    main()
