import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { races } from "@/lib/gameData";
import { ChevronLeft, Zap } from "lucide-react";

export default function Evolution() {
  const [selectedRace, setSelectedRace] = useState(races.find(r => r.evolution) || races[0]);

  const racesWithEvolution = races.filter(r => r.evolution);

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
          <h1 className="text-2xl font-bold">Evolução das Raças</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="max-w-4xl">
          {/* Introduction */}
          <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Sistema de Evolução</h2>
            <p className="text-slate-300 mb-4">
              Cada raça pode evoluir ou se aprimorar gastando <span className="font-semibold text-purple-300">Pontos de Evolução (PE)</span>. 
              A evolução desbloqueia novas formas, habilidades e bônus de atributos.
            </p>
            <p className="text-slate-400 text-sm">
              Selecione uma raça abaixo para ver suas opções de evolução disponíveis.
            </p>
          </Card>

          {/* Race Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Raças com Evolução</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {racesWithEvolution.map((race) => (
                <button
                  key={race.id}
                  onClick={() => setSelectedRace(race)}
                  className={`p-4 rounded-lg text-left transition ${
                    selectedRace?.id === race.id
                      ? "bg-purple-600 border border-purple-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{race.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{race.name}</p>
                      {race.evolution && (
                        <p className="text-xs text-slate-400">
                          → {race.evolution.name}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Evolution Details */}
          {selectedRace?.evolution && (
            <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-700 p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{selectedRace.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedRace.name}</h3>
                    <p className="text-slate-400">
                      Evolução disponível para esta raça
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b border-purple-700">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  {selectedRace.evolution.name}
                </h4>
                <p className="text-slate-300 mb-6">
                  {selectedRace.evolution.description}
                </p>

                <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-600">
                  <h5 className="font-bold text-purple-300 mb-4">
                    Bônus de Evolução:
                  </h5>
                  <div className="space-y-3">
                    {selectedRace.evolution.bonuses.map((bonus, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-purple-400 font-bold mt-1">✓</span>
                        <p className="text-slate-300">{bonus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Evolution Path */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">Caminho da Evolução</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-slate-700/50 p-4 rounded-lg text-center">
                    <p className="text-sm text-slate-400 mb-2">Forma Base</p>
                    <p className="text-lg font-bold">{selectedRace.name}</p>
                  </div>
                  <div className="text-2xl text-purple-400">→</div>
                  <div className="flex-1 bg-purple-700/50 p-4 rounded-lg text-center">
                    <p className="text-sm text-purple-300 mb-2">Forma Evoluída</p>
                    <p className="text-lg font-bold">{selectedRace.evolution.name}</p>
                  </div>
                </div>
              </div>

              {/* How to Evolve */}
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h5 className="font-bold text-blue-300 mb-3">Como Evoluir:</h5>
                <ol className="space-y-3 text-slate-300 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">1.</span>
                    <span>Ganhe experiência em combate e complete missões</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">2.</span>
                    <span>Acumule Pontos de Evolução (PE) através de vitórias</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">3.</span>
                    <span>Gaste 10 PE para desbloquear a forma evoluída</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-400">4.</span>
                    <span>Ganhe imediatamente os bônus de evolução</span>
                  </li>
                </ol>
              </div>
            </Card>
          )}

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link href="/character-creator" className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                Criar Personagem
              </Button>
            </Link>
            <Link href="/races" className="flex-1">
              <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
                Ver Raças
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
