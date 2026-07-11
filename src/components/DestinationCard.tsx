"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

interface DestinationCardProps {
  name: string;
  city: string;
  image: string;
  rating: number;
  price: string;
  category: string;
}

const DestinationCard = ({ name, city, image, rating, price, category }: DestinationCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors">
          <Heart size={20} className="text-gray-700" />
        </button>
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-gray-500 text-sm font-medium">{city}</p>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-yellow-700">{rating}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500 text-sm font-medium"> / person</span>
          </div>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-primary transition-all text-sm font-bold">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
