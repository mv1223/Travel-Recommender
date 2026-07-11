from sqlalchemy import Column, Integer, String, Boolean, JSON
from app.db.base_class import Base

class User(Base):
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean(), default=True)
    is_superuser = Column(Boolean(), default=False)
    
    # User Preferences for AI Recommendation
    preferences = Column(JSON, default={}) # {budget: 'Luxury', interests: ['Beach', 'Food'], travel_style: 'Solo'}
    search_history = Column(JSON, default=[])
    saved_destinations = Column(JSON, default=[]) # List of IDs
    
    avatar_url = Column(String)
