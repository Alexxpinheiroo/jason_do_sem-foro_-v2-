import { motion, useScroll, useTransform } from "motion/react";
import { Camera, Instagram } from "lucide-react";
import { useRef } from "react";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="galeria" 
      ref={containerRef}
      className="py-24 px-6 border-b border-white/5 relative overflow-hidden"
    >
      {/* Parallax Background Background Text */}
      <motion.div 
        style={{ x: xOffset, opacity }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[300px] font-black text-primary/5 whitespace-nowrap pointer-events-none -z-10 select-none uppercase"
      >
        GALERIA DO TERROR • JASON • 
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="space-y-4">
          <span className="section-label">Mídia</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-foreground leading-tight">
            Flagras de<br /><span className="text-primary tracking-widest">TERROR REAL</span>
          </h2>
        </div>


        {/* Instagram Widget Container */}
        <div className="w-full space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Instagram className="text-white" />
                    </div>
                    <div>
                        <p className="font-black uppercase text-sm tracking-widest text-foreground">@jasondosemaforo</p>
                        <p className="text-[10px] uppercase tracking-widest text-foreground/40">Siga os bastidores do terror</p>
                    </div>
                </div>
                <a 
                    href="https://www.instagram.com/jasondosemaforo/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-8 py-3 border border-primary/20 hover:border-primary text-primary font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-primary/5"
                >
                    ABRIR NO APP
                </a>
            </div>

            {/* AREA PARA COLAR O WIDGET (IFRAME OU SCRIPT) */}
            <div className="w-full border border-white/5 bg-zinc-950/50 backdrop-blur-sm min-h-[600px] flex items-center justify-center p-4">
                <div className="w-full h-full text-center">
                    {/* 
                        INSTRUÇÕES:
                        Substitua este comentário ou o iframe abaixo pelo código do seu widget 
                        (Elfsight, LightWidget, SnapWidget, etc.)
                    */}
                    <iframe 
                      src="about:blank" 
                      className="w-full border-none overflow-hidden min-h-[600px]"
                      title="Instagram Feed Widget"
                    ></iframe>
                </div>
            </div>
        </div>

        <div className="flex justify-end">
            <a 
                href="https://www.instagram.com/jasondosemaforo/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 text-primary font-black tracking-widest uppercase text-[10px]"
            >
                VER INSTAGRAM @jasondosemaforo
                <div className="w-8 h-px bg-primary group-hover:w-12 transition-all" />
            </a>
        </div>
      </div>
    </section>
  );
}

const Ghost = ({ size, className }: { size: number; className?: string }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>
    </svg>
)
