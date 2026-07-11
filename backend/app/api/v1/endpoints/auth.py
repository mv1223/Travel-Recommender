from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

class LoginSchema(BaseModel):
    email: str
    password: str

class RegisterSchema(BaseModel):
    email: str
    password: str
    full_name: str

@router.post("/login")
async def login(data: LoginSchema):
    # Placeholder for actual auth logic
    if data.email == "admin@travel.com" and data.password == "password":
        return {
            "access_token": "placeholder_token",
            "token_type": "bearer",
            "user": {"email": data.email, "full_name": "Admin User"}
        }
    raise HTTPException(status_code=401, detail="Invalid credentials")

@router.post("/register")
async def register(data: RegisterSchema):
    # Placeholder for actual registration logic
    return {"message": "User registered successfully", "user": {"email": data.email, "full_name": data.full_name}}
