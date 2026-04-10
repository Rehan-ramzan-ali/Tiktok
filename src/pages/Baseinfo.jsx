import React, { useState, useRef } from 'react'; // Hooks import karein
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Agar navigation chahiye

const Baseinfo = () => {
  const navigate = useNavigate();
  
  // 1. States aur Refs define karein
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // 2. Functions define karein
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const removeImage = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  const goBack = () => navigate(-1); // Pichle page par jane ke liye

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-10 font-sans">
        {/* Input field ab error nahi degi */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          accept="image/*" 
          className="hidden" 
        />

        <div className="w-full max-w-xl mt-14 bg-black text-white px-4 py-3 flex items-center justify-between shadow-sm">
          <button onClick={goBack} className="flex items-center text-sm font-medium hover:opacity-80 transition-opacity">
            <ChevronLeft size={18} className="mr-1" />
            Go Back
          </button>
          <h1 className="text-lg font-semibold text-center flex-1 pr-10">Basic Information</h1>
        </div>

        <div className="w-full max-w-xl mt-6 space-y-4 px-4">
          <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden text-sm">
            <div className="flex items-center p-5 border-b border-gray-50">
              <span className="w-1/4 font-semibold text-gray-800">Shop Logo:</span>
              <div className="relative">
                <div 
                  onClick={!selectedImage ? triggerFileInput : undefined} 
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
                >
                  {selectedImage ? (
                    <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-black">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  )}
                </div>
                {selectedImage && (
                  <button 
                    onClick={removeImage} 
                    className="absolute -top-1 -right-1 bg-gray-500 text-white rounded-full p-1 border border-white hover:bg-red-500 shadow-md transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3" strokeWidth="4">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center p-5 border-b border-gray-50">
              <span className="w-1/4 font-semibold text-gray-800">Shop Name:</span>
              <input type="text" placeholder="Enter shop name" className="w-3/4 outline-none text-gray-600 placeholder-gray-300 font-medium" />
            </div>
            <div className="flex items-center p-5 border-b border-gray-50">
              <span className="w-1/4 font-semibold text-gray-800">Shop Phone:</span>
              <input type="tel" placeholder="Enter phone number" className="w-3/4 outline-none text-gray-600 placeholder-gray-300 font-medium" />
            </div>
            <div className="flex items-start p-5">
              <span className="w-1/4 font-semibold text-gray-800 pt-1">Shop Address:</span>
              <textarea placeholder="Enter shop address" className="w-3/4 outline-none text-gray-600 placeholder-gray-300 bg-transparent resize-none h-16 font-medium" />
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm border border-gray-100 p-5 text-sm">
            <label className="block font-semibold text-gray-800 mb-3">Shop Introduction</label>
            <input type="text" placeholder="Please enter shop introduction" className="w-full outline-none text-gray-600 placeholder-gray-300 font-medium" />
          </div>

          <div className="bg-white rounded-md shadow-sm border border-gray-100 p-5 text-sm flex items-start">
            <span className="w-1/4 font-semibold text-gray-800">Welcome Message:</span>
            <textarea placeholder="Please enter welcome message" className="w-3/4 outline-none text-gray-600 placeholder-gray-300 bg-transparent resize-none h-16 font-medium" />
          </div>

          <div className="pt-6">
            <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baseinfo;