import React from 'react';
import { ChevronRight, Box, BarChart3, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import DistributionCenter from './DistributionCenter';
import Navbar from '../component/Navebar';

const Product = () => {
  const navigate = useNavigate();

  // Statistics Data
  const stats = [
    { label: "Product Quantity", value: "2295", path: "/distribution" },
    { label: "Evaluation", value: "0", path: "/comment" },
  ];

  // List Item Data
  const listItems = [
    { id: 1, title: "Distribution Center", icon: <Box size={20} />, path: "/distribution" },
    { id: 2, title: "Product Management", icon: <BarChart3 size={20} />, path: "/goods" },
  ];

  return (
    <div className="max-w-xl mx-auto font-sans mt-4">
      {/* Black Header Card */}
      <div className="bg-black text-white p-3 rounded-xl shadow-lg relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Brand Icon Fallback */}
          <div className="w-10 h-10  rounded-full flex items-center justify-center ">
             <img src="/56b52373e8359af4cb42c172b52060c2.jpg" alt="" />
          </div>

          <div>
            <div className="flex items-center ">
              <h1 className="text-[17px] font-bold">Grabify</h1>
              {/* Product Management Badge */}
              <span className="bg-orange-400 text-white text-[8px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                Product Management
              </span>
            </div>
            <p className="text-gray-400 text-[10px] mb-1">Cross E-commerce</p>
          </div>
        </div>
        
        {/* Settings Icon (Top Right) */}
        <Link to="/settings" className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <Settings size={18} />
        </Link>
      </div>

      {/* Statistics Section (White Box with Stats) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-[-10px] relative z-0">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-px bg-gray-100 p-px">
          {stats.map((stat, index) => (
            <Link key={index} to={stat.path} className="bg-white py-5 text-center flex flex-col items-center justify-center hover:bg-gray-50 group">
              <span className="text-sl font-bold text-black">{stat.value}</span>
              <div className="flex items-center gap-1 text-gray-400 text-[9px] font-medium mt-1">
                {stat.label}
                <ChevronRight size={12} className="group-hover:text-rose-500 transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* Product Category List Section */}
        <div className="p-4 border-t border-gray-100">
          <h3 className="text-gray-900 font-bold  text-[13px]">Product Category</h3>
          
          {/* List Items (Distribution Center, etc.) */}
          <div className="flex flex-col">
            {listItems.map((item) => (
              <Link 
                key={item.id}
                to={item.path}
                className="flex items-center justify-between pt-4 hover:bg-gray-50 rounded-lg transition-all border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-gray-900 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 text-[13px] font-medium">{item.title}</span>
                </div>
                <ChevronRight size={18} className="text-gray-700 group-hover:text-gray-900" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <DistributionCenter/>
      <Navbar />
    </div>
  );
};

export default Product;