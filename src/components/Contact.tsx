import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SocialShare } from "./SocialShare";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
           <span className="section-label">Contato</span>
           <h2 className="text-4xl md:text-6xl font-black uppercase text-foreground leading-tight">
             VAMOS INICIAR UM<br /><span className="text-primary">PROJETO JUNTOS</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {/* Info Panels */}
          <div className="bg-black p-12 space-y-12">
            <div className="space-y-2">
              <span className="text-[10px] text-primary font-black uppercase tracking-widest">WhatsApp</span>
              <p className="text-2xl font-black text-foreground">+55 55 9191-0911</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] text-primary font-black uppercase tracking-widest">Email</span>
              <p className="text-xl font-black text-foreground break-all">mac.marciocampana@gmail.com</p>
            </div>
            
            <div className="pt-6 border-t border-white/5">
                <SocialShare label="Espalhe o Medo" />
            </div>
          </div>

          {/* Form Panel */}
          <div className="bg-zinc-900/50 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                <Input className="bg-black border-white/5 h-14 rounded-none" required placeholder="NOME" />
                <Input type="email" className="bg-black border-white/5 h-14 rounded-none" required placeholder="EMAIL" />
                <Textarea className="bg-black border-white/5 min-h-[150px] rounded-none" required placeholder="MENSAGEM" />
                <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blood-light font-black uppercase tracking-[0.3em] h-16 rounded-none text-xs"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR PROPOSTA"}
                </Button>
            </form>
          </div>
        </div>

        <div className="bg-primary p-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white space-y-2">
                <span className="text-[10px] uppercase font-black tracking-widest opacity-80">Atendimento</span>
                <p className="text-3xl font-black italic select-none">SEG - SEX | 10H - 20H</p>
            </div>
            <a 
              href="https://wa.me/555591910911" 
              target="_blank"
              className="px-10 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors"
            >
              CHAMAR NO WHATSAPP
            </a>
        </div>
      </div>
    </section>
  );
}
