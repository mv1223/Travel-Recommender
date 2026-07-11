from fastapi import APIRouter
from app.api.v1.endpoints import auth, destinations, recommendations

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(destinations.router, prefix="/destinations", tags=["destinations"])
api_router.include_router(recommendations.router, prefix="/recommendations", tags=["recommendations"])
