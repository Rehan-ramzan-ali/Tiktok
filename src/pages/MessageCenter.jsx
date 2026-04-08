import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MessageCenter = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Read', 'Unread'];

  const allMessages = [
    { id: 1, message: 'Order Notification', time: '2026-04-08 18:46:01', type: 'System Message', sender: 'System', status: 'Read' },
    { id: 2, message: 'Withdrawal review notification', time: '2026-04-07 23:26:11', type: 'System Message', sender: 'System', status: 'Read' },
    { id: 3, message: 'Notification', time: '2026-04-07 16:16:37', type: 'User Notification', sender: 'TikTok', status: 'Read' },
    { id: 4, message: 'Withdrawal review notification', time: '2026-04-07 16:13:17', type: 'System Message', sender: 'System', status: 'Read' },
    { id: 5, message: 'Order Notification', time: '2026-03-21 17:47:01', type: 'System Message', sender: 'System', status: 'Unread' },
  ];

  // Filter messages based on tab
  const filteredMessages = allMessages.filter(msg => {
    if (activeTab === 'All') return true;
    return msg.status === activeTab;
  });

  return (
    <div className="max-w-xl mx-auto mt-3 bg-white min-h-screen font-sans">
      {/* Black Header */}
      <div className="bg-black text-white p-4 flex items-center sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="flex items-center text-sm hover:opacity-80">
          <ChevronLeft size={20} /> Go Back
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-bold">Message</h1>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-100 sticky top-[52px] bg-white z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium transition-all relative ${
              activeTab === tab ? 'text-rose-500' : 'text-gray-500'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-rose-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Message List */}
      <div className="bg-[#FDFDFD]">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg) => (
            <div key={msg.id} className="p-4 border-b border-gray-50 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-xs w-24">Message</span>
                <span className="flex-1 text-sm font-medium text-gray-800 text-right">{msg.message}</span>
              </div>
              
              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-xs w-24">Sent Time</span>
                <span className="flex-1 text-xs text-gray-600 text-right">{msg.time}</span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-xs w-24">Type</span>
                <span className={`flex-1 text-xs font-semibold text-right ${
                  msg.type === 'System Message' ? 'text-emerald-500' : 'text-blue-500'
                }`}>
                  {msg.type}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-gray-400 text-xs w-24">Sender</span>
                <span className="flex-1 text-xs text-gray-800 text-right font-medium">{msg.sender}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 opacity-40">
            <div className="w-16 h-16 border-2 border-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <div className="w-8 h-1 bg-gray-200" />
            </div>
            <p className="text-gray-400 text-sm italic">No records</p>
          </div>
        )}

        <div className="text-center py-8 text-gray-300 text-xs tracking-widest">
          No more
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;