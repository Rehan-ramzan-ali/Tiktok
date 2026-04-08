import React from 'react';
import { ChevronLeft, ChevronRight, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Recharge = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Home page par wapis jane ke liye
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-white shadow-sm border border-gray-100 font-sans min-h-[80vh]">
      {/* Black Header Bar */}
      <div className="bg-black text-white  flex items-center relative h-11">
        <button 
          onClick={handleGoBack}
          className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors absolute left-4"
        >
          <ChevronLeft size={18} className="mr-1" />
          Go Back
        </button>
        <h1 className="w-full text-center text-sl font-bold tracking-wide">
          Recharge
        </h1>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center py-10">
        <img 
          src="/yan-CVtHdt_Q.png" // Apni image ka path yahan dein
          alt="Recharge Illustration" 
          className="w-72 h-90 "
        />
      </div>

      {/* Recharge Methods Section */}
      <div className="px-6 pb-10">
        <h3 className="text-gray-900 font-bold text-lg mb-4">Recharge Method</h3>
        
        <div className="space-y-4">
          {/* USDT Option */}
          <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <img src="/usdt-BcR5vjQE.png" alt="" className='w-7' />
              <span className="font-semibold text-gray-800">USDT</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>

          {/* Bank Recharge Option */}
          <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-all">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full">
                <Headphones size={15} className="text-gray-600" />
              </div>
              <span className="font-semibold text-gray-800">Bank Recharge</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;