// import React, { useState } from "react";
// import axios from "axios";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// function App() {
//   const [image, setImage] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 1 });
//   const [cropData, setCropData] = useState(null);
//   const [croppedImage, setCroppedImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleCropComplete = (crop) => {
//     if (!crop.width || !crop.height) return;
//     setCropData({
//       x: crop.x,
//       y: crop.y,
//       width: crop.width,
//       height: crop.height,
//     });
//   };

//   const cropAndUpload = async () => {
//     if (!cropData) return alert("Select a crop area first!");
//     const fileInput = document.querySelector("input[type=file]");
//     if (!fileInput.files[0]) return alert("No image selected!");

//     const formData = new FormData();
//     formData.append("image", fileInput.files[0]);
//     formData.append("x", Math.round(cropData.x));
//     formData.append("y", Math.round(cropData.y));
//     formData.append("width", Math.round(cropData.width));
//     formData.append("height", Math.round(cropData.height));

//     try {
//       const response = await axios.post("http://localhost:5000/crop", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         responseType: "blob",
//       });

//       const croppedImageUrl = URL.createObjectURL(response.data);
//       setCroppedImage(croppedImageUrl);
//     } catch (error) {
//       console.error("Error cropping image:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 py-10">
//       <h1 className="text-4xl font-bold text-white mb-8 shadow-lg">Image Cropper</h1>

//       <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 flex flex-col items-center border border-gray-200">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mb-4 border border-gray-300 rounded p-2 w-full text-gray-700 bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
//         />

//         {image && (
//           <div className="border rounded-lg overflow-hidden mb-4">
//             <ReactCrop
//               crop={crop}
//               onChange={(newCrop) => setCrop(newCrop)}
//               onComplete={handleCropComplete}
//               className="rounded-lg"
//             >
//               <img src={image} alt="Crop preview" className="w-full rounded-lg" />
//             </ReactCrop>
//           </div>
//         )}

//         <button
//           onClick={cropAndUpload}
//           className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-6 rounded-full hover:scale-105 transition-transform shadow-md"
//         >
//           ✂️ Crop Image
//         </button>
//       </div>

//       {croppedImage && (
//         <div className="mt-6 bg-white p-6 rounded-2xl shadow-2xl w-96 text-center border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-800">Cropped Image</h3>
//           <img src={croppedImage} alt="Cropped" className="mt-4 rounded-lg shadow-md" />
//           <a href={croppedImage} download="cropped-image.png">
//             <button className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full hover:scale-105 transition-transform shadow-md">
//               📥 Download
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import axios from "axios";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
// import './style.css';
// function App() {
//   const [image, setImage] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 1 });
//   const [cropData, setCropData] = useState(null);
//   const [croppedImage, setCroppedImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleCropComplete = (crop) => {
//     if (!crop.width || !crop.height) return;
//     setCropData({
//       x: crop.x,
//       y: crop.y,
//       width: crop.width,
//       height: crop.height,
//     });
//   };

//   const cropAndUpload = async () => {
//     if (!cropData) return alert("Select a crop area first!");
//     const fileInput = document.querySelector("input[type=file]");
//     if (!fileInput.files[0]) return alert("No image selected!");

//     const formData = new FormData();
//     formData.append("image", fileInput.files[0]);
//     formData.append("x", Math.round(cropData.x));
//     formData.append("y", Math.round(cropData.y));
//     formData.append("width", Math.round(cropData.width));
//     formData.append("height", Math.round(cropData.height));

//     try {
//       const response = await axios.post("http://localhost:5000/crop", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         responseType: "blob",
//       });

//       const croppedImageUrl = URL.createObjectURL(response.data);
//       setCroppedImage(croppedImageUrl);
//     } catch (error) {
//       console.error("Error cropping image:", error);
//     }
//   };

//   return (
//     <div className="body">
//       <div className="container">
//         <header className="header">
//           <h1>Image Cropper Pro</h1>
//           <div className="decorations">
//             <div className="decoration decoration-1"></div>
//             <div className="decoration decoration-2"></div>
//             <div className="decoration decoration-3"></div>
//           </div>
//         </header>

//         <div className="card">
//           <div className="upload-area group" onClick={handleFileChange}>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="upload-input"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="upload-icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//               />
//             </svg>
//             <p className="upload-text">Drag a file or click to upload</p>
//           </div>

//           {image && (
//             <div className="crop-container">
//               <div className="crop-area">
//                 <ReactCrop
//                   crop={crop}
//                   onChange={(newCrop) => setCrop(newCrop)}
//                   onComplete={handleCropComplete}
//                   className="crop-wrapper"
//                 >
//                   <img
//                     src={image}
//                     alt="Crop preview"
//                     className="crop-image"
//                   />
//                 </ReactCrop>
//                 <div className="crop-overlay"></div>
//               </div>

//               <button
//                 onClick={cropAndUpload}
//                 className="crop-button"
//               >
//                 <span>✂️</span>
//                 <span>Crop Image Now</span>
//               </button>
//             </div>
//           )}

//           {croppedImage && (
//             <div className="result-card">
//               <div className="result-header">
//                 <h3 className="result-title">Your Cropped Image</h3>
//                 <span className="ready-badge">Ready!</span>
//               </div>
//               <img
//                 src={croppedImage}
//                 alt="Cropped"
//                 className="result-image"
//               />
//               <a href={croppedImage} download="cropped-image.png">
//                 <button className="download-button">
//                   <span>📥</span>
//                   <span>Download Cropped Image</span>
//                 </button>
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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
  const [imageRef, setImageRef] = useState(null);

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
    }
  };

  const getCroppedImg = async (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        const fileUrl = URL.createObjectURL(blob);
        setCroppedImage(fileUrl);

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cropped-image.png';
        link.click();

        if (compressImage) {
          compressBlob(blob);
        }

        resolve();
      }, 'image/png');
    });
  };

  const cropImageNow = async () => {
    if (imageRef && completedCrop?.width && completedCrop?.height) {
      await getCroppedImg(imageRef, completedCrop);
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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #141E30, #243B55)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      <div style={{ background: '#ffffff10', backdropFilter: 'blur(12px)', padding: '30px', borderRadius: '20px', maxWidth: '600px', width: '100%', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', color: '#fff' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>📁 Crop & Compress Image</h1>

        <input type="file" accept="image/*" onChange={handleFileChange} style={{ width: '100%', padding: '12px', borderRadius: '10px', marginBottom: '10px' }} />

        <label style={{ display: 'block', marginBottom: '20px', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={compressImage} onChange={(e) => setCompressImage(e.target.checked)} style={{ marginRight: '8px' }} />
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
                ref={(el) => setImageRef(el)}
              />
            </ReactCrop>
            <button onClick={cropImageNow} style={{ padding: '10px 20px', background: '#00ffc8', color: '#000', border: 'none', borderRadius: '20px', marginTop: '15px', cursor: 'pointer', width: '100%' }}>
              ✂️ Crop Image
            </button>
          </>
        )}

        {croppedImage && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ marginBottom: '10px' }}>Cropped Image:</p>
            <img src={croppedImage} alt="cropped" style={{ width: '100%', borderRadius: '12px', marginBottom: '10px' }} />
          </div>
        )}

        {message && (
          <p style={{ marginTop: '20px', color: message.includes("❌") ? '#ff4d4d' : '#00ffc8', fontWeight: 'bold', textAlign: 'center' }}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default App;