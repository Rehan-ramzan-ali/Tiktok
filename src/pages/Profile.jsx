import React from 'react';
import { Wallet, Clock, Truck, Package, ClipboardCheck } from 'lucide-react';
import Navbar from '../component/Navebar';

// Reusable Icon Component (Isay main component se bahar rakhein)
const StatusItem = ({ icon, label, badge }) => (
  <div className="flex flex-col items-center gap-2 relative flex-1">
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
  return (
  
  <div>

<Navbar/>
  
   <div className="max-w-xl mx-auto bg-black p-4 pt-14 rounded-b-xl relative shadow-lg">
      
      {/* Upper Info Row */}
      <div className="flex justify-between items-start mb-12 px-2">
        <div className="flex items-center gap-3">
          {/* TikTok Shop Logo */}
          <div className="w-10 h-auto overflow-hidden"> 
            <img 
              src="https://sell.tkdropseller.com/uploads/20260306/56b52373e8359af4cb42c172b52060c2.jpg" 
              alt="TikTok Shop" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* User Details */}
          <div className="flex flex-col">
            <h2 className="text-white text-[17px] font-bold leading-none tracking-tight">
              bintehawa48@outlook.com
            </h2>
            <span className="text-gray-400 text-xs mt-1 font-medium">ID:20035</span>
          </div>
        </div>

        {/* V5 Badge */}
        <div className="w-11 h-11 bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden border border-zinc-800">
          <img 
            src="https://sell.tkdropseller.com/uploads/20251129/02a50804500f8d0911ca463c3e747267.png" 
            alt="V5 Badge"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating White Order Status Card */}
  <div className="bg-white rounded py-5 px-4 flex justify-between items-center shadow-xl">
  
  {/* To Pay */}
  <StatusItem 
    icon={<img src="data:image/png;base64,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" className="w-6 h-6 object-contain" alt="" />} 
    label="To pay" 
  />

  {/* To Pickup */}
  <StatusItem 
    icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAgMAAACJFjxpAAAAAXNSR0IB2cksfwAAAAlwSFlzAADsOAAA7DgBcSvKOAAAAAlQTFRFAAAAIyMjAJmVFludxAAAAAN0Uk5TAP//RFDWIQAACm9JREFUeJzt3UuS1DgQBuBqItiw5xKcgiPMYrqD5Rylg0OwniXRsJgjcIq+BPvZEAFTD5ecqfxTluzMdPWQ2gCFZX8lpVy2bKfvDjuXuwQkIAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAhJwe4DXfzhs5sc/3QCX7TcENeDuT5ftHw7fv/UB7p22fzh86QI4dcCpKJ1QAfwaQGsCDnCLgFPBUcABb987An59XQZ49oDSBwzgGIKnAsOQAVx7QOkDBvDtAdwHFOA6Bk4FjQMKcA4BHAQU4BwCOAgowDsEYBAQgHsIwCAgAPcQgEFAAO4hAIPglgD+MYiicAYExCCKwhsCBAwCNAxmQEAMoii8IUDEIADD4HYAIYMADIMEFEDIbgDsCCBAOY88PE1/PnR+fi0kvnsA+AxmC4DsY3TAvIx2Jr8BMAeY+HYSoDfAekBj7RKgT+dsAJQO7gDoPbABUPpAB5RI1YbAJoC+egFohMAWQGng2wc0YnALoETh7QMag2ALoAyDBCRgEdDYEW4BqOtPQAISkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCQgAQlIQAIS8JIBb/4+/PvXnoAn9rd4wLEBDlMT7AN4qv8aDDg3wNQEuwC0v0cBpga4NMEegKfy4cMugFefy4fHJtgB8O6xfPjzww4A0gCHw/NjPIA0wKkJwgEfPrOPn99FAx4f2cc/X0UDtJKABCQgAQlIQAISkIAERAN+fnzcF/D8kZ8fRAOOJ4XsDCkc8Px4eMWbIBZwbIBD1QSxgOfTtnkTxAIuW2NNEAqYJklZE4QCrhujTRAJmBqAN0Ek4KH9oTugNACZMQwFPKBPz3sGV0AJOLap0gSBgOdH+vG1CUi/OAGu37X6qteP4wC8AUoT1B/bA6YxL/p6grUGgQ1g+qrymz5BlwPgHIVgQ+T6kS/g3AdoQ/MVNF+AuqH5GqIz4NgEONbffGpv3wqwviQgAQlIQAIS8HsB0LoCASTBGcmqEge4Z//6Un/sDriv/v2l+twbUG+/rDAIABLcTXEQA4C5xS7ZbUIASnK1c2qTEIAMgHmdEQA1udupEyIAWgOcVxoAaKR4PDaBP6CZ3u/7N39AM8flr6/ugIX8ht/fegMW8hv+eO0N0IcAL16A7gSPXoDeBvAC9KfYdAL055l1AnT3gBNgIMeoD2Ag068PoL8HfAAjWV5dACO5ll0AAz3gAhjKs+sBGMp27QEY6QEPwFiqZQcADoFv78MAMgSmVKNQ5gAQIVCyTKLOsQeIrdAsl+rZuiGgbmiWZVO2gT2gCoEq1ayIA3sAb2WR7LcOUXNA1ciyehUG5gDexiDXb9UJ5gDexKi2Mm9nBWCrh8mOeRNYA3gI4MrMWOfC3QpgX0/J9txcZiuAhYBWlzZBPU63AlrrLoU1QbUBS4Ca6pgFii2Arpo2QHU/Ae2oirkRQBuXhld1o4O22HaA8tXEPSWkp6pIsQPQFYubXZTltgPIN6t7QO0DvoVtABqDpAemG57I3SbKgpsB5ItVY+BUlHHAo9AMQFcLAMqSWwHke9GGnW77o1FI+oBH4TYAiUFaDwC0Rc0A7Guhx4BJY9kBSLuyjkUAEgT8wH0LQFspAmhYKwCrBp/EnrvLDjD3K49sCFAWNgLwsQ0ByuuCNgHmVuW7VwggQUC3YQTgtfDT+HjpLQD1LUUYgN+YtAUw92p1lIMBePEXDVDfQoUBuMdsAFUlJSVEiUIrAFxhAwDBJoD6fE8BzEFgA5j7dHdAfU6mAGAFE0BdR8tLUvrMBgBbtA9A+swCIE7LNQB6edsGgP66OA2AyBYAMTMTBEAhhQDHg/RJgsLWH3A6UZzOkbwAogoDnM9SHtQq6wH6bgDkL5tOlEGjGQDk5BgFXE7Vp7M08A5Dd8DlPNEDUMaUnB8FSdMetDreAP54mg9Azk8SwPUJwQugdJsFoPFSTJBA7bInAHFjAJA1ZgBLYUe2Egaon0e1BOg7QpTBrR6HpdJ2AJikL4D5keCdAPNzwo4AcJ0GpJCbAPJdm6sBYEgLAEkhVwPmK+yeAFIcAeBCjQ6QtV4uoPFT0AMoHbcdACoAwHXmXIydBEQBrpdv7ADXnSq6XgsA15MkUe13AZSLJ3sByvUrewC6aUECyiXEa+wGA+bLVzsB5iuIdoDG8YgEzDMVYvcRAiAXEPcBkKvY9gB040gNIHNF4t3XEQB6EXsXAM1asQeAXcPeA0B7YBcAvnoYB+CZY3YA8MQpOwCUS2dhABaCewCq1DXhgDp5UTig6oF4QH3NIhog0kdFA0T2pGiASB8VDKhDMBwg81fFAK5T5CCDWSxA9kAQ4DpDCzKYhQJQsroYgLypNRggb+uNBpyjEISgBwA+1HAOApjELubc8NwHOF9iFODYBDiLnx2gNUHRKDEzJL8XQH2ypbNaAl4uoDVd3ygx1wsSEAtQnzBDxfCyXevC5Uit/wFg6Mcg6Op5CGDhiGQJ4HsLh16C7iGJBQztiWQllxuZlgHOd1IFAwb2RKY3s635MTC9na9xQ+NInRcMaNzUqpaou2qDAQPjsOyHLABrdoWgisvN7Voxvrl9fE/kBegeh15PWHQPA1TD5SGXRYDxUzbD80pGgPEdARo3Lo96jVRwedpOKXOfWQM6o9DvecO9AOojn0qBYJeHXnGxf+hVfex3ZHGbJ693B3RFof2j33NUddXCS7s8/g9L7+P/IzMuWgIEWHoTIKwDdARBbwqIEYCWBAOWub/aSTBWAhardacBGQFoK0WlOxHK0JzT3KyLQdCdCmYlYDEItEUFYN2c02LX9acDGgKoaY76lxSAoV2hkhIKlOWUUGumfBq5rroXlIC1Udis15EWbPxEi9VaqNeRGG3w+EquuFVPy6FHAcqP1UJpZL3rXAwA1p0dNeE96QFFTtcipbkGm+mptyVI1NPa0lyD9/VCtKhN0Epk2QBMTUBzDS7k59a6jrLVJJkSMC1Kcw0u5OfelCYUtO7lC9Gbkpo9cNCagNVSE6WClZ+XpbdlLebn3pIqVst9TVP9LadoR03AvpkIVGPAYrpgscCdsuCpnLU01V9Hjni5L7hv//8MUIbBIGApZbTooxbgvDTNJ7E0CE6lnTRb7qtmgDIORwHttOEyRghANvAqAJsCayVVdwO0UsfLYUoAchisBFx7Wn4j8HNFANi7BqAWsJsgALl+cwA4YqAA0WTmALCnpgCY6N4SgI5YKEAEgTUA/VhSgNiANQD9VjIASvVvCIDHjAyAdtyDP0atAg9XGKD6itYAeMDGAXwLKw5IWgUftXMAHwfGAHzMzAHgAHbooLRZ8CFzBQBp7kcOy1tFOW+qAHQT4ycmzaKcOdYAOfc4cGrWKtqJYw0AF2S7T06bRZs9EIAiGD89bxbtxFUCVpalFyxq0ydmgIXe0ScvzAALL9nU/scOsPCaUX9AKwoa81eGgEYUNKbdLAHNl+1GANQmaM07mgJaL1wOAbReOR0DaLx0OwigTvaFAeC5RSigEixOvNsDuq+iuAHG7kVwAYyUBCQgAQlIQAISkIAEJCABCUhAAhKwO+A/tGFtaoi2eacAAAAASUVORK5CYII=" className="w-6 h-6 object-contain" alt="" />} 
    label="To Pickup" 
  />

  {/* Shipped */}
 <StatusItem 
  icon={
    <img 
      src="data:image/png;base64,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" 
      className="w-7 h-7 object-contain" // Size thoda bada kiya taaki badge fit ho
      alt="shipped" 
    />
  } 
  label="Shipped" 
   
