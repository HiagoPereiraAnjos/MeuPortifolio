export const PORTFOLIO_DATA = {
  name: "Hiago Pereira",
  role: "Especialista em React & Spring Boot",
  about:
    "Sou desenvolvedor web focado na criação de sistemas completos e funcionais, com experiência em React, JavaScript e Spring Boot. Já desenvolvi aplicações reais para hotelaria e restaurante, incluindo sistemas de gestão e plataformas web com deploy em produção. Meu objetivo é construir soluções modernas, eficientes e com impacto real no negócio.",
  skills: [
    { name: "React", category: "Frontend", icon: "react" },
    { name: "JavaScript", category: "Frontend", icon: "js" },
    { name: "TypeScript", category: "Frontend", icon: "ts" },
    { name: "Spring Boot", category: "Backend", icon: "spring" },
    { name: "Java", category: "Backend", icon: "java" },
    { name: "Tailwind CSS", category: "Design", icon: "tailwind" },
    { name: "SQL", category: "Database", icon: "sql" },
    { name: "PostgreSQL", category: "Database", icon: "postgres" },
  ],
  projects: [
    {
      title: "Breakfast Control",
      description:
        "Hotéis perdiam controle de acesso ao café da manhã e sofriam com filas na operação. O sistema centraliza hóspedes, valida QR em segundos e melhora a previsibilidade entre recepção e restaurante.",
      demoUrl: "https://cafemanha-pro.vercel.app/",
      codeUrl: "https://github.com/HiagoPereiraAnjos/cafemanha-pro",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node", "SQLite"],
      image: "/assets/breakfast-control/screen-01.png",
      gallery: [
        "/assets/breakfast-control/screen-01.png",
        "/assets/breakfast-control/screen-02.png",
        "/assets/breakfast-control/screen-03.png",
        "/assets/breakfast-control/screen-04.png",
        "/assets/breakfast-control/screen-05.png",
      ],
    },
    {
      title: "Restaurant Management System",
      description:
        "O fluxo operacional entre PDV, cozinha e caixa gerava atrasos e retrabalho no atendimento. A solução integra pedidos, comandas e fechamento para reduzir erros e acelerar a operação.",
      demoUrl: "https://restaurantedemoportifolio.vercel.app/",
      codeUrl: "https://github.com/HiagoPereiraAnjos/RestaurantePortifolio",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node", "SQLite"],
      image: "/assets/restaurante/screen-01.png",
      gallery: [
        "/assets/restaurante/screen-01.png",
        "/assets/restaurante/screen-02.png",
        "/assets/restaurante/screen-03.png",
        "/assets/restaurante/screen-04.png",
        "/assets/restaurante/screen-05.png",
      ],
    },
    {
      title: "Landing Page A Reis (SEO)",
      description:
        "A marca precisava converter melhor o tráfego orgânico em oportunidades comerciais. A landing page foi estruturada com SEO técnico, narrativa objetiva e CTA claro para aumentar conversão.",
      demoUrl: "https://areisempresarial.com.br",
      codeUrl: "https://github.com/HiagoPereiraAnjos/A.REIS",
      stack: ["React", "TypeScript", "Tailwind CSS", "SEO"],
      image: "/assets/areis/screen-01.jpg",
      gallery: [
        "/assets/areis/screen-01.jpg",
        "/assets/areis/screen-02.jpg",
        "/assets/areis/screen-03.jpg",
        "/assets/areis/screen-04.jpg",
      ],
    },
  ],
  contact: {
    email: "Hiago287@hotmail.com",
    whatsapp:
      "https://api.whatsapp.com/send?phone=5511960314266&text=Ol%C3%A1%20Hiago%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.",
    linkedin:
      "https://www.linkedin.com/in/hiago-pereira-94405721b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
};
