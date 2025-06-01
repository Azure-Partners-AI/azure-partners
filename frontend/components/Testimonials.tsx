'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Azure Partners' AI finance program transformed our investment strategy. We've seen a 30% increase in portfolio performance through AI-driven analytics.",
    author: "Sarah Johnson",
    title: "Chief Investment Officer, Global Capital",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The VC fundraising course gave me insights I couldn't find anywhere else. Their approach to AI-driven deal sourcing is revolutionary.",
    author: "Michael Chen",
    title: "Partner, Horizon Ventures",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As a software developer, the AI coding program opened new possibilities for my career. I'm now leading my company's machine learning initiatives.",
    author: "Alex Rivera",
    title: "Lead Developer, TechFusion",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-blue-50 dark:bg-blue-950/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with our AI education programs.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 relative"
          >
            <Quote className="text-blue-200 dark:text-blue-900 w-16 h-16 absolute -top-6 -left-6" />
            
            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className="font-semibold">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].title}</div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}