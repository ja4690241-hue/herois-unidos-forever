import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { races } from "@/lib/gameData";
import { ChevronLeft, Zap, Star, ShieldAlert } from "lucide-react";

export default function Races() {
  const [selectedRace, setSelectedRace] = useState(races[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
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
                      ? "bg-blue-600 border border-blue-500 shadow-lg shadow-blue-500/20"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{race.icon}</span>
                    <div>
                      <div className="font-bold text-sm">{race.name}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">
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
            <Card className="bg-slate-800 border-slate-700 p-8 shadow-2xl">
              {/* Race Header */}
              <div className="mb-8">
                <div className="flex items-center gap-6 mb-4">
                  <div className="text-7xl p-4 bg-slate-900 rounded-2xl border border-slate-700">{selectedRace.icon}</div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{selectedRace.name}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{selectedRace.description}</p>
                  </div>
                </div>
              </div>

              {/* Attributes & Weakness */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 bg-blue-900/20 rounded-xl border border-blue-500/30">
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2 text-blue-400 uppercase tracking-widest">
                    <Zap className="w-4 h-4" /> Bônus de Atributos
                  </h4>
                  <p className="font-bold text-xl text-white mb-1">
                    {selectedRace.attributes.bonus}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {selectedRace.attributes.details}
                  </p>
                </div>
                <div className="p-5 bg-red-900/20 rounded-xl border border-red-500/30">
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2 text-red-400 uppercase tracking-widest">
                    <ShieldAlert className="w-4 h-4" /> Fraqueza
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedRace.weakness}
                  </p>
                </div>
              </div>

              {/* Special Abilities */}
              <div className="mb-10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Star className="text-yellow-400 h-5 w-5" /> Habilidades de Raça
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedRace.specialAbilities.map((ability, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition"
                    >
                      <h5 className="font-bold text-blue-300 mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {ability.name}
                      </h5>
                      <p className="text-slate-300 text-sm">
                        {ability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Races */}
              {selectedRace.subRaces && selectedRace.subRaces.length > 0 && (
                <div className="mb-10">
                  <h4 className="text-xl font-bold mb-4">Sub-Raças / Variantes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedRace.subRaces.map((sub, idx) => (
                      <div key={idx} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                        <h5 className="font-bold text-white mb-1">{sub.name}</h5>
                        <p className="text-xs text-slate-400 mb-3">{sub.description}</p>
                        <div className="text-xs font-bold text-blue-400 mb-2">{sub.attributeBonus}</div>
                        {sub.benefits && (
                          <ul className="space-y-1">
                            {sub.benefits.map((benefit, i) => (
                              <li key={i} className="text-[10px] text-slate-300 flex items-center gap-1">
                                <span className="text-blue-500">•</span> {benefit}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Evolution */}
              {selectedRace.evolution && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/20 to-slate-800 p-6 rounded-2xl border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Zap className="w-24 h-24 text-purple-400" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold flex items-center gap-2">
                          🚀 {selectedRace.evolution.name}
                        </h4>
                        <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-bold">
                          {selectedRace.evolution.cost} PE
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm mb-4 italic">
                        {selectedRace.evolution.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedRace.evolution.bonuses.map((bonus, idx) => (
                          <div key={idx} className="text-xs text-purple-200 flex items-center gap-2 bg-purple-900/30 p-2 rounded border border-purple-500/10">
                            <span className="text-purple-400">★</span> {bonus}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Examples */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Exemplos:</span>
                {selectedRace.examples.map((example, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-700/50 px-3 py-1 rounded-lg text-xs text-slate-300 border border-slate-600/30"
                  >
                    {example}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-slate-700">
                <Link href="/character-creator">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-7 shadow-xl shadow-blue-600/20">
                    Criar Personagem {selectedRace.name}
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
