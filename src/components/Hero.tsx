import { motion, useScroll, useTransform } from "motion/react";
import { Ghost, ShieldAlert, Share2, Check, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@base-ui/react/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareData = {
      title: "Jason do Semáforo",
      text: "Confira o Jason do Semáforo - O terror que anima sua festa!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log("Error sharing", err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section 
      id="inicio" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center border-b border-white/5 pt-20 md:pt-0 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 right-[5%] -z-10 select-none grayscale hover:grayscale-0 transition-all duration-500"
      >
        <img 
          src="input_file_5.png" 
          alt="Jason Selfie" 
          className="w-[300px] md:w-[500px] opacity-20 hover:opacity-40 transition-opacity"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-20 left-[5%] text-primary/10 -z-10 select-none"
      >
        <span className="text-[200px] font-black uppercase leading-none opacity-10">13</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 right-[15%] -z-20 select-none pointer-events-none"
      >
        <img 
          src="input_file_11.png" 
          alt="Branding Asset" 
          className="w-[200px] md:w-[300px] grayscale brightness-50"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>

      {/* Left Pane - Huge Text */}
      <div className="flex-1 md:flex-[0_0_45%] h-full flex flex-col justify-center px-10 md:px-20 border-r border-white/5 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h1 className="text-huge text-primary">
            JASON<br />DO<br />SEMÁFORO
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground italic font-light max-w-xs leading-tight">
            "O seu medo é o meu riso. O seu riso é o meu medo."
          </p>
        </motion.div>
      </div>

      {/* Right Pane - Visual / CTA */}
      <div className="flex-1 h-full flex flex-col justify-center px-10 md:px-20 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-primary to-transparent opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 max-w-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="section-label">Disponível para Eventos</span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <p className="text-4xl font-black uppercase text-foreground leading-none">
              PROFISSIONAL EM HORROR E ENTRETENIMENTO
            </p>
            <motion.button
              whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className={`mt-1 p-2 transition-colors cursor-pointer rounded-full ${
                copied ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
              title={copied ? "Copiado!" : "Compartilhar site"}
            >
              {copied ? <Check size={20} /> : <Share2 size={20} />}
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px rgba(235,33,46,0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                nativeButton={false}
                render={<a href="#contato" />}
                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm inline-block text-center cursor-pointer transition-colors duration-300"
              >
                Agendar Evento
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                nativeButton={false}
                render={<a href="#servicos" />}
                className="px-8 py-4 border border-white/10 hover:border-primary text-foreground font-bold uppercase tracking-widest text-sm inline-block text-center cursor-pointer transition-colors duration-300"
              >
                Nossos Serviços
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sticky WhatsApp Button */}
      <motion.a
        href="https://wa.me/555591910911"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 bg-[#25d366] text-white font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center gap-3 hover:bg-[#128c7e] transition-all duration-300 group select-none"
      >
        <MessageCircle size={20} className="fill-white" />
        <span className="text-[10px]">WhatsApp</span>
        
        {/* Subtle Pulse Effect */}
        <motion.span 
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-[#25d366] pointer-events-none" 
        />
      </motion.a>
    </section>
  );
}
