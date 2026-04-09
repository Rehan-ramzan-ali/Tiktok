import React, { useState, useEffect } from 'react';
import { ChevronLeft, Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/Navebar';

const Order = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Categories fetch karna
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = selectedCategory === "all" 
      ? 'https://dummyjson.com/products?limit=20' 
      : `https://dummyjson.com/products/category/${selectedCategory}`;

    axios.get(url).then(res => {
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [selectedCategory]);

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto bg-[#F7F8FA] min-h-screen font-sans pb-20">
      {/* Black Header */}
     <Navbar/>

      <div className="sticky top-[2px] z-40 bg-white shadow-sm">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-6 border-b border-gray-50">
          <button 
            onClick={() => setSelectedCategory("all")}
            className={`whitespace-nowrap text-sm font-bold ${selectedCategory === "all" ? "text-rose-500 border-b-2 border-rose-500 pb-1" : "text-gray-400"}`}
          >
            Hot Selling Items
          </button>
          {categories.map(cat => (
            <button 
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`whitespace-nowrap text-sm font-bold ${selectedCategory === cat.slug ? "text-rose-500 border-b-2 border-rose-500 pb-1" : "text-gray-400"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="p-3 bg-white">
          <div className="relative flex items-center bg-[#F1F1F1] rounded-lg px-3 py-2">
            <Search className="text-gray-400 mr-2" size={16} />
            <input 
              type="text" 
              placeholder="Please enter search terms" 
              className="w-full bg-transparent text-sm outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Sorting Row */}
      
      </div>

      {/* Product List (Image UI Style) */}
      <div className="p-3 space-y-3">
        {loading ? (
          <div className="text-center py-10 text-gray-400">Loading...</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-3 shadow-sm flex gap-4 border border-gray-50">
              
              {/* Product Image */}
              <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                <img src={product.thumbnail} alt="" className="w-full h-full object-contain" />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <h2 className="text-[13px] font-semibold text-gray-800 line-clamp-2 leading-tight">
                  {product.title}
                </h2>
                
                <div className="mt-2 flex justify-between items-center">
                   <p className="text-[11px] text-gray-500">
                     Selling Price <span className="text-rose-500 font-bold ml-1">${product.price}</span>
                   </p>
                   <p className="text-[11px] text-gray-500">
                     Profit <span className="text-gray-900 font-bold ml-1">${(product.price * 0.15).toFixed(2)}</span>
                   </p>
                </div>

                <div className="flex justify-end mt-3">
                   <button className="bg-black text-white px-6 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider active:scale-95 transition-all">
                      Distribution
                   </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* No More Content */}
      <div className="text-center py-6 text-gray-400 text-[10px] uppercase tracking-widest">
        — No More —
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default Order;