import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./SkillReveal.css";

const CHAIN_NODES = ["LLM", "上下文", "FC", "MCP", "Skill"];

export default function SkillReveal({ step }: ChapterStepProps) {
  return (
    <div className="scene sr-scene">
      <div className={`sr-panel ${step === 0 ? "is-active" : ""}`}>
        <BossScene active={step === 0} />
      </div>
      <div className={`sr-panel sr-panel--1 ${step === 1 ? "is-active" : ""}`}>
        <ChainScene active={step === 1} />
      </div>
      <div className={`sr-panel sr-panel--2 ${step === 2 ? "is-active" : ""}`}>
        <PainScene active={step === 2} />
      </div>
      <div className={`sr-panel sr-panel--3 ${step === 3 ? "is-active" : ""}`}>
        <InsightScene active={step === 3} />
      </div>
    </div>
  );
}

/* ── Step 0: Boss mentions Skill ── */
function BossScene({ active }: { active: boolean }) {
  return (
    <div className="sr-boss">
      {/* presentation screen mockup */}
      <MaskReveal show={active} delay={100} duration={1000}>
        <div className="sr-boss__screen card">
          <div className="sr-boss__slide">
            <span className="sr-boss__title label-mono">技术分享会</span>
            <div className="sr-boss__bullets">
              <span className="sr-boss__bullet">API 网关</span>
              <span className="sr-boss__bullet">微服务架构</span>
              <span className={`sr-boss__bullet sr-boss__bullet--highlight ${active ? "is-animating" : ""}`}>
                Skill
                <span className="sr-boss__qmark">?</span>
              </span>
            </div>
          </div>
        </div>
      </MaskReveal>

      <MaskReveal show={active} delay={800} duration={1000}>
        <p className="sr-boss__reaction serif-cn">
          又是哪个大厂搞出来卖 token 的噱头
        </p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 1: Tech chain ── */
function ChainScene({ active }: { active: boolean }) {
  return (
    <div className="sr-chain">
      <div className="sr-chain__row">
        {CHAIN_NODES.map((node, i) => (
          <div key={node} className="sr-chain__node-wrap">
            {i > 0 && (
              <MaskReveal show={active} delay={200 + i * 400} duration={600}>
                <span className="sr-chain__connector">→</span>
              </MaskReveal>
            )}
            <MaskReveal show={active} delay={200 + i * 400} duration={800}>
              <div
                className={`sr-chain__node ${active ? "is-lit" : ""} ${node === "Skill" ? "sr-chain__node--accent" : ""}`}
                style={{ "--light-delay": `${i * 0.4}s` } as React.CSSProperties}
              >
                {node}
              </div>
            </MaskReveal>
          </div>
        ))}
      </div>

      <MaskReveal show={active} delay={2400} duration={1000}>
        <p className="sr-chain__caption serif-cn">
          挖完我才明白智能体在干嘛
        </p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 2: IDE prompt repetition pain ── */
function PainScene({ active }: { active: boolean }) {
  return (
    <div className="sr-pain">
      <MaskReveal show={active} delay={100} duration={1000}>
        <div className="sr-pain__chat card">
          <div className="sr-pain__chat-header">
            <span className="sr-pain__dot" />
            <span className="label-mono">AI Assistant</span>
          </div>
          <div className="sr-pain__messages">
            <div className="sr-pain__msg sr-pain__msg--user">
              帮我写一个查询用户接口，不要用魔法值，注释用中文，变量命名用驼峰...
            </div>
            <div className="sr-pain__msg sr-pain__msg--ai">
              好的，这是实现...
            </div>
            <div className={`sr-pain__msg sr-pain__msg--user ${active ? "is-typing" : ""}`}>
              再改一下，不要用魔法值，注释风格要...
            </div>
          </div>
        </div>
      </MaskReveal>

      <MaskReveal show={active} delay={900} duration={900}>
        <p className="sr-pain__label serif-cn">
          每次都要写一遍，太累了
        </p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 3: Core insight ── */
function InsightScene({ active }: { active: boolean }) {
  return (
    <div className="sr-insight">
      <MaskReveal show={active} delay={200} duration={1200}>
        <div className="sr-insight__equation">
          <span className="sr-insight__left">提示词</span>
          <span className={`sr-insight__arrow ${active ? "is-animating" : ""}`}>→</span>
          <span className="sr-insight__right">Skill</span>
        </div>
      </MaskReveal>

      <div className={`sr-insight__rule rule-grow ${active ? "in" : ""}`} />

      <MaskReveal show={active} delay={1000} duration={1100}>
        <h2 className="sr-insight__text serif-cn">
          提示词换了个位置
        </h2>
      </MaskReveal>
    </div>
  );
}
