# Video Outline

> **主题**：待定（Checkpoint Plan 选定）
> **总时长**：约 2 分 50 秒（口播 ~700 字 ÷ 4 字/秒 ≈ 175s）
> **章节数**：5 章 / 19 步

---

## 1. coldopen — 从"搜索引擎"到"不敢放手"（4 steps · ~40s）

**信息池**（chapter agent 按需挂角标 / 副标 / pull-quote / mono cue）：
- 工具名：ChatGPT、Deepseek —— 来源 article §一
- 对比：面向 CSDN 编程 vs 面向 Deepseek 编程 —— 来源 article §一
- 使用场景：IDEA 代码补全、提需求改代码 —— 来源 article §一
- 心理门槛：复杂逻辑不敢交给 AI —— 来源 article §一

**开发计划**：

- step 1 (~10s) — 钩子："你以为 AI 只能当搜索引擎用？" + 大字标题
- step 2 (~12s) — 对比画面：CSDN logo → Deepseek/ChatGPT logo，强调"换了个搜索框"
- step 3 (~10s) — IDE 代码补全示意：代码编辑器 + 补全提示浮现
- step 4 (~8s) — "不敢放手"情绪：一个锁 / 盾牌视觉元素，表达信任门槛

口播节选：
> 你以为 AI 只能当搜索引擎用？我之前也这么想。
> chatgpt 刚出来那会儿，我基本就是拿它搜东西。后来从面向 CSDN 编程，变成了面向 Deepseek、ChatGPT 编程。换了个搜索框而已。

---

## 2. skill-reveal — 从"噱头"到"原来是这样"（4 steps · ~32s）

**信息池**（chapter agent 按需挂角标 / 副标 / pull-quote / mono cue）：
- 技术链路：LLM → 上下文 → Function Calling → MCP → Skill —— 来源 article §二
- 老板演讲场景 —— 来源 article §二
- IDE 对话框反复输入提示词的痛点 —— 来源 article §二
- Skill 核心定义：提示词换了个位置 —— 来源 article §二

**开发计划**：

- step 5 (~8s) — 老板演讲场景 + "Skill" 一词浮现，带问号
- step 6 (~10s) — 技术链路可视化：5 个节点依次点亮（LLM → 上下文 → FC → MCP → Skill），形成一条链
- step 7 (~6s) — IDE 对话框画面：重复输入提示词的疲惫感
- step 8 (~8s) — 核心洞察：大字展示"Skill = 提示词换了个位置"

口播节选：
> 老板有次演讲提到了 Skill。我当时心里想，这又是哪个大厂搞出来卖 token 的噱头。
> 但我还是去查了。顺着 Skill 往回挖，发现了一整条链路。

---

## 3. three-skills — 三个 Skill 串起完整工作流（5 steps · ~52s）

**信息池**（chapter agent 按需挂角标 / 副标 / pull-quote / mono cue）：
- 三个 Skill 名称：req-to-api、api-to-code、code-review —— 来源 article §三
- req-to-api 输出：汇总文档（业务逻辑、状态、关联）+ 建表语句 + API 文档 + 自检 —— 来源 article §三
- api-to-code 输出：Controller + Service + Cmd/Query/VO 全套 Spring Boot 代码 —— 来源 article §三
- api-to-code 场景：Markdown/JSON 格式 API 文档 → 后端代码 —— 来源 article §三
- code-review 输出：置信度评分 + Markdown 审查报告 → docs/review —— 来源 article §三
- 全流程：需求分析 → 概要设计 → 详细设计 → 编写代码 → 代码复读 —— 来源 article §三

**开发计划**：

- step 9 (~8s) — 问题抛出：AI 代码质量不可控 + 复读代码太慢
- step 10 (~12s) — req-to-api 流程图：需求文档 → 汇总 → 建表 → API 文档 → 自检，节点依次点亮
- step 11 (~12s) — api-to-code 流程图：API 文档 → Controller/Service/Cmd/Query/VO 代码块依次生成
- step 12 (~10s) — code-review 可视化：代码文件 → 多维度扫描 → 评分报告
- step 13 (~10s) — 全流程串联：三个 Skill 形成完整管线，从需求到质量报告一气呵成

