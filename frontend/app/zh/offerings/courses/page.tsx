import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "课程 | Azure Partners",
  description:
    "探索我们全面的 AI 服务，包括课程、实习、辅导和开发解决方案。",
};

const syllabusUrl =
  "https://drive.google.com/file/d/1ktkIuiAecJWzV0eFGcXo4LcbvBWSBnL6/view?usp=drive_link";

const sections = [
  {
    title: "AI 编程基础",
    description: "掌握现代 AI 工作流程所需的编程基础知识：",
    bullets: [
      "Python 用于数据处理与自动化",
      "Pandas、NumPy 与基本的机器学习流程",
      "大型语言模型（如 OpenAI、Claude）和向量数据库入门",
      "Git、API 使用与调试最佳实践",
    ],
    outcome: "能够阅读、编写和扩展 AI 脚本和工作流。",
  },
  {
    title: "RAG 检索增强生成系统",
    description: "深入掌握智能知识助手和增强搜索应用的构建方法：",
    bullets: [
      "RAG 架构：文本切块、嵌入、向量搜索、提示注入",
      "工具：LangChain、LlamaIndex、Pinecone、ChromaDB",
      "应用场景：风险投资（项目检索）、金融（文档问答）、教育（政策搜索）",
      "在云端或本地部署 RAG 系统",
    ],
    outcome: "构建你自己的文档检索式生成式 AI 助手。",
  },
  {
    title: "AI 智能体开发",
    description: "构建并调度能自主决策和多步骤执行的 AI 智能体：",
    bullets: [
      "规划与工具使用：ReAct、CoT、LangGraph、CrewAI",
      "集成 API、数据库与浏览器操作",
      "应用场景：VC 项目推荐助手、分析师助理、教育辅导 AI",
      "评估与可靠性策略",
    ],
    outcome: "部署可执行任务、持续推理的高效 AI 智能体。",
  },
];

export default function CoursesPageZH() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-12 mt-4">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          构建、部署与精通 AI 系统：从代码到智能体
        </h1>
        <p className="text-lg text-muted-foreground">
          我们的课程旨在帮助个人和团队掌握现代 AI 技术，专注于实用工具与可部署系统。
        </p>
        <Link
          href={syllabusUrl}
          target="_blank"
          className="inline-block mt-4 text-white px-6 py-3 rounded-lg bg-blue"
        >
          查看完整课程大纲
        </Link>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className="border border-muted rounded-xl p-6 shadow-sm bg-white dark:bg-background"
        >
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="text-muted-foreground mb-4">{section.description}</p>
          <ul className="list-disc list-inside space-y-1 text-base mb-4">
            {section.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="italic text-sm text-green-700 dark:text-green-400">
            学习成果：{section.outcome}
          </p>
        </section>
      ))}
    </main>
  );
}
