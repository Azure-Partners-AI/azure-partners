'use client'

// import Hero from '@/components/Hero';
// import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()

  router.push("/en"); // immediate redirect

  return (
    <main className="min-h-screen">
      {/*<Navbar />
      <Hero />
      <Programs />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />*/}
    </main>
  );
}