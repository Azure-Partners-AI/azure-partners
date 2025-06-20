import "./globals.css";
import "./normalize.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azure Partners | AI Education for Industry Professionals",
  description:
    "Immerse yourself in the latest AI technologies for finance, VC fundraising, coding and more with Azure Partners.",
  openGraph: {
    images: [
      {
        url: "https://azure-partners.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azure Partners - Offical Website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
