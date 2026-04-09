import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EvaluationCenter = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-8 bg-[#F7F8FA] min-h-screen font-sans">
      {/* Black Header */}
      <div className="bg-black text-white p-4 flex items-center sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="flex items-center text-sm font-medium">
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold">
          Evaluation Center
        </h1>
      </div>

      {/* Empty State / Loading Placeholder */}
      <div className="flex flex-col items-center justify-center pt-24 px-10">
        <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-6 opacity-40">
          <FileText size={80} className="text-gray-400" />
        </div>
        
        {/* Loading Spinner and Text */}
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
          <span className="text-sm font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default EvaluationCenter;