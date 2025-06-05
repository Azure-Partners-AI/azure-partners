import Image from 'next/image';

export const metadata = {
  title: 'About Azure Partners | AI Education & Consulting',
  description: 'Learn about Azure Partners, our mission, leadership, and commitment to advancing AI education and technology.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <section className="mb-16" id="company">
            <h1 className="text-4xl font-bold mb-6">Company</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Founded in April 2024, Azure Partners is an AI-focused firm specializing in AI agents 
              and Retrieval-Augmented Generation (RAG) technologies. Our team comprises industry 
              leaders, engineers, and AI researchers dedicated to advancing enterprise AI, finance, 
              and robotics solutions. We actively shape the AI landscape through venture investments, 
              consulting, and strategic partnerships with AI startups, Fortune 500 firms, and venture 
              capital groups.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Leadership</h2>
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
                  <p className="text-primary font-medium mb-4">CEO & Co-Founder</p>
                  <div className="prose dark:prose-invert">
                    <p className="text-muted-foreground mb-4">
                      Andrew Zhang is the CEO and founding partner of Azure Partners and a Go-to-Market 
                      (GTM) expert with deep expertise in AI and machine learning. He works at Epsilla, 
                      a Y Combinator-backed company specializing in Retrieval-Augmented Generation (RAG) 
                      and AI agents, while also advising AI startups on scaling Generative AI solutions.
                    </p>
                    <p className="text-muted-foreground">
                      Previously, he led AI initiatives at Amazon, IBM, and Silicon Valley startups and 
                      taught data science and machine learning at Rutgers Business School. A recognized 
                      AI speaker, he is also the author of Hyperledger Cookbook and the upcoming A 
                      Practical Guide to Ollama: Running LLMs and SLMs Locally (expected Q2 2025).
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