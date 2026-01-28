import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, TrendingUp } from "lucide-react";

export default function Progression() {
  const progressionData = [
    {
      level: 1,
      xpRequired: 0,
      hpGain: "1d6",
      epGain: "1d4",
      skillPoints: 2,
      featureUnlock: "Habilidades de Classe Base",
    },
    {
      level: 2,
      xpRequired: 300,
      hpGain: "1d6",
      epGain: "1d4",
      skillPoints: 1,
      featureUnlock: "Primeira Especialização",
    },
    {
      level: 3,
      xpRequired: 900,
      hpGain: "1d6+1",
      epGain: "1d4+1",
      skillPoints: 1,
      featureUnlock: "Primeiro Nó de Árvore de Habilidades",
    },
    {
      level: 4,
      xpRequired: 2700,
      hpGain: "1d6+1",
      epGain: "1d4+1",
      skillPoints: 1,
      featureUnlock: "Aumento de Atributo (+1)",
    },
    {
      level: 5,
      xpRequired: 6500,
      hpGain: "1d6+2",
      epGain: "1d4+2",
      skillPoints: 2,
      featureUnlock: "Segundo Nó de Árvore de Habilidades",
    },
    {
      level: 6,
      xpRequired: 14000,
      hpGain: "1d6+2",
      epGain: "1d4+2",
      skillPoints: 1,
      featureUnlock: "Evolução de Raça Disponível",
    },
    {
      level: 7,
      xpRequired: 23000,
      hpGain: "1d6+3",
      epGain: "1d4+3",
      skillPoints: 1,
      featureUnlock: "Terceiro Nó de Árvore de Habilidades",
    },
    {
      level: 8,
      xpRequired: 34000,
      hpGain: "1d6+3",
      epGain: "1d4+3",
      skillPoints: 1,
      featureUnlock: "Aumento de Atributo (+1)",
    },
    {
      level: 9,
      xpRequired: 48000,
      hpGain: "1d6+4",
      epGain: "1d4+4",
      skillPoints: 2,
      featureUnlock: "Quarto Nó de Árvore de Habilidades",
    },
    {
      level: 10,
      xpRequired: 64000,
      hpGain: "1d6+4",
      epGain: "1d4+4",
      skillPoints: 1,
      featureUnlock: "Forma Suprema Disponível",
    },
    {
      level: 11,
      xpRequired: 85000,
      hpGain: "1d6+5",
      epGain: "1d4+5",
      skillPoints: 1,
      featureUnlock: "Quinto Nó de Árvore de Habilidades",
    },
    {
      level: 12,
      xpRequired: 110000,
      hpGain: "1d6+5",
      epGain: "1d4+5",
      skillPoints: 1,
      featureUnlock: "Aumento de Atributo (+1)",
    },
    {
      level: 13,
      xpRequired: 140000,
      hpGain: "1d6+6",
      epGain: "1d4+6",
      skillPoints: 2,
      featureUnlock: "Sexto Nó de Árvore de Habilidades",
    },
    {
      level: 14,
      xpRequired: 175000,
      hpGain: "1d6+6",
      epGain: "1d4+6",
      skillPoints: 1,
      featureUnlock: "Habilidades Lendárias Disponíveis",
    },
    {
      level: 15,
      xpRequired: 220000,
      hpGain: "1d6+7",
      epGain: "1d4+7",
      skillPoints: 2,
      featureUnlock: "Ascensão Divina (Máximo Poder)",
    },
  ];

  const attributeProgression = [
    { level: "1-3", bonus: "+0", description: "Novato" },
    { level: "4-8", bonus: "+1", description: "Experiente" },
    { level: "9-12", bonus: "+2", description: "Mestre" },
    { level: "13-15", bonus: "+3", description: "Lendário" },
  ];

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
          <h1 className="text-2xl font-bold">Progressão de Níveis</h1>
        </div>
      </header>

      <div className="container py-12">
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-slate-400 text-sm mb-2">Níveis Máximos</p>
            <p className="text-3xl font-bold text-blue-400">15</p>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="text-4xl mb-2">⭐</div>
            <p className="text-slate-400 text-sm mb-2">Formas Supremas</p>
            <p className="text-3xl font-bold text-purple-400">Nível 10+</p>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-slate-400 text-sm mb-2">Pontos de Habilidade</p>
            <p className="text-3xl font-bold text-green-400">18+</p>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="text-4xl mb-2">🚀</div>
            <p className="text-slate-400 text-sm mb-2">XP Total</p>
            <p className="text-3xl font-bold text-yellow-400">220k</p>
          </Card>
        </div>

        {/* Attribute Progression Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Bônus de Atributos por Nível
          </h2>
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-700/50">
                    <th className="px-6 py-3 text-left font-semibold">Níveis</th>
                    <th className="px-6 py-3 text-left font-semibold">Bônus</th>
                    <th className="px-6 py-3 text-left font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {attributeProgression.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-700 hover:bg-slate-700/30 transition"
                    >
                      <td className="px-6 py-4 font-semibold">{row.level}</td>
                      <td className="px-6 py-4 text-blue-400 font-bold">{row.bonus}</td>
                      <td className="px-6 py-4 text-slate-300">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Progression Table */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Tabela de Progressão Completa</h2>
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-700/50">
                    <th className="px-4 py-3 text-left font-semibold">Nível</th>
                    <th className="px-4 py-3 text-left font-semibold">XP Necessário</th>
                    <th className="px-4 py-3 text-left font-semibold">Ganho HP</th>
                    <th className="px-4 py-3 text-left font-semibold">Ganho EP</th>
                    <th className="px-4 py-3 text-left font-semibold">Pontos Hab.</th>
                    <th className="px-4 py-3 text-left font-semibold">Desbloqueio</th>
                  </tr>
                </thead>
                <tbody>
                  {progressionData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-slate-700 transition ${
                        row.level % 5 === 0 ? "bg-yellow-900/20" : "hover:bg-slate-700/30"
                      }`}
                    >
                      <td className="px-4 py-3 font-bold text-blue-400">{row.level}</td>
                      <td className="px-4 py-3 text-slate-300">{row.xpRequired.toLocaleString()}</td>
                      <td className="px-4 py-3 text-red-400 font-semibold">{row.hpGain}</td>
                      <td className="px-4 py-3 text-purple-400 font-semibold">{row.epGain}</td>
                      <td className="px-4 py-3 text-green-400 font-semibold">{row.skillPoints}</td>
                      <td className="px-4 py-3 text-yellow-300">{row.featureUnlock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Legend */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="font-bold mb-3 text-red-400">HP (Pontos de Vida)</h3>
            <p className="text-slate-300 text-sm">
              Sua saúde total. Quando chega a 0, você é derrotado. Aumenta com cada nível.
            </p>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="font-bold mb-3 text-purple-400">EP (Energia Psíquica)</h3>
            <p className="text-slate-300 text-sm">
              Energia para usar habilidades especiais e feitiços. Regenera após descanso.
            </p>
          </Card>
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="font-bold mb-3 text-green-400">Pontos de Habilidade</h3>
            <p className="text-slate-300 text-sm">
              Usados para desbloquear nós em Árvores de Habilidades e melhorar perícias.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/character-creator" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Criar Personagem
            </Button>
          </Link>
          <Link href="/skill-trees" className="flex-1">
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
              Ver Árvores de Habilidades
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
