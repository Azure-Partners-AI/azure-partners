import Link from "next/link";
import { Home } from "lucide-react";

const ReturnButtonEN = () => {
  return (
    <Link
      href="/en"
      className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
    >
      Return Home
      <Home size={16} className="ml-2" />
    </Link>
  );
};

export default ReturnButtonEN;
