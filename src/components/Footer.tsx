export function Footer() {
  return (
    <footer className="py-20 px-10 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="space-y-6">
           <h2 className="text-huge text-primary opacity-20 select-none">JASON</h2>
           <div className="space-y-1 border-l-2 border-primary/20 pl-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground">JC Informática TechSupport</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">CNPJ: 55.168.791/0001-55</p>
           </div>
        </div>
        
        <div className="text-right space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
            &copy; 2025 JASON DO SEMÁFORO
          </p>
          <p className="text-[10px] uppercase font-light tracking-[0.2em] text-primary">
            EST. SANTA MARIA - SC
          </p>
        </div>
      </div>
    </footer>
  );
}