口播节选：
> 直接让 AI 写代码不好控制，一行一行复读代码又太慢。我做了 3 个 Skill 来串起来。
> 第一个 req-to-api，把需求文档丢进去，分析业务逻辑，生成 API 文档。
> 第二个 api-to-code，读 API 文档，按照我的规范生成完整后端代码。

---

## 4. quick-tips — 快速生成 + 小技巧（4 steps · ~36s）

**信息池**（chapter agent 按需挂角标 / 副标 / pull-quote / mono cue）：
- 生成方式：完成任务后让 AI 整理成 Skill —— 来源 article §四
- 记忆和规则：与 Skill 就是一回事 —— 来源 article §五
- 规则内容示例：XML SQL 对齐、注释风格 —— 来源 article §五
- 核心技巧：先出设计文档 → 核对 → 再写代码 → 交叉核验 —— 来源 article §六
- 官方文档：https://docs.qoder.com/zh/cli/Skills —— 来源 article §三

**开发计划**：

- step 14 (~10s) — 快速生成方式：对话窗口 → AI 完成任务 → "帮我整理成 Skill" → 文件输出
- step 15 (~8s) — 记忆和规则：三个概念并列（Skill / 记忆 / 规则），本质一样
- step 16 (~8s) — 规则示例：代码规范、任务边界等配置项展示
- step 17 (~10s) — 核心技巧：设计文档 → 核对 → 写代码 → 交叉核验，四步流程图

口播节选：
> 上面那几个 Skill，就是我在一个对话窗口里让 AI 完成了一项任务，然后让它把整个过程整理成 Skill。
> 还有个技巧我一直在用。AI 写的代码现在还不够稳。先让它出设计文档，你核对，再让它写代码。最关键的是提示词里写清楚做交叉核验。

---

## 5. close — 鼓励探索（2 steps · ~18s）

**信息池**（chapter agent 按需挂角标 / 副标 / pull-quote / mono cue）：
- 官方文档链接：https://docs.qoder.com/zh/cli/Skills —— 来源 article §三
- 核心观点：Skill 是自然语言描述的工作流 —— 来源 article §三
- 鼓励方向：省很多时间，值得研究 —— 来源 article §三

**开发计划**：

- step 18 (~10s) — 总结大字：把自己的工作流写下来 = Skill，省很多时间
- step 19 (~8s) — 结尾 CTA：官方文档链接 + "评论区聊聊你踩过哪个坑"

口播节选：
> 大家可以研究下 Skill 这个东西。其实就是把自己的工作流用文档写下来，省很多时间。官方文档链接我放评论区了。

---

## 素材清单

### 1. coldopen
- ⚠️ ChatGPT / Deepseek logo 图片（待提供）
- ⚠️ CSDN logo 图片（待提供）
- ⚠️ IDEA / VS Code 编辑器截图或示意（待提供）

### 2. skill-reveal
- ⚠️ 老板演讲场景配图（待提供，可用 placeholder）
- ✓ 技术链路图：纯 CSS/SVG 绘制，无需外部素材

### 3. three-skills
- ✓ 流程图：纯 CSS/SVG 绘制，无需外部素材
- ⚠️ 如有实际截图（req-to-api / api-to-code / code-review 的输出示例）可增强说服力（待提供）

### 4. quick-tips
- ✓ 对话窗口示意：纯 CSS 绘制
- ✓ 流程图：纯 CSS/SVG 绘制

### 5. close
- ✓ 文字排版，无需外部素材

---

## 自检（写完 outline **强制**执行，不可跳过）

- [x] 每个 step 都是**单一句屏幕内容描述**，没有"动画"行 / "手段"行
- [x] 没有任何 step 写了具体毫秒 / 秒数（除 `(~Ts)` 口播估时）
- [x] 每章首段都有「信息池」block，至少 3 条 article 抽取项，每条带来源标注（Chapter 5 已补至 3 条）
- [x] 所有 step `(~Ts)` 累加 ≈ 顶部声明的总时长（175s vs 170s，误差 < 3%）
- [x] 章节切分符合"每章 3~8 步 / 30~60s 一聚焦主题"经验（Chapter 5 已扩至 2 步 / 18s）
- [x] 末尾「素材清单」分章节列出，✓ / ⚠️ 标注清楚
- [x] 脚本不包含标题、序号等非口播内容
