import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductListManagement = () => {
 
      const navigate = useNavigate();


  const handleGoBack = () => {
    navigate('/'); // '/' path yaani Home page par navigate karega
  };

  return (
    <div className="max-w-xl mx-auto mt-25 bg-white shadow-sm border border-gray-100">
      {/* Header Section */}
      <div className="bg-black text-white p-5 flex items-center relative">
     <button 
          onClick={handleGoBack}
          className="flex items-center text-[15px] font-medium hover:text-gray-300 transition-colors absolute left-4"
        >
          <ChevronLeft size={18} className="mr-1" />
          Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-sl font-bold tracking-wide">
          Product List Management
        </h1>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-8 text-[#1a1a1a] leading-relaxed">
        
        {/* Question 1 */}
        <section>
          <h2 className="font-bold text-[15px] mb-2">1. How to list products?</h2>
          <div className="space-y-4 text-[12px]">
            <p>
              Sellers can list products by logging into the TikTok Shop Seller Center and navigating to 
              <span className="font-medium"> Products → Add Product.</span>
            </p>
            <p>
              You can select products from the available catalog and provide necessary details, including 
              pricing, profit margin, and product description. Once submitted, the product will undergo a 
              review process and will be published according to TikTok Shop guidelines.
            </p>
            <p>
              Ensure that all product information is accurate and complies with TikTok Shop policies.
            </p>
          </div>
        </section>

        {/* Question 2 */}
        <section>
          <h2 className="font-bold text-[15px] mb-2">2. How to remove products from the shelf?</h2>
          <div className="space-y-4 text-[12px]">
            <p>
              When you need to remove items from your store, please contact online customer service, 
              send images of the items you wish to remove, and submit a removal request.
            </p>
            <p className="font-medium">
              Please note that you can only remove a maximum of 10 items per month!
            </p>
          </div>
        </section>

        {/* Question 3 */}
        <section>
          <h2 className="font-bold text-[15px] mb-2">3. Can I list my own products?</h2>
          <div className="space-y-4 text-[12px]">
            <p>
              TikTok Shop primarily operates under a dropshipping model where products are provided 
              through TikTok approved suppliers.
            </p>
            <p>
              If you wish to list your own inventory or branded products you must meet TikTok Shop 
              eligibility requirements and submit your products for review and approval via the TikTok Shop 
              Support Team.
            </p>
            <p>
              Only approved products can be listed to ensure compliance with platform policies.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductListManagement;