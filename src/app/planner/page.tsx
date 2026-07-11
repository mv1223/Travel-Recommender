"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Send,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Heart,
  Waves,
  Mountain,
  Camera,
  Coffee,
  Star,
  ArrowRight,
  Save,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { mockDestinations } from "@/data/mockData";

export default function Planner() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const budgetFilters = ["Budget", "Mid-Range", "Luxury"];
  const styleFilters = ["Adventure", "Solo", "Family", "Couple"];
  const interestFilters = ["Nature", "Beaches", "Cultural", "Food"];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-500/20 px-4 py-2 rounded-full mb-6">
            <Sparkles size={18} className="text-blue-500" />
            <span className="font-bold text-blue-600 dark:text-blue-300">AI Trip Planner</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Plan Your Perfect Trip</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Tell us about your dream trip and let our AI create a personalized itinerary
          </p>
        </motion.div>

        {/* AI Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <textarea
              className="w-full h-40 p-6 text-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-6"
              placeholder="Tell us about your dream trip... (e.g., 'I have $2000, 5 days, starting from New York. I love mountains and photography.')"
            >
              I have $3000, 7 days, starting from San Francisco. I love mountains, photography, and peaceful places.
            </textarea>

            {/* Filters */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <DollarSign size={18} />
                  BUDGET
                </h3>
                <div className="flex flex-wrap gap-3">
                  {budgetFilters.map(f => (
                    <button
                      key={f}
                      onClick={() => toggleFilter(f)}
                      className={`px-5 py-2 rounded-full font-semibold transition-all ${
                        activeFilters.includes(f)
                          ? "bg-blue-500 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Users size={18} />
                  TRAVEL STYLE
                </h3>
                <div className="flex flex-wrap gap-3">
                  {styleFilters.map(f => (
                    <button
                      key={f}
                      onClick={() => toggleFilter(f)}
                      className={`px-5 py-2 rounded-full font-semibold transition-all ${
                        activeFilters.includes(f)
                          ? "bg-pink-500 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Heart size={18} />
                  INTERESTS
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interestFilters.map(f => (
                    <button
                      key={f}
                      onClick={() => toggleFilter(f)}
                      className={`px-5 py-2 rounded-full font-semibold transition-all ${
                        activeFilters.includes(f)
                          ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 disabled:opacity-70 text-white py-4 rounded-2xl font-extrabold text-xl transition-all flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/30"
            >
              {isGenerating ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating your trip...
                </>
              ) : (
                <>
                  <Sparkles size={24} />
                  Generate AI Trip Plan
                  <Send size={24} />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-extrabold">
                <span className="text-blue-500">AI</span> Recommended Destinations
              </h2>
              <p className="text-slate-600 dark:text-slate-400">3 perfect destinations for you</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mockDestinations.slice(0, 3).map((dest, i) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800"
                >
                  <div className="relative h-64">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-bold rounded-full">
                      {dest.aiMatch}% Match
                    </div>
                    <button className="absolute top-4 left-4 p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all">
                      <Heart size={20} className="text-slate-700 dark:text-slate-300" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{dest.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                          <MapPin size={14} />
                          {dest.city}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{dest.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Budget</p>
                        <p className="font-extrabold text-lg">${dest.price}</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Duration</p>
                        <p className="font-extrabold text-lg">7 Days</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Best Season</p>
                        <p className="font-bold text-sm">Spring</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl">
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Weather</p>
                        <p className="font-bold text-sm">22°C</p>
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-5 leading-relaxed">{dest.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={20} className="text-green-500" />
                        <span className="font-bold text-green-600 dark:text-green-400">
                          Safety: 9.5/10
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Link
                        href={`/destinations/${dest.id}`}
                        className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold hover:bg-blue-500 dark:hover:bg-blue-500 transition-all text-center"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                        <Save size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
