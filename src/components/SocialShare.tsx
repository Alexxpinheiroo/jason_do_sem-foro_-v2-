import { Facebook, Twitter, MessageCircle, Share2 } from "lucide-react";
import { motion } from "motion/react";

interface SocialShareProps {
  label?: string;
}

export function SocialShare({ label = "Compartilhar" }: SocialShareProps) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = `Confira o Jason do Semáforo - O terror que anima sua festa! ${url}`;

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      color: "hover:text-[#25D366]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      color: "hover:text-[#1DA1F2]",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <div className="flex gap-6">
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className={`text-muted-foreground transition-colors ${link.color}`}
            title={`Compartilhar no ${link.name}`}
          >
            <link.icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
