import { Check } from 'lucide-react';

export const metadata = {
  title: 'AI for Education | Azure Partners',
  description: 'Learn how to leverage artificial intelligence in education for personalized learning, curriculum design, assessment, and student support.',
};

export default function AIforEducationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            AI for Education
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              AI for Education refers to the use of artificial intelligence to enhance teaching, 
              learning, and academic administration. It spans everything from intelligent tutoring 
              systems to AI-powered curriculum design and student support.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Use Cases</h2>
            
            <div className="space-y-6">
              <UseCase 
                title="Personalized Learning"
                items={[
                  "AI adapts content to each student's pace, learning style, and progress",
                  "Tools like ChatGPT can act as tutors to explain concepts or quiz students in real-time",
                  "Generate personalized study plans and learning pathways"
                ]}
              />

              <UseCase 
                title="Curriculum & Content Generation"
                items={[
                  "Automatically generate practice questions, flashcards, and lesson plans",
                  "Summarize complex topics into digestible formats for different grade levels",
                  "Create interactive learning materials and simulations"
                ]}
              />

              <UseCase 
                title="Grading & Feedback"
                items={[
                  "AI can assess essays, projects, or coding assignments and offer instant feedback",
                  "Teachers save time and students get personalized comments at scale",
                  "Track learning progress and identify areas needing improvement"
                ]}
              />

              <UseCase 
                title="Language Learning & Communication"
                items={[
                  "Real-time translation, grammar correction, and conversational practice via chatbots",
                  "Helps both students and non-native-speaking educators",
                  "Create immersive language learning experiences"
                ]}
              />

              <UseCase 
                title="Student Support & Engagement"
                items={[
                  "AI-powered chatbots answer administrative or academic queries 24/7",
                  "Agents track student engagement, flagging when someone falls behind",
                  "Provide mental health and wellbeing support through AI counseling"
                ]}
              />

              <UseCase 
                title="Institutional Operations"
                items={[
                  "Automate admissions screening, transcript parsing, and scheduling",
                  "Analyze performance data across courses to improve outcomes",
                  "Optimize resource allocation and administrative workflows"
                ]}
              />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Popular Tools in AI for Education</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>LLMs (e.g., GPT-4, Claude): for tutoring, writing help, and interactive Q&A</li>
              <li>RAG systems: to search across educational material or school policy</li>
              <li>Learning Management Systems (LMS) enhanced with AI recommendations</li>
              <li>Natural Language Processing: for language learning and assessment</li>
              <li>Computer Vision: for proctoring and engagement monitoring</li>
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