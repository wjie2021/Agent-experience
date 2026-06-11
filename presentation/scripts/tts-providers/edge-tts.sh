#!/usr/bin/env bash
# edge-tts provider — free, no API key, Microsoft Edge TTS backend
# Docs: https://github.com/rany2/edge-tts
# Voices: edge-tts --list-voices
#   zh-CN-YunxiNeural     (男声)
#   zh-CN-XiaoxiaoNeural  (女声)

# Timeout per segment (seconds) — edge-tts can hang on slow networks
EDGE_TTS_TIMEOUT="${EDGE_TTS_TIMEOUT:-60}"

# Max retries per segment
EDGE_TTS_RETRIES="${EDGE_TTS_RETRIES:-3}"

tts_check() {
  command -v edge-tts >/dev/null || { echo "✗ edge-tts not found" >&2; return 1; }
}

tts_install_help() {
  cat <<'EOF' >&2
Install edge-tts (free, uses Microsoft Edge's TTS backend, no API key):
  pip install edge-tts
List available voices:
  edge-tts --list-voices | less
EOF
}

tts_synthesize() {
  local text="$1" out="$2" voice="${3:-zh-CN-YunxiNeural}"
  local attempt=0 tmp_err

  while (( attempt < EDGE_TTS_RETRIES )); do
    attempt=$((attempt + 1))
    tmp_err=$(mktemp)

    # Use timeout to prevent hangs; edge-tts sometimes stalls on network issues
    if timeout "${EDGE_TTS_TIMEOUT}" edge-tts \
        --text "$text" \
        --voice "$voice" \
        --write-media "$out" \
        >/dev/null 2>"$tmp_err"; then
      rm -f "$tmp_err"
      return 0
    fi

    local exit_code=$?
    rm -f "$out"  # clean up partial file

    if (( attempt < EDGE_TTS_RETRIES )); then
      echo "  ⚠ edge-tts attempt ${attempt} failed (exit ${exit_code}), retrying..." >&2
      sleep 2
    else
      echo "  ✗ edge-tts failed after ${EDGE_TTS_RETRIES} attempts (exit ${exit_code})" >&2
      [[ -s "$tmp_err" ]] && cat "$tmp_err" >&2
      rm -f "$tmp_err"
      return 1
    fi
  done
}
