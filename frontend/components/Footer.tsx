import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.png"
                alt="Azure Partners Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-xl text-white">Azure Partners</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Azure Partners provides cutting-edge AI education for industry professionals, 
              transforming careers and businesses through specialized immersive learning experiences.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
            </div>
          </div>
          
          <FooterColumn title="Programs">
            <FooterLink href="/programs/finance">AI in Finance</FooterLink>
            <FooterLink href="/programs/venture-capital">VC Fundraising</FooterLink>
            <FooterLink href="/programs/coding">AI Coding</FooterLink>
            <FooterLink href="/programs/enterprise">Enterprise AI</FooterLink>
            <FooterLink href="/programs/all">View All Programs</FooterLink>
          </FooterColumn>
          
          <FooterColumn title="Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/team">Our Team</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
          </FooterColumn>
          
          <FooterColumn title="Resources">
            <FooterLink href="/resources/case-studies">Case Studies</FooterLink>
            <FooterLink href="/resources/white-papers">White Papers</FooterLink>
            <FooterLink href="/resources/webinars">Webinars</FooterLink>
            <FooterLink href="/resources/ai-tools">AI Tools</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </FooterColumn>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Azure Partners. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm">Terms</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy</Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-white text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}