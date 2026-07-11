"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  Sun,
  Moon,
  Home,
  MapPin,
  Sparkles,
  Calendar,
  Users,
  Heart,
  User,
  LogIn,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/destinations", label: "Destinations", icon: MapPin },
  { href: "/planner", label: "AI Planner", icon: Sparkles },
  { href: "/itinerary", label: "Itinerary", icon: Calendar },
  { href: "/community", label: "Community", icon: Users },
  { href: "/saved", label: "Saved Trips", icon: Heart },
  { href: "/about", label: "About", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: Users },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          Travel<span className="text-blue-500">AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Search size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold hover:text-blue-500">
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
            >
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center items-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center items-center p-3 rounded-xl bg-blue-500 text-white font-bold"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
