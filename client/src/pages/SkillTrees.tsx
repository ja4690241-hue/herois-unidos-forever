import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { skillTrees } from "@/lib/skillTreesData";
import { classes } from "@/lib/classesData";
import { ChevronLeft, Zap } from "lucide-react";

export default function SkillTrees() {
  const [selectedClassId, setSelectedClassId] = useState(classes[0].id);
  const [selectedTreeId, setSelectedTreeId] = useState("");

  const classSkillTrees = skillTrees.filter((tree) => tree.classId === selectedClassId);
  
  if (classSkillTrees.length > 0 && !selectedTreeId) {
    setSelectedTreeId(classSkillTrees[0].id);
  }

  const selectedTree = skillTrees.find((tree) => tree.id === selectedTreeId);
  const selectedClass = classes.find((c) => c.id === selectedClassId);

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
          <h1 className="text-2xl font-bold">Árvores de Habilidades</h1>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Classes List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Classes</h2>
            <div className="space-y-2">
              {classes.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => {
                    setSelectedClassId(cls.id);
                    const firstTree = skillTrees.find((t) => t.classId === cls.id);
                    if (firstTree) setSelectedTreeId(firstTree.id);
                  }}
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
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skill Trees and Details */}
          <div className="lg:col-span-3">
            {selectedClass && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  {selectedClass.icon} Árvores de {selectedClass.name}
                </h2>

                {/* Trees Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {classSkillTrees.map((tree) => (
                    <button
                      key={tree.id}
                      onClick={() => setSelectedTreeId(tree.id)}
                      className={`p-4 rounded-lg text-left transition ${
                        selectedTreeId === tree.id
                          ? "bg-purple-600 border border-purple-500"
                          : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <p className="text-2xl mb-2">{tree.icon}</p>
                      <p className="font-semibold text-sm">{tree.name}</p>
                      <p className="text-xs text-slate-400 mt-1">{tree.description}</p>
                    </button>
                  ))}
                </div>

                {/* Tree Details */}
                {selectedTree && (
                  <Card className="bg-slate-800 border-slate-700 p-8">
                    <div className="mb-8 pb-8 border-b border-slate-700">
                      <h3 className="text-4xl font-bold mb-2">
                        {selectedTree.icon} {selectedTree.name}
                      </h3>
                      <p className="text-slate-300">{selectedTree.description}</p>
                    </div>

                    {/* Skill Nodes */}
                    <div className="space-y-6">
                      {selectedTree.nodes.map((node, idx) => (
                        <div
                          key={node.id}
                          className="relative bg-slate-700/50 p-6 rounded-lg border-l-4 border-yellow-500"
                        >
                          {/* Level Badge */}
                          <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Nível {node.level}
                          </div>

                          {/* Node Header */}
                          <div className="mb-4">
                            <h4 className="text-2xl font-bold text-yellow-300 mb-2">
                              {node.icon} {node.name}
                            </h4>
                            <p className="text-slate-300">{node.description}</p>
                          </div>

                          {/* Prerequisites */}
                          {node.prerequisites && node.prerequisites.length > 0 && (
                            <div className="mb-4 p-3 bg-slate-600/50 rounded border-l-2 border-orange-500">
                              <p className="text-sm text-orange-300 font-semibold mb-2">
                                Pré-requisitos:
                              </p>
                              <div className="space-y-1">
                                {node.prerequisites.map((prereq) => (
                                  <p key={prereq} className="text-sm text-slate-300">
                                    ✓ {selectedTree.nodes.find((n) => n.id === prereq)?.name || prereq}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Bonuses */}
                          <div>
                            <p className="text-sm text-green-300 font-semibold mb-2">
                              Bônus:
                            </p>
                            <div className="space-y-1">
                              {node.bonuses.map((bonus, bidx) => (
                                <p key={bidx} className="text-sm text-slate-300 flex items-center gap-2">
                                  <span className="text-green-400">✓</span>
                                  {bonus}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <Link href="/character-creator" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Criar Personagem
            </Button>
          </Link>
          <Link href="/classes" className="flex-1">
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
              Ver Classes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
