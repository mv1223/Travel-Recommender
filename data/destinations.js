const DESTINATIONS = [
    {
        id: 1,
        name: "Maldives Luxury Escape",
        city: "Male",
        country: "Maldives",
        category: "Beach",
        budget: "Luxury",
        rating: 4.9,
        reviews: 2450,
        price: 1500,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000&auto=format&fit=crop",
        description: "Experience overwater villas and crystal clear lagoons in the heart of the Indian Ocean.",
        weather: "Sunny",
        bestSeason: "Nov - Apr",
        tags: ["Romantic", "Relaxation", "Water Sports"],
        itinerary: [
            { day: 1, title: "Arrival & Sunset Cruise" },
            { day: 2, title: "Snorkeling with Turtles" },
            { day: 3, title: "Private Island Lunch" }
        ],
        isTrending: true,
        isFeatured: true
    },
    {
        id: 2,
        name: "Swiss Alps Adventure",
        city: "Zermatt",
        country: "Switzerland",
        category: "Mountain",
        budget: "Luxury",
        rating: 4.8,
        reviews: 1890,
        price: 2200,
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop",
        description: "Iconic Matterhorn views and world-class skiing in a car-free alpine village.",
        weather: "Cold",
        bestSeason: "Dec - Mar",
        tags: ["Skiing", "Adventure", "Luxury"],
        itinerary: [
            { day: 1, title: "Gornergrat Railway Trip" },
            { day: 2, title: "Skiing Lesson" },
            { day: 3, title: "Village Exploration" }
        ],
        isTrending: true,
        isFeatured: false
    },
    {
        id: 3,
        name: "Kyoto Zen Gardens",
        city: "Kyoto",
        country: "Japan",
        category: "Historical",
        budget: "Mid-range",
        rating: 4.7,
        reviews: 3200,
        price: 1200,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
        description: "Immerse yourself in traditional Japanese culture, temples, and stunning gardens.",
        weather: "Moderate",
        bestSeason: "Mar - May",
        tags: ["Culture", "Spiritual", "Food"],
        itinerary: [
            { day: 1, title: "Arashiyama Bamboo Grove" },
            { day: 2, title: "Golden Pavilion Visit" },
            { day: 3, title: "Tea Ceremony Experience" }
        ],
        isTrending: false,
        isFeatured: true
    },
    {
        id: 4,
        name: "Bali Jungle Retreat",
        city: "Ubud",
        country: "Indonesia",
        category: "Adventure",
        budget: "Budget",
        rating: 4.6,
        reviews: 4500,
        price: 600,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
        description: "Explore lush rice terraces and vibrant arts culture in the heart of Bali.",
        weather: "Tropical",
        bestSeason: "Apr - Oct",
        tags: ["Nature", "Yoga", "Affordable"],
        itinerary: [
            { day: 1, title: "Sacred Monkey Forest" },
            { day: 2, title: "Rice Terrace Hike" },
            { day: 3, title: "Waterfall Tour" }
        ],
        isTrending: true,
        isFeatured: false
    }
    // I will generate more programmatically later in the JS file itself
];

// Helper to generate 1000+ destinations for realism
const generateMore = () => {
    const categories = ["Beach", "Mountain", "Adventure", "Spiritual", "Historical", "Luxury", "Food", "Shopping", "Nature"];
    const cities = ["Paris", "London", "New York", "Tokyo", "Dubai", "Rome", "Barcelona", "Sydney", "Cape Town", "Istanbul", "Bangkok", "Goa", "Mumbai", "Jaipur", "Florence", "Venice", "Prague", "Amsterdam", "Rio", "Cairo"];
    const budgets = ["Budget", "Mid-range", "Luxury"];
    const weathers = ["Sunny", "Cold", "Moderate", "Rainy", "Tropical"];

    for (let i = 5; i <= 1005; i++) {
        const city = cities[Math.floor(Math.random() * cities.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const budget = budgets[Math.floor(Math.random() * budgets.length)];
        const weather = weathers[Math.floor(Math.random() * weathers.length)];
        
        DESTINATIONS.push({
            id: i,
            name: `${city} ${category} Exploration`,
            city: city,
            country: "Global",
            category: category,
            budget: budget,
            rating: (Math.random() * (5 - 4) + 4).toFixed(1),
            reviews: Math.floor(Math.random() * 5000),
            price: budget === "Luxury" ? Math.floor(Math.random() * 2000 + 1000) : budget === "Mid-range" ? Math.floor(Math.random() * 800 + 400) : Math.floor(Math.random() * 300 + 100),
            image: `https://images.unsplash.com/featured/?${city.toLowerCase()},${category.toLowerCase()}`,
            description: `A stunning ${category.toLowerCase()} journey in the beautiful city of ${city}. Perfect for travelers looking for a ${budget.toLowerCase()} experience.`,
            weather: weather,
            bestSeason: "Year-round",
            tags: [category, budget, city],
            itinerary: [
                { day: 1, title: "City Arrival" },
                { day: 2, title: "Main Attraction" },
                { day: 3, title: "Local Food Tour" }
            ],
            isTrending: Math.random() > 0.8,
            isFeatured: Math.random() > 0.9
        });
    }
};

generateMore();
