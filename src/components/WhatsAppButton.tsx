import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/555591910911"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(37,211,102,0.3)] z-50 transition-colors hover:bg-[#128c7e]"
      title="Fale com o Jason no WhatsApp"
    >
      <img 
        src="input_file_9.png" 
        alt="WhatsApp" 
        className="w-10 h-10 object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chamar no WhatsApp
      </span>
    </motion.a>
  );
}
