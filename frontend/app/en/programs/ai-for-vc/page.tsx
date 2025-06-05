import { Check } from 'lucide-react';

export const metadata = {
  title: 'AI for Venture Capital | Azure Partners',
  description: 'Learn how to leverage AI tools and techniques to enhance decision-making and operations in venture capital, from deal sourcing to portfolio management.',
};

export default function AIforVCPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            AI for Venture Capital
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              AI for VC (Artificial Intelligence for Venture Capital) refers to using AI tools and techniques 
              to enhance decision-making and operations in the venture capital industry. This includes sourcing 
              deals, evaluating startups, conducting due diligence, and improving internal workflows.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Use Cases</h2>
            
            <div className="space-y-6">
              <UseCase 
                title="Deal Sourcing"
                items={[
                  "Use LLMs and data platforms to scan the web, pitch decks, and databases for high-potential startups",
                  "Predict which sectors or founders are likely to outperform"
                ]}
              />

              <UseCase 
                title="Startup Evaluation"
                items={[
                  "Use AI to analyze founder backgrounds, traction metrics, financials, and market potential",
                  "Identify red flags automatically in pitch decks or reports"
                ]}
              />

              <UseCase 
                title="Due Diligence Automation"
                items={[
                  "Automate background checks, sentiment analysis of news/media, and tech/product assessments"
                ]}
              />

              <UseCase 
                title="Portfolio Management"
                items={[
                  "AI-powered dashboards to monitor KPIs, runway, burn rate, and milestones across all portfolio companies"
                ]}
              />

              <UseCase 
                title="LP Communication & Reporting"
                items={[
                  "Automate fund performance summaries, investor reports, and updates using GenAI"
                ]}
              />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Common Tools</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>LLMs (like GPT-4, Claude) for summarization, chatbots, and research</li>
              <li>RAG (Retrieval-Augmented Generation) to build searchable pitch deck databases</li>
              <li>Predictive Analytics to forecast startup success or market trends</li>
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