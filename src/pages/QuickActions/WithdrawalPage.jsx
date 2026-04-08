import React, { useState } from 'react';
import { ChevronLeft, ListFilter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WithdrawalPage = () => {

  const navigate = useNavigate(); // navigate function initialize karein

  // Ye function 'Go Back' button click par chalega
  const handleGoBack = () => {
    navigate('/'); // '/' path yaani Home page par navigate karega
  };

  const [showMethodModal, setShowMethodModal] = useState(false);
  const [method, setMethod] = useState(''); // 'Bank Card' or 'Blockchain'
  const [view, setView] = useState('withdraw'); // 'withdraw' or 'records'

  if (view === 'records') return <WithdrawalRecords onBack={() => setView('withdraw')} />;

  return (
    <div className="max-w-xl mx-auto mt-10  bg-[#F8F8F8] min-h-screen font-sans relative">
      {/* Header */}
      <div className="bg-black text-white p-4 flex items-center justify-between sticky top-0 z-10">
        <button className="flex items-center text-sm" onClick={handleGoBack}>
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="text-base font-bold">Withdrawal</h1>
        <button onClick={() => setView('records')} className="text-sm font-medium">Records</button>
      </div>

      <div className="p-4 space-y-6">
        {/* Method Selection */}
        <div>
          <label className="text-black text-sm block mb-2">Withdrawal Method</label>
          <div 
            onClick={() => setShowMethodModal(true)}
            className="w-full bg-white p-2 rounded-md border border-gray-100 text-gray-400 cursor-pointer"
          >
            {method || "Enter Withdrawal Method"}
          </div>
        </div>

        {/* Dynamic Fields based on selection */}
        {method === 'Bank Card' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0 }} className="space-y-4">
            <InputField label="Full Name" placeholder="Enter Full Name" />
            <InputField label="Bank Name" placeholder="Enter Bank Name" />
            <InputField label="Bank Account Number/IBAN" placeholder="Enter Bank Account Number/IBAN" />
          </motion.div>
        )}

        {method === 'Blockchain' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <InputField label="Blockchain Network" placeholder="Enter Blockchain Network" />
            <InputField label="Blockchain Address" placeholder="Enter Blockchain Address" />
          </motion.div>
        )}

        {/* Amount Section */}
        <div>
          <label className="text-black text-sm block mb-2">Amount</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter Amount" 
              className="w-full bg-white p-2 rounded-md border border-gray-100 outline-none"
            />
            <span className="absolute right-4 top-4 text-rose-500 font-bold text-sm">All</span>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">Current Balance: <span className="text-emerald-500">Current Balance: $ 0.26</span></p>
        </div>

        <button className="w-full bg-black text-white py-4 rounded-md font-bold mt-4 active:scale-[0.98] transition-transform">
          Submit
        </button>
      </div>

      {/* Selection Modal (Bottom Sheet) */}
      <AnimatePresence>
        {showMethodModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowMethodModal(false)}
              className="fixed inset-0 bg-black/50 z-20" 
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              className="fixed bottom-0 left-0 right-0 max-w-xl mx-auto bg-white rounded-t-2xl z-30 overflow-hidden"
            >
              <div className="flex flex-col text-center">
                <button onClick={() => { setMethod('Bank Card'); setShowMethodModal(false); }} className="p-5 border-b border-gray-50 hover:bg-gray-50 text-gray-700">Bank Card</button>
                <button onClick={() => { setMethod('Blockchain'); setShowMethodModal(false); }} className="p-5 hover:bg-gray-50 text-gray-700">Blockchain</button>
                <div className="h-2 bg-gray-100" />
                <button onClick={() => setShowMethodModal(false)} className="p-4 text-gray-400 font-medium">Cancel</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper Component for inputs
const InputField = ({ label, placeholder }) => (
  <div>
    <label className="text-gray-400 text-sm block mb-2">{label}</label>
    <input type="text" placeholder={placeholder} className="w-full bg-white p-4 rounded-md border border-gray-100 outline-none" />
  </div>
);

export default WithdrawalPage;

