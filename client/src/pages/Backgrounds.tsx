import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { backgrounds } from "@/lib/backgroundsData";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Briefcase, Star, Info, Zap } from "lucide-react";

export default function Backgrounds() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-300">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Antecedentes (Origens)
          </h1>
        </div>

        <div className="bg-orange-900/10 border border-orange-500/30 p-6 rounded-2xl mb-10 flex items-start gap-4">
          <Info className="text-orange-400 h-6 w-6 shrink-0 mt-1" />
          <p className="text-slate-300">
            O <strong>Antecedente</strong> define o que seu herói fazia antes de se tornar um aventureiro. 
            Ele fornece uma <strong>Habilidade Especial única</strong> e bônus em perícias ou equipamentos iniciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backgrounds.map((bg) => (
            <Card key={bg.id} className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-all overflow-hidden group">
              <CardHeader className="bg-slate-900/50 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{bg.emoji}</span>
                  <Briefcase className="text-slate-600 h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold text-white mt-2">{bg.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed h-12 overflow-hidden">
                  {bg.description}
                </p>
                <div className="p-3 bg-orange-900/20 rounded-lg border border-orange-500/20">
                  <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Zap size={10} /> Habilidade de Origem
                  </h4>
                  <p className="text-sm font-bold text-white mb-1">{bg.specialAbility}</p>
                  <p className="text-xs text-slate-300">{bg.abilityDescription}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Perícias & Equipamento</h4>
                  <div className="flex flex-wrap gap-2">
                    {bg.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded border border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <ul className="text-[10px] text-slate-400 list-disc list-inside">
                    {bg.equipment.slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
