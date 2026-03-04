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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-purple-500/20 bg-slate-900/30 backdrop-blur-xl sticky top-0 z-50">
        <nav className="container py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl animate-float">🦸</div>
            <h1 className="text-3xl font-bold text-glow">
              Heróis Unidos 3.0
            </h1>
          </motion.div>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/races">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10 transition-all">
                Raças
              </Button>
            </Link>
            <Link href="/character-creator">
              <Button className="btn-epic-primary">
                Criar Personagem
              </Button>
            </Link>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container py-24 text-center relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-hero mb-6 leading-tight text-glow"
            variants={itemVariants}
          >
            Sistema de RPG Interativo
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Crie seu personagem, escolha sua raça, domine habilidades especiais e enfrente vilões poderosos em um mundo de fantasia épica.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            variants={itemVariants}
          >
            <Link href="/character-creator">
              <Button size="lg" className="btn-epic-primary text-lg">
                <Zap className="mr-2" />
                Começar Agora
              </Button>
            </Link>
            <Link href="/races">
              <Button size="lg" className="btn-epic-secondary text-lg">
                Explorar Raças
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <motion.h3 
          className="text-4xl font-bold mb-16 text-center text-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Explore o Sistema
        </motion.h3>
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
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:animate-float">👥</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Raças</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Escolha entre 9 raças únicas, cada uma com atributos especiais, habilidades e evoluções.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Explorar raças →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Class Abilities Card */}
          <motion.div variants={itemVariants}>
            <Link href="/class-abilities">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 text-purple-400 group-hover:animate-pulse-glow"><Sparkles size={50} /></div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Habilidades de Classe</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Poderes exclusivos de cada classe, organizados por nível de progressão.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Ver habilidades →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Character Creator Card */}
          <motion.div variants={itemVariants}>
            <Link href="/character-creator">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:animate-float">⚔️</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Criar Personagem</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Construa seu herói do zero. Escolha raça, atributos, habilidades e equipamento.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Criar agora →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={itemVariants}>
            <Link href="/skills">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:animate-float">🎯</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Perícias</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Domine 18 perícias diferentes, desde Atletismo até Conhecimento Arcano.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Ver perícias →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Talents Card */}
          <motion.div variants={itemVariants}>
            <Link href="/talents">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 text-yellow-400 group-hover:animate-pulse-glow"><Star size={50} /></div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Talentos</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Talentos genéricos, categorias de raridade e regras de cálculo de EP.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Ver talentos →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Passives Card */}
          <motion.div variants={itemVariants}>
            <Link href="/passives">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 text-teal-400 group-hover:animate-pulse-glow"><ShieldCheck size={50} /></div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Passivas</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Habilidades que não custam EP e estão sempre ativas no seu herói.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Ver passivas →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Backgrounds Card */}
          <motion.div variants={itemVariants}>
            <Link href="/backgrounds">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:animate-float">💼</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Antecedentes</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Escolha sua origem: de Cientista Genial a Anti-Herói, com habilidades únicas.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Ver origens →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Evolution Points Card */}
          <motion.div variants={itemVariants}>
            <Link href="/evolution-points">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:animate-float">📈</div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Pontos de Evolução</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Aprenda como ganhar e gastar PE para atingir sua Forma Suprema.
                  </p>
                  <div className="text-sm text-purple-400 group-hover:text-purple-300 font-semibold">
                    Ver evolução →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Villains Card */}
          <motion.div variants={itemVariants}>
            <Link href="/villains">
              <div className="card-epic group cursor-pointer h-full">
                <div className="relative">
                  <div className="text-5xl mb-4 text-red-500 group-hover:animate-pulse-glow"><Skull size={50} /></div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition">Vilões</h4>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition">
                    Enfrente ameaças lendárias como o Híbrido Supremo e Generais Mutantes.
                  </p>
                  <div className="text-sm text-red-500 group-hover:text-red-400 font-semibold">
                    Ver vilões →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 bg-slate-900/50 backdrop-blur-xl">
        <div className="container text-center">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl animate-float">🦸</div>
            <span className="text-2xl font-bold text-glow">Heróis Unidos 3.0</span>
          </motion.div>
          <p className="text-slate-500">© 2026 Heróis Unidos 3.0 - Sistema de RPG Interativo</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
