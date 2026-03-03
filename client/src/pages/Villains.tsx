import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { villains } from "@/lib/villainsData";
import { ChevronLeft, Heart, Shield, Sword } from "lucide-react";

export default function Villains() {
  const [selectedVillain, setSelectedVillain] = useState(villains?.[0] || null);

  if (!selectedVillain || !villains || villains.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Nenhum vilão disponível</h1>
          <Link href="/">
            <Button variant="ghost" className="text-slate-300">
              <ChevronLeft className="mr-2" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getThreatColor = (difficulty?: string) => {
    switch (difficulty) {
      case "Lendário":
        return "text-red-500";
      case "Extremo":
        return "text-orange-500";
      case "Difícil":
        return "text-yellow-500";
      case "Médio":
        return "text-green-500";
      default:
        return "text-slate-400";
    }
  };

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
          <h1 className="text-2xl font-bold">Vilões Poderosos</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Villains List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Ameaças Disponíveis</h2>
            <div className="space-y-2">
              {villains && Array.isArray(villains) && villains.length > 0 ? (
                villains.map((villain) => {
                  if (!villain || !villain.id) return null;
                  return (
                    <button
                      key={villain.id}
                      onClick={() => setSelectedVillain(villain)}
                      className={`w-full text-left p-3 rounded-lg transition ${
                        selectedVillain?.id === villain.id
                          ? "bg-red-600 border border-red-500"
                          : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{villain.icon || "😈"}</span>
                        <div>
                          <div className="font-semibold text-sm">{villain.name || "Vilão"}</div>
                          <div className="text-xs text-slate-400">
                            {villain.difficulty || "Desconhecido"}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <p className="text-slate-400">Nenhum vilão encontrado.</p>
              )}
            </div>
          </div>

          {/* Villain Details */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700 p-8">
              {/* Villain Header */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <div className="mb-4">
                  <p className={`text-sm font-bold mb-2 ${getThreatColor(selectedVillain?.difficulty)}`}>
                    {selectedVillain?.difficulty || "Desconhecido"}
                  </p>
                  <h3 className="text-4xl font-bold mb-2">{selectedVillain?.name || "Vilão"}</h3>
                  <p className="text-slate-400 italic mb-4">
                    "{selectedVillain?.description || "Sem descrição disponível"}"
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-slate-700 px-3 py-1 rounded">
                      {selectedVillain?.title || "Sem título"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-4">Estatísticas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-slate-400">Pontos de Vida</span>
                    </div>
                    <p className="text-3xl font-bold text-red-400">
                      {selectedVillain?.stats?.hp || "N/A"}
                    </p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-slate-400">
                        Classe de Armadura
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-blue-400">
                      {selectedVillain?.stats?.ca || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sword className="w-5 h-5 text-orange-400" />
                    <span className="text-sm text-slate-400">Ataque Base</span>
                  </div>
                  <p className="text-xl font-bold text-orange-400">
                    {selectedVillain?.stats?.attack || "N/A"}
                  </p>
                </div>
              </div>

              {/* Abilities */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-4">Habilidades Especiais</h4>
                <div className="space-y-4">
                  {selectedVillain?.abilities && Array.isArray(selectedVillain.abilities) && selectedVillain.abilities.length > 0 ? (
                    selectedVillain.abilities.map((ability, idx) => {
                      if (!ability || !ability.name) return null;
                      return (
                        <div
                          key={idx}
                          className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-purple-500"
                        >
                          <h5 className="font-semibold text-purple-300 mb-1">
                            ⚡ {ability.name}
                          </h5>
                          <p className="text-slate-300 text-sm">
                            {ability.effect || "Sem efeito descrito"}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-slate-400">Nenhuma habilidade especial.</p>
                  )}
                </div>
              </div>

              {/* Weakness */}
              <div>
                <h4 className="text-lg font-bold mb-3 text-yellow-400">
                  🎯 Informações Adicionais
                </h4>
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/50">
                  <p className="text-slate-300 text-sm">
                    {selectedVillain?.description || "Sem informações adicionais"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
