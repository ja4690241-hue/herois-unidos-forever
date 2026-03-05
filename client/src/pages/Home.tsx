import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap, Users, Sword, BookOpen, Wand2, Skull, Target, TrendingUp, Briefcase, ShieldCheck, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="container py-24 text-center relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wider uppercase"
            variants={itemVariants}
          >
            Versão 3.0 • Sistema Interativo
          </motion.div>
          <motion.h2 
            className="text-hero mb-6 leading-tight text-glow"
            variants={itemVariants}
          >
            Sua Jornada Heroica <br /> Começa Aqui
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Crie personagens lendários, domine perícias únicas e enfrente vilões épicos em um sistema de RPG projetado para a nova era.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            variants={itemVariants}
          >
            <Link href="/character-creator">
              <Button size="lg" className="btn-epic-primary text-lg px-8">
                <Zap className="mr-2" />
                Criar Personagem
              </Button>
            </Link>
            <Link href="/races">
              <Button size="lg" className="btn-epic-secondary text-lg px-8">
                Explorar Raças
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Races Card */}
          <motion.div variants={itemVariants}>
            <Link href="/races">
              <div className="card-epic group cursor-pointer h-full">
                <div className="text-5xl mb-4 group-hover:animate-float">👥</div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition">Raças</h4>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                  Escolha entre 9 raças únicas, cada uma com atributos especiais, habilidades e evoluções.
                </p>
                <div className="text-sm text-cyan-400 group-hover:text-cyan-300 font-semibold">
                  Explorar raças →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Class Abilities Card */}
          <motion.div variants={itemVariants}>
            <Link href="/class-abilities">
              <div className="card-epic group cursor-pointer h-full">
                <div className="text-5xl mb-4 text-cyan-400 group-hover:animate-float"><Sparkles size={50} /></div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition">Habilidades</h4>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                  Poderes exclusivos de cada classe, organizados por nível de progressão.
                </p>
                <div className="text-sm text-cyan-400 group-hover:text-cyan-300 font-semibold">
                  Ver habilidades →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Character Creator Card */}
          <motion.div variants={itemVariants}>
            <Link href="/character-creator">
              <div className="card-epic group cursor-pointer h-full">
                <div className="text-5xl mb-4 group-hover:animate-float">⚔️</div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition">Criador</h4>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                  Construa seu herói do zero. Escolha raça, atributos, habilidades e equipamento.
                </p>
                <div className="text-sm text-cyan-400 group-hover:text-cyan-300 font-semibold">
                  Criar agora →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={itemVariants}>
            <Link href="/skills">
              <div className="card-epic group cursor-pointer h-full">
                <div className="text-5xl mb-4 group-hover:animate-float">🎯</div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition">Perícias</h4>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                  Domine 18 perícias diferentes, desde Atletismo até Conhecimento Arcano.
                </p>
                <div className="text-sm text-cyan-400 group-hover:text-cyan-300 font-semibold">
                  Ver perícias →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Talents Card */}
          <motion.div variants={itemVariants}>
            <Link href="/talents">
              <div className="card-epic group cursor-pointer h-full">
                <div className="text-5xl mb-4 text-yellow-400 group-hover:animate-float"><Star size={50} /></div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition">Talentos</h4>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                  Talentos genéricos, categorias de raridade e regras de cálculo de EP.
                </p>
                <div className="text-sm text-cyan-400 group-hover:text-cyan-300 font-semibold">
                  Ver talentos →
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Villains Card */}
          <motion.div variants={itemVariants}>
            <Link href="/villains">
              <div className="card-epic group cursor-pointer h-full">
                <div className="text-5xl mb-4 text-red-500 group-hover:animate-float"><Skull size={50} /></div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition">Vilões</h4>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                  Enfrente ameaças lendárias como o Híbrido Supremo e Generais Mutantes.
                </p>
                <div className="text-sm text-red-500 group-hover:text-red-400 font-semibold">
                  Ver vilões →
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
