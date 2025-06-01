'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, TrendingUp, BrainCircuit, Building2 } from 'lucide-react';

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized educational tracks designed to enhance your industry knowledge with cutting-edge AI applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <ProgramCard
            icon={<TrendingUp className="h-10 w-10 text-blue-500" />}
            title="AI in Finance"
            description="Master AI applications in financial analysis, risk assessment, and automated trading strategies."
            href="/programs/finance"
            variants={item}
          />
          
          <ProgramCard
            icon={<Building2 className="h-10 w-10 text-indigo-500" />}
            title="VC Fundraising"
            description="Learn how AI transforms venture capital deal sourcing, evaluation, and portfolio management."
            href="/programs/venture-capital"
            variants={item}
          />
          
          <ProgramCard
            icon={<Code className="h-10 w-10 text-teal-500" />}
            title="AI Coding"
            description="Develop expertise in coding with AI assistance, from pair programming to automated code generation."
            href="/programs/coding"
            variants={item}
          />
          
          <ProgramCard
            icon={<BrainCircuit className="h-10 w-10 text-purple-500" />}
            title="Enterprise AI"
            description="Deploy AI solutions at scale across your organization with best practices for integration."
            href="/programs/enterprise"
            variants={item}
          />
        </motion.div>
      </div>
    </section>
  );
}

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  variants: any;
}

function ProgramCard({ icon, title, description, href, variants }: ProgramCardProps) {
  return (
    <motion.a
      href={href}
      className="group relative bg-card hover:bg-card/80 border border-border rounded-lg p-6 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:-translate-y-1"
      variants={variants}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <div className="text-primary font-medium inline-flex items-center">
        Learn more
        <motion.div
          className="ml-1"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.div>
      </div>
    </motion.a>
  );
}