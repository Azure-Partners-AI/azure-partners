import Link from "next/link";

import { IoIosRocket } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";


export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
          Our Programs
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our programs don't just teach AI—they transform professionals into
          industry leaders who shape the future of their fields.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ProgramCard
          icon={<IoIosRocket size={50}/>}
          title="Venture Capital"
          outcomes={[
            "Predict which sectors or founders are likely to outperform.",
            "Efficiently scan the web, pitch decks, and databases for high-potential startups.",
            "AI-powered dashboards to monitor KPIs, runway, burn rate, and milestones across all portfolio companies.",
            "Automate fund performance summaries, investor reports, and updates using generative AI.",
          ]}
          benefits="Join the elite group of VCs who leverage AI to identify unicorns before others."
          color="primary"
        />

        <ProgramCard
          icon={<CiBank size={50}/>}
          title="Finance"
          outcomes={[
            "Automate extraction of key financial metrics (e.g., P/E ratio, EBITDA).",
            "Generate insights from unstructured data like PDFs and investor presentations.",
            "Generate insights from unstructured data like PDFs and investor presentations.",
            "Combine structured data with unstructured text (e.g., CEO guidance) to refine outlooks.",
          ]}
          benefits="Revolutionizing financial institutions with AI."
          color="secondary"
        />

        <ProgramCard
          icon={<IoSchoolSharp size={50}/>}
          title="Education"
          outcomes={[
            "Summarize complex topics into digestible formats for different grade levels.",
            "Helps both students and non-native-speaking educators.",
            "Agents track student engagement, flagging when someone falls behind.",
            "Teachers save time and students get personalized comments at scale.",
          ]}
          benefits="Transform education with AI. Educators increase student engagement and spearhead better learning outcomes through AI-powered personalization."
          color="tertiary"
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
}

function ProgramCard({
  icon,
  title,
  outcomes,
  benefits,
  color,
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
        <h3 className="font-semibold text-lg mb-3">Program Outcomes:</h3>
        {outcomes.map((outcome, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <p className="text-muted-foreground">{outcome}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-muted-foreground">+ many more</p>

      <Link
        href={`/programs/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className={`mt-8 inline-flex items-center justify-center w-full font-medium px-6 py-3 rounded-lg transition-colors ${buttonClasses[color]}`}
      >
        Learn More
      </Link>
    </div>
  );
}
