import React, { useRef } from 'react'; // useRef import karna zaroori hai
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UploadBanner = () => {
  const navigate = useNavigate();
  
  // 1. Ref define karein taake file input trigger ho sakay
  const fileInputRef = useRef(null);

  // 2. Functions define karein
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Yahan aap image preview ya upload logic add kar sakte hain
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-10 font-sans">
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          accept="image/*" 
          className="hidden" 
        />

        {/* Header Section - Width fixed to max-w-xl */}
        <div className="w-full max-w-xl mt-14 bg-black text-white px-4 py-3 flex items-center justify-between shadow-sm">
          <button onClick={goBack} className="flex items-center text-sm font-medium hover:opacity-80 transition-opacity">
            <ChevronLeft size={18} className="mr-1" />
            Go Back
          </button>
          <h1 className="text-lg font-semibold text-center flex-1 pr-10">Banner Settings</h1>
        </div>

        {/* Content Section - Width fixed to max-w-xl */}
        <div className="w-full max-w-xl mt-6 space-y-6 px-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="space-y-2">
              <label className="block font-semibold text-gray-800 text-sm">
                Store Banner {num} (1920*300)
              </label>
              
              <div 
                className="w-full h-40 bg-white rounded-md border border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm overflow-hidden"
                onClick={triggerFileInput} 
              >
                <div className="flex flex-col items-center text-gray-300">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="w-12 h-12 mb-2" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span className="text-xs pt-4 font-semibold tracking-wide">Advertisement Banner</span>
                </div>
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="pt-4 pb-8">
            <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBanner;