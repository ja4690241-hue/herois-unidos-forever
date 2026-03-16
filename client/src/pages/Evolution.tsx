import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { races } from "@/lib/gameData";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Zap, Star, TrendingUp } from "lucide-react";

export default function Evolution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-300">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Evolução de Raças
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="text-blue-400" /> O Caminho para o Ápice
            </h2>
            <p className="text-slate-300 leading-relaxed">
              No sistema Heróis Unidos 3.0, seu personagem não está limitado à sua forma inicial. 
              Ao acumular <strong>Pontos de Evolução (PE)</strong>, você pode transcender seus limites biológicos 
              ou tecnológicos para atingir a <strong>Forma Suprema</strong>.
            </p>
            <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
              <h3 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Star size={16} /> Custo de Evolução
              </h3>
              <p className="text-sm text-slate-300">
                A maioria das evoluções de raça custa <strong>10 PE</strong>. 
                Evoluções de Híbridos Supremos podem custar até <strong>30 PE</strong>.
              </p>
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Benefícios Gerais da Evolução</h3>
            <ul className="space-y-3">
              {[
                "Aumento massivo em atributos principais",
                "Desbloqueio de Habilidades Supremas exclusivas",
                "Melhoria em defesas naturais e resistências",
                "Novas formas de ataque e mobilidade"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {races.filter(r => r.evolution).map((race) => (
            <Card key={race.id} className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all overflow-hidden">
              <CardHeader className="bg-slate-900/50 border-b border-slate-700 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl">{race.icon}</span>
                  <span className="px-2 py-0.5 bg-purple-600 rounded text-[10px] font-black uppercase tracking-widest">
                    {race.evolution?.cost || 10} PE
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-white">{race.evolution?.name}</CardTitle>
                <p className="text-xs text-purple-400 font-bold uppercase tracking-wider">Evolução de {race.name}</p>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-slate-400 text-sm italic">\"{race.evolution?.description}\"</p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase">Bônus de Evolução</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {race.evolution?.bonuses.map((bonus, i) => (
                      <div key={i} className="text-xs text-slate-200 flex items-center gap-2 bg-slate-900/50 p-2 rounded">
                        <Zap size={12} className="text-yellow-500" /> {bonus}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
