import io
from PIL import Image
from fastapi import APIRouter, UploadFile, File

from service.predictor import predict_image

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):

    image_bytes = await file.read()

    image = Image.open(
        io.BytesIO(image_bytes)
    ).convert("RGB")

    prediction = predict_image(image)

    return {
        "prediction": prediction
    }