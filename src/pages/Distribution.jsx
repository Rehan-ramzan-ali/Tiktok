import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Distribution = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  
  // Suggestion States
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  useEffect(() => {
    // Fetch Categories
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));

    // Handle clicking outside of suggestions
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = selectedCategory === "all" 
      ? 'https://dummyjson.com/products?limit=100' 
      : `https://dummyjson.com/products/category/${selectedCategory}`;

    axios.get(url)
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedCategory]);

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filteredSuggest = products
        .filter(p => p.title.toLowerCase().includes(value.toLowerCase()))
        .map(p => p.title)
        .slice(0, 5); // Sirf top 5 suggestions
      setSuggestions(filteredSuggest);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchQuery(name);
    setShowSuggestions(false);
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelect = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredProducts.length && filteredProducts.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredProducts.map(p => p.id));
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-9 bg-gray-50 min-h-screen font-sans pb-24 relative">
      {/* Header */}
      <div className="bg-black text-white p-3 flex items-center sticky top-0 z-40">
        <button onClick={() => navigate(-1)} className="flex items-center text-sm">
          <ChevronLeft size={18} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold">
          Distribution Center
        </h1>
      </div>

      {/* Search & Suggestions Section */}
      <div className="sticky top-[52px] z-30 bg-white shadow-sm" ref={suggestionRef}>
        <div className="p-3 border-b border-gray-100 relative">
          <div className="relative flex items-center bg-gray-100 rounded-xs px-4 py-2">
            <Search className="text-gray-400 mr-2" size={13} />
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full bg-transparent border-none text-sm focus:outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
            />
            {searchQuery && (
              <X 
                size={16} 
                className="text-gray-400 cursor-pointer" 
                onClick={() => { setSearchQuery(""); setShowSuggestions(false); }}
              />
            )}
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-4 right-4 top-[55px] bg-white border border-gray-100 shadow-xl rounded-xl z-50 overflow-hidden">
              {suggestions.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => handleSuggestionClick(item)}
                  className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center gap-2 border-b border-gray-50 last:border-0"
                >
                  <Search size={14} className="text-gray-300" />
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-6 scroll-smooth">
          <button 
            onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
            className={`whitespace-nowrap text-xs font-bold uppercase tracking-wider ${selectedCategory === "all" ? "text-rose-500 border-b-2 border-rose-500" : "text-gray-400"}`}
          >
            Hot Items
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => { setSelectedCategory(cat.slug); setSearchQuery(""); }}
              className={`whitespace-nowrap text-xs font-bold uppercase tracking-wider ${selectedCategory === cat.slug ? "text-rose-500 border-b-2 border-rose-500" : "text-gray-400"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {loading ? (
          <div className="col-span-2 text-center py-20 text-gray-400">Loading items...</div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => toggleSelect(product.id)}
              className="bg-white rounded-xl p-2 border border-gray-100 relative cursor-pointer"
            >
              <div className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedIds.includes(product.id) ? 'bg-rose-500 border-rose-500' : 'bg-white border-gray-200'
              }`}>
                {selectedIds.includes(product.id) && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg mb-2 overflow-hidden">
                <img src={product.thumbnail} alt="" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-[11px] font-bold text-gray-800 line-clamp-2 h-7 leading-tight">{product.title}</h2>
              <p className="text-[10px] text-gray-400 mt-2">Price: <span className="text-rose-500 font-bold">${product.price}</span></p>
              <button className="w-full bg-black text-white text-[10px] py-2 mt-3 rounded-md font-bold uppercase">
                DISTRIBUTION
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-20 text-gray-400">No products found</div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-xl mx-auto bg-white border-t p-3 flex gap-3 z-40">
        <button 
          onClick={handleSelectAll}
          className="flex-1 border-2 border-black rounded-full py-2.5 text-[11px] font-black uppercase"
        >
          {selectedIds.length === filteredProducts.length && filteredProducts.length > 0 ? "Deselect All" : "Select All"}
        </button>
        <button 
          className="flex-[1.5] bg-black text-white rounded-full py-2.5 text-[11px] font-black uppercase shadow-lg"
        >
          Distribute All ({selectedIds.length})
        </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Distribution;