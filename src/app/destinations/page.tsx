"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Star, Heart, ArrowRight } from "lucide-react";
import { mockDestinations } from "@/data/mockData";

export default function Destinations() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Explore Destinations</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find your perfect getaway with our AI-powered recommendations
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
            <input
              type="text"
              placeholder="Search for destinations..."
              className="w-full pl-14 pr-6 py-4 text-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mockDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -8 }}
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/90 text-white text-xs font-bold rounded-full uppercase">
                    {dest.category}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-slate-900/70 text-white text-sm font-bold rounded-full">
                    {dest.aiMatch}% Match
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{dest.rating}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">{dest.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div>
                      <span className="text-2xl font-extrabold">${dest.price}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">/person</span>
                    </div>
                    <Link
                      href={`/destinations/${dest.id}`}
                      className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-xl hover:bg-blue-500 dark:hover:bg-blue-500 transition-all font-bold text-sm"
                    >
                      View <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
