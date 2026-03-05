import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Races from "./pages/Races";
import Villains from "./pages/Villains";
import CombatRules from "./pages/CombatRules";
import CharacterCreator from "./pages/CharacterCreator";
import Evolution from "./pages/Evolution";
import Rules from "./pages/Rules";
import Classes from "./pages/Classes";
import Equipment from "./pages/Equipment";
import SkillTrees from "./pages/SkillTrees";
import Progression from "./pages/Progression";
import ClassProgression from "./pages/ClassProgression";
import Spells from "./pages/Spells";
import Artifacts from "./pages/Artifacts";
import Vehicles from "./pages/Vehicles";
import CombatSimulator from "./pages/CombatSimulator";
import MasterCode from "./pages/MasterCode";
import Talents from "./pages/Talents";
import Backgrounds from "./pages/Backgrounds";
import Skills from "./pages/Skills";
import EvolutionPoints from "./pages/EvolutionPoints";
import Passives from "./pages/Passives";
import ClassAbilities from "./pages/ClassAbilities";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const navItems = [
  { label: "Início", href: "/", icon: "🏠" },
  { label: "Criar Personagem", href: "/character-creator", icon: "⚔️", highlight: true },
  { label: "Raças", href: "/races", icon: "👥" },
  { label: "Classes", href: "/classes", icon: "🎭" },
  { label: "Habilidades", href: "/class-abilities", icon: "✨" },
  { label: "Perícias", href: "/skills", icon: "🎯" },
  { label: "Talentos", href: "/talents", icon: "⭐" },
  { label: "Passivas", href: "/passives", icon: "🛡️" },
  { label: "Antecedentes", href: "/backgrounds", icon: "📖" },
  { label: "Equipamento", href: "/equipment", icon: "🔧" },
  { label: "Artefatos", href: "/artifacts", icon: "💎" },
  { label: "Veículos", href: "/vehicles", icon: "🚗" },
  { label: "Magia", href: "/spells", icon: "🪄" },
  { label: "Árvores de Habilidade", href: "/skill-trees", icon: "🌳" },
  { label: "Evolução", href: "/evolution", icon: "📈" },
  { label: "Pontos de Evolução", href: "/evolution-points", icon: "⚡" },
  { label: "Progressão", href: "/progression", icon: "📊" },
  { label: "Progressão de Classe", href: "/class-progression", icon: "🎖️" },
  { label: "Vilões", href: "/villains", icon: "💀", danger: true },
  { label: "Regras de Combate", href: "/combat-rules", icon: "⚔️" },
  { label: "Simulador de Combate", href: "/combat-simulator", icon: "🎮" },
  { label: "Regras", href: "/rules", icon: "📜" },
  { label: "Código do Mestre", href: "/master-code", icon: "👑" },
];

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-purple-500/20 overflow-y-auto z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-72`}
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 sticky top-0 bg-gradient-to-b from-slate-900 to-transparent z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl animate-float">🦸</div>
            <h1 className="text-xl font-bold text-glow">Heróis</h1>
          </div>
          <p className="text-xs text-slate-400">Sistema de RPG Interativo</p>
        </div>

        <nav className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.a
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer group ${
                  item.highlight
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
                    : item.danger
                    ? "hover:bg-red-500/20 text-red-400 hover:text-red-300"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </motion.a>
            </Link>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/races" component={Races} />
      <Route path="/villains" component={Villains} />
      <Route path="/combat-rules" component={CombatRules} />
      <Route path="/character-creator" component={CharacterCreator} />
      <Route path="/evolution" component={Evolution} />
      <Route path="/evolution-points" component={EvolutionPoints} />
      <Route path="/rules" component={Rules} />
      <Route path="/classes" component={Classes} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/skills" component={Skills} />
      <Route path="/skill-trees" component={SkillTrees} />
      <Route path="/progression" component={Progression} />
      <Route path="/class-progression" component={ClassProgression} />
      <Route path="/spells" component={Spells} />
      <Route path="/artifacts" component={Artifacts} />
      <Route path="/vehicles" component={Vehicles} />
      <Route path="/combat-simulator" component={CombatSimulator} />
      <Route path="/master-code" component={MasterCode} />
      <Route path="/talents" component={Talents} />
      <Route path="/backgrounds" component={Backgrounds} />
      <Route path="/passives" component={Passives} />
      <Route path="/class-abilities" component={ClassAbilities} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b border-purple-500/20 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link href="/">
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl animate-float">🦸</div>
                <h1 className="text-xl font-bold text-glow hidden sm:block">Heróis Unidos 3.0</h1>
              </motion.div>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/character-creator">
                <motion.button
                  className="btn-epic-primary text-sm hidden sm:flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚔️ Criar Personagem
                </motion.button>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Router />
        </main>
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppLayout />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
