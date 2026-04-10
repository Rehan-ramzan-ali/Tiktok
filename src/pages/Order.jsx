import React, { useState, useEffect } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom'; // 1. Import zaroori hai
import axios from 'axios';
import Navbar from '../component/Navebar';

const Order = () => {
  // 2. Location ko sabse upar initialize karein
  const location = useLocation();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 3. Ab location ko yahan use karein, koi error nahi aayega
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "All orders");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    "All orders", "Waiting for Payment", "Awaiting Pickup", 
    "Waiting for Shipment", "Shipped", "Received", "Completed", "Cancelled"
  ];

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/products?limit=10')
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto bg-[#F7F8FA] min-h-screen font-sans pb-20">
      <Navbar />

      <div className="sticky top-0 z-40 bg-white">
        {/* Tabs Section */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-5 py-3 text-[13px] transition-all relative font-bold ${
                activeTab === tab ? "text-rose-500" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-rose-500 mx-4 rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="p-3 bg-white">
          <div className="relative flex items-center bg-[#F5F5F5] rounded-lg px-4 py-2">
            <Search className="text-gray-400 mr-2" size={16} />
            <input
              type="text"
              placeholder="Please enter search keywords"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="p-3">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-gray-300" size={32} />
          </div>
        ) : (activeTab !== "All orders" && !["Shipped", "Waiting for Payment", "Completed"].includes(activeTab)) ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-32 h-32 opacity-20 mb-4">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-400">
                 <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                 <polyline points="13 2 13 9 20 9"></polyline>
               </svg>
            </div>
            <p className="text-gray-400 text-sm tracking-wide font-medium">No more</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-50 transition-transform active:scale-[0.99]">
                <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                   <div className="flex items-center gap-1">
                      <div className="w-1 h-3 bg-rose-500 rounded-full"></div>
                      <span className="text-[11px] text-gray-500 font-medium">Order: 2026040{product.id}5921</span>
                   </div>
                   <span className="text-rose-500 text-[12px] font-bold">
                     {activeTab === "All orders" ? "In Transit" : "Completed"}
                   </span>
                </div>

                <div className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 p-1">
                    <img src={product.thumbnail} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-[14px] font-bold text-gray-800 line-clamp-2 leading-tight mb-2">
                      {product.title}
                    </h2>
                    <div className="bg-[#FAFAFA] rounded-lg p-2 flex justify-between items-center">
                       <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Total Payment</p>
                          <p className="text-[14px] font-extrabold text-gray-900">${product.price}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Earnings</p>
                          <p className="text-[14px] font-extrabold text-green-500">+${(product.price * 0.15).toFixed(2)}</p>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button className="text-[12px] font-bold text-gray-400 underline decoration-gray-200">Details</button>
                  <div className="flex gap-3">
                    <button className="px-5 py-2 border border-gray-100 rounded-full text-[11px] font-bold text-gray-600 active:bg-gray-50">Copy ID</button>
                    <button className="px-6 py-2 bg-black text-white rounded-full text-[11px] font-bold shadow-md shadow-gray-200">Contact</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!loading && filteredProducts.length > 0 && (
        <div className="text-center py-10">
          <p className="text-[10px] text-gray-300 font-bold tracking-[4px]">— NO MORE —</p>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Order;