'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Start with centered position
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated after first render
    setIsHydrated(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Use static gradient during server render and hydration
  const gradientStyle = !isHydrated
    ? {
        background: 'radial-gradient(circle at 50% 50%, #2563eb, #1e40af, #1e3a8a, #0f172a)',
      }
    : {
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
          mousePosition.y * 100
        }%, #2563eb, #1e40af, #1e3a8a, #0f172a)`,
        transition: "background 0.3s ease",
      };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Gradient background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={gradientStyle}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,1))]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Future with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 block mt-2">
              AI Mastery (中文)
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock your greatest potential of tomorrow with our expert-led AI
            programs. Invest in yourself today! (中文)
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/programs"
              className="bg-black hover:bg-transparent/90 text-primary font-medium px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Explore Programs (中文)
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Contact Us (中文)
            </Link>
          </motion.div>
        </div>

        {/*<motion.div 
          className="mt-20 md:mt-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xl font-medium">Interactive AI Demo</div>
            </div>
          </div>
        </motion.div>*/}
      </div>
    </section>
  );
}
