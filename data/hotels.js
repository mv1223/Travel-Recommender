const HOTELS = [
    {
        id: 1,
        name: "The Ritz-Carlton",
        city: "Male",
        price: 1200,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        amenities: ["Spa", "Pool", "Private Beach", "WiFi"],
        category: "Luxury"
    },
    {
        id: 2,
        name: "Matterhorn Lodge",
        city: "Zermatt",
        price: 450,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop",
        amenities: ["Ski-in/Ski-out", "Sauna", "Restaurant"],
        category: "Boutique"
    }
];

// Generate 500+ hotels
for(let i=3; i<=503; i++) {
    const cities = ["Paris", "London", "New York", "Tokyo", "Dubai", "Rome", "Barcelona", "Sydney", "Cape Town", "Istanbul", "Bangkok", "Goa", "Mumbai", "Jaipur", "Florence", "Venice", "Prague", "Amsterdam", "Rio", "Cairo"];
    const categories = ["Luxury", "Boutique", "Budget", "Resort"];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    HOTELS.push({
        id: i,
        name: `${city} ${category} Hotel`,
        city: city,
        price: category === "Luxury" ? Math.floor(Math.random() * 1000 + 500) : Math.floor(Math.random() * 400 + 100),
        rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
        image: `https://images.unsplash.com/featured/?hotel,${city.toLowerCase()}`,
        amenities: ["WiFi", "Pool", "Breakfast"],
        category: category
    });
}
