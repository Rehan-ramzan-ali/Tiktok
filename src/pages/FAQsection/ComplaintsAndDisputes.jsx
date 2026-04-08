import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComplaintsAndDisputes = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Home page par wapis le jane ke liye
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
          Complaints and Disputes
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="p-8 space-y-2 text-[#1a1a1a] leading-relaxed">
        
        {/* Section 1 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">1. Why is my shipping logistics status not updated?</h2>
          <p className="text-[12px]">
            The logistics status may sometimes be delayed due to time zone differences, cross-border 
            shipping processes, or carrier updates. Please allow 12–24 hours for the system to update 
            the shipment status. You can monitor the order in the Orders section for the latest 
            information.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">2. What if my shipment is lost during transit?</h2>
          <p className="text-[12px]">
            For orders shipped via TikTok Delivery, TikTok Shop has policies to handle lost shipments. In 
            such cases: TikTok Shop will work to resolve the issue and bear the losses related to the lost 
            shipment. Sellers will not be held responsible, and the store performance metrics will remain 
            unaffected. Please contact TikTok Shop support immediately if a shipment is confirmed lost.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-bold text-[15px] mb-0">3. Returns and refunds</h2>
          <p className="text-[12px]">
            In the event that a buyer returns goods: TikTok Shop will cover the shipping costs associated 
            with the return. Any loss in profit from the returned goods will be adjusted. The seller principal 
            amount for the returned items will be refunded. TikTok operations will coordinate the return 
            and ensure that goods are properly received at the warehouse. Sellers can track return status 
            in the Orders section of the Seller Center.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ComplaintsAndDisputes;