import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Rules() {
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
          <h1 className="text-2xl font-bold">Referência de Regras</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="max-w-4xl">
          {/* Table of Contents */}
          <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Índice de Regras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Atributos", id: "attributes" },
                { name: "Perícias", id: "skills" },
                { name: "Combate", id: "combat" },
                { name: "Dano e Cura", id: "damage" },
                { name: "Testes", id: "tests" },
                { name: "Equipamento", id: "equipment" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Card>

          {/* Attributes Section */}
          <section id="attributes" className="mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-4">Atributos</h3>
              <p className="text-slate-300 mb-6">
                Existem seis atributos principais que definem as capacidades de um personagem:
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "Força",
                    icon: "💪",
                    description: "Capacidade física e poder muscular. Afeta dano em combate corpo a corpo.",
                  },
                  {
                    name: "Destreza",
                    icon: "🎯",
                    description: "Agilidade e coordenação. Afeta defesa, iniciativa e ataques à distância.",
                  },
                  {
                    name: "Inteligência",
                    icon: "🧠",
                    description: "Raciocínio lógico e conhecimento. Afeta perícias técnicas e magia.",
                  },
                  {
                    name: "Carisma",
                    icon: "✨",
                    description: "Presença e influência. Afeta negociação, persuasão e liderança.",
                  },
                  {
                    name: "Constituição",
                    icon: "❤️",
                    description: "Resistência e vitalidade. Afeta Pontos de Vida e resistência a veneno.",
                  },
                  {
                    name: "Vontade",
                    icon: "⚡",
                    description: "Determinação mental. Afeta resistência a magia e efeitos mentais.",
                  },
                ].map((attr, idx) => (
                  <div key={idx} className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <span className="text-2xl">{attr.icon}</span>
                      {attr.name}
                    </h4>
                    <p className="text-slate-300 text-sm">{attr.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-4">Perícias</h3>
              <p className="text-slate-300 mb-6">
                Perícias representam treinamento específico em áreas de conhecimento ou ação:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Acrobacias",
                  "Atletismo",
                  "Arcana",
                  "Enganação",
                  "Furtividade",
                  "Investigação",
                  "Luta",
                  "Medicina",
                  "Natureza",
                  "Percepção",
                  "Persuasão",
                  "Tecnologia",
                ].map((skill, idx) => (
                  <div key={idx} className="bg-slate-700/50 p-3 rounded-lg">
                    <p className="font-semibold text-blue-300">{skill}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Combat Section */}
          <section id="combat" className="mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-4">Combate</h3>
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Iniciativa</h4>
                  <p className="text-slate-300 text-sm">
                    Determine a ordem de ação no combate rolando 1d20 + modificador de Destreza.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Turno</h4>
                  <p className="text-slate-300 text-sm">
                    Cada personagem tem um turno por rodada. Você pode se mover, fazer uma ação e uma ação bônus.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Ataque</h4>
                  <p className="text-slate-300 text-sm">
                    Role 1d20 + bônus de ataque. Se o resultado for maior ou igual à CA do alvo, você acerta.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Damage Section */}
          <section id="damage" className="mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-4">Dano e Cura</h3>
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-400 mb-2">Dano</h4>
                  <p className="text-slate-300 text-sm mb-2">
                    Quando você acerta um ataque, role o dado de dano e adicione seus modificadores.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Exemplo: 2d8 + 3 significa rolar dois dados de 8 lados e adicionar 3 ao resultado.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-2">Cura</h4>
                  <p className="text-slate-300 text-sm">
                    Você pode recuperar Pontos de Vida através de magia de cura, poções ou descanso.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2">Morte</h4>
                  <p className="text-slate-300 text-sm">
                    Quando seus PV chegam a 0, você fica inconsciente. Se sofrer mais dano, pode morrer.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Tests Section */}
          <section id="tests" className="mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-4">Testes</h3>
              <p className="text-slate-300 mb-6">
                Quando o resultado de uma ação é incerto, você faz um teste:
              </p>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <ol className="space-y-3 text-slate-300 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">1.</span>
                    <span>Role 1d20</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">2.</span>
                    <span>Adicione o modificador relevante (atributo ou perícia)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">3.</span>
                    <span>Compare com a Classe de Dificuldade (CD)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">4.</span>
                    <span>Se o resultado for ≥ CD, você sucede</span>
                  </li>
                </ol>
              </div>
            </Card>
          </section>

          {/* Equipment Section */}
          <section id="equipment" className="mb-8">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl font-bold mb-4">Equipamento</h3>
              <p className="text-slate-300 mb-6">
                Equipamento afeta suas capacidades em combate:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Armas</h4>
                  <p className="text-slate-300 text-sm">
                    Aumentam o dano de seus ataques. Diferentes armas têm diferentes dados de dano.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Armadura</h4>
                  <p className="text-slate-300 text-sm">
                    Aumenta sua Classe de Armadura (CA), tornando mais difícil acertar você.
                  </p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Itens Mágicos</h4>
                  <p className="text-slate-300 text-sm">
                    Proporcionam bônus especiais ou habilidades únicas em combate.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link href="/character-creator" className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                Criar Personagem
              </Button>
            </Link>
            <Link href="/combat-rules" className="flex-1">
              <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
                Regras de Combate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
