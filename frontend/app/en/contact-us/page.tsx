import Image from "next/image";
import styles from "./Contact.module.css"
import { companyEmail } from "@/data/socials";

export const metadata = {
  title: "Contact | Azure Partners",
  description: "Get in touch with Azure Partners. Email us or scan our WeChat QR code.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Email</h2>
            <p className="text-lg text-muted-foreground">
              <a
                href={`mailto:${companyEmail}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {companyEmail}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">WeChat</h2>
            <div className="mx-auto w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              {/* Placeholder for WeChat QR Code */}
              <Image className={styles.wechat} src="/wechat.png" alt={"WeChat QR Code"} height={100} width={100} />
            </div>
            <p className="mt-4 text-muted-foreground">
              Scan the QR code to connect with us on WeChat.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
