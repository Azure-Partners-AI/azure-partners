import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
  title: "Courses | Azure Partners",
  description:
    "Explore our comprehensive range of AI services including courses, internships, tutoring, and development solutions.",
};

const syllabusUrl =
  "https://drive.google.com/file/d/1ktkIuiAecJWzV0eFGcXo4LcbvBWSBnL6/view?usp=drive_link";

const sections = [
  {
    title: "AI Coding Foundations",
    description:
      "Learn the programming essentials needed for modern AI workflows:",
    bullets: [
      "Python for data processing and automation",
      "Pandas, NumPy, and basic ML pipelines",
      "Intro to LLMs (OpenAI, Claude, etc.) and vector databases",
      "Git, APIs, and debugging best practices",
    ],
    outcome:
      "Be able to read, write, and extend AI workflows and scripts.",
  },
  {
    title: "Retrieval-Augmented Generation (RAG) Systems",
    description:
      "Master how to build intelligent knowledge assistants and search-augmented applications:",
    bullets: [
      "Architecture of RAG: chunking, embedding, vector search, prompt injection",
      "Tools: LangChain, LlamaIndex, Pinecone, ChromaDB",
      "Use cases in VC (pitch retrieval), finance (document Q&A), and education (policy search)",
      "Deploying RAG on cloud or local stack",
    ],
    outcome:
      "Build your own GenAI-powered assistant with custom document retrieval.",
  },
  {
    title: "AI Agent Development",
    description:
      "Build and orchestrate autonomous or multi-step AI agents for decision-making and task automation:",
    bullets: [
      "Planning + tool use: ReAct, CoT, LangGraph, CrewAI",
      "Integrating APIs, databases, and browser actions",
      "Use cases: sourcing agents for VCs, copilots for analysts, tutoring agents for education",
      "Evaluation and reliability strategies",
    ],
    outcome:
      "Deploy AI agents that take actions, reason over time, and complete useful tasks.",
  },
];

export default function CoursesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-12m mt-4">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Build, Deploy, and Master AI Systems — From Code to Agent
        </h1>
        <p className="text-lg text-muted-foreground">
          Our courses are designed to equip individuals and teams with hands-on
          skills in modern AI development, focusing on real-world tools and
          deployable systems.
        </p>
        <Link
          href={syllabusUrl}
          target="_blank"
          className="inline-block mt-4 text-white px-6 py-3 rounded-lg bg-blue"
        >
          View Full Syllabus
        </Link>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className="border border-muted rounded-xl p-6 shadow-sm bg-white dark:bg-background"
        >
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="text-muted-foreground mb-4">{section.description}</p>
          <ul className="list-disc list-inside space-y-1 text-base mb-4">
            {section.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="italic text-sm text-green-700 dark:text-green-400">
            Outcome: {section.outcome}
          </p>
        </section>
      ))}
    </main>
  );
}
