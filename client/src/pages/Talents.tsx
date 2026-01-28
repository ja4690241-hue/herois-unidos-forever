import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { talents, passives } from "@/lib/talentsData";
import { ChevronLeft } from "lucide-react";

export default function Talents() {
  const [filterClass, setFilterClass] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"ativo" | "passivo" | null>(null);
  const [selectedTalentId, setSelectedTalentId] = useState(talents[0].id);

  const selectedTalent = talents.find((t) => t.id === selectedTalentId);
  const classes = Array.from(new Set(talents.map((t) => t.class)));

  let filteredTalents = talents;
  if (filterClass) {
    filteredTalents = filteredTalents.filter((t) => t.class === filterClass);
  }
  if (filterType) {
    filteredTalents = filteredTalents.filter((t) => t.type === filterType);
  }

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
          <h1 className="text-2xl font-bold">⭐ Talentos e Habilidades</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Filtrar por Classe</h2>
            <div className="space-y-2 mb-6">
              <button
                onClick={() => setFilterClass(null)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterClass === null
                    ? "bg-blue-600 border border-blue-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                Todas
              </button>
              {classes.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setFilterClass(cls)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    filterClass === cls
                      ? "bg-blue-600 border border-blue-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">Filtrar por Tipo</h2>
            <div className="space-y-2 mb-6">
              <button
                onClick={() => setFilterType(null)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterType === null
                    ? "bg-green-600 border border-green-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterType("ativo")}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterType === "ativo"
                    ? "bg-green-600 border border-green-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                ⚡ Ativos
              </button>
              <button
                onClick={() => setFilterType("passivo")}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterType === "passivo"
                    ? "bg-green-600 border border-green-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                🛡️ Passivos
              </button>
            </div>

            <h2 className="text-xl font-bold mb-4">Talentos</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredTalents.map((talent) => (
                <button
                  key={talent.id}
                  onClick={() => setSelectedTalentId(talent.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedTalentId === talent.id
                      ? "bg-yellow-600 border border-yellow-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="font-semibold text-sm">{talent.name}</div>
                  <div className="text-xs text-slate-400 mt-1">
                    {talent.type === "ativo" ? "⚡" : "🛡️"} Nível {talent.level}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            {selectedTalent && (
              <>
                <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">{selectedTalent.name}</h2>
                      <p className="text-slate-300">{selectedTalent.description}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-lg font-bold ${
                      selectedTalent.type === "ativo"
                        ? "bg-yellow-600 text-white"
                        : "bg-green-600 text-white"
                    }`}>
                      {selectedTalent.type === "ativo" ? "⚡ Ativo" : "🛡️ Passivo"}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Classe</p>
                      <p className="text-2xl font-bold text-blue-400">{selectedTalent.class}</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Nível</p>
                      <p className="text-2xl font-bold text-purple-400">{selectedTalent.level}</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Custo</p>
                      <p className="text-2xl font-bold text-red-400">{selectedTalent.cost}</p>
                      <p className="text-xs text-slate-500">Energia/Mana</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Tipo</p>
                      <p className="text-lg font-bold text-green-400">
                        {selectedTalent.type === "ativo" ? "⚡ Ativo" : "🛡️ Passivo"}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                    <h3 className="text-xl font-bold mb-3 text-green-300">Efeito:</h3>
                    <p className="text-slate-300">{selectedTalent.effect}</p>
                  </div>
                </Card>

                {/* All Talents by Class */}
                {classes.map((cls) => {
                  const classTalents = talents.filter((t) => t.class === cls);
                  return (
                    <div key={cls} className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">{cls}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {classTalents.map((talent) => (
                          <Card
                            key={talent.id}
                            className={`bg-slate-800 border-slate-700 p-6 cursor-pointer transition hover:border-yellow-500 ${
                              selectedTalentId === talent.id ? "border-yellow-500" : ""
                            }`}
                            onClick={() => setSelectedTalentId(talent.id)}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <p className="font-bold text-lg">{talent.name}</p>
                                <p className="text-sm text-slate-400 mt-1">{talent.description}</p>
                              </div>
                              <span className={`px-3 py-1 rounded text-sm font-bold ${
                                talent.type === "ativo"
                                  ? "bg-yellow-600 text-white"
                                  : "bg-green-600 text-white"
                              }`}>
                                {talent.type === "ativo" ? "⚡" : "🛡️"}
                              </span>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500">
                              <span>Nível {talent.level}</span>
                              <span>Custo: {talent.cost}</span>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* Passives Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">🛡️ Habilidades Passivas Especiais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {passives.map((passive) => (
              <Card key={passive.id} className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl font-bold mb-2">{passive.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{passive.description}</p>
                <div className="bg-slate-700/50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-green-300 font-semibold">{passive.effect}</p>
                </div>
                <div className="space-y-1">
                  {passive.bonus.map((bonus, idx) => (
                    <p key={idx} className="text-xs text-slate-300">
                      ✓ {bonus}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/backgrounds" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Ver Antecedentes
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
