import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — boss mentions Skill
  "转折点是老板有次演讲提到了 Skill。我当时心里想，这又是哪个大厂搞出来卖 token 的噱头。",
  // step 1 — the chain
  "但我还是去查了。顺着 Skill 往回挖，发现了一整条链路。LLM，上下文，Function Calling，MCP，最后到 Skill。挖完我才明白智能体在干嘛。",
  // step 2 — IDE prompt repetition
  "早期用 AI 写代码，就是在 IDE 对话框里描述需求，或者贴个文档，然后让它生成代码。这样出来的东西质量不好控制。魔法值、注释风格、变量命名，全都随缘。",
  // step 3 — core insight
  "所以我就想了个办法：把这些常用的、规范化的提示词整理好，放到一个固定的位置。这就是 Skill。它其实就是提示词换了个位置。",
];
