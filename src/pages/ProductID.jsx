import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductID = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product; // Data yahan receive ho raha hai

  if (!product) return <div className="text-center p-10">No product data found.</div>;

  return (
    <div className="max-w-xl mx-auto bg-[#F7F8FA] min-h-screen font-sans">
      <div className="bg-black text-white p-3 flex items-center sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="flex items-center text-xs">
          <ChevronLeft size={16} className="mr-1" /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-sm font-bold">Details</h1>
      </div>

      <div className="bg-white p-4 flex gap-4 border-b border-gray-100">
        <div className="w-20 h-20 bg-gray-50 rounded flex-shrink-0 overflow-hidden">
          <img src={product.thumbnail} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <h2 className="text-[12px] font-medium text-gray-800 leading-snug mb-2">
            {product.title}
          </h2>
          <div className="flex text-[10px] text-gray-400 gap-3 font-medium">
            <span>Views: {Math.floor(Math.random() * 50)}</span>
            <span>Sales Price: $ {product.price}</span>
          </div>
          <p className="text-[#00BFA5] text-[11px] font-bold mt-4 italic">
            Profit : $ {(product.price * 0.28).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-2 bg-white">
        {[
          { label: "Views", value: Math.floor(Math.random() * 50) },
          { label: "Sales Price:", value: `$ ${product.price}` },
          { label: "Expected Profit", value: `$ ${(product.price * 0.28).toFixed(2)}`, isProfit: true },
          { label: "Stock", value: product.stock },
          { label: "Recommendation", value: "No" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center px-4 py-4 border-b border-gray-50 last:border-0">
            <span className={`text-[12px] ${item.isProfit ? 'text-[#00BFA5]' : 'text-gray-500'}`}>{item.label}</span>
            <span className={`text-[12px] font-medium ${item.isProfit ? 'text-[#00BFA5]' : 'text-gray-800'}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductID;