import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./QuickTips.css";

export default function QuickTips({ step }: ChapterStepProps) {
  return (
    <div className="scene qt-scene">
      <div className={`qt-panel ${step === 0 ? "is-active" : ""}`}>
        <GenerateScene active={step === 0} />
      </div>
      <div className={`qt-panel qt-panel--1 ${step === 1 ? "is-active" : ""}`}>
        <MemoryScene active={step === 1} />
      </div>
      <div className={`qt-panel qt-panel--2 ${step === 2 ? "is-active" : ""}`}>
        <RulesScene active={step === 2} />
      </div>
      <div className={`qt-panel qt-panel--3 ${step === 3 ? "is-active" : ""}`}>
        <TrickScene active={step === 3} />
      </div>
    </div>
  );
}

/* ── Step 0: Generate skill from task ── */
function GenerateScene({ active }: { active: boolean }) {
  return (
    <div className="qt-generate">
      <MaskReveal show={active} delay={100} duration={1000}>
        <div className="qt-generate__chat card">
          <div className="qt-generate__header">
            <span className="qt-generate__dot" />
            <span className="label-mono">对话窗口</span>
          </div>
          <div className="qt-generate__msgs">
            <div className="qt-generate__msg qt-generate__msg--user">
              帮我把刚才的任务整理成一个 Skill
            </div>
            <div className="qt-generate__msg qt-generate__msg--ai">
              好的，已生成 skill.md ...
            </div>
          </div>
        </div>
      </MaskReveal>

      <MaskReveal show={active} delay={900} duration={900}>
        <p className="qt-generate__label serif-cn">
          完成任务 → 整理成 Skill → 核对一下就行
        </p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 1: Memory and rules ── */
function MemoryScene({ active }: { active: boolean }) {
  const items = ["Skill", "记忆", "规则"];
  return (
    <div className="qt-memory">
      <MaskReveal show={active} delay={200} duration={800}>
        <h2 className="qt-memory__title serif-cn">本质都一样</h2>
      </MaskReveal>

      <div className="qt-memory__row">
        {items.map((item, i) => (
          <MaskReveal key={item} show={active} delay={500 + i * 400} duration={700}>
            <div className={`qt-memory__card card ${active ? "is-lit" : ""}`}
              style={{ "--light-delay": `${i * 0.4}s` } as React.CSSProperties}>
              <span className="qt-memory__name">{item}</span>
              <span className="qt-memory__sub">提示词换个位置</span>
            </div>
          </MaskReveal>
        ))}
      </div>
    </div>
  );
}

/* ── Step 2: Rule examples ── */
function RulesScene({ active }: { active: boolean }) {
  const rules = [
    "SQL 对齐方式",
    "注释风格",
    "变量命名规范",
    "任务边界",
  ];
  return (
    <div className="qt-rules">
      <MaskReveal show={active} delay={100} duration={800}>
        <h2 className="qt-rules__title serif-cn">规则里放什么</h2>
      </MaskReveal>

      <div className="qt-rules__grid">
        {rules.map((r, i) => (
          <MaskReveal key={r} show={active} delay={400 + i * 300} duration={600}>
            <div className="qt-rules__item card">{r}</div>
          </MaskReveal>
        ))}
      </div>
    </div>
  );
}

/* ── Step 3: Core trick — design first ── */
function TrickScene({ active }: { active: boolean }) {
  const steps = ["设计文档", "核对", "写代码", "交叉核验"];
  return (
    <div className="qt-trick">
      <MaskReveal show={active} delay={100} duration={800}>
        <h2 className="qt-trick__title serif-cn">先设计，再编码</h2>
      </MaskReveal>

      <div className="qt-trick__flow">
        {steps.map((s, i) => (
          <div key={s} className="qt-trick__node-wrap">
            {i > 0 && (
              <MaskReveal show={active} delay={400 + i * 400} duration={500}>
                <span className="qt-trick__arrow">→</span>
              </MaskReveal>
            )}
            <MaskReveal show={active} delay={400 + i * 400} duration={700}>
              <div className={`qt-trick__node ${i === steps.length - 1 ? "qt-trick__node--accent" : ""} ${active ? "is-lit" : ""}`}
                style={{ "--light-delay": `${i * 0.4}s` } as React.CSSProperties}>
                {s}
              </div>
            </MaskReveal>
          </div>
        ))}
      </div>

      <MaskReveal show={active} delay={2200} duration={1000}>
        <p className="qt-trick__caption serif-cn">
          交叉核验，正确率高很多
        </p>
      </MaskReveal>
    </div>
  );
}
