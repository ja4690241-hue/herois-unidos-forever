import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { classProgressions } from "@/lib/advancedGameData";
import { ChevronLeft } from "lucide-react";

export default function ClassProgression() {
  const [selectedClassId, setSelectedClassId] = useState(classProgressions[0].classId);

  const selectedClass = classProgressions.find((c) => c.classId === selectedClassId);

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
          <h1 className="text-2xl font-bold">Progressão de Classes</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Classes List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Classes</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {classProgressions.map((cls) => (
                <button
                  key={cls.classId}
                  onClick={() => setSelectedClassId(cls.classId)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedClassId === cls.classId
                      ? "bg-blue-600 border border-blue-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{cls.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{cls.className}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Progression Details */}
          <div className="lg:col-span-3">
            {selectedClass && (
              <>
                <h2 className="text-3xl font-bold mb-8">
                  {selectedClass.icon} Progressão de {selectedClass.className}
                </h2>

                <div className="space-y-3">
                  {selectedClass.levels.map((level) => (
                    <Card
                      key={level.level}
                      className={`border-l-4 p-4 ${
                        level.level % 5 === 0
                          ? "bg-yellow-900/20 border-l-yellow-500"
                          : "bg-slate-800 border-l-blue-500 border-slate-700"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Nível {level.level}
                            </span>
                            <h3 className="text-xl font-bold text-blue-300">
                              {level.ability}
                            </h3>
                          </div>
                          <p className="text-slate-300">{level.description}</p>
                        </div>
                        {level.level % 4 === 0 && (
                          <div className="ml-4 px-3 py-1 bg-green-600/30 border border-green-600 rounded text-green-300 text-sm font-semibold">
                            +2 Atributo
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Milestone Info */}
                <Card className="bg-slate-800 border-slate-700 p-6 mt-8">
                  <h3 className="text-lg font-bold mb-4">Marcos Importantes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded">
                      <p className="text-yellow-400 font-bold mb-2">Nível 5</p>
                      <p className="text-sm text-slate-300">Primeira habilidade especial forte</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded">
                      <p className="text-purple-400 font-bold mb-2">Nível 10</p>
                      <p className="text-sm text-slate-300">Forma Suprema desbloqueada</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded">
                      <p className="text-red-400 font-bold mb-2">Nível 15</p>
                      <p className="text-sm text-slate-300">Poder máximo alcançado</p>
                    </div>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/character-creator" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Criar Personagem
            </Button>
          </Link>
          <Link href="/spells" className="flex-1">
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
              Ver Magias
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
