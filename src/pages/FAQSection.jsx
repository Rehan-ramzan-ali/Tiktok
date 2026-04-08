import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Routing ke liye

const FAQSection = () => {
  const faqItems = [
    { id: 1, title: "Account Status", path: "/account-status" },
    { id: 2, title: "Product List Management", path: "/product-management" },
    { id: 3, title: "Advertising Regulations", path: "/advertising-rules" },
    { id: 4, title: "Transportation Rules", path: "/transportation" },
    { id: 5, title: "Capital Safety Management", path: "/capital-safety" },
    { id: 6, title: "Complaints and Disputes", path: "/complaints" },
    { id: 7, title: "Store Management", path: "/store-management" },
  ];

  return (
    <div className="max-w-xl mb-20 mx-auto bg-white rounded-xl shadow-sm border border-gray-100 mt-2 overflow-hidden">
      {/* Title */}
      <div className="p-4 border-b border-gray-50">
        <h3 className="text-rose-500 font-medium text-sl">Frequently asked questions</h3>
      </div>

      {/* List Items */}
      <div className="flex flex-col ">
        {faqItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="flex items-center justify-between border-black border-b    p-4 hover:bg-gray-200 transition-colors   last:border-0 group"
          >
            <span className="text-black  text-[14px] font-bold  group-hover:text-black">
              {item.title}
            </span>
            <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-600" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;