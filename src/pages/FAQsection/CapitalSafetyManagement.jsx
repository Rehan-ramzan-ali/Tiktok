import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CapitalSafetyManagement = () => {
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
          Capital Safety Management
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="p-8 space-y-2 text-[#1a1a1a] leading-relaxed">
        
        {/* Section 1 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">1. How to deposit money?</h2>
          <p className="text-[12px]">
            Sellers can deposit funds by accessing the Wallet section in the TikTok Shop Seller Center. 
            Available deposit channels are shown based on regional regulations, foreign exchange 
            controls, and supported payment methods. Please select a suitable channel and follow the 
            on-screen instructions to complete the deposit.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">2. How to withdraw money?</h2>
          <div className="space-y-2 text-[12px]">
            <p>To withdraw funds, sellers must:</p>
            <ul className="list-none space-y-1">
              <li>• Link an approved withdrawal channel</li>
              <li>• Set up a payment password and complete security verification</li>
              <li>• Ensure sufficient available balance in the wallet</li>
            </ul>
            <p className="pt-2">
              After completing these steps, sellers can submit a withdrawal request through the Seller Center.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">3. What is a foreign account?</h2>
          <div className="space-y-3 text-[12px]">
            <p>
              A foreign account is used for cross-border transactions when buyers and sellers are located 
              in different countries.
            </p>
            <p>
              To facilitate international settlements, TikTok Shop supports foreign account settlements 
              through USDT (cryptocurrency) based on the international exchange rate, subject to regional 
              policies and payment channel availability.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">4. How long does it take to process withdrawals?</h2>
          <div className="space-y-3 text-[12px]">
            <p>
              Withdrawal requests are subject to a review process to ensure compliance with platform 
              policies. Once the review is completed, the requested amount will be successfully transferred 
              to your linked account.
            </p>
            <p>
              Typically, the entire withdrawal process, including review and transfer, is completed within 12 
              hours.
            </p>
            <p className="italic text-gray-600">
              Please note that the actual timing may vary slightly due to foreign exchange controls, 
              blockchain network conditions (for USDT), or banking/payment channel processing times.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CapitalSafetyManagement;