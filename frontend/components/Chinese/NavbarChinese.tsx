"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  mainItems,
  programItems,
  aboutItems,
  offeringsItems,
  eventItems,
  programs,
  about,
  events,
  offerings,
  contactUs,
} from "@/data/navigationEN";

export default function NavbarChinese() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // <== add this

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header className={headerStyle}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo & Language Button */}
        <div className="flex items-center gap-4">
          <Link href="/en" className="flex items-center space-x-2">
            <Image
              src="/logo.avif"
              alt="Azure Partners Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className={textStyle}>Azure Partners</span>
          </Link>
          <Link
            href="/zh"
            className="bg-dark text-white px-3 py-1.5 rounded-md text-sm"
          >
            中文
          </Link>
        </div>

        {/* Toggle Button */}
        <button
          className="md:hidden text-primary light:text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Menu */}
        <nav
          className={cn(
            "absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none transition-all duration-300 z-40",
            isOpen ? "block" : "hidden md:flex"
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 px-4 py-4 md:p-0">
            <Dropdown
              id="programs"
              title={programs.title}
              items={programItems}
              href={programs.route}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <Dropdown
              id="about"
              title={about.title}
              items={aboutItems}
              href={about.route}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <Dropdown
              id="events"
              title={events.title}
              items={eventItems}
              href={events.route}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <Dropdown
              id="offerings"
              title={offerings.title}
              items={offeringsItems}
              href={offerings.route}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <li>
              <Link
                href={contactUs.route}
                className="block bg-dark text-white px-4 py-2 rounded-md text-center hover:bg-primary/90 transition-colors"
              >
                {contactUs.title}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Dropdown({
  id,
  title,
  items,
  href,
  openDropdown,
  setOpenDropdown,
}: {
  id: string;
  title: string;
  items: { title: string; route: string }[];
  href?: string;
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
}) {
  const isOpen = openDropdown === id;

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : id);
  };

  return (
    <li className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-2 py-2 text-foreground hover:text-primary transition-colors"
      >
        {title}
        {isOpen ? (
          <ChevronUp size={16} className="ml-1" />
        ) : (
          <ChevronDown size={16} className="ml-1" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg p-4 space-y-2 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="block px-2 py-1 rounded-md hover:bg-muted text-sm transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
