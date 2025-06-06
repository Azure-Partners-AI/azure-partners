import Link from "next/link";
import styles from "./Offerings.module.css";

export const metadata = {
  title: "我们的服务 | Azure Partners",
  description:
    "探索我们全面的 AI 服务，包括课程、实习、辅导和开发解决方案。",
};

export default function OfferingsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">我们的服务</h1>

          <ul className="space-y-6 text-lg">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/zh/offerings/courses">
                  <h2 className="font-semibold mb-2">课程</h2>
                </Link>
                <p className="text-muted-foreground">
                  面向行业专业人士的全面 AI 教育课程。
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/zh/offerings/internship">
                  <h2 className="font-semibold mb-2">实习项目</h2>
                </Link>

                <p className="text-muted-foreground">
                  参与前沿 AI 技术与真实项目的实践经验。
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/zh/offerings/ai-tutoring-services">
                  <h2 className="font-semibold mb-2">AI 辅导服务</h2>
                </Link>

                <p className="text-muted-foreground">
                  来自 AI 专家的个性化指导，加速你的学习进程。
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/zh/offerings/content-generation">
                  <h2 className="font-semibold mb-2">
                    图像/视频内容生成
                  </h2>
                </Link>

                <p className="text-muted-foreground">
                  提供多媒体格式的专业 AI 驱动内容创作服务。
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/zh/offerings/ai-application-development">
                  <h2 className="font-semibold mb-2">AI 应用开发</h2>
                </Link>
                <p className="text-muted-foreground">
                  针对您的业务需求量身定制的 AI 解决方案开发服务。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
