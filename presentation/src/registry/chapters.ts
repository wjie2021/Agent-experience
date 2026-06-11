import type { ChapterDef } from "./types";
import ColdopenChapter from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";
import SkillRevealChapter from "../chapters/02-skill-reveal/SkillReveal";
import { narrations as skillRevealNarrations } from "../chapters/02-skill-reveal/narrations";
import ThreeSkillsChapter from "../chapters/03-three-skills/ThreeSkills";
import { narrations as threeSkillsNarrations } from "../chapters/03-three-skills/narrations";
import QuickTipsChapter from "../chapters/04-quick-tips/QuickTips";
import { narrations as quickTipsNarrations } from "../chapters/04-quick-tips/narrations";
import CloseChapter from "../chapters/05-close/Close";
import { narrations as closeNarrations } from "../chapters/05-close/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "从搜索引擎到不敢放手",
    narrations: coldopenNarrations,
    Component: ColdopenChapter,
  },
  {
    id: "skill-reveal",
    title: "从噱头到原来是这样",
    narrations: skillRevealNarrations,
    Component: SkillRevealChapter,
  },
  {
    id: "three-skills",
    title: "三个 Skill 串起完整工作流",
    narrations: threeSkillsNarrations,
    Component: ThreeSkillsChapter,
  },
  {
    id: "quick-tips",
    title: "快速生成 + 小技巧",
    narrations: quickTipsNarrations,
    Component: QuickTipsChapter,
  },
  {
    id: "close",
    title: "鼓励探索",
    narrations: closeNarrations,
    Component: CloseChapter,
  },
];
