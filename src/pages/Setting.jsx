import React, { useState, useRef } from 'react';
import { ChevronLeft, LayoutGrid, Image as ImageIcon } from 'lucide-react';

const Settings = () => {





 

  // --- VIEW 1: Main Settings Menu ---
    return (
      <div className="min-h-screen  bg-gray-100 flex flex-col items-center font-sans">
        {/* Width increased to 750px for a more spacious look */}
        <div className="w-full max-w-xl mt-14 bg-black text-white px-4 py-3 flex items-center justify-between shadow-sm">
       <a href="/product">   <button className="flex items-center text-sm font-medium hover:opacity-80 transition-opacity">
            <ChevronLeft size={16} className="mr-1" />
            Go Back
          </button></a>
          <h1 className="text-lg  font-semibold text-center flex-1">Settings</h1>
          <div className="w-16"></div>
        </div>

        <div className="w-full max-w-xl mt-4 ">
        <a href="/baseinfo">  <button 
            className="w-full flex items-center p-3 bg-white border border-gray-100 shadow-sm rounded-md hover:bg-gray-50 transition-colors"
          >
            <LayoutGrid className="text-black mr-4" size={18} />
            <span className="text-gray-800 font-semibold text-[12px]">Basic Information</span>
          </button></a>

        <a href="/uploadBanner">  <button 
            className="w-full flex mt-5 items-center p-3 bg-white border border-gray-100 shadow-sm rounded-md hover:bg-gray-50 transition-colors"
          >
            <ImageIcon className="text-black mr-4" size={18} />
            <span className="text-gray-800 font-semibold text-[12px]">Home Banner</span>
          </button></a>
        </div>
      </div>
    );
  }

  // --- VIEW 2: Basic Information ---


 // --- VIEW 3: Home Banner ---
// --- VIEW 3: Home Banner ---

      
      



;

export default Settings;