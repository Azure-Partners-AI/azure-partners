import Image from "next/image";
import LinkedInSource from "./LinkedInSource";
import styles from "./Events.module.css";

export const metadata = {
  title: "Events | Azure Partners",
  description:
    "Explore our past and upcoming events, including talks, workshops, and conferences in AI, finance, and technology.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Events</h1>

          <div className="space-y-16">
            {/* SAIF Talk */}
            <article className="border-b border-gray-200 dark:border-gray-800 pb-12">
              <h2 className="text-2xl font-bold mb-4">
                AI and Finance Talk at SAIF
              </h2>
              <p className="text-muted-foreground mb-6">
                March 2024 - Shanghai Advanced Institute of Finance
              </p>

              <div className="prose dark:prose-invert max-w-none mb-6">
                <p>Key takeaways from our talk at SAIF on AI and Finance:</p>

                <h3 className="text-xl font-semibold mt-6 mb-4">
                  From Foundation Models to Agentic AI
                </h3>
                <p>
                  The evolution from OpenAI and Anthropic to Gemini shows AI
                  isn't just about answering questions anymore — it's about
                  taking action. Agent frameworks like LangGraph and CrewAI are
                  enabling AI to become real collaborators in financial
                  workflows.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-4">
                  Top 6 AI Use Cases in Finance
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Automated investment research + sentiment analysis</li>
                  <li>High-frequency trading + macro news interpretation</li>
                  <li>Portfolio rebalancing + compliance copilots</li>
                  <li>Personalized private banking services</li>
                  <li>RegTech and regulatory automation</li>
                  <li>Anti-fraud and cybersecurity applications</li>
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
                AI Mastery for Finance Experts: Boston to Y Combinator (YC)
              </h2>
              <p className="text-muted-foreground mb-6">
                March 2024 - Bentley College
              </p>

              <div className="prose dark:prose-invert max-w-none mb-6">
                <p>Highlights from the BICC event at Bentley College:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Met with startup founders and top finance experts from
                    Harvard and MIT
                  </li>
                  <li>
                    Deep discussion with Prof. Charles Wang at Harvard Business
                    School on AI applications in economics
                  </li>
                  <li>
                    Partnership with YC partners to leverage Compute Use for
                    research acceleration
                  </li>
                </ul>
              </div>

              <LinkedInSource
                url={
                  "https://www.linkedin.com/feed/update/urn:li:activity:7312748440872996864/"
                }
              />
            </article>

            <article>
              <Image
                src="/events/talk.png"
                alt={"March 22nd speaker talk"}
                className={styles.talkImg}
                width={50}
                height={50}
              />
            </article>

            {/* Fintech & VC Talk */}
            <article className="border-b border-gray-200 dark:border-gray-800 pb-12">
              <h2 className="text-2xl font-bold mb-4">
                Fintech & Venture Capital Talk
              </h2>
              <p className="text-muted-foreground mb-6">
                February 16, 2025 - Columbia University
              </p>

              <div className="prose dark:prose-invert max-w-none">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Featured Speaker
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">
                      Jiyi Weng – Founding Partner, Ivy Capital
                    </h4>
                    <p className="mt-2">
                      With over 30 years of investment experience, Mr. Weng is a
                      leading venture capitalist in China's hard tech and
                      enterprise software sector. He has led Ivy Capital to
                      multiple accolades, including China's Top 10 Investment
                      Institutions and Top 100 Venture Capital Firms.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Distinguished Guests
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">David Li</h4>
                    <p>
                      Professor of finance and faculty director at Shanghai
                      Advanced Institute of Finance (SAIF), with extensive
                      experience in financial institutions and risk management.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">James Zhang</h4>
                    <p>
                      Managing Director of AI Prediction and Strategy Platform
                      at Ant Group, with expertise in finance-related AI and
                      Bloomberg Labs.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold">Xiao-Yang Liu</h4>
                    <p>
                      Faculty member in Computer Science at Rensselaer
                      Polytechnic Institute, creator of FinGPT and FinRL, with
                      expertise in machine learning and financial technology.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ height: "30px" }}></div>

              <Image
                src="/events/c1.png"
                alt={"Feb 16, 2025"}
                className={styles.talkImg}
                width={50}
                height={50}
              />
              <div style={{ height: "30px" }}></div>
              <Image
                src="/events/c2.png"
                alt={"Feb 16, 2025"}
                className={styles.talkImg}
                width={50}
                height={50}
              />
            </article>

            {/* AI Course with Columbia */}
            <article>
              <h2 className="text-2xl font-bold mb-4">AI Mastery Program</h2>
              <p className="text-muted-foreground mb-6">
                In collaboration with Columbia University
              </p>

              <div className="prose dark:prose-invert max-w-none">
                <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Program Structure
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <strong>Enablement & Training (Weeks 1-3):</strong>
                      <p>
                        Learn about LLMs like DeepSeek, explore frameworks like
                        LangGraph and CrewAI, and build agentic systems with
                        Ollama.
                      </p>
                    </li>
                    <li>
                      <strong>Real-World Research (Weeks 4-6):</strong>
                      <p>
                        Dive into market intelligence on topics like financial
                        data analysis, robotics support, or EV roadside
                        assistance.
                      </p>
                    </li>
                    <li>
                      <strong>Industry Collaboration (Weeks 7-12):</strong>
                      <p>
                        Collaborate with real clients to implement AI solutions
                        in practical settings.
                      </p>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Program Highlights
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Columbia Collaboration: Access to world-class resources and
                    network
                  </li>
                  <li>
                    Industry Speaker Series: Bi-monthly talks featuring leading
                    AI experts and VCs
                  </li>
                  <li>
                    Hands-On Projects: Work with companies like Epsilla and
                    Geekplus
                  </li>
                  <li>
                    Flexible Schedule: Classes twice a week with recordings
                    available
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
