import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccountStatus = () => {
    const navigate = useNavigate();
      const handleGoBack = () => {
      navigate('/'); // '/' path yaani Home page par navigate karega
    };

  return (
    <div className="max-w-xl mx-auto pt-9 bg-white min-h-screen shadow-lg font-sans">
      {/* Black Header Area */}
      <div className="bg-black text-white p-5 flex items-center relative">
          <button 
               onClick={handleGoBack}
               className="flex items-center text-[15px] font-medium hover:text-gray-300 transition-colors absolute left-4"
             >
               <ChevronLeft size={16} className="mr-1" />
               Go Back
             </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-sl font-bold tracking-wide">
          Account Status
        </h1>
      </div>

      {/* Content Section */}
      <div className="p-4 text-gray-800 leading-relaxed font-serif text-[12px]">
        {/* Section 1 */}
        <section className="mb-">
          <h2 className="font-bold text-black mb-2 text-[14px]">1. How to Evaluate and Rank Stores</h2>
          <p className="mb-">
            Store evaluations and rankings are used to assess whether a store is operating in 
            accordance with TikTok Shop standards. A higher store ranking helps improve buyer 
            trust, increases conversion rates, and allows stores to access more platform opportunities 
            and promotional resources.
          </p>
          
          <div className="space-y-1 mb-2">
            <p className="font-semibold text-black">Each store has:</p>
            <p>Star Rating: Ranges from 0 to 5 stars</p>
            <p>Reliability Score (Ranking): Ranges from 0 to 100 points</p>
          </div>

          <div className="space-y-1 ">
            <p className="font-semibold text-black">New stores start with:</p>
            <p>Star Rating: 0 stars</p>
            <p>Reliability Score: 100 points</p>
          </div>

          <p className="">
            The star rating increases as orders are successfully completed on time. The 
            reliability score reflects the store overall service performance including order 
            processing and customer experience.
          </p>

          <p className="">
            If buyers raise complaints request refunds or if orders are delayed the store reliability 
            score may be affected Maintaining timely order fulfillment and good customer service 
            helps keep the store in good standing.
          </p>

          <p>
            If a store reliability score falls below 80 points TikTok Shop may reduce the store 
            visibility and recommend improvements to help the store enhance its performance and 
            buyer experience.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8 border-t border-gray-100 pt-2">
          <h2 className="font-bold text-black mb-1 text-base">2. How to Calculate Store Evaluations and Rankings</h2>
          <div className="mb-1">
            <p className="font-bold text-black">Star Rating:</p>
            <p>A store earns 0.1 star for each order completed within the required timeframe, up to a maximum of 5 stars.</p>
          </div>

          <div className="">
            <p className="font-bold text-black">Reliability Score:</p>
            <p>Initial score: 100 points</p>
            <p className="font-medium">-5 points for each disputed or refunded order</p>
            <p className=" font-medium">-10 points for each delayed order</p>
          </div>
          
          <p className=" italic text-gray-600">
            Maintaining timely order fulfillment and minimizing disputes are essential to preserving a high reliability score.
          </p>
        </section>

        {/* Section 3 */}
        <section className=" border-t border-gray-100 ">
          <h2 className="font-bold text-black mb-1 text-base">3. Can buyers see my reliability and star rating?</h2>
          <p>
            Yes. Buyers can view the store's star rating and ranking score directly on the store's 
            homepage. These indicators help buyers evaluate the store's credibility and service 
            quality before placing an order.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AccountStatus;