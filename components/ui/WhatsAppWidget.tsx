'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppWidgetProps {
  phoneNumber: string;
}

const WhatsAppWidget = ({ phoneNumber }: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      const waLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(waLink, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const quickMessages = [
    "Hi! I'd like to order a cake",
    "I have a question about cakes",
    "I want to customize a cake",
    "I'd like to know the pricing"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-cake-lg p-4 border border-cake-primary/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cake-primary to-cake-accent rounded-full flex items-center justify-center">
                  <FaWhatsapp size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Creams on Cakes</h4>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-3">Quick messages:</p>
              <div className="flex flex-wrap gap-2">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(msg)}
                    className="text-xs px-3 py-1.5 bg-cake-rose rounded-full text-gray-700 hover:bg-cake-primary hover:text-gray-900 transition-colors"
                  >
                    {msg.split(' ').slice(0, 3).join(' ')}...
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-cake-primary"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-2.5 bg-gradient-to-br from-cake-primary to-cake-accent rounded-xl text-white hover:shadow-cake-lg transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-br from-cake-primary to-cake-accent rounded-full shadow-cake-lg flex items-center justify-center text-white"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <FaWhatsapp size={24} className="text-[#25D366]" />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;

