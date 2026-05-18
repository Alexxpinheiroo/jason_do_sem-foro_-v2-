import { motion } from "motion/react";
import { PartyPopper, Calendar, Heart, Building2, UserCircle, Ghost } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialShare } from "./SocialShare";

const SERVICES = [
  {
    title: "15 Anos",
    description: "Sustas e diversão garantida para debutantes corajosas.",
    icon: Ghost,
  },
  {
    title: "Aniversários",
    description: "Uma surpresa aterrorizante para seus convidados.",
    icon: PartyPopper,
  },
  {
    title: "Casamentos",
    description: "Animação diversificada para o dia mais especial.",
    icon: Heart,
  },
  {
    title: "Eventos Corporativos",
    description: "Engajamento e descontração para sua empresa.",
    icon: Building2,
  },
  {
    title: "Halloween",
    description: "A presença oficial do terror no seu evento.",
    icon: Calendar,
  },
  {
    title: "Festas Temáticas",
    description: "Experiência imersiva e inesquecível.",
    icon: Ghost,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <span className="section-label">Performance</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground leading-tight">
            Animação de<br /><span className="text-primary">Alto IMPACTO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-10 group hover:bg-zinc-900 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-primary font-black uppercase tracking-widest">0{index + 1}</span>
                  <service.icon className="text-primary/20 group-hover:text-primary transition-colors" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-2">
                <div className="flex items-center gap-6">
                    <div className="flex-1 h-px bg-white/5" />
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-sm animate-pulse">
                      Contrate Agora
                    </p>
                    <div className="flex-1 h-px bg-white/5" />
                </div>
            </div>
            <div className="w-full md:w-auto">
                <SocialShare label="Divulgue o Terror" />
            </div>
        </div>
      </div>
    </section>
  );
}
