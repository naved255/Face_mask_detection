import torch
import numpy as np
from PIL import Image

from models.cnn import CNN

model = CNN()

model.load_state_dict(
    torch.load(
        "models/face_mask_best.pt",
        map_location="cpu"
    )
)

model.eval()


def predict_image(image: Image.Image):

    image = image.resize((128, 128))
    image = image.convert("RGB")

    image = np.array(image) / 255.0

    image_tensor = torch.tensor(
        image,
        dtype=torch.float32
    )

    image_tensor = image_tensor.permute(2, 0, 1)
    image_tensor = image_tensor.unsqueeze(0)

    with torch.no_grad():

        output = model(image_tensor)

        prob = torch.sigmoid(output)

        pred = (prob > 0.5).float()

    return int(pred.item())