'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Server, Users, Sparkles, Globe } from 'lucide-react';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Azure Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine industry expertise with cutting-edge AI education to deliver transformative learning experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI education at Azure Partners"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent mix-blend-multiply"></div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <FeatureItem
              icon={<Server />}
              title="Industry-Specific AI Applications"
              description="Our curriculum is tailored to real-world applications in your specific industry, ensuring immediate relevance and value."
              delay={0.3}
              isInView={isInView}
            />
            
            <FeatureItem
              icon={<Users />}
              title="Expert Instructors"
              description="Learn from AI practitioners and industry veterans who bring real-world experience to every lesson."
              delay={0.5}
              isInView={isInView}
            />
            
            <FeatureItem
              icon={<Sparkles />}
              title="Hands-On Learning"
              description="Apply concepts immediately with practical exercises, case studies, and real-world projects."
              delay={0.7}
              isInView={isInView}
            />
            
            <FeatureItem
              icon={<Globe />}
              title="Global AI Community"
              description="Join our network of professionals leveraging AI across industries and continue learning beyond the classroom."
              delay={0.9}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function FeatureItem({ icon, title, description, delay, isInView }: FeatureItemProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mt-1 bg-primary/10 p-3 rounded-md text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}