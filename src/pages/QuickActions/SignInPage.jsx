import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [hasSignedIn, setHasSignedIn] = useState(false); // Today's attendance state
  const [daysCount, setDaysCount] = useState(0);

  // Initial records (Login se pehle khali)
  const [records, setRecords] = useState([]);

  const handleSignIn = () => {
    if (!hasSignedIn) {
      setHasSignedIn(true);
      setDaysCount(1);
      const now = new Date();
      const newRecord = {
        date: "2026-04-08",
        time: "22:08:47",
        amount: "+$1.00",
        status: "Signed in"
      };
      setRecords([newRecord]);
    }
  };

  // Agar login nahi hai to simple login view (Optional handle)
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <h2 className="text-xl font-bold mb-4">Please Login to Continue</h2>
        <button 
          onClick={() => setIsLoggedIn(true)}
          className="w-full max-w-xs bg-black text-white py-3 rounded-lg font-bold"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-[#F8F8F8] min-h-screen font-sans pb-10">
      {/* Black Header */}
      <div className="bg-black text-white p-4 flex items-center sticky top-0 z-10">
        <button onClick={() => navigate('/')} className="flex items-center text-sm">
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold text-center">Sign In</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Sign In Banner Card */}
        <div className="bg-[#1e293b] text-white rounded-2xl p-6 relative overflow-hidden shadow-lg">
          <div className="space-y-1 relative z-10">
            <h2 className="text-lg font-semibold">Today's sign in</h2>
            <p className="text-gray-400 text-sm">4year8month2026sun</p>
            <p className="text-blue-400 text-xs mt-4">
              Continuous sign in: <span className="text-white font-bold">{daysCount} day</span>
            </p>
            <button 
              disabled={hasSignedIn}
              onClick={handleSignIn}
              className={`mt-4 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                hasSignedIn ? 'bg-gray-500 cursor-not-allowed' : 'bg-white text-black active:scale-95'
              }`}
            >
              {hasSignedIn ? 'Signed in' : 'Sign in'}
            </button>
          </div>
          
          {/* Circle Progress Indicator */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 border-4 border-gray-700 rounded-full flex flex-col items-center justify-center text-center p-2">
             <span className="text-[10px] text-gray-400">Current month total</span>
             <span className="text-xl font-bold text-blue-400">{daysCount}</span>
             <span className="text-[10px] text-gray-400">day</span>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-50">
          <h3 className="text-gray-900 font-bold mb-4">Select date</h3>
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex gap-4">
              <ChevronsLeft size={18} className="text-gray-300" />
              <ChevronLeft size={18} className="text-gray-300" />
            </div>
            <span className="font-bold text-sm">2026 year 4 month</span>
            <div className="flex gap-4">
              <ChevronRight size={18} className="text-gray-400" />
              <ChevronsRight size={18} className="text-gray-400" />
            </div>
          </div>
          
          {/* Calendar Grid (Static Placeholder) */}
          <div className="grid grid-cols-7 text-center gap-y-4 text-xs">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <span key={day} className="text-gray-400">{day}</span>
            ))}
            {[...Array(30)].map((_, i) => (
              <span key={i} className={`py-1 ${i+1 === 8 ? 'bg-blue-500 text-white rounded-full w-6 h-6 mx-auto flex items-center justify-center' : 'text-gray-800'}`}>
                {i + 1}
              </span>
            ))}
          </div>
        </div>

        {/* Sign In Records Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden">
          <div className="p-4 border-b border-gray-50">
            <h3 className="text-gray-900 font-bold">Sign in records</h3>
          </div>
          
          <div className="min-h-[150px]">
            {records.length > 0 ? (
              records.map((rec, index) => (
                <div key={index} className="p-4 flex justify-between items-center border-b border-gray-50 last:border-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800">{rec.date} {rec.time}</p>
                    <p className="text-emerald-500 font-bold text-sm">{rec.amount}</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded text-[11px] font-bold">
                    {rec.status}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-10 opacity-30">
                <div className="w-12 h-12 border-2 border-gray-300 rounded mb-2" />
                <p className="text-xs text-gray-500">No records</p>
              </div>
            )}
            <div className="text-center py-4 text-gray-400 text-xs">No more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;