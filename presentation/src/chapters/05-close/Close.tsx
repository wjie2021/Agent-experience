import type { ChapterStepProps } from "../../registry/types";
import { MaskReveal } from "../../components/MaskReveal";
import "./Close.css";

export default function Close({ step }: ChapterStepProps) {
  return (
    <div className="scene cl-scene">
      <div className={`cl-panel ${step === 0 ? "is-active" : ""}`}>
        <SummaryScene active={step === 0} />
      </div>
      <div className={`cl-panel cl-panel--1 ${step === 1 ? "is-active" : ""}`}>
        <CtaScene active={step === 1} />
      </div>
    </div>
  );
}

/* ── Step 0: Summary ── */
function SummaryScene({ active }: { active: boolean }) {
  return (
    <div className="cl-summary">
      <MaskReveal show={active} delay={200} duration={1200}>
        <h1 className="cl-summary__text serif-cn">
          把工作流写下来
          <br />
          <span className="cl-summary__accent">= Skill</span>
        </h1>
      </MaskReveal>

      <div className={`cl-summary__rule rule-grow ${active ? "in" : ""}`} />

      <MaskReveal show={active} delay={1000} duration={1000}>
        <p className="cl-summary__sub serif-cn">省很多时间</p>
      </MaskReveal>
    </div>
  );
}

/* ── Step 1: CTA ── */
function CtaScene({ active }: { active: boolean }) {
  return (
    <div className="cl-cta">
      <MaskReveal show={active} delay={200} duration={1000}>
        <h2 className="cl-cta__text serif-cn">
          试试把你的工作流整理成 Skill
        </h2>
      </MaskReveal>

      <div className={`cl-cta__rule rule-grow ${active ? "in" : ""}`} />

      <MaskReveal show={active} delay={800} duration={1000}>
        <div className="cl-cta__link card">
          <span className="label-mono">官方文档</span>
          <span className="cl-cta__url mono">docs.qoder.com/zh/cli/Skills</span>
        </div>
      </MaskReveal>
    </div>
  );
}
