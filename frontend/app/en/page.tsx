import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Programs from '@/components/Programs';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/*<Programs />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />*/}
    </main>
  );
}