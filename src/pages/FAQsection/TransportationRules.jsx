import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransportationRules = () => {
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
          Transportation Rules
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="p-5 space-y-2 text-[#1a1a1a] leading-relaxed">
        
        {/* Section 1 */}
        <section>
          <h2 className="font-bold text-[15px] ">1. How to arrange delivery?</h2>
          <p className="text-[12px]">
            If you have selected TikTok Delivery mode, once a buyer places an order for your product, 
            the delivery process is automatically handled by TikTok Shop. The TikTok operations team 
            coordinates with the designated warehouse or logistics partner to arrange shipment.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-bold text-[15px] ">2. What happens if the principal payment is overdue?</h2>
          <div className="space-y-2 text-[12px]">
            <p>After a buyer places an order, the seller is required to pay the principal amount within 24 hours.</p>
            <p>If the payment is not completed within the specified time:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Store performance points may be deducted</li>
              <li>Order processing may be delayed</li>
              <li>Repeated violations may result in temporary store restrictions, in accordance with TikTok Shop policies.</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-bold text-[15px] ">3. How long is the delivery period?</h2>
          <p className="text-[12px]">
            Once the seller completes the principal payment, the TikTok operations team will arrange 
            shipment within 24 hours, subject to warehouse processing and logistics availability.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-bold text-[15px] ">4. How to contact the buyer?</h2>
          <p className="text-[12px]">
            To protect buyer privacy and ensure data security, sellers are not permitted to contact buyers 
            directly. All buyer communication is handled through the TikTok Shop system.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-bold text-[15px] ">5. How to contact the warehouse?</h2>
          <p className="text-[12px]">
            For privacy and security reasons, sellers cannot directly contact the warehouse. TikTok Shop 
            integrates with logistics service providers through internal systems. Sellers can track order 
            and shipment status through the Orders section in their seller dashboard.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="font-bold text-[17px] ">6. How long will customers typically receive their goods?</h2>
          <p className="text-[15px]">
            Delivery time depends on the buyer's location and local logistics conditions. In most cases, 
            customers receive their orders within 2–7 business days after shipment.
          </p>
        </section>

      </div>
    </div>
  );
};

export default TransportationRules;