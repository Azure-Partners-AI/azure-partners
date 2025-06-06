'use client'

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const HeroButtonZH = () => {
  const actionItems = [
    // { title: "开始探索", route: "/zh/get-started" },
    { title: "查看课程", route: "/zh/programs" },
    { title: "了解我们的服务", route: "/zh/offerings" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentKey, setCurrentKey] = useState(0); // Unique key to trigger AnimatePresence

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % actionItems.length;
        setCurrentKey((k) => k + 1); // Change key to re-render animation
        return newIndex;
      });
    }, 3000); // 3 seconds with smooth transition

    return () => clearInterval(interval);
  }, []);

  const currentItem = actionItems[currentIndex];

  return (
    <Link
      href={currentItem.route}
      className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentKey}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {currentItem.title}
        </motion.span>
      </AnimatePresence>
      <ArrowRight size={16} className="ml-2" />
    </Link>
  );
};

export default HeroButtonZH;
