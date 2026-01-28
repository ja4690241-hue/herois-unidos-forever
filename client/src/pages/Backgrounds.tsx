import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { backgrounds } from "@/lib/talentsData";
import { ChevronLeft } from "lucide-react";

export default function Backgrounds() {
  const [selectedBackgroundId, setSelectedBackgroundId] = useState(backgrounds[0].id);

  const selectedBackground = backgrounds.find((b) => b.id === selectedBackgroundId);

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
          <h1 className="text-2xl font-bold">📖 Antecedentes e Histórias</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Antecedentes</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {backgrounds.map((background) => (
                <button
                  key={background.id}
                  onClick={() => setSelectedBackgroundId(background.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedBackgroundId === background.id
                      ? "bg-purple-600 border border-purple-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{background.emoji}</span>
                    <div className="font-semibold text-sm">{background.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            {selectedBackground && (
              <>
                <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl">{selectedBackground.emoji}</div>
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold mb-2">{selectedBackground.name}</h2>
                      <p className="text-slate-300 text-lg">{selectedBackground.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-blue-300">📚 Perícias Iniciais:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedBackground.skills.map((skill, idx) => (
                        <div key={idx} className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                          <p className="text-slate-300">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Equipment */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-green-300">🎒 Equipamento Inicial:</h3>
                    <div className="space-y-2">
                      {selectedBackground.equipment.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                          <span className="text-green-400">✓</span>
                          <span className="text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Ability */}
                  <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-lg border border-yellow-600/50">
                    <h3 className="text-xl font-bold mb-3 text-yellow-300">⭐ Habilidade Especial: {selectedBackground.specialAbility}</h3>
                    <p className="text-slate-300">{selectedBackground.abilityDescription}</p>
                  </div>
                </Card>

                {/* All Backgrounds Grid */}
                <h3 className="text-2xl font-bold mb-6">Todos os Antecedentes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {backgrounds.map((background) => (
                    <Card
                      key={background.id}
                      className={`bg-slate-800 border-slate-700 p-6 cursor-pointer transition hover:border-purple-500 ${
                        selectedBackgroundId === background.id ? "border-purple-500" : ""
                      }`}
                      onClick={() => setSelectedBackgroundId(background.id)}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-4xl">{background.emoji}</span>
                        <div className="flex-1">
                          <p className="font-bold text-lg">{background.name}</p>
                          <p className="text-sm text-slate-400 mt-1">{background.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Perícias:</p>
                          <p className="text-sm text-slate-300">{background.skills.join(", ")}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Habilidade Especial:</p>
                          <p className="text-sm text-yellow-300 font-semibold">{background.specialAbility}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/talents" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Ver Talentos
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
