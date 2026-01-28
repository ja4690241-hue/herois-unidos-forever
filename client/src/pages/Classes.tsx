import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { classes } from "@/lib/classesData";
import { ChevronLeft, Zap } from "lucide-react";

export default function Classes() {
  const [selectedClassId, setSelectedClassId] = useState(classes[0].id);
  const [selectedSpecId, setSelectedSpecId] = useState(classes[0].specializations[0].id);

  const selectedClass = classes.find((c) => c.id === selectedClassId) || classes[0];
  const selectedSpec = selectedClass.specializations.find((s) => s.id === selectedSpecId) || selectedClass.specializations[0];

  const handleClassChange = (classId: string) => {
    const newClass = classes.find((c) => c.id === classId);
    if (newClass) {
      setSelectedClassId(classId);
      setSelectedSpecId(newClass.specializations[0].id);
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
          <h1 className="text-2xl font-bold">Classes e Profissões</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Classes List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Profissões Disponíveis</h2>
            <div className="space-y-2">
              {classes.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => handleClassChange(cls.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedClassId === cls.id
                      ? "bg-blue-600 border border-blue-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{cls.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{cls.name}</div>
                      <div className="text-xs text-slate-400">
                        {cls.attributes.primary} + {cls.attributes.secondary}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Class Details */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
              {/* Class Header */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-6xl">{selectedClass.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold mb-2">{selectedClass.name}</h3>
                    <p className="text-slate-400 mb-4">{selectedClass.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-slate-700 px-3 py-1 rounded text-sm">
                        {selectedClass.attributes.primary}
                      </span>
                      <span className="bg-slate-700 px-3 py-1 rounded text-sm">
                        {selectedClass.attributes.secondary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Style */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-3">Estilo de Jogo</h4>
                <p className="text-slate-300">{selectedClass.gameStyle}</p>
              </div>

              {/* Unique Abilities */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-4">Habilidades Únicas</h4>
                <div className="space-y-4">
                  {selectedClass.uniqueAbilities.map((ability, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-blue-500"
                    >
                      <h5 className="font-semibold text-blue-300 mb-2">
                        {ability.name}
                      </h5>
                      <p className="text-slate-300 text-sm">{ability.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-8 pb-8 border-b border-slate-700">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Especializações
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {selectedClass.specializations.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => setSelectedSpecId(spec.id)}
                      className={`p-4 rounded-lg text-left transition ${
                        selectedSpecId === spec.id
                          ? "bg-purple-600 border border-purple-500"
                          : "bg-slate-700 border border-slate-600 hover:border-slate-500"
                      }`}
                    >
                      <p className="font-semibold text-sm">{spec.name}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        {spec.description}
                      </p>
                    </button>
                  ))}
                </div>

                {selectedSpec && (
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-700">
                    <h5 className="font-semibold text-purple-300 mb-3">
                      Bônus de {selectedSpec.name}:
                    </h5>
                    <div className="space-y-2">
                      {selectedSpec.bonuses.map((bonus, idx) => (
                        <p key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                          <span className="text-purple-400">✓</span>
                          {bonus}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Recommended Skills */}
              <div>
                <h4 className="text-lg font-bold mb-3">Perícias Recomendadas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedClass.recommendedSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="flex gap-4">
              <Link href="/character-creator" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Criar Personagem
                </Button>
              </Link>
              <Link href="/equipment" className="flex-1">
                <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
                  Ver Equipamentos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
