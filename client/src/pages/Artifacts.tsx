import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { artifacts } from "@/lib/advancedGameData";
import { ChevronLeft } from "lucide-react";

export default function Artifacts() {
  const [filterType, setFilterType] = useState<"artefato" | "implante" | null>(null);
  const [selectedArtifactId, setSelectedArtifactId] = useState(artifacts[0].id);

  const selectedArtifact = artifacts.find((a) => a.id === selectedArtifactId);
  const filteredArtifacts = filterType
    ? artifacts.filter((a) => a.type === filterType)
    : artifacts;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "comum":
        return "bg-slate-600 text-white";
      case "raro":
        return "bg-blue-600 text-white";
      case "lendário":
        return "bg-yellow-600 text-white";
      default:
        return "bg-slate-600 text-white";
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case "comum":
        return "Comum";
      case "raro":
        return "Raro";
      case "lendário":
        return "Lendário";
      default:
        return "Desconhecido";
    }
  };

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
          <h1 className="text-2xl font-bold">Artefatos e Implantes</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters and List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Filtrar por Tipo</h2>
            <div className="space-y-2 mb-6">
              <button
                onClick={() => setFilterType(null)}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterType === null
                    ? "bg-blue-600 border border-blue-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterType("artefato")}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterType === "artefato"
                    ? "bg-purple-600 border border-purple-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                💎 Artefatos
              </button>
              <button
                onClick={() => setFilterType("implante")}
                className={`w-full text-left p-3 rounded-lg transition ${
                  filterType === "implante"
                    ? "bg-cyan-600 border border-cyan-500"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                🤖 Implantes
              </button>
            </div>

            <h2 className="text-xl font-bold mb-4">Itens</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredArtifacts.map((artifact) => (
                <button
                  key={artifact.id}
                  onClick={() => setSelectedArtifactId(artifact.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedArtifactId === artifact.id
                      ? "bg-green-600 border border-green-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{artifact.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{artifact.name}</div>
                      <div className={`text-xs px-2 py-0.5 rounded w-fit mt-1 ${getRarityColor(artifact.rarity)}`}>
                        {getRarityLabel(artifact.rarity)}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            {selectedArtifact && (
              <>
                <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">
                        {selectedArtifact.icon} {selectedArtifact.name}
                      </h2>
                      <p className="text-slate-300">{selectedArtifact.effect}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-lg font-bold ${getRarityColor(selectedArtifact.rarity)}`}>
                      {getRarityLabel(selectedArtifact.rarity)}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-6">
                    <span className={`px-4 py-2 rounded-lg font-bold ${
                      selectedArtifact.type === "artefato"
                        ? "bg-purple-600 text-white"
                        : "bg-cyan-600 text-white"
                    }`}>
                      {selectedArtifact.type === "artefato" ? "💎 Artefato" : "🤖 Implante"}
                    </span>
                  </div>

                  {/* Bonuses */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-300">Bônus Concedidos:</h3>
                    <div className="space-y-2">
                      {selectedArtifact.bonus.map((bonus, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                          <span className="text-green-400 text-lg">✓</span>
                          <span className="text-slate-300">{bonus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* All Items Grid */}
                <h3 className="text-2xl font-bold mb-6">Todos os Itens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredArtifacts.map((artifact) => (
                    <Card
                      key={artifact.id}
                      className={`bg-slate-800 border-slate-700 p-6 cursor-pointer transition hover:border-green-500 ${
                        selectedArtifactId === artifact.id ? "border-green-500" : ""
                      }`}
                      onClick={() => setSelectedArtifactId(artifact.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <span className="text-4xl">{artifact.icon}</span>
                          <div>
                            <p className="font-bold text-lg">{artifact.name}</p>
                            <p className={`text-xs px-2 py-0.5 rounded w-fit mt-1 ${getRarityColor(artifact.rarity)}`}>
                              {getRarityLabel(artifact.rarity)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-3">{artifact.effect}</p>
                      <div className="space-y-1">
                        {artifact.bonus.slice(0, 2).map((bonus, idx) => (
                          <p key={idx} className="text-xs text-green-300">
                            ✓ {bonus}
                          </p>
                        ))}
                        {artifact.bonus.length > 2 && (
                          <p className="text-xs text-slate-500">
                            +{artifact.bonus.length - 2} mais...
                          </p>
                        )}
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
          <Link href="/vehicles" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Ver Veículos
            </Button>
          </Link>
          <Link href="/combat-simulator" className="flex-1">
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
              Simulador de Combate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
