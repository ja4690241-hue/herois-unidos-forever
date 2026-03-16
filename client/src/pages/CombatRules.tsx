import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, Zap, Target, Shield, Flame } from "lucide-react";

export default function CombatRules() {
  const epRules = [
    {
      title: "Poderes Ofensivos (Dano)",
      formula: "(Total de dados de dano x 5) = Custo de EP",
      examples: [
        "Lança de Fogo (2d6): 10 EP",
        "Raio Congelante (4d6): 20 EP",
        "Lança Solar (5d6): 25 EP"
      ]
    },
    {
      title: "Poderes Defensivos/Utilitários",
      items: [
        { name: "Defesa (+AC ou Resistência)", cost: "10 EP por ponto" },
        { name: "Absorção ou Anulação de Dano", cost: "10-15 EP" },
        { name: "Regeneração / Auto-cura", cost: "10 EP por 1d8" },
        { name: "Teleporte ou Voo (Curto)", cost: "10-20 EP" },
        { name: "Invisibilidade (Por minuto)", cost: "15-50 EP" }
      ]
    }
  ];

  const modifiers = [
    { name: "Alcance Curto", mod: "-5 EP" },
    { name: "Tempo de Conjuração Longo", mod: "-5 EP" },
    { name: "Componentes Raros", mod: "-5 EP" },
    { name: "Área de Efeito (Cone/Esfera)", mod: "+5 a +10 EP" },
    { name: "Causa Condição Grave", mod: "+10 EP" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-300">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Regras de Combate e Energia
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-400">
                <Zap className="h-6 w-6" /> Sistema de Energia (EP)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {epRules.map((rule, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-2">{rule.title}</h3>
                  {rule.formula && (
                    <div className="p-3 bg-slate-900 rounded-lg border border-orange-500/30 text-center">
                      <code className="text-orange-400 font-mono text-lg">{rule.formula}</code>
                    </div>
                  )}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {rule.examples?.map((ex, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> {ex}
                      </li>
                    ))}
                    {rule.items?.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex justify-between bg-slate-700/30 p-2 rounded">
                        <span>{item.name}</span>
                        <span className="font-bold text-orange-400">{item.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <Target className="h-6 w-6" /> Modificadores de Custo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modifiers.map((mod, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-900/50 rounded border border-slate-700">
                    <span className="text-sm text-slate-300">{mod.name}</span>
                    <span className={`text-sm font-bold ${mod.mod.startsWith('-') ? 'text-green-400' : 'text-red-400'}`}>
                      {mod.mod}
                    </span>
                  </div>
                ))}
                <p className="text-xs text-slate-500 italic mt-4">
                  * O custo mínimo de qualquer habilidade ativa é sempre 5 EP.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <Flame className="h-6 w-6" /> Testes de Resistência
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div className="flex gap-4 p-3 bg-slate-900/50 rounded-lg">
                <div className="font-bold text-white min-w-[80px]">Força</div>
                <div className="text-sm">Para resistir a empurrões, puxões e imobilizações físicas.</div>
              </div>
              <div className="flex gap-4 p-3 bg-slate-900/50 rounded-lg">
                <div className="font-bold text-white min-w-[80px]">Reflexos</div>
                <div className="text-sm">Para evitar ou reduzir dano de explosões e ataques de área.</div>
              </div>
              <div className="flex gap-4 p-3 bg-slate-900/50 rounded-lg">
                <div className="font-bold text-white min-w-[80px]">Vontade</div>
                <div className="text-sm">Para resistir a ilusões, controle mental e efeitos psíquicos.</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Shield className="h-6 w-6" /> Armaduras e Defesa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between p-2 border-b border-slate-700">
                  <span className="text-slate-300">Roupa Tática</span>
                  <span className="font-bold">12 CA (+1 Reflexos)</span>
                </div>
                <div className="flex justify-between p-2 border-b border-slate-700">
                  <span className="text-slate-300">Armadura Média</span>
                  <span className="font-bold">14 CA (Reduz 3 dano)</span>
                </div>
                <div className="flex justify-between p-2 border-b border-slate-700">
                  <span className="text-slate-300">Armadura Pesada</span>
                  <span className="font-bold">18 CA (Reduz 5 dano)</span>
                </div>
                <div className="flex justify-between p-2">
                  <span className="text-slate-300">Exotraje</span>
                  <span className="font-bold">20 CA (+2 Força)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
