import { Check } from 'lucide-react';

export const metadata = {
  title: 'AI for Finance | Azure Partners',
  description: 'Learn how to leverage artificial intelligence in finance for investment research, trading, risk management, and financial forecasting.',
};

export default function AIforFinancePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            AI for Finance
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              AI for Finance refers to the application of artificial intelligence—especially machine learning, 
              large language models (LLMs), and automation—to solve real-world problems in the financial sector.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Use Cases</h2>
            
            <div className="space-y-6">
              <UseCase 
                title="Investment Research & Analysis"
                items={[
                  "Use LLMs to summarize earnings reports, analyst notes, or news",
                  "Automate extraction of key financial metrics (e.g., P/E ratio, EBITDA)",
                  "Generate insights from unstructured data like PDFs and investor presentations"
                ]}
              />

              <UseCase 
                title="Trading & Asset Management"
                items={[
                  "Use machine learning to predict price movements, optimize portfolios, or backtest strategies",
                  "AI-powered trading signals (e.g., sentiment from Twitter or Reddit, news impact scoring)",
                  "Real-time market monitoring using AI agents"
                ]}
              />

              <UseCase 
                title="Risk Management & Compliance"
                items={[
                  "Automate compliance checks using LLMs on internal policies or regulatory documents",
                  "Predict credit risk using classification models"
                ]}
              />

              <UseCase 
                title="Financial Forecasting & Modeling"
                items={[
                  "Use deep learning to improve traditional forecasting models (e.g., revenue or cash flow predictions)",
                  "Combine structured data with unstructured text (e.g., CEO guidance) to refine outlooks"
                ]}
              />

              <UseCase 
                title="Client & Internal Workflow Automation"
                items={[
                  "Automate repetitive finance workflows (e.g., KYC onboarding, document processing)",
                  "Build AI copilots to assist financial analysts, bankers, or CFOs",
                  "Create chatbots for customer service or investor relations"
                ]}
              />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Popular Tools in AI for Finance</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>Python + Pandas: for data manipulation and modeling</li>
              <li>LLMs (e.g., GPT-4, Claude): for summarization, search, and question answering</li>
              <li>Vector DBs + RAG: for document search across financial datasets</li>
              <li>Time Series Models: ARIMA, LSTM, Prophet for forecasting</li>
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