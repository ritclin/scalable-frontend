import React, { useState } from 'react';
import axios from 'axios';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const App = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [fileExt, setFileExt] = useState('');
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [compressImage, setCompressImage] = useState(false);
  const [message, setMessage] = useState('');

  const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const ext = `.${selectedFile.name.split(".").pop().toLowerCase()}`;
    setFile(selectedFile);
    setFileExt(ext);
    setMessage("");

    if (supportedExtensions.includes(ext)) {
      setImage(URL.createObjectURL(selectedFile));
    } else {
      setImage(null);
      alert("Unsupported file type");
    }
  };

  const getCroppedImg = async () => {
    if (!file || !completedCrop) {
      alert("Missing file or crop selection");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("x", completedCrop.x);
    formData.append("y", completedCrop.y);
    formData.append("width", completedCrop.width);
    formData.append("height", completedCrop.height);

    try {
      const response = await axios.post("http://nodejs-alb-827956790.eu-west-1.elb.amazonaws.com/crop", formData, {
        responseType: "blob",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const croppedBlob = response.data;
      const croppedUrl = URL.createObjectURL(croppedBlob);
      setCroppedImage(croppedUrl);

      const link = document.createElement("a");
      link.href = croppedUrl;
      link.download = "cropped-image.png";
      link.click();

      if (compressImage) {
        compressBlob(croppedBlob);
      }

      setMessage("✅ Image cropped successfully.");
    } catch (err) {
      console.error("Cropping failed:", err);
      setMessage("❌ Cropping failed.");
    }
  };

  const cropImageNow = async () => {
    if (completedCrop?.width && completedCrop?.height) {
      await getCroppedImg();
    } else {
      alert("Please select a crop area first.");
    }
  };

  const compressBlob = async (blob) => {
    setMessage("Compressing cropped image...");
    const formData = new FormData();
    formData.append("file", blob, "cropped-image.png");

    try {
      const response = await axios.post("http://34.249.233.139:5000/compress", formData, {
        responseType: "blob",
        headers: { "Content-Type": "multipart/form-data" },
      });

      const fileName = `compressed-cropped-image.png`;
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setMessage("✅ Cropped image compressed and downloaded.");
    } catch (err) {
      console.error("Compression error:", err);
      setMessage("❌ Compression failed.");
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #141E30, #243B55)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    }}>
      <div style={{
        background: '#ffffff10',
        backdropFilter: 'blur(12px)',
        padding: '30px',
        borderRadius: '20px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        color: '#fff'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>
          📁 Crop & Compress Image
        </h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            marginBottom: '10px'
          }}
        />

        <label style={{
          display: 'block',
          marginBottom: '20px',
          fontSize: '0.9rem'
        }}>
          <input
            type="checkbox"
            checked={compressImage}
            onChange={(e) => setCompressImage(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          Compress Image After Crop
        </label>

        {image && (
          <>
            <ReactCrop
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <img
                src={image}
                alt="preview"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </ReactCrop>
            <button
              onClick={cropImageNow}
              style={{
                padding: '10px 20px',
                background: '#00ffc8',
                color: '#000',
                border: 'none',
                borderRadius: '20px',
                marginTop: '15px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              ✂️ Crop Image
            </button>
          </>
        )}

        {croppedImage && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ marginBottom: '10px' }}>Cropped Image:</p>
            <img
              src={croppedImage}
              alt="cropped"
              style={{
                width: '100%',
                borderRadius: '12px',
                marginBottom: '10px'
              }}
            />
          </div>
        )}

        {message && (
          <p style={{
            marginTop: '20px',
            color: message.includes("❌") ? '#ff4d4d' : '#00ffc8',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
