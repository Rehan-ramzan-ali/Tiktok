import React, { useState } from 'react';
import { ChevronLeft, Delete } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UpgradeVIP = () => {

      const navigate = useNavigate(); // navigate function initialize karein

  // Ye function 'Go Back' button click par chalega
  const handleGoBack = () => {
    navigate('/'); // '/' path yaani Home page par navigate karega
  };

  const [showPinModal, setShowPinModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [pin, setPin] = useState('');

  const vipPlans = [
    { id: 10, name: 'V10', capital: '500000.00', visits: 0, profit: '48.00%', img: '/eb50e027171abab2fd2a3f9dd010fb29.png' },
    { id: 9, name: 'V9', capital: '300000.00', visits: 0, profit: '42.00%', img: '/59efe92da854b8cd6d40bedfb00230b7.png' },
    { id: 8, name: 'V8', capital: '150000.00', visits: 0, profit: '38.00%', img: '/dc3e5cb5f53091298a10803b1d19ec76.png' },
    { id: 7, name: 'V7', capital: '100000.00', visits: 0, profit: '35.00%', img: '/5368067b74835832fdd79e9daf9d38e6.png' },
  ];

  const handlePinClick = (num) => {
    if (pin.length < 6) setPin(prev => prev + num);
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <div className="max-w-xl mx-auto mt-5 bg-[#F8F8F8] min-h-screen font-sans">
      {/* Header */}
      <div className="bg-black text-white p-4 flex items-center sticky top-0 z-10">
        <button className="flex items-center text-sm " onClick={handleGoBack}>
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold">Upgrade VIP</h1>
      </div>

      {/* VIP List */}
    <div className="p-4 space-y-4">
  {vipPlans.map((plan) => (
    <div key={plan.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4">
      
      {/* VIP Icon (IMAGE SECTION FIXED) */}
      <div className="w-26 h-26 bg-rose-50 rounded-lg flex  overflow-hidden border border-rose-100">
        {/* Yahan plan.img ko src mein dala hai */}
        <img 
          src={plan.img} 
          alt={plan.name} 
          className="w-full h-full object-cover" 
        
        />
      </div>

            {/* Plan Details */}
            <div className="flex-1 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Working Capital</span>
                <span className="font-bold">$ {plan.capital}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Visits</span>
                <span className="font-medium">{plan.visits}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Profit</span>
                <span className="font-medium">{plan.profit}</span>
              </div>
              
              <button 
                onClick={() => { setSelectedPlan(plan); setShowPinModal(true); setPin(''); }}
                className="w-full bg-black text-white text-xs py-2 rounded-full font-bold mt-2 active:scale-95 transition-transform"
              >
                Submit Upgrade Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PIN Password Modal */}
      <AnimatePresence>
        {showPinModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-20"
              onClick={() => setShowPinModal(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              className="fixed bottom-0 left-0 mb-16 right-0 max-w-xl mx-auto bg-white rounded-t-3xl z-30 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 text-sm">Please enter the payment password</span>
                <button onClick={() => setShowPinModal(false)} className="text-gray-400 text-xl">×</button>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">$ {selectedPlan?.capital}</h2>
              </div>

              {/* Pin Dots */}
              <div className="flex justify-center gap-4 mb-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full border border-gray-300 ${pin.length > i ? 'bg-black' : 'bg-transparent'}`} />
                ))}
              </div>

              {/* Error Message Simulation (from video) */}
              {pin.length === 6 && (
                <p className="text-red-500 text-xs text-center mb-4">Payment password is incorrect</p>
              )}

              {/* Custom Number Pad */}
              <div className="grid grid-cols-3  gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0].map((num, i) => (
                  <button
                    key={i}
                    onClick={() => num !== '' && handlePinClick(num)}
                    className={`h-14 text-xl font-semibold rounded-md flex items-center justify-center ${num === '' ? 'bg-transparent' : 'bg-gray-50 active:bg-gray-200'}`}
                  >
                    {num}
                  </button>
                ))}
                <button onClick={handleDelete} className="h-14 bg-gray-50 flex items-center justify-center rounded-md active:bg-gray-200">
                  <Delete size={20} />
                </button>
              </div>

              <button className="w-full bg-blue-500 text-white py-4 rounded-lg font-bold mt-6 shadow-lg shadow-blue-100">
                Confirm
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UpgradeVIP;