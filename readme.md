# Face Mask Detection using CNN and FastAPI

## Overview

Face Mask Detection is a Deep Learning project that classifies whether a person is wearing a face mask or not from an input image. The model is built using PyTorch and deployed as a REST API using FastAPI.

The application accepts an uploaded image, preprocesses it, performs inference using a trained Convolutional Neural Network (CNN), and returns the prediction in JSON format.

---

## Features

* Binary classification: Mask / No Mask
* Custom CNN architecture built with PyTorch
* Image preprocessing using Pillow and NumPy
* FastAPI backend for real-time predictions
* REST API endpoint for image uploads
* CORS enabled for frontend integration
* Lightweight and easy to deploy

---

## Tech Stack

### Deep Learning

* PyTorch
* NumPy

### Backend

* FastAPI
* Uvicorn

### Image Processing

* Pillow

### Development Tools

* Python
* Git & GitHub

---

## Model Architecture

The CNN consists of:

### Convolutional Layers

1. Conv2D (3 → 32) + ReLU + MaxPool
2. Conv2D (32 → 64) + ReLU + MaxPool
3. Conv2D (64 → 128) + ReLU + MaxPool

### Fully Connected Layers

1. Flatten Layer
2. Linear Layer (32768 → 256)
3. ReLU Activation
4. Output Layer (256 → 1)

### Loss Function

* BCEWithLogitsLoss

### Optimizer

* Adam Optimizer



## API Endpoint

### Predict Face Mask

**POST**

```http
POST /predict
```

### Request

Upload an image file using multipart/form-data.

### Response

```json
{
    "prediction": 1
}
```

Where:

* `1` → Mask Detected
* `0` → No Mask Detected

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd face_mask_detection
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run the Application

From the project root directory:

```bash
python -m uvicorn backend.main:app --reload
```

Server will start at:

```text
http://127.0.0.1:8000
```

Interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Image Preprocessing

Before inference, each image is:

1. Converted to RGB
2. Resized to 128 × 128 pixels
3. Normalized to [0, 1]
4. Converted into a PyTorch tensor
5. Rearranged into (C, H, W) format
6. Passed through the trained CNN model

---

## Results

The trained CNN successfully learns facial and mask-related features and performs binary classification on unseen images.

Key achievements:

* Built and trained a custom CNN architecture from scratch.
* Implemented an end-to-end inference pipeline.
* Deployed the model through a FastAPI REST API.
* Enabled real-time image-based predictions.

---

## Future Improvements

* Add confidence score in response.
* Deploy using Docker.
* Deploy on AWS, Render, or Railway.
* Support webcam-based real-time detection.
* Improve accuracy using transfer learning models such as ResNet or MobileNet.

---

## Author

Mohd Naved Ahmad

LinkedIn: https://www.linkedin.com/in/mohd-naved-ahmad-6a643231b/

GitHub: https://github.com/<your-github-username>
