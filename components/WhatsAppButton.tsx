'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '+447778677675' // Replace with your WhatsApp number
  const message = 'Hello, I am interested in your removal services. Could you please provide me with a quote at your earliest convenience?'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        {/* Animated ring effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping-once transition-opacity duration-300"></div>
        
        {/* Floating circles decoration */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
        
        <FaWhatsapp size={28} className="text-white z-10" />
        <span className="font-semibold text-sm sm:text-base hidden sm:inline z-10">
          Chat with Us
        </span>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </a>
      
      {/* Tooltip for mobile */}
      <div className="sm:hidden absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with Us
      </div>
    </motion.div>
  )
}