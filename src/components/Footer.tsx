import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-20 px-10 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="space-y-6">
           <motion.h2 
             animate={{ 
               opacity: [0.1, 0.25, 0.1],
               scale: [1, 1.02, 1]
             }}
             transition={{ 
               duration: 8, 
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="text-huge text-primary select-none pointer-events-none"
           >
             JASON
           </motion.h2>
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-1 border-l-2 border-primary/20 pl-6"
           >
              <a 
                href="https://alexportfolioef.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-70 transition-opacity"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground">JC Informática TechSupport</p>
              </a>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">CNPJ: 55.168.791/0001-55</p>
           </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-right space-y-2"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
            &copy; 2025 JASON DO SEMÁFORO
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
