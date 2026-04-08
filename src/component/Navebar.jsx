import React from 'react';

const Navbar = () => {
  return (
    /* Outer Container: Centers the fixed bar */
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50">
      
      {/* Inner Container: Matches the width and black background from your image */}
      <div className="w-full max-w-[600px] bg-black text-white flex justify-between items-center px-6 py-2 border-t border-gray-800 shadow-2xl">
        
        {/* Home */}
        <div className="flex flex-col items-center cursor-pointer">
          <img src="public/download (3).png" alt="Home" className="w-6 h-6 mb-1" />
          <span className="text-[10px] text-[#ff0050] font-medium">Home</span>
        </div>

        {/* Product */}
        <div className="flex flex-col items-center cursor-pointer">
          <img src="public/产品-BTGgYHBc.png" alt="Product" className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Product</span>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center cursor-pointer">
          {/* Note: Customer service image name screenshot me clear nahi tha, 
              agar name change ho to yahan update kar lein */}
          <img src="public/download (2).png" alt="Service" className="w-6 h-6 mb-1 filter " />
          <span className="text-[10px] font-medium text-center leading-tight">Customer Service</span>
        </div>

        {/* Order with Notification */}
        <div className="flex flex-col items-center cursor-pointer relative">
          <div className="relative mb-1">
            <img src="public/订单-LRGkNMUQ.png" alt="Order" className="w-7 h-7" />
            {/* Red Badge */}
            <span className="absolute -top-1 -right-1.5 bg-[#ff0050] text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-black">
              2
            </span>
          </div>
          <span className="text-[10px] font-medium">Order</span>
        </div>

        {/* My */}
        <div className="flex flex-col items-center cursor-pointer">
          <img src="public/我的-CVMXnsKi.png" alt="My" className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">My</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;