/>

  {/* Received */}
  <StatusItem 
    icon={<img src="https://sell.tkdropseller.com/assets/4_received-DPgHg8P6.png" className="w-6 h-6 object-contain" alt="" />} 
    label="Received" 
  />

  {/* Completed */}
  <StatusItem 
    icon={<img src="https://sell.tkdropseller.com/assets/4_received-DPgHg8P6.png" className="w-6 h-6 object-contain" alt="" />} 
    label="Completed" 
    
  />

</div>
    </div>
    {/* Top Balance Card Section */}




  
  {/* White Balance Card */}
  <div className=" max-w-xl mx-auto bg-black p-4 mt-4 rounded-b-xl relative shadow-lg bg-white p-5 rounded-xl shadow-lg border border-zinc-50 relative mb-4">
    
    {/* Pending Amount Row */}
    <div className="flex items-center gap-2 mb-4">
      <h2 className="text-xl font-bold text-zinc-900">Pending Amount:</h2>
      <div className="flex items-center gap-1">
        <span className="text-xl font-semibold text-red-500">$ 59985.70</span>
        {/* Refresh Icon */}
        <button className="text-zinc-400 hover:rotate-180 transition-transform duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
        </button>
      </div>
    </div>

    {/* Balance Row */}
    <div className="flex items-center gap-4 mb-3">
      <span className="text-sm text-zinc-600 ">Balance</span>
      <span className="text-lg font-bold text-zinc-900">$ 7213.50</span>
    </div>

    {/* Total Income Row */}
    <div className="flex items-center gap-4">
      <span className="text-sm text-zinc-600 ">Total Income</span>
      <span className="text-lg font-bold text-zinc-900">$ 450006.55</span>
    </div>
  </div>

  {/* Action Buttons: Exact Image jaisa layout */}
  <div className=" max-w-xl mx-auto flex gap-4">
    <button className="flex-1 bg-[#009b95] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm active:opacity-90">
      <img src="https://sell.tkdropseller.com/assets/zr-DRUyIT3u.png" className="w-6 h-6 object-contain" alt="" />
      Recharge
    </button>
    <button className="flex-1 bg-[#ff3366] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm active:opacity-90">
      <img src="https://sell.tkdropseller.com/assets/zc-H4VK4NAS.png" className="w-6 h-6 object-contain" alt="" />
      Withdraw
    </button>
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
<div className="max-w-xl mx-auto px-4 mt-6 mb-12"> 
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