import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  // step 0 — generate skill from task
  "然后说怎么快速生成 Skill。其实上面那几个，就是我在一个对话窗口里让 AI 完成了一项任务，然后让它把整个过程整理成 Skill。我自己核对一下就行了。",
  // step 1 — memory and rules
  "记忆和规则我也试过。用得不多，因为它们跟 Skill 就是一回事，都是提示词换个位置。",
  // step 2 — rule examples
  "你可以在规则里写开发规范、任务边界。比如 XML 里 SQL 怎么对齐，代码里注释什么风格，都行。",
  // step 3 — core trick
  "还有个技巧我一直在用。AI 写的代码现在还不够稳。手写代码的时候你有思考过程，AI 没有。所以让 AI 写代码之前，先让它出设计文档。你核对文档，确认没问题，再让它写代码。最关键的一步：提示词里要写清楚，代码写完之后做交叉核验。正确率会高很多。",
];
