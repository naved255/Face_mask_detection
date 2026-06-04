import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  // Submit image
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  // Clear selection
  const handleClear = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

        <h2 className="text-2xl font-bold mb-4">Image Prediction</h2>

        {/* Upload Area */}
        <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-blue-400 transition">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-gray-500">
            Click or drag image here to upload
          </p>
        </label>

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg shadow"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-4 justify-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            {loading ? "Processing..." : "Submit"}
          </button>

          <button
            onClick={handleClear}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg transition"
          >
            Clear
          </button>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="mt-4 text-lg font-semibold text-green-600">
            Prediction: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;