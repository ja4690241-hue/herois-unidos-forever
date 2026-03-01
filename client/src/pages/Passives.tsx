import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { passives } from "@/lib/talentsData";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ShieldCheck, ZapOff, Info } from "lucide-react";

export default function Passives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-300">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            Habilidades Passivas
          </h1>
        </div>

        <div className="bg-teal-900/20 border border-teal-500/30 p-6 rounded-xl mb-10 flex items-start gap-4">
          <ZapOff className="text-teal-400 h-8 w-8 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-teal-400 mb-2">O que são Passivas?</h2>
            <p className="text-slate-300">
              Diferente das habilidades ativas, as passivas <strong>não custam Energia (EP)</strong> e estão 
              <strong>sempre ativas</strong>. Elas representam traços biológicos, treinamento constante ou 
              propriedades permanentes do seu personagem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passives.map((passive) => (
            <Card key={passive.id} className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-all group flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 bg-teal-900/30 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                  <ShieldCheck className="text-teal-400 h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold text-white leading-tight">{passive.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {passive.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {passive.bonus.map((b, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-700 text-teal-400 border border-teal-500/20">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border-l-4 border-teal-500">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Efeito Mecânico</span>
                  <p className="text-sm text-slate-200 font-medium">{passive.effect}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
