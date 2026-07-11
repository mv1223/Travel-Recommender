from fastapi import APIRouter, Body
from app.services.recommendation import recommendation_service
from typing import Dict, Any

router = APIRouter()

@router.post("/")
async def get_recommendations(preferences: Dict[str, Any] = Body(...)):
    """
    Get AI-powered travel recommendations based on preferences.
    Example body: {"category": "Beach", "budget_level": "Luxury", "weather_type": "Sunny"}
    """
    recommendations = recommendation_service.get_recommendations(preferences)
    return recommendations
