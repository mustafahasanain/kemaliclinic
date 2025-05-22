"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      )}
      dir="ltr"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-start">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32 sm:h-16 sm:w-56 lg:h-12 lg:w-64">
              <Image
                src="/images/ck-logo.png"
                alt="Kemali Clinic Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row-reverse items-center space-x-1 space-x-reverse">
          <Link
            href="#offers"
            className="px-4 py-2 text-almost-black hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            العروض
          </Link>
          <Link
            href="#services"
            className="px-4 py-2 text-almost-black hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            الخدمات
          </Link>
          <Link
            href="#about"
            className="px-4 py-2 text-almost-black hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            من نحن
          </Link>
          <Link
            href="#approach"
            className="px-4 py-2 text-almost-black hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            نهجنا
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 text-almost-black hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            اتصل بنا
          </Link>
          <a
            href={`https://wa.me/+905352785119?text=${encodeURIComponent(
              "مرحباً، أود حجز موعد في مركز السياحة الطبية"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            احجز الآن
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-700 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 text-primary"
            onClick={toggleMenu}
            aria-label="إغلاق القائمة"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 p-4 bg-white">
          <Link
            href="#offers"
            className="w-full py-3 text-center text-lg font-medium text-almost-black hover:text-primary transition-colors duration-300"
            onClick={handleLinkClick}
          >
            العروض
          </Link>
          <Link
            href="#services"
            className="w-full py-3 text-center text-lg font-medium text-almost-black hover:text-primary transition-colors duration-300"
            onClick={handleLinkClick}
          >
            خدماتنا
          </Link>
          <Link
            href="#about"
            className="w-full py-3 text-center text-lg font-medium text-almost-black hover:text-primary transition-colors duration-300"
            onClick={handleLinkClick}
          >
            من نحن
          </Link>
          <Link
            href="#approach"
            className="w-full py-3 text-center text-lg font-medium text-almost-black hover:text-primary transition-colors duration-300"
            onClick={handleLinkClick}
          >
            نهجنا
          </Link>
          <Link
            href="#contact"
            className="w-full py-3 text-center text-lg font-medium text-almost-black hover:text-primary transition-colors duration-300"
            onClick={handleLinkClick}
          >
            اتصل بنا
          </Link>
          <a
            href={`https://wa.me/+905352785119?text=${encodeURIComponent(
              "مرحباً، أود حجز موعد في مركز السياحة الطبية"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors duration-300 hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={handleLinkClick}
          >
            احجز الآن
          </a>
        </nav>
      </div>
    </header>
  );
}
