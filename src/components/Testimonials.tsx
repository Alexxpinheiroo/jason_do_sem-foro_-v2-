import { motion } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mariana S.",
    event: "Festa de 15 Anos",
    text: "O Jason foi o ponto alto da minha festa! Ninguém esperava a entrada dele. Foi assustador e muito divertido ao mesmo tempo, as fotos ficaram incríveis!",
  },
  {
    name: "Ricardo & Ana",
    event: "Casamento Temático",
    text: "Contratamos para a hora da gravata e foi um sucesso total. Ele interagiu com todo mundo sem perder o personagem. Profissionalismo impecável.",
  },
  {
    name: "Bruno L.",
    event: "Evento Corporativo Halloween",
    text: "A presença dele é magnética. Ele consegue manter a tensão e depois descontrair com os convidados. Excelente performance de estátua viva.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-black border-b border-white/5 relative overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-primary/5 select-none pointer-events-none -z-10 uppercase">
        VÍTIMAS
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <span className="section-label">Depoimentos</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground leading-tight">
            RELATOS DE QUEM<br /><span className="text-primary">SOBREVIVEU À FESTA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-12 flex flex-col justify-between group hover:bg-zinc-900 transition-colors"
            >
              <div className="space-y-6">
                <Quote className="text-primary opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
                <p className="text-lg font-light italic text-muted-foreground leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="font-black uppercase tracking-widest text-foreground text-sm">{t.name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
