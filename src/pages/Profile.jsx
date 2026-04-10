import React from 'react';
import { Wallet, Clock, Truck, Package, ClipboardCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karein
import Navbar from '../component/Navebar';

// Reusable Icon Component (Isay main component se bahar rakhein)
const StatusItem = ({ icon, label, badge, onClick }) => (
  // 2. Cursor pointer aur onClick handle kiya
  <div 
    onClick={onClick} 
    className="flex flex-col items-center gap-2 relative flex-1 cursor-pointer active:scale-95 transition-transform"
  >
    {badge && (
      <span className="absolute -top-2 right-1 bg-[#ff0031] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full border-[1.5px] border-white z-10">
        {badge}
      </span>
    )}
    <div className="text-[#008080] opacity-90">
      {icon}
    </div>
    <span className="text-gray-800 text-[10px] font-bold whitespace-nowrap tracking-tight">
      {label}
    </span>
  </div>
);

const Mypages = () => {

const navigate = useNavigate(); // 3. Hook initialize karein

  // 4. Navigation helper function
  const handleStatusClick = (tabName) => {
    // Aapke Order.jsx mein humne routing set ki hogi, 
    // yahan hum navigate kar rahe hain aur state pass kar rahe hain
    navigate('/order', { state: { activeTab: tabName } });
  };

  return (
  
  <div>

<Navbar/>
  
   <div className="max-w-xl mx-auto bg-black p-4 pt-14 rounded-b-xl relative shadow-lg">
        {/* Upper Info Row code... (remains same) */}
        <div className="flex justify-between items-start mb-12 ">
          <div className="flex items-center gap-3">
            <div className="w-10 h-auto overflow-hidden"> 
              <img src="https://sell.tkdropseller.com/uploads/20260306/56b52373e8359af4cb42c172b52060c2.jpg" alt="TikTok Shop" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-[17px] font-bold leading-none tracking-tight">bintehawa48@outlook.com</h2>
              <span className="text-gray-400 text-xs mt-1 font-medium">ID:20035</span>
            </div>
          </div>
          <div className="w-11 h-11 bg-zinc-900 flex items-center justify-center overflow-hidden border border-zinc-800">
            <img src="https://sell.tkdropseller.com/uploads/20251129/02a50804500f8d0911ca463c3e747267.png" alt="V5 Badge" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Floating White Order Status Card */}
        <div className="bg-white rounded py-2 flex justify-between items-center shadow-xl">
          {/* 5. Sab items par onClick handler laga diya */}
          <StatusItem 
            icon={<img src="/download (7).png" className="w-6 h-6 object-contain" alt="" />} 
            label="To pay" 
            onClick={() => handleStatusClick("Waiting for Payment")}
          />

          <StatusItem 
            icon={<img src="/download (8).png" className="w-6 h-6 object-contain" alt="" />} 
            label="To Pickup" 
            onClick={() => handleStatusClick("Awaiting Pickup")}
          />

          <StatusItem 
            icon={<img src="/download (9).png" className="w-7 h-7 object-contain" alt="" />} 
            label="Shipped" 
            onClick={() => handleStatusClick("Shipped")}
          />

          <StatusItem 
            icon={<img src="/4_received-DPgHg8P6.png" className="w-6 h-6 object-contain" alt="" />} 
            label="Received" 
            onClick={() => handleStatusClick("Received")}
          />

          <StatusItem 
            icon={<img src="/download (10).png" className="w-6 h-6 object-contain" alt="" />} 
            label="Completed" 
            onClick={() => handleStatusClick("Completed")}
          />
        </div>
      </div>
    {/* Top Balance Card Section */}




  
  {/* White Balance Card */}
  <div className=" max-w-xl mx-auto bg-black p-4 mt-4 rounded-b-xl relative shadow-lg bg-white p-5 rounded-xl shadow-lg border border-zinc-50 relative mb-4">
    
    {/* Pending Amount Row */}
    <div className="flex items-center gap-2 mb-1">
      <h2 className="text-[12px] font-bold text-zinc-900">Pending Amount:</h2>
      <div className="flex items-center gap-1">
        <span className="text-[14px] font-semibold text-red-500">$ 59985.70</span>
        {/* Refresh Icon */}
        <button className="text-zinc-400 hover:rotate-180 transition-transform duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
        </button>
      </div>
    </div>

    {/* Balance Row */}
    <div className="flex items-center gap-4 mb-1">
      <span className="text-sm text-zinc-600 ">Balance</span>
      <span className="text-[14px] font-bold text-zinc-900">$ 7213.50</span>
    </div>

    {/* Total Income Row */}
    <div className="flex items-center gap-4">
      <span className="text-sm text-zinc-600 ">Total Income</span>
      <span className="text-[14px] font-bold text-zinc-900">$ 450006.55</span>
    </div>
  </div>

  {/* Action Buttons: Exact Image jaisa layout */}
 <div className="max-w-xl mx-auto flex gap-4 "> {/* Padding add ki hai taaki corners se chipke nahi */}
  
  {/* Recharge Link */}
  <a href="/recharge" className="flex-1"> 
    <button className="w-full bg-[#009b95] text-white py-2 text-[14px] rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm active:opacity-90">
      <img src="https://sell.tkdropseller.com/assets/zr-DRUyIT3u.png" className="w-4 h-4 object-contain" alt="" />
      Recharge
    </button>
  </a>

  {/* Withdraw Link */}
  <a href="/withdrawal" className="flex-1">
    <button className="w-full bg-[#ff3366] text-white py-2 text-[14px] rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm active:opacity-90">
      <img src="https://sell.tkdropseller.com/assets/zc-H4VK4NAS.png" className="w-4 h-4 object-contain" alt="" />
      Withdraw
    </button>
  </a>

</div>




<div className="max-w-xl mx-auto  pt-4 flex flex-col gap-3">
  
  {/* Loan Application Button */}
  <div className="relative h-12 rounded-lg overflow-hidden cursor-pointer group shadow-md border border-zinc-700/30">
    {/* Background Image with Dark Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ 
        backgroundImage: `url('https://sell.tkdropseller.com/assets/loan-bg-DH-vmDKt-DH-vmDKt.png')`,
      }}
    >
      {/* Dark tint taaki text white chamke */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    
    {/* Content Area */}
    <div className="relative h-full flex items-center justify-between px-4 text-white">
      <div className="flex items-center gap-3">
        {/* Icon (Maine placeholder diya hai, aap apna icon src yahan daal dein) */}
        <div className="w-5 h-5 flex items-center justify-center bg-white/20 rounded-md">
           <img src="https://sell.tkdropseller.com/assets/zr-DRUyIT3u.png" className="w-3 h-3 object-contain invert" alt="" />
        </div>
        <span className="font-bold text-[12px] tracking-wide shadow-sm">Loan Application</span>
      </div>
      
      {/* Right Arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </div>
  </div>

  {/* Yu'e Bao Button */}
  <div className="relative h-12 rounded-lg overflow-hidden cursor-pointer group shadow-md border border-zinc-700/30">
    {/* Same Background with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ 
        backgroundImage: `url('https://sell.tkdropseller.com/assets/loan-bg-DH-vmDKt-DH-vmDKt.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    
    {/* Content Area */}
    <div className="relative h-full flex items-center justify-between px-4 text-white">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 flex items-center justify-center bg-white/20 rounded-md">
           <img src="https://sell.tkdropseller.com/assets/zc-H4VK4NAS.png" className="w-3 h-3 object-contain invert" alt="" />
        </div>
        <span className="font-bold text-[12px] tracking-wide shadow-sm">Yu'e Bao</span>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </div>
  </div>

</div>
  





  <div className="max-w-xl mx-auto  mt-2">
  <div className="bg-white rounded-lg shadow-sm border border-zinc-100 p-3 flex items-center gap-3 overflow-hidden">
    
    {/* Speaker Icon (Fixed position) */}
    <div className="flex-shrink-0 text-black bg-white z-10 pr-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
    </div>

    {/* Moving Text Section */}
    <div className="flex-1 overflow-hidden ">
      <marquee behavior="scroll" direction="left" scrollamount="8" className="text-[12px] text-zinc-700 ">
        Dear users, please pay attention to your payment. Late payments may negatively impact the store's credit score and other aspects.
      </marquee>
    </div>

  </div>
</div>

  <div className="max-w-xl mx-auto pt-4 flex flex-col gap-4 font-sans">
  
  {/* FIRST GROUP CARD */}
  <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
    {/* Item 1 */}
    <div className="flex items-center justify-between p-4 cursor-pointer active:bg-zinc-50 border-b border-zinc-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src="https://sell.tkdropseller.com/assets/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF-DY1_0zoS.png" className="w-5 h-5 object-contain" alt="" />
        <span className="text-[12px] font-medium text-zinc-800">Personal Information</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>

    {/* Item 2 */}
    <div className="flex items-center justify-between p-4 cursor-pointer active:bg-zinc-50 border-b border-zinc-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src="https://sell.tkdropseller.com/assets/%E8%AF%AD%E8%A8%80-9Kn7lYKu.png" className="w-5 h-5 object-contain" alt="" />
        <span className="text-[12px] font-medium text-zinc-800">Language</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>

    {/* Item 3 */}
    <div className="flex items-center justify-between p-4 cursor-pointer active:bg-zinc-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src="https://sell.tkdropseller.com/assets/%E8%B5%84%E9%87%91%E8%AE%B0%E5%BD%95-CVi8MEXT.png" className="w-5 h-5 object-contain" alt="" />
        <span className="text-[12px] font-medium text-zinc-800">Financial Records</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  </div>

  {/* SECOND GROUP CARD */}
  <div className="bg-white rounded-xl shadow-sm border border-zinc-100 overflow-hidden">
    {/* Item 4 */}
    <div className="flex items-center justify-between p-4 cursor-pointer active:bg-zinc-50 border-b border-zinc-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src="https://sell.tkdropseller.com/assets/%E8%B4%A2%E5%8A%A1%E6%8A%A5%E8%A1%A8-C5Z0VfJh.png" className="w-5 h-5 object-contain" alt="" />
        <span className="text-[12px] font-medium text-zinc-800">Financial Reports</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>

    {/* Item 5 */}
    <div className="flex items-center justify-between p-4 cursor-pointer active:bg-zinc-50 border-b border-zinc-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src="https://sell.tkdropseller.com/assets/%E6%8A%95%E8%AF%89-BAoKlMow.png" className="w-5 h-5 object-contain" alt="" />
        <span className="text-[12px] font-medium text-zinc-800">Complaint Message</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>

    {/* Item 6 */}
    <div className="flex items-center justify-between p-4 cursor-pointer active:bg-zinc-50 transition-colors">
      <div className="flex items-center gap-3">
        <img src="https://sell.tkdropseller.com/assets/ht-C2hlASPc.png" className="w-5 h-5 object-contain" alt="" />
        <span className="text-[12px] font-medium text-zinc-800 leading-tight">TikTok Shop Merchant Settlement Terms</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  </div>



  </div>
{/* Logout Button Section */}
<div className="max-w-xl mx-auto  mt-2 mb-19"> 
  <button 
    className="w-full bg-black text-white py-2 rounded-lg font-bold text-sl shadow-md active:scale-[0.98] transition-all duration-200"
    onClick={() => console.log("Logging out...")}
  >
    Logout
  </button>
</div>




</div>


  );
};

export default Mypages;