import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductManagement = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/products?limit=30')
      .then(res => {
        setAllProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter Logic for Tabs
  const getFilteredProducts = () => {
    if (activeTab === "Selling") {
      // Selling mein wo products jo stock mein hain aur rating achi hai
      return allProducts.filter(p => p.stock > 50); 
    }
    if (activeTab === "In Stock") {
      // In Stock mein wo jin ka stock kam hai ya specific range mein hai
      return allProducts.filter(p => p.stock > 0);
    }
    return allProducts;
  };

  // Off Shelf (Remove product from UI)
  const handleOffShelf = (id) => {
    const updated = allProducts.filter(p => p.id !== id);
    setAllProducts(updated);
  };

  const displayProducts = getFilteredProducts();

  return (
    <div className="max-w-xl mx-auto mt-8 bg-[#F7F8FA] min-h-screen font-sans">
      {/* Header */}
      <div className="bg-black text-white p-3 flex items-center sticky top-0 z-50">
        <button onClick={() => navigate('/product')} className="flex items-center text-sm font-medium">
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold">Product Management</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-[52px] z-40">
        <div className="flex justify-around items-center h-12">
          {["All", "Selling", "In Stock"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold w-full h-full relative transition-colors ${
                activeTab === tab ? "text-black" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-rose-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="p-3 space-y-3">
        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading Inventory...</div>
        ) : displayProducts.length > 0 ? (
          displayProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-3 shadow-sm flex gap-4 border-l-4 border-l-transparent hover:cursor-grab">
              
              <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden relative">
                <img src={product.thumbnail} alt="" className="w-full h-full object-contain" />
                {/* Stock Tag for 'In Stock' tab */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-[9px] text-white text-center py-0.5">
                  Stock: {product.stock}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between py-1">
                <h2 className="text-[13px] font-semibold text-gray-800 line-clamp-2 leading-tight">
                  {product.title}
                </h2>
                
                <div className="mt-2">
                   <div className="flex justify-between items-center">
                      <p className="text-[11px] text-gray-500">
                        Price <span className="text-black font-bold ml-1">${product.price}</span>
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Profit <span className="text-[#00BFA5] font-bold ml-1">${(product.price * 0.15).toFixed(2)}</span>
                      </p>
                   </div>
                </div>

                <div className="flex justify-between items-center mt-3">
                   <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">
                     ID: {product.id}
                   </span>
                   <button 
                    onClick={() => handleOffShelf(product.id)}
                    className="bg-black text-white px-5 py-1.5 rounded-md text-[11px] font-bold hover:cursor-grabbing bg-rose-600 transition-colors"
                   >
                      Off Shelf
                   </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-400">No products in this category</div>
        )}
      </div>

      <div className="text-center py-6 text-gray-400 text-[10px] uppercase tracking-[0.2em]">
        — No More —
      </div>
    </div>
  );
};

export default ProductManagement;