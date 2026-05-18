import { motion, useScroll, useTransform } from "motion/react";
import { Ghost, ShieldAlert, Share2 } from "lucide-react";
import { useRef } from "react";
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
      // We could use a more subtle toast here, but for now a simple alert or just feedback is fine
      // Since I don't have a toast library installed, I'll just change the icon state briefly or something
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
              className="mt-1 p-2 text-muted-foreground transition-colors cursor-pointer"
              title="Compartilhar site"
            >
              <Share2 size={20} />
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              nativeButton={false}
              render={<a href="#contato" />}
              className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:translate-x-1 transition-transform inline-block text-center cursor-pointer"
            >
              Agendar Evento
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#servicos" />}
              className="px-8 py-4 border border-white/10 hover:border-primary text-foreground font-bold uppercase tracking-widest text-sm transition-colors inline-block text-center cursor-pointer"
            >
              Nossos Serviços
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
