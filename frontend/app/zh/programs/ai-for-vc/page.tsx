import { Check } from 'lucide-react';

export const metadata = {
  title: '面向风险投资的AI | Azure Partners',
  description: '了解如何利用AI工具和技术，从项目筛选到投资组合管理，提升风险投资行业的决策效率和运营水平。',
};

export default function AIforVCPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            面向风险投资的AI
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              “AI for VC”（人工智能赋能风险投资）指的是通过使用AI工具与技术，
              来提升风险投资行业的决策效率与运营流程。这包括项目来源分析、初创公司评估、
              尽职调查自动化，以及内部工作流程的智能化改造。
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">应用场景</h2>

            <div className="space-y-6">
              <UseCase 
                title="项目筛选"
                items={[
                  "使用大语言模型（LLM）和数据平台扫描网页、商业计划书和数据库，寻找高潜力初创公司",
                  "预测哪些行业或创始人更有可能脱颖而出"
                ]}
              />

              <UseCase 
                title="初创公司评估"
                items={[
                  "利用AI分析创始人背景、市场表现指标、财务数据和市场潜力",
                  "自动识别商业计划书或报告中的潜在风险点"
                ]}
              />

              <UseCase 
                title="尽职调查自动化"
                items={[
                  "自动化完成背景调查、新闻/媒体情绪分析和技术/产品评估"
                ]}
              />

              <UseCase 
                title="投资组合管理"
                items={[
                  "基于AI的仪表盘监控各投资公司的关键绩效指标、现金流状况、资金消耗速度和里程碑"
                ]}
              />

              <UseCase 
                title="LP沟通与报告"
                items={[
                  "利用生成式AI自动生成基金表现摘要、投资人报告和定期更新"
                ]}
              />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">常用工具</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>大语言模型（如 GPT-4、Claude），用于摘要生成、聊天机器人与研究任务</li>
              <li>RAG（检索增强生成）技术，用于构建可搜索的商业计划书数据库</li>
              <li>预测分析，用于预测初创公司成功概率或市场趋势</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function UseCase({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
