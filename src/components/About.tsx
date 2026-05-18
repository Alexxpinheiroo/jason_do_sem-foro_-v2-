import { motion, useScroll, useTransform } from "motion/react";
import { BookOpen } from "lucide-react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section 
      id="sobre" 
      ref={containerRef}
      className="py-24 px-6 border-b border-white/5 relative overflow-hidden"
    >
      <motion.div 
        style={{ rotate, scale, opacity: 0.15 }}
        className="absolute -bottom-20 -right-20 pointer-events-none -z-10"
      >
        <img 
          src="input_file_6.png" 
          alt="Jason Heart Hands" 
          className="w-[400px] md:w-[600px]"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <div className="md:flex-[0_0_30%]">
          <span className="section-label">A História</span>
          <h2 className="text-4xl font-black uppercase text-foreground leading-tight">
            DE COSPLAY IMPROVISADO A ÍCONE PROFISSIONAL
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-8 text-base font-light leading-relaxed text-muted-foreground"
        >
          <p>
            Tudo começou como uma brincadeira, inspirada por um evento de cosplay em Santa Maria, RS. Sem um traje formal, a criatividade do senhor Marcio Campana deu vida ao personagem: uma máscara encontrada em casa, roupas velhas cortadas e tingidas de vermelho com um spray. Assim surgiu o primeiro Jason.
          </p>
          
          <p>
            Durante o evento, a performance chamou a atenção, e um amigo sugeriu que ele "atuasse" como o Jason real. Essa observação foi o catalisador. O senhor Marcio dedicou-se a uma maratona de filmes, estudando os movimentos e a presença do personagem.
          </p>

          <p className="border-l-2 border-primary pl-6 py-2 text-foreground font-medium italic">
            "O personagem se tornou uma figura conhecida em Santa Maria, especialmente em sextas-feiras 13, quando se apresentava nos semáforos da cidade."
          </p>

          <p>
            A partir de 2022, o personagem Jason fixou residência em Santa Catarina, onde segue atuando, transformando celebrações em experiências inesquecíveis através da arte da estátua viva e performance temática.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
