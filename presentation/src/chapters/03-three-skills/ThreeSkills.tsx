import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./ThreeSkills.css";

const PIPELINE_STEPS = [
  { label: "需求", icon: "📄" },
  { label: "设计", icon: "📐" },
  { label: "API", icon: "📋" },
  { label: "代码", icon: "💻" },
  { label: "报告", icon: "📊" },
];

export default function ThreeSkills({ step }: ChapterStepProps) {
  return (
    <div className="scene ts-scene">
      <div className={`ts-panel ${step === 0 ? "is-active" : ""}`}>
        <ProblemScene active={step === 0} />
      </div>
      <div className={`ts-panel ts-panel--1 ${step === 1 ? "is-active" : ""}`}>
        <ReqToApiScene active={step === 1} />
      </div>
      <div className={`ts-panel ts-panel--2 ${step === 2 ? "is-active" : ""}`}>
        <ApiToCodeScene active={step === 2} />
      </div>
      <div className={`ts-panel ts-panel--3 ${step === 3 ? "is-active" : ""}`}>
        <CodeReviewScene active={step === 3} />
      </div>
      <div className={`ts-panel ts-panel--4 ${step === 4 ? "is-active" : ""}`}>
        <PipelineScene active={step === 4} />
      </div>
    </div>
  );
}

/* ── Step 0: Problem ── */
function ProblemScene({ active }: { active: boolean }) {
  return (
    <div className="ts-problem">
      <div className="ts-problem__split">
        <MaskReveal show={active} delay={200} duration={1000}>
          <div className="ts-problem__card card">
            <span className="ts-problem__icon">⚠</span>
            <span className="ts-problem__label">质量不可控</span>
            <span className="ts-problem__detail">魔法值 / 注释 / 命名</span>
          </div>
        </MaskReveal>

        <MaskReveal show={active} delay={600} duration={1000}>
          <span className="ts-problem__vs">+</span>
        </MaskReveal>

        <MaskReveal show={active} delay={1000} duration={1000}>
          <div className="ts-problem__card card">
            <span className="ts-problem__icon">⏳</span>
            <span className="ts-problem__label">复读太慢</span>
            <span className="ts-problem__detail">一行一行检查</span>
          </div>
        </MaskReveal>
      </div>

      <MaskReveal show={active} delay={1600} duration={1000}>
        <p className="ts-problem__question serif-cn">
          有没有办法同时提高质量和效率？
        </p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 1: req-to-api ── */
function ReqToApiScene({ active }: { active: boolean }) {
  const nodes = ["需求文档", "业务分析", "建表语句", "API 文档", "自检"];
  return (
    <div className="ts-skill">
      <MaskReveal show={active} delay={100} duration={800}>
        <div className="ts-skill__header">
          <span className="ts-skill__name mono">req-to-api</span>
          <span className="ts-skill__badge badge-mono is-accent">Skill 1</span>
        </div>
      </MaskReveal>

      <div className="ts-skill__flow">
        {nodes.map((node, i) => (
          <div key={node} className="ts-skill__node-wrap">
            {i > 0 && (
              <MaskReveal show={active} delay={300 + i * 350} duration={500}>
                <span className="ts-skill__arrow">→</span>
              </MaskReveal>
            )}
            <MaskReveal show={active} delay={300 + i * 350} duration={700}>
              <div className="ts-skill__node card">{node}</div>
            </MaskReveal>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step 2: api-to-code ── */
function ApiToCodeScene({ active }: { active: boolean }) {
  const files = ["Controller", "Service", "Cmd", "Query", "VO"];
  return (
    <div className="ts-skill">
      <MaskReveal show={active} delay={100} duration={800}>
        <div className="ts-skill__header">
          <span className="ts-skill__name mono">api-to-code</span>
          <span className="ts-skill__badge badge-mono is-accent">Skill 2</span>
        </div>
      </MaskReveal>

      <div className="ts-codegen">
        <MaskReveal show={active} delay={300} duration={900}>
          <div className="ts-codegen__input card">
            <span className="label-mono">输入</span>
            <span className="ts-codegen__file">API 文档.md</span>
          </div>
        </MaskReveal>

        <div className="ts-codegen__outputs">
          {files.map((f, i) => (
            <MaskReveal key={f} show={active} delay={700 + i * 250} duration={600}>
              <div className="ts-codegen__file card">
                <span className="mono">{f}.java</span>
              </div>
            </MaskReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Step 3: code-review ── */
function CodeReviewScene({ active }: { active: boolean }) {
  const dims = ["正确性", "安全性", "性能", "可维护性"];
  return (
    <div className="ts-skill">
      <MaskReveal show={active} delay={100} duration={800}>
        <div className="ts-skill__header">
          <span className="ts-skill__name mono">code-review</span>
          <span className="ts-skill__badge badge-mono is-accent">Skill 3</span>
        </div>
      </MaskReveal>

      <div className="ts-review">
        <MaskReveal show={active} delay={300} duration={900}>
          <div className="ts-review__input card">
            <span className="label-mono">源代码</span>
            <span className="ts-review__module">指定模块</span>
          </div>
        </MaskReveal>

        <MaskReveal show={active} delay={700} duration={600}>
          <span className="ts-review__arrow">→</span>
        </MaskReveal>

        <div className="ts-review__dims">
          {dims.map((d, i) => (
            <MaskReveal key={d} show={active} delay={1000 + i * 300} duration={600}>
              <div className="ts-review__dim">{d}</div>
            </MaskReveal>
          ))}
        </div>

        <MaskReveal show={active} delay={2200} duration={800}>
          <span className="ts-review__arrow">→</span>
        </MaskReveal>

        <MaskReveal show={active} delay={2500} duration={800}>
          <div className="ts-review__output card">
            <span className="label-mono">审查报告</span>
            <span className="ts-review__score hero-num">A+</span>
          </div>
        </MaskReveal>
      </div>
    </div>
  );
}

/* ── Step 4: Full pipeline ── */
function PipelineScene({ active }: { active: boolean }) {
  return (
    <div className="ts-pipeline">
      <MaskReveal show={active} delay={100} duration={800}>
        <h2 className="ts-pipeline__title serif-cn">完整工作流</h2>
      </MaskReveal>

      <div className="ts-pipeline__row">
        {PIPELINE_STEPS.map((s, i) => (
          <div key={s.label} className="ts-pipeline__node-wrap">
            {i > 0 && (
              <MaskReveal show={active} delay={400 + i * 350} duration={500}>
                <span className="ts-pipeline__connector">→</span>
              </MaskReveal>
            )}
            <MaskReveal show={active} delay={400 + i * 350} duration={700}>
              <div className={`ts-pipeline__node ${active ? "is-lit" : ""}`}
                style={{ "--light-delay": `${i * 0.35}s` } as React.CSSProperties}>
                <span className="ts-pipeline__icon">{s.icon}</span>
                <span className="ts-pipeline__label">{s.label}</span>
              </div>
            </MaskReveal>
          </div>
        ))}
      </div>

      <MaskReveal show={active} delay={2400} duration={1000}>
        <p className="ts-pipeline__caption serif-cn">
          需求进去，设计出来，代码出来，质量报告出来
        </p>
      </MaskReveal>
    </div>
  );
}
