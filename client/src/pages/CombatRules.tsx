import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { combatRules } from "@/lib/gameData";
import { ChevronLeft } from "lucide-react";

export default function CombatRules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-slate-300">
              <ChevronLeft className="mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Regras de Combate</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="max-w-4xl">
          {/* Introduction */}
          <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Como Funciona o Combate</h2>
            <p className="text-slate-300 mb-4">
              O sistema de combate de Heróis Unidos 3.0 é baseado em dados e testes de habilidade. 
              Cada ação em combate envolve rolagem de dados para determinar sucesso ou fracasso.
            </p>
            <p className="text-slate-400 text-sm">
              Leia as regras abaixo para entender os conceitos fundamentais do sistema.
            </p>
          </Card>

          {/* Combat Rules */}
          <div className="space-y-6">
            {combatRules.map((rule, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">
                  {idx + 1}. {rule.name}
                </h3>
                <p className="text-slate-300 mb-4">{rule.description}</p>
                {rule.example && (
                  <div className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-blue-300">Exemplo:</span>{" "}
                      {rule.example}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-700 p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">Dicas para Combate</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>
                  Sempre considere o alcance de seus ataques. Ataques em cone afetam múltiplos inimigos.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>
                  Testes de resistência são importantes. Se você falhar, pode sofrer efeitos negativos como paralisia ou envenenamento.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>
                  Conhecer as fraquezas de seus inimigos é crucial. Vilões poderosos têm fraquezas específicas que podem ser exploradas.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>
                  Trabalhe em equipe! Habilidades combinadas podem causar dano muito maior do que ataques individuais.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>
                  Gerencie seus Pontos de Vida. Quando chegam a 0, você fica inconsciente e precisa de ajuda.
                </span>
              </li>
            </ul>
          </Card>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link href="/character-creator" className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                Criar Personagem
              </Button>
            </Link>
            <Link href="/villains" className="flex-1">
              <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
                Ver Vilões
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
