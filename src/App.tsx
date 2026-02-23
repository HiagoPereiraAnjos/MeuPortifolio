/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  X,
  ChevronLeft,
  Image as ImageIcon,
  Atom,
  FileCode,
  FileJson,
  Leaf,
  Coffee,
  Wind,
  Palette
} from "lucide-react";
import { PORTFOLIO_DATA } from "./constants";

const SkillIcon = ({ name, category, className }: { name: string; category: string; className?: string }) => {
  const getCategoryColor = () => {
    switch (category) {
      case "Frontend": return "text-emerald-400";
      case "Backend": return "text-blue-400";
      case "Design": return "text-cyan-400";
      case "Database": return "text-purple-400";
      default: return "text-zinc-400";
    }
  };

  const iconClass = `${className} ${getCategoryColor()}`;

  switch (name) {
    case "react": return <Atom className={iconClass} />;
    case "js": return <FileCode className={iconClass} />;
    case "ts": return <FileJson className={iconClass} />;
    case "spring": return <Leaf className={iconClass} />;
    case "java": return <Coffee className={iconClass} />;
    case "tailwind": return <Wind className={iconClass} />;
    case "sql": return <Database className={iconClass} />;
    case "postgres": return <Database className={iconClass} />;
    default: return <Code2 className={iconClass} />;
  }
};

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.gallery || [project.image];
  const demoUrl = project.demoUrl || "https://github.com/HiagoPereiraAnjos";
  const codeUrl = project.codeUrl || "https://github.com/HiagoPereiraAnjos";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-zinc-950/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[32px] flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Gallery */}
        <div className="relative w-full md:w-2/3 bg-black flex items-center justify-center group min-h-[300px]">
          <img 
            src={images[currentImage]} 
            alt={project.title} 
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-4 p-3 bg-black/50 hover:bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_: any, i: number) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'w-8 bg-emerald-500' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details */}
        <div className="w-full md:w-1/3 p-8 md:p-12 overflow-y-auto">
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
              Stack utilizada
            </p>
            <div className="flex flex-wrap gap-2">
              {(project.stack || []).map((item: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <h3 className="font-display text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-zinc-400 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="py-4 bg-emerald-500 text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all"
              >
                Demo <ExternalLink size={18} />
              </a>
              <a 
                href={codeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="py-4 glass border border-white/15 rounded-2xl font-bold flex items-center justify-center gap-2 hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 transition-all"
              >
                {"C\u00f3digo"} <Github size={18} />
              </a>
            </div>
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-4 bg-emerald-500 text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all"
            >
              Ver Projeto <ExternalLink size={20} />
            </a>
            <button 
              onClick={onClose}
              className="w-full py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-4xl md:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-emerald-500 mt-6"
    />
  </div>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Terminal size={18} className="text-zinc-950" />
            </div>
            <span>HIAGO<span className="text-emerald-500">.</span>DEV</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-emerald-400 transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contato" className="px-4 py-2 bg-emerald-500 text-zinc-950 rounded-full hover:bg-emerald-400 transition-all font-bold">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[32px] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="shrink-0"
              >
                <img
                  src="/profile.jpg"
                  alt="Hiago Pereira"
                  loading="eager"
                  decoding="async"
                  className="w-36 h-36 sm:w-[180px] sm:h-[180px] max-w-full rounded-full border-4 border-white shadow-xl object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center md:text-left"
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
                  Hiago Pereira
                </h1>
                <h2 className="text-emerald-400 text-lg sm:text-xl md:text-2xl font-semibold mb-6">
                  Full Stack Developer
                </h2>
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
                  Desenvolvedor especializado na criação de sistemas web profissionais, incluindo sistemas de gestão hoteleira, controle de restaurante e plataformas comerciais.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="#projetos"
                    className="px-8 py-4 bg-emerald-500 text-zinc-950 rounded-xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 text-center"
                  >
                    Ver Projetos
                  </a>
                  <a
                    href="#contato"
                    className="px-8 py-4 glass border border-white/15 rounded-xl font-bold hover:border-emerald-400 hover:text-emerald-300 transition-all text-center"
                  >
                    Contato
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Minha trajetória e foco profissional">
                Sobre Mim
              </SectionTitle>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>{PORTFOLIO_DATA.about}</p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-6 glass rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">3+</div>
                    <div className="text-sm font-medium uppercase tracking-wider">Anos de Exp.</div>
                  </div>
                  <div className="p-6 glass rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">10+</div>
                    <div className="text-sm font-medium uppercase tracking-wider">Projetos Reais</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="p-8 glass rounded-3xl border-l-4 border-l-emerald-500">
                <Layout className="text-emerald-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Frontend Moderno</h3>
                <p className="text-zinc-400">Interfaces fluidas e responsivas com React e Tailwind CSS, focadas na melhor experiência do usuário.</p>
              </div>
              <div className="p-8 glass rounded-3xl border-l-4 border-l-blue-500">
                <Database className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Backend Robusto</h3>
                <p className="text-zinc-400">Sistemas escaláveis e seguros utilizando Spring Boot e arquiteturas de microserviços.</p>
              </div>
              <div className="p-8 glass rounded-3xl border-l-4 border-l-purple-500">
                <Globe className="text-purple-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Deploy & Produção</h3>
                <p className="text-zinc-400">Experiência real colocando sistemas no ar, garantindo performance e disponibilidade.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Solucoes reais para hotelaria, restaurante e plataformas comerciais">
            Projetos
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => {
              const demoUrl = project.demoUrl || "https://github.com/HiagoPereiraAnjos";
              const codeUrl = project.codeUrl || "https://github.com/HiagoPereiraAnjos";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group glass rounded-3xl overflow-hidden flex flex-col h-full hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                      <div className="px-3 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-tighter rounded-full flex items-center gap-1 shadow-lg">
                        <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full animate-pulse" />
                        Live
                      </div>
                      {project.gallery && (
                        <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1 border border-white/10">
                          <ImageIcon size={10} />
                          Gallery
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <button 
                        className="w-full py-3 bg-emerald-500 text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        Detalhes <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-5 flex-grow min-h-[84px]">
                      {project.description}
                    </p>
                    <div className="mb-5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(project.stack || []).map((item: string, i: number) => (
                          <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="py-3 bg-emerald-500 text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all"
                      >
                        Demo <ExternalLink size={16} />
                      </a>
                      <a
                        href={codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="py-3 glass border border-white/15 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 transition-all"
                      >
                        {"C\u00f3digo"} <Github size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Tecnologias que utilizo para construir soluções de alto nível">
            Stack Tecnológica
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 glass rounded-2xl flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <SkillIcon name={skill.icon} category={skill.category} />
                </div>
                <h4 className="font-bold text-lg mb-1">{skill.name}</h4>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[32px] md:rounded-[40px] p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[110px] -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[110px] -z-10" />

            <div className="mb-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Contato</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
                Fale comigo pelos canais abaixo para novas oportunidades, projetos ou parcerias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="group glass rounded-2xl p-5 border border-white/10 hover:border-emerald-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={20} className="text-emerald-400" />
                  <span className="font-bold">Email</span>
                </div>
                <p className="text-sm text-zinc-400 break-all">{PORTFOLIO_DATA.contact.email}</p>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-5 border border-white/10 hover:border-emerald-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src="/whatsapp-logo.svg" alt="WhatsApp" className="w-5 h-5" />
                  <span className="font-bold">WhatsApp</span>
                </div>
                <p className="text-sm text-zinc-400">Clique para iniciar uma conversa</p>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-5 border border-white/10 hover:border-emerald-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Linkedin size={20} className="text-emerald-400" />
                  <span className="font-bold">LinkedIn</span>
                </div>
                <p className="text-sm text-zinc-400">Perfil profissional</p>
              </a>

              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-5 border border-white/10 hover:border-emerald-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Github size={20} className="text-emerald-400" />
                  <span className="font-bold">GitHub</span>
                </div>
                <p className="text-sm text-zinc-400">Repositorios e codigo</p>
              </a>
            </div>

            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}?subject=Novo%20projeto&body=Ola%20Hiago%2C%20gostaria%20de%20falar%20sobre%20um%20projeto.`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 rounded-2xl font-bold hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95"
            >
              Enviar mensagem
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Desenvolvedor Full Stack. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-8 text-zinc-500 text-sm">
            <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-emerald-400 transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
