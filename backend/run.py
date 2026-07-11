import uvicorn
import os

if __name__ == "__main__":
    # Ensure directories exist
    os.makedirs("backend/data", exist_ok=True)
    
    # Run FastAPI server
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
