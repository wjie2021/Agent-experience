import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./Coldopen.css";

/**
 * All 4 scenes are always mounted. CSS transitions handle enter/exit.
 * Each scene receives `active` to gate MaskReveal `show` — animations
 * replay every time the step becomes active.
 */
export default function Coldopen({ step }: ChapterStepProps) {
  return (
    <div className="scene co-scene">
      <div className={`co-scene__panel ${step === 0 ? "is-active" : ""}`}>
        <HookScene active={step === 0} />
      </div>
      <div className={`co-scene__panel co-scene__panel--1 ${step === 1 ? "is-active" : ""}`}>
        <TransitionScene active={step === 1} />
      </div>
      <div className={`co-scene__panel co-scene__panel--2 ${step === 2 ? "is-active" : ""}`}>
        <IdeScene active={step === 2} />
      </div>
      <div className={`co-scene__panel co-scene__panel--3 ${step === 3 ? "is-active" : ""}`}>
        <BarrierScene active={step === 3} />
      </div>
    </div>
  );
}

/* ── Step 0: Hook ── */
function HookScene({ active }: { active: boolean }) {
  return (
    <div className="co-hook">
      <svg
        className={`co-hook__bg-icon ${active ? "is-animating" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>

      <div className="co-hook__text">
        <MaskReveal show={active} delay={200} duration={1100}>
          <h1 className="co-hook__question serif-cn">
            你以为 AI 只能当搜索引擎用？
          </h1>
        </MaskReveal>

        <div className={`co-hook__rule rule-grow ${active ? "in" : ""}`} />

        <MaskReveal show={active} delay={900} duration={1000}>
          <p className="co-hook__answer serif-cn">我之前也这么想。</p>
        </MaskReveal>
      </div>
    </div>
  );
}

/* ── Step 1: CSDN → Deepseek ── */
function TransitionScene({ active }: { active: boolean }) {
  return (
    <div className="co-transition">
      <div className="co-transition__flow">
        <MaskReveal show={active} delay={100} duration={900}>
          <span className="co-transition__old label-mono">面向 CSDN</span>
        </MaskReveal>

        <MaskReveal show={active} delay={500} duration={800}>
          <span className={`co-transition__arrow ${active ? "is-animating" : ""}`}>→</span>
        </MaskReveal>

        <MaskReveal show={active} delay={800} duration={900}>
          <span className="co-transition__new label-mono">面向 Deepseek</span>
        </MaskReveal>
      </div>

      <MaskReveal show={active} delay={1300} duration={1000}>
        <div className="co-transition__punch pull-quote">
          换了个搜索框而已。
        </div>
      </MaskReveal>
    </div>
  );
}

/* ── Step 2: IDE code completion ── */
function IdeScene({ active }: { active: boolean }) {
  return (
    <div className="co-ide">
      <MaskReveal show={active} delay={100} duration={1000}>
        <div className="co-ide__editor card">
          <div className="co-ide__titlebar">
            <span className="co-ide__dot co-ide__dot--r" />
            <span className="co-ide__dot co-ide__dot--y" />
            <span className="co-ide__dot co-ide__dot--g" />
            <span className="co-ide__filename mono">UserService.java</span>
          </div>
          <div className="co-ide__body">
            <div className="co-ide__line">
              <span className="co-ide__ln">12</span>
              <span className="co-ide__kw">public</span>{" "}
              <span className="co-ide__type">User</span>{" "}
              <span className="co-ide__fn">findUser</span>(
              <span className="co-ide__type">String</span> id) {"{"}
            </div>
            <div className="co-ide__line co-ide__line--ghost">
              <span className="co-ide__ln">13</span>
              <span className={`co-ide__ghost-text ${active ? "is-animating" : ""}`}>
                return userRepository.findById(id).orElse(null);
              </span>
            </div>
            <div className="co-ide__line">
              <span className="co-ide__ln">14</span>
              {"}"}
            </div>
          </div>
        </div>
      </MaskReveal>

      <MaskReveal show={active} delay={1000} duration={900}>
        <p className="co-ide__caption serif-cn">
          补全几行，提个需求，看看合不合适
        </p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 3: Trust barrier ── */
function BarrierScene({ active }: { active: boolean }) {
  return (
    <div className="co-barrier">
      <MaskReveal show={active} delay={200} duration={1000}>
        <svg
          className={`co-barrier__icon ${active ? "is-animating" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7L12 2z" />
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>
      </MaskReveal>

      <MaskReveal show={active} delay={800} duration={1100}>
        <h2 className="co-barrier__text serif-cn">不敢交给它。</h2>
      </MaskReveal>

      <MaskReveal show={active} delay={1400} duration={1000}>
        <p className="co-barrier__sub serif-cn">
          AI 发展得再快，也没体会到智能体有多方便
        </p>
      </MaskReveal>
    </div>
  );
}
