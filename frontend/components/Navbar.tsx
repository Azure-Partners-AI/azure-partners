"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a default style during SSR and initial client render
  const headerStyle = !mounted
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-transparent"
    : cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-white/90 backdrop-blur-md dark:bg-background/90 shadow-sm"
          : "bg-transparent"
      );

  const textStyle = !mounted
    ? "font-bold text-xl transition-colors text-white"
    : cn(
        "font-bold text-xl transition-colors",
        scrolled ? "text-primary" : "text-white"
      );

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={headerStyle}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.avif"
              alt="Azure Partners Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span
              className={textStyle}
            >
              Azure Partners
            </span>

            <Link
              href="/zh"
              className="bg-dark text-white px-4 py-2 rounded-md transition-colors ml-3"
            >
              中文
            </Link>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <NavItem title="Programs" scrolled={scrolled}>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg p-4 space-y-2">
                <NavDropdownItem href="/programs/finance">
                  AI in Finance
                </NavDropdownItem>
                <NavDropdownItem href="/programs/venture-capital">
                  VC Fundraising
                </NavDropdownItem>
                <NavDropdownItem href="/programs/coding">
                  AI Coding
                </NavDropdownItem>
                <NavDropdownItem href="/programs/enterprise">
                  Enterprise Solutions
                </NavDropdownItem>
              </div>
            </NavItem>

            {/*<NavItem title="Industries" scrolled={scrolled}>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg p-4 space-y-2">
                <NavDropdownItem href="/industries/finance">Finance</NavDropdownItem>
                <NavDropdownItem href="/industries/healthcare">Healthcare</NavDropdownItem>
                <NavDropdownItem href="/industries/tech">Technology</NavDropdownItem>
                <NavDropdownItem href="/industries/education">Education</NavDropdownItem>
              </div>
            </NavItem>*/}

            <NavItem href="/about" title="About" scrolled={scrolled} />
            <NavItem href="/blog" title="Blog" scrolled={scrolled} />

            <Link
              href="/contact"
              className="bg-dark text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <button
            className="md:hidden text-primary dark:text-primary-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <MobileNavItem href="/programs" title="Programs" />
            <MobileNavItem href="/industries" title="Industries" />
            <MobileNavItem href="/about" title="About" />
            <MobileNavItem href="/blog" title="Blog" />
            <Link
              href="/contact"
              className="block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

type NavItemProps = {
  href?: string;
  title: string;
  children?: React.ReactNode;
  scrolled: boolean;
};

function NavItem({ href, title, children, scrolled }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (children) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative group">
      {href ? (
        <Link
          href={href}
          className={cn(
            "font-medium transition-colors",
            scrolled
              ? "text-foreground hover:text-primary"
              : "text-white/90 hover:text-white"
          )}
        >
          {title}
        </Link>
      ) : (
        <button
          className={cn(
            "flex items-center font-medium transition-colors",
            scrolled
              ? "text-foreground hover:text-primary"
              : "text-white/90 hover:text-white"
          )}
          onClick={toggleDropdown}
        >
          {title}
          <ChevronDown size={16} className="ml-1" />
        </button>
      )}
      {children && <div className="hidden group-hover:block">{children}</div>}
    </div>
  );
}

function NavDropdownItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block p-2 text-foreground hover:bg-muted rounded-md transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavItem({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
    >
      {title}
    </Link>
  );
}
