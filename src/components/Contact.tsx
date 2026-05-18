import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SocialShare } from "./SocialShare";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        alert("Mensagem enviada com sucesso!");
      }, 2000);
    }
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
                <div className="space-y-1">
                  <Input 
                    className={`bg-black h-14 rounded-none px-6 text-[10px] font-black tracking-[0.2em] focus:border-primary focus:ring-0 focus:bg-black/80 transition-all duration-300 placeholder:text-muted-foreground/30 ${errors.name ? 'border-red-500' : 'border-white/10'}`} 
                    placeholder="NOME" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <Input 
                    type="email" 
                    className={`bg-black h-14 rounded-none px-6 text-[10px] font-black tracking-[0.2em] focus:border-primary focus:ring-0 focus:bg-black/80 transition-all duration-300 placeholder:text-muted-foreground/30 ${errors.email ? 'border-red-500' : 'border-white/10'}`} 
                    placeholder="EMAIL" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <Textarea 
                    className={`bg-black min-h-[150px] rounded-none p-6 text-[10px] font-black tracking-[0.2em] focus:border-primary focus:ring-0 focus:bg-black/80 transition-all duration-300 placeholder:text-muted-foreground/30 ${errors.message ? 'border-red-500' : 'border-white/10'}`} 
                    placeholder="MENSAGEM" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-[9px] text-red-500 font-bold uppercase tracking-tighter">{errors.message}</p>}
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blood-light font-black uppercase tracking-[0.4em] h-20 rounded-none text-xs transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10 hover:border-primary/50 shadow-xl hover:shadow-[0_0_30px_rgba(235,33,46,0.3)]"
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
