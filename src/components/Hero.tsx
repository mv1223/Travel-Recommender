"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            The Future of <span className="text-accent">Travel</span> is AI-Powered
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-12 font-medium"
          >
            Experience personalized luxury, curated by intelligence. 
            Discover destinations that match your soul.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-2 md:p-4 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-5xl mx-auto"
          >
            <div className="flex-1 w-full flex items-center px-4 space-x-3 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0">
              <MapPin className="text-accent" size={24} />
              <input 
                type="text" 
                placeholder="Where to next?" 
                className="bg-transparent border-none focus:outline-none text-lg w-full placeholder:text-gray-600"
              />
            </div>
            
            <div className="flex-1 w-full flex items-center px-4 space-x-3 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0">
              <Calendar className="text-primary" size={24} />
              <input 
                type="text" 
                placeholder="When?" 
                className="bg-transparent border-none focus:outline-none text-lg w-full placeholder:text-gray-600"
              />
            </div>

            <div className="flex-1 w-full flex items-center px-4 space-x-3 pb-4 md:pb-0">
              <Users className="text-primary" size={24} />
              <input 
                type="text" 
                placeholder="Travelers" 
                className="bg-transparent border-none focus:outline-none text-lg w-full placeholder:text-gray-600"
              />
            </div>

            <button className="bg-accent hover:bg-accent/90 text-white p-4 md:p-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
              <Search size={24} />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
