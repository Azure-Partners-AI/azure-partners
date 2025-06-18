import Image from "next/image";

export const metadata = {
  title: "关于 Azure Partners | AI 教育与咨询",
  description:
    "了解 Azure Partners 的使命、领导团队以及我们在推动 AI 教育与技术方面的承诺。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <section className="mb-16" id="company">
            <h1 className="text-4xl font-bold mb-6">公司简介</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Azure Partners 成立于 2024 年 4
              月，是一家专注于人工智能的公司，专长于 AI 智能代理
              与检索增强生成（RAG）技术。我们的团队由行业领袖、工程师和 AI
              研究人员组成，
              致力于推进企业级人工智能、金融科技和机器人解决方案的发展。我们通过风险投资、
              咨询服务以及与 AI 初创企业、财富 500
              强公司和风投机构的战略合作积极引领 AI 领域的发展。
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
                  <p className="text-primary font-medium mb-4">
                    首席执行官 & 联合创始人
                  </p>
                  <div className="prose dark:prose-invert">
                    <p className="text-muted-foreground mb-4">
                      Andrew Zhang 是 Azure Partners
                      的联合创始人兼首席执行官，专注于为人工智能初创公司制定市场进入（Go-to-Market）策略，并推动新兴技术的商业化。他也是
                      Epsilla（Y Combinator 2023
                      批次）的合伙人，重点研究基于检索增强生成（RAG）和 AI
                      代理的技术。
                    </p>
                    <p className="text-muted-foreground">
                      Andrew 曾在亚马逊、IBM
                      以及多家硅谷初创公司领导人工智能项目。他目前主持哥伦比亚大学的
                      AI 精修课程，并曾在罗格斯商学院任教。他是《Hyperledger
                      Cookbook》的作者，目前正在撰写将于 2025 年发布的《The
                      Ollama
                      Handbook》。在他职业生涯的早期，还曾在一家全球领先的互联网平台担任技术负责人。
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
