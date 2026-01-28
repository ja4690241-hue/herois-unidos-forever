import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { races } from "@/lib/gameData";
import { ChevronLeft, Zap } from "lucide-react";

export default function Races() {
  const [selectedRace, setSelectedRace] = useState(races[0]);

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
          <h1 className="text-2xl font-bold">Raças do Sistema</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Races List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Raças Disponíveis</h2>
            <div className="space-y-2">
              {races.map((race) => (
                <button
                  key={race.id}
                  onClick={() => setSelectedRace(race)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedRace.id === race.id
                      ? "bg-blue-600 border border-blue-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{race.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{race.name}</div>
                      <div className="text-xs text-slate-400">
                        {race.examples[0]}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Race Details */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700 p-8">
              {/* Race Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{selectedRace.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedRace.name}</h3>
                    <p className="text-slate-400">{selectedRace.description}</p>
                  </div>
                </div>
              </div>

              {/* Attributes */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Atributos
                </h4>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-400">
                    {selectedRace.attributes.bonus}
                  </p>
                  <p className="text-slate-300 text-sm mt-2">
                    {selectedRace.attributes.details}
                  </p>
                </div>
              </div>

              {/* Special Abilities */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-4">Habilidades Especiais</h4>
                <div className="space-y-4">
                  {selectedRace.specialAbilities.map((ability, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-blue-500"
                    >
                      <h5 className="font-semibold text-blue-300 mb-1">
                        ✓ {ability.name}
                      </h5>
                      <p className="text-slate-300 text-sm">
                        {ability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evolution */}
              {selectedRace.evolution && (
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <h4 className="text-lg font-bold mb-3">Evolução Disponível</h4>
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg border border-purple-700">
                    <h5 className="font-semibold text-purple-300 mb-2">
                      🚀 {selectedRace.evolution.name}
                    </h5>
                    <p className="text-slate-300 text-sm mb-3">
                      {selectedRace.evolution.description}
                    </p>
                    <div className="space-y-1">
                      {selectedRace.evolution.bonuses.map((bonus, idx) => (
                        <p key={idx} className="text-sm text-purple-200">
                          • {bonus}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Weakness */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-3 text-red-400">
                  ⚠️ Fraqueza
                </h4>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/50">
                  <p className="text-slate-300 text-sm">
                    {selectedRace.weakness}
                  </p>
                </div>
              </div>

              {/* Examples */}
              <div>
                <h4 className="text-lg font-bold mb-3">Exemplos de Personagens</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRace.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <Link href="/character-creator">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                    Criar Personagem com {selectedRace.name}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
