import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StoreManagement = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Home page par wapis jane ke liye
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-white shadow-sm border border-gray-100 font-sans">
      {/* Black Header Bar */}
      <div className="bg-black text-white p-4 flex items-center relative h-14">
        <button 
          onClick={handleGoBack}
          className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors absolute left-4"
        >
          <ChevronLeft size={16} className="mr-1" />
          Go Back
        </button>
        <h1 className="w-full text-center text-sl font-bold tracking-wide">
          Store Management
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="p-8 space-y-2 text-[#1a1a1a] leading-relaxed">
        
        {/* Section 1 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">1. How to change the store name, avatar, and other information?</h2>
          <div className="space-y-3 text-[12px]">
            <p>
              Sellers who wish to update their store information, including the store name, avatar, or 
              other details, can contact TikTok Shop Customer Service through the online support 
              channel.
            </p>
            <div className="pl-1">
              <p className="font-semibold">Please note:</p>
              <p>Each store is allowed to update this information once per month.</p>
              <p>Make sure to provide the accurate and complete details when submitting your request.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">2. How to close the store</h2>
          <div className="space-y-1 text-[12px]">
            <p>To close your store, please ensure the following steps are completed:</p>
            <ul className="list-none space-y-1 ml-1">
              <li>1-Complete all pending orders</li>
              <li>2-Withdraw all available funds from your account</li>
            </ul>
            <p>
              Once these requirements are met, you can submit a store closure request. The system will 
              initiate a 30-day review period from the request date. If no disputes arise during this 
              period, the store will be permanently closed.
            </p>
            <p>
              We recommend carefully reviewing all orders and account balances before submitting the 
              closure request to ensure a smooth process.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StoreManagement;