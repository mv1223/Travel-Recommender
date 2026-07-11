"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar, MapPin, Heart, TrendingUp, Sparkles, Bell, 
  Settings, User, Plus, ArrowRight, Clock, Star, Wallet,
  Search, Plane
} from "lucide-react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid 
} from "recharts";
import { mockDestinations, mockBudget } from "@/data/mockData";

const COLORS = ['#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444'];

export default function Dashboard() {
  const upcomingTrips = [
    { destination: "Bali, Indonesia", date: "Dec 15 - Dec 22, 2026", status: "Upcoming", image: mockDestinations[0].image },
    { destination: "Swiss Alps", date: "Jan 10 - Jan 17, 2027", status: "Planning", image: mockDestinations[1].image },
  ];

  const recentSearches = ["Paris", "Tokyo", "Santorini", "Maldives"];

  const notifications = [
    { title: "New AI Recommendation", message: "We found 3 new destinations you'll love!", time: "2h ago" },
    { title: "Trip Update", message: "Your Bali trip is coming up soon!", time: "1d ago" },
    { title: "Community Like", message: "Your travel photo got 120 likes!", time: "3d ago" },
  ];

  const stats = [
    { label: "Countries Visited", value: 12, icon: MapPin, color: "text-blue-500" },
    { label: "Trips Planned", value: 24, icon: Calendar, color: "text-pink-500" },
    { label: "Saved Destinations", value: 45, icon: Heart, color: "text-red-500" },
    { label: "Days Traveled", value: 186, icon: Clock, color: "text-green-500" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Welcome Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Welcome back, Sarah! ✈️</h1>
                <p className="text-white/90 text-lg mb-6">Ready to plan your next adventure?</p>
                <Link 
                  href="/planner"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-all"
                >
                  <Sparkles size={20} />
                  Plan a New Trip
                </Link>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className={`p-3 bg-gray-50 dark:bg-gray-800 rounded-xl w-fit mb-4 ${stat.color}`}>
                      <Icon size={24} />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Upcoming Trips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Upcoming Trips</h2>
                <Link href="/itinerary" className="text-primary font-semibold flex items-center gap-2">
                  View All <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingTrips.map((trip, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{trip.destination}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            trip.status === "Upcoming" 
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}>
                            {trip.status}
                          </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1 mb-3">
                          <Calendar size={14} />
                          {trip.date}
                        </p>
                        <button className="text-primary font-semibold text-sm">View Details →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">AI Recommendations</h2>
                <Link href="/planner" className="text-primary font-semibold flex items-center gap-2">
                  See More <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {mockDestinations.slice(0, 3).map((dest, i) => (
                  <div key={dest.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="relative h-40">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs font-bold rounded-full">
                        {dest.aiMatch}% Match
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1">{dest.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{dest.city}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${dest.price}</span>
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{dest.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sarah Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Premium Member</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/profile" className="flex-1 bg-gray-100 dark:bg-gray-800 py-2 rounded-xl font-semibold text-center">
                  Profile
                </Link>
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <Settings size={20} />
                </button>
              </div>
            </motion.div>

            {/* Budget Overview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Budget Overview</h3>
                <Wallet className="text-primary" size={20} />
              </div>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockBudget.categories}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="amount"
                    >
                      {mockBudget.categories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">${mockBudget.total}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm block">Total Budget</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {mockBudget.categories.slice(0, 4).map((cat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">{cat.name}</div>
                    <div className="font-semibold">${cat.amount}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Searches */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Recent Searches</h3>
                <Search size={18} className="text-gray-400" />
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, i) => (
                  <button key={i} className="w-full text-left px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center gap-3">
                    <MapPin size={16} className="text-gray-400" />
                    {search}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Notifications</h3>
                <Bell size={18} className="text-gray-400" />
              </div>
              <div className="space-y-4">
                {notifications.map((notif, i) => (
                  <div key={i} className="p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <div className="font-semibold text-sm mb-1">{notif.title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">{notif.message}</div>
                    <div className="text-gray-400 text-xs">{notif.time}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
