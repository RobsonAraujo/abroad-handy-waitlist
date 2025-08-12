"use client";

import { cn } from "~/lib/utils";
import { useScroll } from "~/hooks/use-scroll";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const scrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "py-4 flex flex-row gap-2 justify-between items-center md:px-10 sm:px-6 px-4 sticky top-0 z-50",
        scrolled &&
          "bg-background/50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">I</span>
        </div>
        <span className="font-semibold text-lg">"In Progress"</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-sm hover:text-primary transition-colors">
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link
          href="/founders"
          className="text-sm hover:text-primary transition-colors"
        >
          Founders
        </Link>
        <Link href="/">
          <Button
            size="sm"
            className="bg-[#e5ff00] hover:bg-[#e5ff00] cursor-pointer"
          >
            <p className="text-black">Join Waitlist</p>
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-1 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            isMenuOpen && "rotate-45 translate-y-1.5"
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            isMenuOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block w-6 h-0.5 bg-current transition-all duration-300",
            isMenuOpen && "-rotate-45 -translate-y-1.5"
          )}
        />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/founders"
              className="text-sm hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Founders
            </Link>
            <Link href="/">
              <Button
                size="sm"
                className="w-full bg-[#e5ff00] hover:bg-[#e5ff00] text-black"
              >
                Join Waitlist
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
