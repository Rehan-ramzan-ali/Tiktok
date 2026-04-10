import React, { useState, useEffect } from 'react';
import { ChevronLeft, Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DistributionCenter = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  // Product par click karne ka function
  const handleProductClick = (product) => {
    // Hum product ka pura object 'state' mein bhej rahe hain
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto bg-[#F7F8FA] min-h-screen font-sans pb-20">
      {/* Header Section as per image_9dad83.png */}


      <h1 className='text-[15px] font-bold p-3'>Best Selling Products <span className="text-[10px] bg-black text-white px-1.5 py-0.5 rounded ml-1">TOP10</span></h1>

      <div className="p-3 space-y-3">
        {loading ? (
          <div className="text-center py-10 text-gray-400">Loading...</div>
        ) : (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => handleProductClick(product)} // Click event added
              className="bg-white rounded-lg p-3 shadow-sm flex gap-4 border border-gray-50 cursor-pointer active:scale-[0.98] transition-transform"
            >
              {/* Product Image */}
              <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-md overflow-hidden">
                <img src={product.thumbnail} alt="" className="w-full h-full object-contain" />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <h2 className="text-[13px] font-semibold text-gray-800 line-clamp-2 leading-tight">
                  {product.title}
                </h2>
                
                <div className="mt-2 flex justify-between items-center text-[11px] text-gray-500 font-medium">
                   <span>Click: <span className="text-gray-900">{Math.floor(Math.random() * 100)}</span></span>
                   <span>Sales: <span className="text-gray-900">{product.stock}</span></span>
                </div>

                <div className="mt-2 flex justify-between items-center">
                   <p className="text-[11px] text-gray-500 font-bold">
                     Price: <span className="text-gray-900 ml-1">${product.price}</span>
                   </p>
                
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center py-6 text-gray-400 text-[10px] uppercase tracking-widest">
        — No More —
      </div>
    </div>
  );
};

export default DistributionCenter;