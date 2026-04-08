import React from 'react';
import { Link } from 'react-router-dom'; // Link import karein

const QuickActions = () => {
  const actions = [
    { id: 1, name: "Recharge", icon: "public/cz-Dfti-XTA.png", path: "/recharge" }, 
    { id: 2, name: "Withdrawal", icon: "public/download.png", path: "/withdrawal" },
    { id: 3, name: "Upgrade VIP", icon: "public/店铺直通车-CbZvC6oJ.png", path: "/upgrade-vip" },
    { id: 4, name: "Merchant Service", icon: "public/创业联盟-Dg77AuCp.png", path: "/merchant-service" },
    { id: 5, name: "Shop Settings", icon: "public/店铺设置-BQV9rnKD.png", path: "/shop-settings" },
    { id: 6, name: "Sign In", icon: "public/download (1).png", path: "/signin" },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 mt-2 p-6">
      <div className="grid grid-cols-3 gap-y-8">
        {actions.map((action) => (
          /* div ki jagah Link tag use karein aur 'to' property mein path dein */
          <Link 
            key={action.id} 
            to={action.path} 
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Image Container */}
            <div className="w-5 h-5 mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
              <img 
                src={action.icon} 
                alt={action.name} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/5259/5259008.png"; 
                }}
              />
            </div>
            
            {/* Label */}
            <span className="text-[10px] text-gray-500 font-medium">
              {action.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;