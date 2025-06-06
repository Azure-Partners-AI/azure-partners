import Image from 'next/image';

export const metadata = {
  title: '关于 Azure Partners | AI 教育与咨询',
  description: '了解 Azure Partners 的使命、领导团队以及我们在推动 AI 教育与技术方面的承诺。',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <section className="mb-16" id="company">
            <h1 className="text-4xl font-bold mb-6">公司简介</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Azure Partners 成立于 2024 年 4 月，是一家专注于人工智能的公司，专长于 AI 智能代理
              与检索增强生成（RAG）技术。我们的团队由行业领袖、工程师和 AI 研究人员组成，
              致力于推进企业级人工智能、金融科技和机器人解决方案的发展。我们通过风险投资、
              咨询服务以及与 AI 初创企业、财富 500 强公司和风投机构的战略合作积极引领 AI 领域的发展。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">领导团队</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/andrew.png"
                    alt="Andrew Zhang"
                    fill
                    className="object-cover"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Andrew Zhang</h3>
                  <p className="text-primary font-medium mb-4">首席执行官 & 联合创始人</p>
                  <div className="prose dark:prose-invert">
                    <p className="text-muted-foreground mb-4">
                      Andrew Zhang 是 Azure Partners 的首席执行官兼联合创始人，
                      也是一位精通人工智能与机器学习的 Go-to-Market（GTM）专家。
                      他目前就职于 Epsilla，这是一家获得 Y Combinator 支持的公司，
                      专注于检索增强生成（RAG）与 AI 智能代理技术。同时，他还为多家 AI 创业公司提供
                      生成式 AI 规模化方面的战略建议。
                    </p>
                    <p className="text-muted-foreground">
                      此前，他曾在亚马逊、IBM 以及多家硅谷初创企业中领导 AI 项目，并在罗格斯大学商学院教授数据科学
                      与机器学习课程。他是一位知名的 AI 演讲者，也是《Hyperledger Cookbook》的作者，
                      并即将出版新书《Ollama 实践指南：本地运行 LLM 与 SLM》（预计 2025 年第二季度发布）。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
