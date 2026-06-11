import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — problem
  "再看实际做出来的东西。直接让 AI 写代码不好控制，一行一行复读代码又太慢。我就想，有没有办法同时提高代码质量和复读效率。",
  // step 1 — req-to-api
  "第一个，req-to-api。把需求文档丢进去，分析业务逻辑和功能关联。输出汇总文档，然后建表语句，然后 API 文档。还有自检。",
  // step 2 — api-to-code
  "第二个，api-to-code。读 API 文档，按我的代码规范生成后端代码。Controller、Service、Cmd、Query、VO 全套。自检加交叉核对。",
  // step 3 — code-review
  "第三个，code-review。对指定模块做多维度质量审查，按置信度评分分级，最后出一份 Markdown 审查报告。",
  // step 4 — full pipeline
  "这三个 Skill 串起来就是完整的工作流：需求进去，设计出来，代码出来，质量报告出来。",
];
