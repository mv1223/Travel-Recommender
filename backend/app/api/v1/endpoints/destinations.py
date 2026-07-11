from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional
import json
import os

router = APIRouter()

# Load destinations once
DATA_PATH = "backend/data/destinations.json"
destinations_data = []
if os.path.exists(DATA_PATH):
    with open(DATA_PATH, 'r') as f:
        destinations_data = json.load(f)

@router.get("/", response_model=List[dict])
async def get_destinations(
    search: Optional[str] = None,
    category: Optional[str] = None,
    budget: Optional[str] = None,
    skip: int = 0,
    limit: int = 20
):
    results = destinations_data
    
    if search:
        results = [d for d in results if search.lower() in d['name'].lower() or search.lower() in d['city'].lower()]
    
    if category:
        results = [d for d in results if d['category'] == category]
        
    if budget:
        results = [d for d in results if d['budget_level'] == budget]
        
    return results[skip : skip + limit]

@router.get("/trending", response_model=List[dict])
async def get_trending():
    return [d for d in destinations_data if d.get('is_trending')][:10]

@router.get("/{destination_id}", response_model=dict)
async def get_destination(destination_id: int):
    for d in destinations_data:
        if d['id'] == destination_id:
            return d
    raise HTTPException(status_code=404, detail="Destination not found")
