'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your server
    console.log('Submitted email:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career with AI?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our newsletter to stay updated on the latest AI trends, exclusive educational content, and upcoming program launches.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-xl font-medium mb-2">Thank you for subscribing!</div>
                <p className="text-blue-100">
                  We'll keep you updated with the latest in AI education and exclusive content.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-blue-200">Expert Instructors</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">10k+</div>
              <div className="text-blue-200">Students Trained</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-blue-200">AI Programs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}