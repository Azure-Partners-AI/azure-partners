// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <Hero />
//       {/*
//       <Programs />
//       <Features />
//       <Testimonials />
//       <CallToAction />
//       <Footer />*/}
//     </main>
//   );
// }

import Link from "next/link";
import { Metadata } from "next";
import WelcomeHeading from "./WelcomeHeading";

export const metadata: Metadata = {
  title: "Welcome to Azure Partners | 欢迎您来到 Azure Partners",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6">
      <WelcomeHeading />
      <p className="text-lg text-muted-foreground text-center mb-8 max-w-xl">
        Please select your preferred language / 请选择您的语言
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/en"
          className="bg-blue text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue/90 transition"
        >
          English
        </Link>
        <Link
          href="/zh"
          className="bg-dark text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-dark/90 transition"
        >
          中文
        </Link>
      </div>
    </main>
  );
}
