import json
import random

cities = [
    "Paris", "London", "New York", "Tokyo", "Dubai", "Bali", "Rome", "Barcelona", "Maldives", "Sydney",
    "Cape Town", "Santorini", "Kyoto", "Prague", "Amsterdam", "Venice", "Rio de Janeiro", "Istanbul", "Bangkok", "Florence",
    "Goa", "Mumbai", "Delhi", "Jaipur", "Udaipur", "Manali", "Leh", "Shimla", "Kochi", "Munnar",
    "Swiss Alps", "Banff", "Aspen", "Zermatt", "Courchevel", "Whistler", "Niseko", "Chamonix", "St. Moritz", "Cortina d'Ampezzo",
    "Ibiza", "Mykonos", "Bora Bora", "Maui", "Phuket", "Amalfi Coast", "Fiji", "Seychelles", "Cancun", "Mauritius"
]

countries = {
    "Paris": "France", "London": "UK", "New York": "USA", "Tokyo": "Japan", "Dubai": "UAE",
    "Bali": "Indonesia", "Rome": "Italy", "Barcelona": "Spain", "Maldives": "Maldives", "Sydney": "Australia",
    "Cape Town": "South Africa", "Santorini": "Greece", "Kyoto": "Japan", "Prague": "Czech Republic", "Amsterdam": "Netherlands",
    "Venice": "Italy", "Rio de Janeiro": "Brazil", "Istanbul": "Turkey", "Bangkok": "Thailand", "Florence": "Italy",
    "Goa": "India", "Mumbai": "India", "Delhi": "India", "Jaipur": "India", "Udaipur": "India", "Manali": "India",
    "Leh": "India", "Shimla": "India", "Kochi": "India", "Munnar": "India"
}

categories = ["Beach", "Mountain", "Adventure", "Spiritual", "Historical", "Luxury", "Food", "Shopping", "Nature"]
budget_levels = ["Budget", "Mid-range", "Luxury"]
weather_types = ["Sunny", "Cold", "Moderate", "Rainy", "Tropical"]
travel_types = ["Solo", "Couple", "Family", "Friends"]

def generate_destinations(count=1000):
    destinations = []
    for i in range(1, count + 1):
        city = random.choice(cities)
        country = countries.get(city, "Global")
        category = random.choice(categories)
        budget = random.choice(budget_levels)
        weather = random.choice(weather_types)
        travel = random.choice(travel_types)
        
        dest = {
            "id": i,
            "name": f"{city} {category} Escape",
            "city": city,
            "country": country,
            "description": f"Experience the ultimate {category.lower()} getaway in {city}. Perfect for {travel.lower()} travelers looking for a {budget.lower()} experience.",
            "image_url": f"https://source.unsplash.com/featured/?{city},{category.lower()}",
            "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "rating": round(random.uniform(4.0, 5.0), 1),
            "reviews_count": random.randint(100, 5000),
            "budget_level": budget,
            "category": category,
            "best_season": "Year-round",
            "weather_type": weather,
            "travel_type": travel,
            "highlights": [f"Beautiful {category} views", "Local cuisine tours", "Expert guided activities"],
            "activities": [f"{category} hiking", "Sightseeing", "Photography", "Cultural workshops"],
            "safety_index": round(random.uniform(7.0, 9.8), 1),
            "cost_estimate": {
                "flights": random.randint(200, 1500),
                "hotels": random.randint(50, 1000),
                "food": random.randint(20, 200),
                "activities": random.randint(50, 500)
            },
            "tags": [city, country, category, budget, weather, travel],
            "is_trending": random.choice([True, False]),
            "is_featured": random.choice([True, False])
        }
        destinations.append(dest)
    return destinations

if __name__ == "__main__":
    data = generate_destinations(1050)
    with open("backend/data/destinations.json", "w") as f:
        json.dump(data, f, indent=4)
    print(f"Generated {len(data)} destinations in backend/data/destinations.json")
