from sqlalchemy import Column, Integer, String, Float, JSON, Text, Boolean
from app.db.base_class import Base

class Destination(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    description = Column(Text)
    country = Column(String, index=True)
    city = Column(String, index=True)
    image_url = Column(String)
    video_url = Column(String)
    rating = Column(Float, default=0.0)
    reviews_count = Column(Integer, default=0)
    
    # AI/ML features
    budget_level = Column(String)  # Luxury, Mid-range, Budget
    category = Column(String)      # Beach, Mountain, Adventure, Spiritual, etc.
    best_season = Column(String)
    weather_type = Column(String)
    travel_type = Column(String)   # Solo, Couple, Family, Friends
    
    # Detailed info
    highlights = Column(JSON)      # List of strings
    activities = Column(JSON)      # List of strings
    safety_index = Column(Float)
    cost_estimate = Column(JSON)   # Detailed budget breakdown
    itinerary_preview = Column(JSON) # AI generated preview
    
    # Tags for recommendation engine
    tags = Column(JSON)            # NLP/ML tags
    
    is_trending = Column(Boolean, default=False)
    is_featured = Column(Boolean, default=False)
