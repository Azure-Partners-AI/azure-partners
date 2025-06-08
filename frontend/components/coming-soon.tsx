import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Azure Partners",
  description: "This page is currently under construction. Please check back later.",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">🚧 Coming Soon</h1>
      <p className="text-muted-foreground text-lg max-w-md">
        We're working hard to bring you something amazing. Please check back soon!
      </p>
    </main>
  );
}
