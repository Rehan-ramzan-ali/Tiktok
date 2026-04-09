import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Navigation items ka data taake code saaf rahe
  const navLinks = [
    { 
      name: "Home", 
      path: "/", 
      whiteImg: "/首页-Ci6iGJ_-.png", // Aapki white image
      redImg: "/download (3).png"         // Aapki red image ka path (yahan update karein)
    },
    { 
      name: "Product", 
      path: "/product", 
      whiteImg: "/产品-BTGgYHBc.png", // Inactive image
      redImg: "/download (4).png"    // Aapki uploaded red image
    },
    { 
      name: "Service", 
      path: "https://pb1vzhrr.tksellservice-ind.cc/mobile/admin/index.html", 
      whiteImg: "/download (2).png", 
      redImg: "/download (5).png" 
    },
    { 
      name: "Order", 
      path: "/order", 
      whiteImg: "/订单-LRGkNMUQ.png", 
      redImg: "public/订单-BPYhVUj0.png",
      badge: 2 
    },
    { 
      name: "My", 
      path: "/profile", 
      whiteImg: "/我的-CVMXnsKi.png", 
      redImg: "public/download (6).png" 
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50">
      <div className="w-full max-w-[600px] bg-black flex justify-between items-center px-6 py-2 border-t border-gray-800 shadow-2xl">
        
        {navLinks.map((link) => (
          <NavLink 
            key={link.name}
            to={link.path} 
            className={({ isActive }) => 
              `flex flex-col items-center cursor-pointer transition-colors duration-200 ${
                isActive ? 'text-[#ff0050]' : 'text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative mb-1">
                  {/* Image switching logic */}
                  <img 
                    src={isActive ? link.redImg : link.whiteImg} 
                    alt={link.name} 
                    className={link.name === "Order" ? "w-7 h-7" : "w-6 h-6"} 
                  />
                  
                  {/* Order Badge (sirf Order ke liye) */}
                  {link.badge && (
                    <span className="absolute -top-1 -right-1.5 bg-[#ff0050] text-[9px] font-bold text-white w-4 h-4 flex items-center justify-center rounded-full border border-black">
                      {link.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium">{link.name}</span>
              </>
            )}
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Navbar;