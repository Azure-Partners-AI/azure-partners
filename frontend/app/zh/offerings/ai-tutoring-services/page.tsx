import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 辅导服务 | Azure Partners",
  description:
    "为学生和企业提供个性化 AI 驱动的辅导服务，涵盖编程、数据科学、生成式 AI 工具等领域。",
};

export default function TutoringPageZH() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12 mt-4">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">AI 辅导服务</h1>
        <p className="text-lg text-muted-foreground">
          个性化、AI 驱动的学习体验：
        </p>
      </section>

      <section className="border border-muted rounded-xl p-6 shadow-sm bg-white dark:bg-background space-y-4">
        <h2 className="text-2xl font-semibold">1 对 1 个性化辅导</h2>
        <p className="text-muted-foreground">
          面向学生的定制学习支持：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>编程语言（如 Python、JavaScript 等）</li>
          <li>数据科学基础</li>
          <li>生成式 AI 工具（如 ChatGPT、Claude 等）</li>
          <li>学术写作与研究辅导</li>
        </ul>
      </section>

      <section className="border border-muted rounded-xl p-6 shadow-sm bg-white dark:bg-background space-y-4">
        <h2 className="text-2xl font-semibold">企业 AI 进阶培训</h2>
        <p className="text-muted-foreground">
          面向企业团队的按需或定期培训：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>将大型语言模型集成到产品与流程中</li>
          <li>使用 AI 自动化构建内部工具</li>
          <li>面向特定领域的 AI 应用培训</li>
        </ul>
      </section>

      <section className="text-center text-muted-foreground italic text-sm">
        我们的服务由自研教育智能体与自适应学习平台驱动。
      </section>
    </main>
  );
}
