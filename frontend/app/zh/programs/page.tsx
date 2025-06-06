import Link from "next/link";

import { IoIosRocket } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
          我们的项目
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          我们的项目不仅教授
          AI，更将专业人士转变为行业领袖，引领他们所在领域的未来。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ProgramCard
          icon={<IoIosRocket size={50} />}
          title="风险投资"
          outcomes={[
            "预测哪些行业或创业者最有可能脱颖而出。",
            "高效浏览网页、商业计划书和数据库，寻找高潜力创业公司。",
            "利用 AI 仪表盘监控各投资公司的关键指标、现金流、烧钱速度和里程碑。",
            "使用生成式 AI 自动撰写基金业绩摘要、投资者报告和更新。",
          ]}
          benefits="加入利用 AI 提前识别独角兽的精英投资者行列。"
          color="primary"
          route="/zh/programs/ai-for-vc"
        />

        <ProgramCard
          icon={<CiBank size={50} />}
          title="金融"
          outcomes={[
            "自动提取关键财务指标（如市盈率、EBITDA 等）。",
            "从 PDF 和投资者陈述等非结构化数据中生成洞察。",
            "结合结构化数据与非结构化文本（如 CEO 指引）优化分析预测。",
            "通过智能分析实现高效投资决策和风险控制。",
          ]}
          benefits="用 AI 彻底革新金融机构。"
          color="secondary"
          route="/zh/programs/ai-for-finance"
        />

        <ProgramCard
          icon={<IoSchoolSharp size={50} />}
          title="教育"
          outcomes={[
            "将复杂主题总结为适合不同年级的简明内容。",
            "帮助学生和非母语教师更好理解课程内容。",
            "智能代理追踪学生参与度，及时标记掉队者。",
            "教师节省时间，学生获得个性化评语和反馈。",
          ]}
          benefits="用 AI 赋能教育，提高学生参与度，实现更好的学习成果。"
          color="tertiary"
          route="/zh/programs/ai-for-education"
        />
      </div>
    </div>
  );
}

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  outcomes: string[];
  benefits: string;
  color: "primary" | "secondary" | "tertiary";
  route: string;
}

function ProgramCard({
  icon,
  title,
  outcomes,
  benefits,
  color,
  route,
}: ProgramCardProps) {
  const colorClasses = {
    primary:
      "hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    secondary:
      "hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    tertiary:
      "hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  };

  const buttonClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-blue-500 hover:bg-blue-600 text-white",
    tertiary: "bg-blue-700 hover:bg-blue-800 text-white",
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl p-8 border-2 ${colorClasses[color]} transition-all duration-300 hover:shadow-xl`}
    >
      <div className="mb-6">{icon}</div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{benefits}</p>

      <div className="space-y-3">
        <h3 className="font-semibold text-lg mb-3">项目成果：</h3>
        {outcomes.map((outcome, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <p className="text-muted-foreground">{outcome}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-muted-foreground">+ 更多内容</p>

      <Link
        href={route}
        className={`mt-8 inline-flex items-center justify-center w-full font-medium px-6 py-3 rounded-lg transition-colors ${buttonClasses[color]}`}
      >
        了解更多
      </Link>
    </div>
  );
}
