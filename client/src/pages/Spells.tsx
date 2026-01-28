import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { spells } from "@/lib/advancedGameData";
import { ChevronLeft, Zap } from "lucide-react";

export default function Spells() {
  const [selectedSpellId, setSelectedSpellId] = useState(spells[0].id);
  const [filterLevel, setFilterLevel] = useState<number | null>(null);

  const selectedSpell = spells.find((s) => s.id === selectedSpellId);
  const filteredSpells = filterLevel ? spells.filter((s) => s.level === filterLevel) : spells;

  const levels = Array.from(new Set(spells.map((s) => s.level))).sort();

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
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Magias e Feitiços
          </h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Spells List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Filtrar por Nível</h2>
            <div className="space-y-2 mb-6">
              <button
                onClick={() => setFilterLevel(null)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterLevel === null
                    ? "bg-blue-600 border border-blue-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                Todas as Magias
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    filterLevel === level
                      ? "bg-blue-600 border border-blue-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  Nível {level}
                </button>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">Magias</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredSpells.map((spell) => (
                <button
                  key={spell.id}
                  onClick={() => setSelectedSpellId(spell.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedSpellId === spell.id
                      ? "bg-purple-600 border border-purple-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{spell.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{spell.name}</div>
                      <div className="text-xs text-slate-400">Nível {spell.level}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Spell Details */}
          <div className="lg:col-span-3">
            {selectedSpell && (
              <>
                <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">
                        {selectedSpell.icon} {selectedSpell.name}
                      </h2>
                      <p className="text-slate-300">{selectedSpell.description}</p>
                    </div>
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                      Nível {selectedSpell.level}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Dano</p>
                      <p className="text-2xl font-bold text-red-400">{selectedSpell.damage}</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Alcance</p>
                      <p className="text-2xl font-bold text-blue-400">{selectedSpell.range}</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Duração</p>
                      <p className="text-2xl font-bold text-green-400">{selectedSpell.duration}</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Custo (EP)</p>
                      <p className="text-2xl font-bold text-yellow-400">{selectedSpell.cost}</p>
                    </div>
                  </div>
                </Card>

                {/* All Spells by Level */}
                <h3 className="text-2xl font-bold mb-6">Todas as Magias</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((level) => {
                    const levelSpells = spells.filter((s) => s.level === level);
                    return (
                      <div key={level}>
                        <h4 className="text-lg font-bold text-yellow-300 mb-3">Nível {level}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {levelSpells.map((spell) => (
                            <Card
                              key={spell.id}
                              className={`bg-slate-800 border-slate-700 p-4 cursor-pointer transition hover:border-purple-500 ${
                                selectedSpellId === spell.id ? "border-purple-500" : ""
                              }`}
                              onClick={() => setSelectedSpellId(spell.id)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-start gap-3">
                                  <span className="text-3xl">{spell.icon}</span>
                                  <div>
                                    <p className="font-bold">{spell.name}</p>
                                    <p className="text-sm text-slate-400">{spell.description}</p>
                                  </div>
                                </div>
                                <span className="bg-purple-600 px-2 py-1 rounded text-sm font-bold">
                                  {spell.cost} EP
                                </span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/artifacts" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Ver Artefatos
            </Button>
          </Link>
          <Link href="/character-creator" className="flex-1">
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
              Criar Personagem
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
