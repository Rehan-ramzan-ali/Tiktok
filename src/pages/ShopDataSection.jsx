import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Animation ke liye import

const ShopDataSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainStats = [
    { label: "Today's Orders Sold", value: "1" },
    { label: "Today's Total Sales", value: "0.00" },
    { label: "Today's profit forecast", value: "0.00" },
  ];

  const gridStats = [
    { label: "Visitors Today", value: "1436" },
    { label: "Last 7 Days", value: "12643" },
    { label: "Last 30 Days", value: "53919" },
    { label: "Shop Followers", value: "109" },
    { label: "Rating Rate", value: "100.00" },
    { label: "Credit Score", value: "66" },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded-xl shadow-sm border border-gray-100 mt-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900 text-sl">Shop Data</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-gray-400 text-sm hover:text-gray-600 transition-colors focus:outline-none"
        >
          {isExpanded ? 'Collapse Details' : 'Expand Details'} 
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} className="ml-1" />
          </motion.div>
        </button>
      </div>

      {/* Smooth Expanding Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden" // Ye bohot zaroori hai smoothness ke liye
          >
            <div className="flex gap-12 mb-3 p-2 border-b border-gray-50 pb-4">
              <div>
                <div className="text-xl font-bold text-gray-900 flex items-baseline gap-1">
                  <span className="text-xl">$</span> 484639.08
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-[10px] mt-1">
                  <ShoppingCart size={12} className="border border-gray-300 rounded-full p-0.5" />
                  Total Sales
                </div>
              </div>

              <div>
                <div className="text-xl font-bold text-gray-900 flex items-baseline gap-1">
                  <span className="text-xl">$</span> 73195.30
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-[10px] mt-1">
                  <DollarSign size={12} className="border border-gray-300 rounded-full p-0.5" />
                  Total Profit
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static Stats (Jo hamesha dikhte hain) */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {mainStats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-1 rounded-md bg-black text-white">
            <span className="text-[11px]  mb-1">{item.label}</span>
            <span className="text-sl font-bold">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {gridStats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center py-3 rounded-md bg-gray-50 border border-gray-50">
            <span className="text-[13px] font-bold text-black">{item.value}</span>
            <span className="text-[10px] text-gray-500 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDataSection;