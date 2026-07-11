'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, MapPin, Calendar, Users, Star, Heart, ArrowRight,
  Sparkles, TrendingUp, ShieldCheck, Camera, Coffee, 
  Mountain, Waves, Compass, Wallet, Plane
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockDestinations, mockTestimonials } from '@/data/mockData';

export default function Home() {
  const stats = [
    { number: '50K+', label: 'Happy Travelers' },
    { number: '1000+', label: 'Destinations' },
    { number: '98%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' },
  ];

  const features = [
    { icon: Sparkles, title: 'AI Recommendations', desc: 'Get personalized destination suggestions based on your preferences.' },
    { icon: Compass, title: 'Smart Itinerary', desc: 'AI generates optimized day-by-day travel plans for you.' },
    { icon: Wallet, title: 'Budget Planner', desc: 'Track expenses and stay within your travel budget easily.' },
    { icon: ShieldCheck, title: 'Safe Travels', desc: 'Safety ratings and recommendations for every destination.' },
  ];

  const floatingIcons = [
    { icon: Plane, delay: 0, size: 24, color: 'text-primary' },
    { icon: Mountain, delay: 0.3, size: 20, color: 'text-accent' },
    { icon: Waves, delay: 0.6, size: 22, color: 'text-primary' },
    { icon: Camera, delay: 0.9, size: 18, color: 'text-accent' },
    { icon: Coffee, delay: 1.2, size: 20, color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-blur">
        {/* Floating Background Elements */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: item.delay }}
            className={`absolute animate-float ${item.color} ${
              i === 0 ? 'top-32 left-16' :
              i === 1 ? 'top-24 right-24' :
              i === 2 ? 'bottom-32 left-1/4' :
              i === 3 ? 'bottom-40 right-16' :
              'top-1/2 left-8'
            }`}
          >
            <item.icon size={item.size} />
          </motion.div>
        ))}
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                AI-Powered Travel Planning
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            >
              Plan Your Dream Trip
              <br />
              <span className="text-gradient">With AI</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Discover personalized destinations, smart itineraries, and budget-friendly plans powered by AI.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-2 max-w-3xl mx-auto mb-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      className="w-full pl-12 pr-4 py-4 bg-transparent border-none outline-none text-lg"
                    />
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input
                      type="text"
                      placeholder="Dates"
                      className="w-full pl-12 pr-4 py-4 bg-transparent border-none outline-none text-lg"
                    />
                  </div>
                </div>
                <Link href="/planner" className="w-full md:w-auto bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 hover-lift">
                  <Search size={20} />
                  Search
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Why Choose TravelAI</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for the perfect trip, all in one place.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Featured Destinations</h2>
              <p className="text-muted-foreground text-lg">
                Explore our most popular travel spots
              </p>
            </div>
            <Link href="/destinations" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockDestinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group cursor-pointer hover-lift"
              >
                <div className="relative rounded-3xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-white" />
                      <span className="text-white text-sm">{dest.city}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">{dest.rating}</span>
                  </div>
                  <span className="text-xl font-extrabold text-primary">${dest.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{dest.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/destinations" className="inline-flex items-center gap-2 text-primary font-semibold">
              View All Destinations <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">What Travelers Say</h2>
            <p className="text-muted-foreground text-lg">Stories from our amazing community</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">Happy Traveler</p>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float-delay" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">Ready for Your Next Adventure?</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Let AI help you plan the perfect trip. Start exploring now!
              </p>
              <Link
                href="/planner"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-10 py-5 rounded-2xl font-extrabold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all hover-lift"
              >
                <Sparkles size={24} />
                Plan Your Trip Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
