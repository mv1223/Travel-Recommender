"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  MapPin,
  Waves,
  Mountain,
  Camera,
  Coffee,
  Star,
  Heart,
} from "lucide-react";
import { mockDestinations, mockTestimonials } from "@/data/mockData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-white dark:to-slate-950" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} className="text-yellow-400" />
              <span className="font-semibold text-white/90">AI-Powered Travel</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Plan Your Dream Trip with <span className="text-blue-400">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover personalized destinations, plan perfect itineraries, and make every trip unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/planner"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105"
              >
                <Sparkles size={22} />
                Start Planning Now
                <ArrowRight size={22} />
              </Link>
              <Link
                href="/destinations"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Explore Destinations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: "Happy Travelers", value: "500K+", color: "text-blue-500" },
              { icon: ShieldCheck, label: "Safe Destinations", value: "1,200+", color: "text-pink-500" },
              { icon: Sparkles, label: "AI Recommendations", value: "10M+", color: "text-yellow-500" },
              { icon: Zap, label: "Fast Planning", value: "Instant", color: "text-green-500" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 text-center"
                >
                  <div className={`p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl mx-auto w-fit mb-5 ${stat.color}`}>
                    <Icon size={32} />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Featured Destinations</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Hand-picked by our AI engine
              </p>
            </div>
            <Link
              href="/destinations"
              className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 dark:border-slate-800"
              >
                <div className="relative h-64">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all">
                    <Heart size={20} className="text-slate-700 dark:text-slate-300" />
                  </button>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/90 backdrop-blur text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {dest.category}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-slate-900/70 backdrop-blur text-white text-sm font-bold rounded-full">
                    {dest.aiMatch}% Match
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">
                        {dest.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div>
                      <span className="text-2xl font-extrabold">${dest.price}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        /person
                      </span>
                    </div>
                    <Link
                      href={`/destinations/${dest.id}`}
                      className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:bg-blue-500 dark:hover:bg-blue-500 transition-all font-bold text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">What Our Travelers Say</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Real experiences from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-8 md:px-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
                <Sparkles size={18} className="text-blue-400" />
                <span className="font-bold text-blue-300">AI-Powered</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Let our AI find your perfect destination and plan an itinerary tailored just for you.
              </p>
              <Link
                href="/planner"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-extrabold text-lg hover:opacity-90 transition-all shadow-2xl transform hover:scale-105"
              >
                <Sparkles size={24} />
                Start Planning Your Trip
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
