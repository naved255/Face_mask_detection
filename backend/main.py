from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.predict import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://face-mask-detection-chi.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)