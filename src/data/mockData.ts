export const mockDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    rating: 4.9,
    price: 1200,
    category: "Beach",
    aiMatch: 96,
    description: "Tropical paradise with pristine beaches and cultural wonders",
  },
  {
    id: 2,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop",
    rating: 4.8,
    price: 2500,
    category: "Mountain",
    aiMatch: 94,
    description: "Majestic mountain scenery and world-class skiing",
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop",
    rating: 5.0,
    price: 1800,
    category: "Luxury",
    aiMatch: 98,
    description: "Iconic white-washed buildings and stunning sunsets",
  },
  {
    id: 4,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop",
    rating: 4.7,
    price: 1500,
    category: "Cultural",
    aiMatch: 92,
    description: "Ancient temples, traditional gardens, and geisha districts",
  },
];

export const mockTestimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    rating: 5,
    text: "TravelAI made planning my Bali trip so easy! The recommendations were perfect.",
  },
  {
    name: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
    rating: 5,
    text: "As a solo traveler, safety was my priority - TravelAI gave me peace of mind.",
  },
  {
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
    rating: 4,
    text: "The budget planner helped me stay on track while visiting Europe.",
  },
];

export const mockBudget = {
  total: 3000,
  categories: [
    { name: "Hotels", amount: 1200, color: "#3B82F6" },
    { name: "Food", amount: 600, color: "#EC4899" },
    { name: "Transport", amount: 400, color: "#10B981" },
    { name: "Activities", amount: 500, color: "#F59E0B" },
    { name: "Shopping", amount: 200, color: "#8B5CF6" },
    { name: "Emergency", amount: 100, color: "#EF4444" },
  ],
};
