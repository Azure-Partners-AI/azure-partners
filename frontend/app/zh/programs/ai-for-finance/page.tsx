import { Check } from 'lucide-react';

export const metadata = {
  title: '金融领域的AI | Azure Partners',
  description: '了解如何利用人工智能提升投资研究、交易策略、风险管理和财务预测的效率与智能化水平。',
};

export default function AIforFinancePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            金融领域的AI
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              金融领域的AI指的是将人工智能（尤其是机器学习、大语言模型和自动化技术）应用于金融行业中的真实问题，
              以提升效率、洞察力和合规性。
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">应用场景</h2>
            
            <div className="space-y-6">
              <UseCase 
                title="投资研究与分析"
                items={[
                  "使用大语言模型总结财报、分析师笔记或新闻内容",
                  "自动提取关键财务指标（如市盈率、EBITDA）",
                  "从PDF和投资者演示材料等非结构化数据中生成洞察"
                ]}
              />

              <UseCase 
                title="交易与资产管理"
                items={[
                  "利用机器学习预测价格走势、优化投资组合、回测策略",
                  "AI驱动的交易信号（如Twitter或Reddit的情绪、新闻影响评分）",
                  "通过AI代理进行实时市场监测"
                ]}
              />

              <UseCase 
                title="风险管理与合规"
                items={[
                  "使用大语言模型自动执行内部政策或监管文档的合规检查",
                  "利用分类模型预测信用风险"
                ]}
              />

              <UseCase 
                title="财务预测与建模"
                items={[
                  "使用深度学习改进传统财务预测模型（如收入、现金流预测）",
                  "结合结构化数据与非结构化文本（如CEO展望）以优化预测"
                ]}
              />

              <UseCase 
                title="客户与内部流程自动化"
                items={[
                  "自动化重复性金融流程（如KYC开户、文档处理）",
                  "构建AI副驾辅助分析师、银行家或CFO工作",
                  "为客服或投资者关系创建智能聊天机器人"
                ]}
              />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">金融AI中常用工具</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>Python + Pandas：用于数据处理与建模</li>
              <li>大语言模型（如 GPT-4、Claude）：用于摘要生成、搜索和问答</li>
              <li>向量数据库 + RAG：在金融数据集中构建文档搜索能力</li>
              <li>时间序列模型：ARIMA、LSTM、Prophet等用于预测任务</li>
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
