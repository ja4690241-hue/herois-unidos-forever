import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { villains } from "@/lib/villainsData";
import { ChevronLeft, Heart, Shield, Sword, Skull, Zap, Sparkles, Target, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Villains() {
  const [selectedVillain, setSelectedVillain] = useState(villains?.[0] || null);

  if (!selectedVillain || !villains || villains.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Nenhum vilão disponível</h1>
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-cyan-400">
              <ChevronLeft className="mr-2" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getThreatColor = (difficulty?: string) => {
    switch (difficulty) {
      case "Lendário":
        return "from-red-500 to-orange-600 shadow-red-500/20";
      case "Extremo":
        return "from-orange-500 to-yellow-600 shadow-orange-500/20";
      case "Difícil":
        return "from-yellow-500 to-amber-600 shadow-yellow-500/20";
      case "Médio":
        return "from-green-500 to-emerald-600 shadow-green-500/20";
      default:
        return "from-slate-500 to-slate-600 shadow-slate-500/20";
    }
  };

  const getThreatText = (difficulty?: string) => {
    switch (difficulty) {
      case "Lendário": return "text-red-400";
      case "Extremo": return "text-orange-400";
      case "Difícil": return "text-yellow-400";
      case "Médio": return "text-green-400";
      default: return "text-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition">
              <ChevronLeft className="mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-glow flex items-center gap-2">
            <Skull className="text-red-500" /> Vilões & Ameaças
          </h1>
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Villains List Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="text-cyan-400" /> Ameaças Ativas
            </h2>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {villains.map((villain) => (
                <motion.button
                  key={villain.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedVillain(villain)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 glass border ${
                    selectedVillain?.id === villain.id
                      ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br ${getThreatColor(villain.difficulty)}`}>
                      {villain.icon || "😈"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm truncate">{villain.name}</div>
                      <div className={`text-xs font-semibold ${getThreatText(villain.difficulty)}`}>
                        {villain.difficulty}
                      </div>
                    </div>
                    {selectedVillain?.id === villain.id && (
                      <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Villain Details Main Area */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVillain.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card-dark border-cyan-500/20 overflow-hidden">
                  {/* Villain Hero Header */}
                  <div className="relative p-8 pb-0">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Skull size={120} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${getThreatColor(selectedVillain.difficulty)} text-white shadow-lg`}>
                        <Zap size={14} /> Ameaça {selectedVillain.difficulty}
                      </div>
                      
                      <h3 className="text-5xl font-black mb-4 text-glow tracking-tight">
                        {selectedVillain.name}
                      </h3>
                      
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded bg-white/10 border border-white/10 text-cyan-300 text-sm font-medium">
                          {selectedVillain.title}
                        </span>
                      </div>

                      <p className="text-xl text-slate-300 italic leading-relaxed max-w-3xl border-l-4 border-cyan-500/50 pl-6 py-2">
                        "{selectedVillain.description}"
                      </p>
                    </div>
                  </div>

                  <div className="p-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Left Column: Stats & Info */}
                    <div className="space-y-8">
                      <section>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                          <Sparkles size={16} /> Atributos de Combate
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="glass p-4 rounded-xl border-white/5 text-center group hover:border-red-500/30 transition-colors">
                            <Heart className="w-5 h-5 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <div className="text-xs text-slate-400 uppercase font-bold">Vida</div>
                            <div className="text-2xl font-black text-red-400">{selectedVillain.stats?.hp}</div>
                          </div>
                          <div className="glass p-4 rounded-xl border-white/5 text-center group hover:border-blue-500/30 transition-colors">
                            <Shield className="w-5 h-5 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <div className="text-xs text-slate-400 uppercase font-bold">Defesa</div>
                            <div className="text-2xl font-black text-blue-400">{selectedVillain.stats?.ca}</div>
                          </div>
                          <div className="glass p-4 rounded-xl border-white/5 text-center group hover:border-orange-500/30 transition-colors">
                            <Sword className="w-5 h-5 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <div className="text-xs text-slate-400 uppercase font-bold">Ataque</div>
                            <div className="text-2xl font-black text-orange-400">{selectedVillain.stats?.attack}</div>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                          <Info size={16} /> Lore & Comportamento
                        </h4>
                        <div className="glass p-6 rounded-xl border-white/5 text-slate-300 text-sm leading-relaxed">
                          {selectedVillain.description}
                        </div>
                      </section>
                    </div>

                    {/* Right Column: Abilities */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
                        <Zap size={16} /> Habilidades Especiais
                      </h4>
                      <div className="space-y-4">
                        {selectedVillain.abilities?.map((ability, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-5 rounded-xl border-white/5 hover:border-cyan-500/30 transition-all group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <Zap size={20} />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-cyan-300 mb-1 group-hover:text-cyan-100 transition-colors">
                                  {ability.name}
                                </h5>
                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                                  {ability.effect}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </div>
  );
}
