import Image from "next/image";
import LinkedInSource from "./LinkedInSource";
import styles from "./Events.module.css";

export const metadata = {
  title: "活动 | Azure Partners",
  description:
    "探索我们过去和即将举办的活动，包括 AI、金融和技术领域的演讲、研讨会和会议。",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">活动</h1>

          <div className="space-y-16">
            {/* SAIF Talk */}
            <article className="border-b border-gray-200 dark:border-gray-800 pb-12">
              <h2 className="text-2xl font-bold mb-4">
                AI 与金融主题演讲 @ 上海高级金融学院（SAIF）
              </h2>
              <p className="text-muted-foreground mb-6">
                2024 年 3 月 - 上海高级金融学院
              </p>

              <div className="prose dark:prose-invert max-w-none mb-6">
                <p>本次关于 AI 与金融的讲座重点如下：</p>

                <h3 className="text-xl font-semibold mt-6 mb-4">
                  从基础模型到智能代理 AI
                </h3>
                <p>
                  从 OpenAI、Anthropic 到 Gemini 的演进，AI 不再只是回答问题的工具——
                  它已经开始主动采取行动。像 LangGraph 和 CrewAI 这样的代理框架使 AI
                  能够在金融工作流程中成为真正的协作者。
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-4">
                  金融领域六大 AI 应用场景
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>自动化投资研究与情绪分析</li>
                  <li>高频交易与宏观新闻解读</li>
                  <li>资产组合再平衡与合规助手</li>
                  <li>个性化私人银行服务</li>
                  <li>RegTech 监管技术与自动化</li>
                  <li>反欺诈与网络安全应用</li>
                </ul>
              </div>
              <LinkedInSource
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7327073359651827712/"
                }
              />
            </article>

            {/* Boston Investment Club Conference */}
            <article className="border-b border-gray-200 dark:border-gray-800 pb-12">
              <h2 className="text-2xl font-bold mb-4">
                AI 精通之道：从波士顿到 Y Combinator
              </h2>
              <p className="text-muted-foreground mb-6">
                2024 年 3 月 - 本特利学院
              </p>

              <div className="prose dark:prose-invert max-w-none mb-6">
                <p>以下是我们在 BICC（波士顿投资俱乐部）活动中的精彩回顾：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>与来自哈佛、MIT 的顶尖金融专家和初创创始人深入交流</li>
                  <li>与哈佛商学院王长林教授探讨 AI 在经济学中的应用</li>
                  <li>与 YC 合作伙伴建立合作，推动计算资源助力 AI 研究</li>
                </ul>
              </div>

              <LinkedInSource
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7312748440872996864/"
                }
              />
            </article>

            {/* Speaker Photo */}
            <article>
              <Image
                src="/events/talk.png"
                alt={"3 月 22 日演讲现场"}
                className={styles.talkImg}
                width={50}
                height={50}
              />
            </article>

            {/* Fintech & VC Talk */}
            <article className="border-b border-gray-200 dark:border-gray-800 pb-12">
              <h2 className="text-2xl font-bold mb-4">
                金融科技与风险投资主题演讲
              </h2>
              <p className="text-muted-foreground mb-6">
                2024 年 2 月 16 日 - 哥伦比亚大学
              </p>

              <div className="prose dark:prose-invert max-w-none">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">主讲嘉宾</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">
                      翁继业 – Ivy Capital 创始合伙人
                    </h4>
                    <p className="mt-2">
                      拥有 30 多年投资经验，翁先生是中国硬科技和企业软件领域领先的风险投资人。
                      他带领 Ivy Capital 荣获中国十大投资机构、百强创投等多个奖项。
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">特邀嘉宾</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">李大卫</h4>
                    <p>
                      上海高级金融学院（SAIF）金融教授、学术主任，在金融机构与风险管理方面经验丰富。
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">James Zhang</h4>
                    <p>
                      蚂蚁集团 AI 预测与战略平台总监，精通金融相关的人工智能与 Bloomberg 实验室数据。
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">刘晓阳</h4>
                    <p>
                      美国伦斯勒理工学院计算机科学系教授，FinGPT 与 FinRL 创始人，
                      专注于机器学习与金融科技融合应用。
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ height: "30px" }}></div>

              <Image
                src="/events/c1.png"
                alt={"2025 年 2 月 16 日活动现场图 1"}
                className={styles.talkImg}
                width={50}
                height={50}
              />
              <div style={{ height: "30px" }}></div>
              <Image
                src="/events/c2.png"
                alt={"2025 年 2 月 16 日活动现场图 2"}
                className={styles.talkImg}
                width={50}
                height={50}
              />
            </article>

            {/* AI Course with Columbia */}
            <article>
              <h2 className="text-2xl font-bold mb-4">AI 精通课程计划</h2>
              <p className="text-muted-foreground mb-6">
                与哥伦比亚大学合作开设
              </p>

              <div className="prose dark:prose-invert max-w-none">
                <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">课程结构</h3>
                  <ul className="space-y-4">
                    <li>
                      <strong>能力培养与培训（第 1-3 周）：</strong>
                      <p>
                        学习 DeepSeek 等大语言模型（LLM），探索 LangGraph、CrewAI 等框架，
                        使用 Ollama 构建智能代理系统。
                      </p>
                    </li>
                    <li>
                      <strong>真实世界研究（第 4-6 周）：</strong>
                      <p>
                        深入研究金融数据分析、机器人支持或电动车道路援助等前沿课题。
                      </p>
                    </li>
                    <li>
                      <strong>产业合作实践（第 7-12 周）：</strong>
                      <p>
                        与真实客户合作，在实际场景中部署和实现 AI 解决方案。
                      </p>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">课程亮点</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>哥大合作：获得世界级资源与校友网络支持</li>
                  <li>产业讲座系列：每两周一次，邀请 AI 领军人物与风投嘉宾</li>
                  <li>实战项目：与 Epsilla、Geekplus 等企业共同开发真实项目</li>
                  <li>灵活时间安排：每周两次授课，课后有录播可供回看</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
