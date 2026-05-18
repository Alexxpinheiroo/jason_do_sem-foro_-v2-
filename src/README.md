# O Jason do Semáforo — Website Oficial (V2)

Este é o website oficial e portfólio digital do personagem **"O Jason do Semáforo"** (Marcio Campana), profissional em animação de horror, estátuas vivas e entretenimento para eventos de alto impacto (festas, casamentos, Halloween e aniversários). 

A aplicação foi completamente reconstruída do zero, migrando de uma estrutura estática tradicional para uma arquitetura moderna baseada em componentes reutilizáveis, tipagem estática e otimização extrema de performance e SEO.

---

## 🛠️ Tecnologias e Arquitetura

O projeto adota as melhores práticas do desenvolvimento web moderno:

- **React.js & TypeScript (`.tsx`):** Arquitetura baseada em componentes modulares com tipagem estática rigorosa, garantindo código limpo, previsível e de fácil manutenção.
- **Tailwind CSS:** Framework utilitário para uma estilização fluida, responsiva e focada em performance, permitindo o refinamento milimétrico da interface escura (*Dark Mode*).
- **Componentes UI Customizados:** Utilização de uma camada de design customizada (botões, cartões, caixas de diálogo e inputs estruturados) para garantir consistência visual e acessibilidade.
- **Vite / Ferramentas de Módulo Avançadas:** Configuração de build ultra-rápida nativa com suporte a módulos JavaScript modernos.
- **Otimização de Metadados:** Integração completa com o protocolo *Open Graph* (Facebook/Instagram) e *Twitter Cards* para partilha rica em redes sociais.

---

## 🚀 Funcionalidades Premium

- **Design Imersivo de Horror:** Interface cinematográfica com paleta de cores focado no preto profundo e vermelho sangue, tipografia agressiva e efeitos visuais verticais que evocam a atmosfera de suspense.
- **Navegação SPA (Single Page Application):** Transições suaves e fluidas entre as secções (`Início`, `Sobre`, `Galeria`, `Serviços`, `Contato`) sem recarregamento de página.
- **Componentização Modular:** Estrutura dividida de forma inteligente (ex: `Hero.tsx`, `Galeria.tsx`, `SocialShare.tsx`, `Contato.tsx`), isolando a lógica de cada secção.
- **Central de Metadados Dinâmica:** Ficheiro de configuração `metadados.json` estruturado para gestão simplificada de SEO e indexação em motores de busca.
- **Botão de Ação Direta (CTA):** Encaminhamento estratégico para agendamentos e orçamentos via WhatsApp de forma flutuante e responsiva.
- **Controlo de Áudio Atmosférico:** Sistema integrado para reprodução de banda sonora temática com controlos de ativação pelo utilizador.

---

## 📂 Estrutura do Projeto

A nova organização dos diretórios reflete a maturidade da arquitetura:

```text
├── componentes/
│   ├── ui/               # Componentes base de interface (botão, cartão, diálogo, input)
│   ├── Sobre.tsx         # Secção biográfica do personagem
│   ├── Herói.tsx         # Secção de impacto inicial (Hero Section)
│   ├── Galeria.tsx       # Portfólio de media e interações
│   ├── Serviços.tsx      # Detalhes das modalidades de contratação
│   └── Contato.tsx       # Formulário funcional de captação de clientes
├── lib/
│   └── utils.ts          # Funções utilitárias e auxiliares de estilo
├── metadados.json        # Configurações globais de SEO e Open Graph
├── indice.html           # Ponto de entrada HTML5 otimizado
└── Aplicativo.tsx        # Componente raiz da aplicação