import Link from "next/link";
import styles from "./Offerings.module.css"

export const metadata = {
  title: "Our Offerings | Azure Partners",
  description:
    "Explore our comprehensive range of AI services including courses, internships, tutoring, and development solutions.",
};

export default function OfferingsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Our Offerings</h1>

          <ul className="space-y-6 text-lg">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/en/offerings/courses">
                  <h2 className="font-semibold mb-2">Courses</h2>
                </Link>
                <p className="text-muted-foreground">
                  Comprehensive AI education programs designed for industry
                  professionals.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/en/offerings/internship">
                  <h2 className="font-semibold mb-2">Internship</h2>
                </Link>

                <p className="text-muted-foreground">
                  Hands-on experience working with cutting-edge AI technologies
                  and real-world projects.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/en/offerings/ai-tutoring-services">
                  <h2 className="font-semibold mb-2">AI Tutoring Services</h2>
                </Link>

                <p className="text-muted-foreground">
                  Personalized guidance and support from AI experts to
                  accelerate your learning.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/en/offerings/content-generation">
                  <h2 className="font-semibold mb-2">
                    Content Image/Video Generation
                  </h2>
                </Link>

                <p className="text-muted-foreground">
                  Professional AI-powered content creation services for various
                  media formats.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 mr-4" />
              <div>
                <Link className={styles.link} href="/en/offerings/ai-application-development">
                  <h2 className="font-semibold mb-2">
                    AI Application Development
                  </h2>
                </Link>
                <p className="text-muted-foreground">
                  Custom AI solution development tailored to your business
                  needs.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
