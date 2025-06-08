import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tutoring Services | Azure Partners",
  description:
    "Personalized AI-powered tutoring for students and enterprises in coding, data science, GenAI tools, and more.",
};

export default function TutoringPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12 mt-4">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          AI Tutoring Services
        </h1>
        <p className="text-lg text-muted-foreground">
          Personalized AI-powered learning experiences:
        </p>
      </section>

      <section className="border border-muted rounded-xl p-6 shadow-sm bg-white dark:bg-background space-y-4">
        <h2 className="text-2xl font-semibold">1-on-1 Tutoring</h2>
        <p className="text-muted-foreground">
          Tailored sessions for students seeking help with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Coding (Python, JavaScript, etc.)</li>
          <li>Data Science fundamentals</li>
          <li>Generative AI tools (ChatGPT, Claude, etc.)</li>
          <li>Academic writing and research support</li>
        </ul>
      </section>

      <section className="border border-muted rounded-xl p-6 shadow-sm bg-white dark:bg-background space-y-4">
        <h2 className="text-2xl font-semibold">Custom Enterprise Upskilling</h2>
        <p className="text-muted-foreground">
          Cohort-based or on-demand training for professional teams:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Integrating LLMs into products and workflows</li>
          <li>Building internal tools with AI automation</li>
          <li>Training on domain-specific AI use cases</li>
        </ul>
      </section>

      <section className="text-center text-muted-foreground italic text-sm">
        Powered by proprietary educational agents and adaptive learning platforms.
      </section>
    </main>
  );
}
