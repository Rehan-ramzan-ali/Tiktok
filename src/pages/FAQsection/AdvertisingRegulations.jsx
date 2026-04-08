import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Home page par jane ke liye hook

const AdvertisingRegulations = () => {
  const navigate = useNavigate(); // navigate function initialize karein

  // Ye function 'Go Back' button click par chalega
  const handleGoBack = () => {
    navigate('/'); // '/' path yaani Home page par navigate karega
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-sm border border-gray-100 font-sans">
      {/* Black Header Bar */}
      <div className="bg-black text-white p-4 flex items-center relative h-14">
        {/* Go Back Button - clickable */}
        <button 
          onClick={handleGoBack}
          className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors absolute left-4"
        >
          <ChevronLeft size={18} className="mr-1" />
          Go Back
        </button>
        
        {/* Center Title */}
        <h1 className="w-full text-center text-lg font-bold tracking-wide">
          Advertising Regulations
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="p-10 space-y-10 text-[#222] leading-relaxed">
        
        {/* Section 1 */}
        <section>
          <h2 className="font-extrabold text-[15px] mb-1">1. How to promote my product</h2>
          <div className="space-y-2 text-[12px]">
            <p>
              Sellers who register their store on TikTok Shop using an authentication code will receive one 
              month of free promotion to help increase product visibility and attract potential buyers.
            </p>
            <p>
              For all newly created stores, TikTok Shop also provides free traffic support for products 
              during the first 7 days after store creation.
            </p>
            <p>
              In addition to free support, sellers can purchase promotion or exposure packages through the 
              Seller Center to further boost product reach and sales.
            </p>
            <p>
              Using both organic traffic support and paid promotion options can help maximize your 
              product visibility and overall store performance.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-extrabold text-[15px] mb-1">2. How to cancel promotion</h2>
          <div className="space-y-2 text-[12px]">
            <p>
              Once a promotional package has been purchased, it cannot be canceled due to TikTok 
              Shop's promotion and push mechanism.
            </p>
            <p>
              However, if you need to request an urgent cancellation, you may contact TikTok Shop 
              Customer Support for assistance.
            </p>
            <p>
              We recommend reviewing the promotion details carefully before purchase to ensure it aligns 
              with your marketing goals.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AdvertisingRegulations;