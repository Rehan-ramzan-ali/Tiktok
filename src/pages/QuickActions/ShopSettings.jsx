import React from 'react';
import { ChevronLeft, LayoutGrid, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const ShopSettings = () => {
  const navigate = useNavigate();

  const settingsOptions = [
    { id: 1, title: 'Basic Information', icon: <LayoutGrid size={20} />, path: '/settings/basic' },
    { id: 2, title: 'Home Banner', icon: <ImageIcon size={20} />, path: '/settings/banner' },
  ];

  return (
    <div className="max-w-xl mx-auto bg-[#F8F8F8] min-h-screen font-sans">
      {/* Header */}
      <div className="bg-black text-white p-4 flex items-center sticky top-0 z-10">
        <button onClick={() => navigate('/')} className="flex items-center text-sm">
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold">Settings</h1>
      </div>

      {/* Options List */}
      <div className="p-2 space-y-1 mt-2">
        {settingsOptions.map((option) => (
          <Link
            key={option.id}
            to={option.path}
            className="flex items-center justify-between bg-white p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-900">{option.icon}</span>
              <span className="text-[15px] font-medium text-gray-800">{option.title}</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopSettings;