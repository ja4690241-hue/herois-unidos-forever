import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { races } from "@/lib/gameData";
import { classes, skills } from "@/lib/classesData";
import { ChevronLeft, Download, ChevronRight } from "lucide-react";
import TalentSelection from "./TalentSelection";

interface Character {
  name: string;
  race: string;
  subRace: string;
  class: string;
  image: string | null;
  attributes: {
    strength: number;
    dexterity: number;
    intelligence: number;
    charisma: number;
    constitution: number;
    will: number;
  };
  selectedSkills: string[];
  selectedTalents: string[];
  hp: number;
  ca: number;
  mana: number;
}

export default function CharacterCreator() {
  const [step, setStep] = useState<number>(1);
  const [character, setCharacter] = useState<Character>({
    name: "",
    race: races[0]?.id || "",
    subRace: "",
    class: classes[0]?.id || "",
    image: null,
    attributes: {
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      charisma: 10,
      constitution: 10,
      will: 10,
    },
    selectedSkills: [],
    selectedTalents: [],
    hp: 20,
    ca: 10,
    mana: 50,
  });

  const selectedRace = races.find((r) => r.id === character.race);
  const selectedClass = classes.find((c) => c.id === character.class);

  const handleAttributeChange = (attr: keyof Character["attributes"], value: number) => {
    const newAttributes = { ...character.attributes };
    newAttributes[attr] = Math.max(1, Math.min(30, value));
    setCharacter({ ...character, attributes: newAttributes });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCharacter({ ...character, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSkill = (skillId: string) => {
    const newSkills = character.selectedSkills.includes(skillId)
      ? character.selectedSkills.filter((s) => s !== skillId)
      : [...character.selectedSkills, skillId].slice(0, 4);
    setCharacter({ ...character, selectedSkills: newSkills });
  };

  const calculateModifier = (attributeValue: number) => {
    return Math.floor((attributeValue - 10) / 2);
  };

  const calculateHP = () => {
    const baseHP = 20;
    const conBonus = calculateModifier(character.attributes.constitution);
    return Math.max(1, baseHP + conBonus + 10);
  };

  const calculateCA = () => {
    const baseDex = calculateModifier(character.attributes.dexterity);
    return 10 + baseDex;
  };

  const calculateMana = () => {
    const baseMana = 30;
    const intBonus = calculateModifier(character.attributes.intelligence);
    return Math.max(10, baseMana + intBonus * 2);
  };

  const downloadCharacter = () => {
    const charData = {
      ...character,
      hp: calculateHP(),
      ca: calculateCA(),
      mana: calculateMana(),
      modifiers: {
        strength: calculateModifier(character.attributes.strength),
        dexterity: calculateModifier(character.attributes.dexterity),
        intelligence: calculateModifier(character.attributes.intelligence),
        charisma: calculateModifier(character.attributes.charisma),
        constitution: calculateModifier(character.attributes.constitution),
        will: calculateModifier(character.attributes.will),
      },
    };
    const json = JSON.stringify(charData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${character.name || "personagem"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-slate-300">
              <ChevronLeft className="mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">👤 Criador de Personagem</h1>
          <div className="text-sm text-slate-400">Passo {step} de 4</div>
        </div>
      </header>

      <div className="container py-12">
        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Escolha sua Raça</h2>
              <div className="space-y-3 mb-8">
                {races.map((race) => (
                  <button
                    key={race.id}
                    onClick={() => setCharacter({ ...character, race: race.id, subRace: "" })}
                    className={`w-full text-left p-4 rounded-lg border-2 transition flex items-center gap-4 ${
                      character.race === race.id
                        ? "bg-blue-600 border-blue-500"
                        : "bg-slate-700 border-slate-600 hover:border-blue-500"
                    }`}
                  >
                    <span className="text-3xl">{race.icon}</span>
                    <div>
                      <p className="font-bold">{race.name}</p>
                      <p className="text-xs text-slate-400">{race.examples[0]}</p>
                    </div>
                  </button>
                ))}
              </div>

              {selectedRace?.subRaces && selectedRace.subRaces.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Sub-raça</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setCharacter({ ...character, subRace: "" })}
                      className={`w-full text-left p-3 rounded-lg border-2 transition ${
                        character.subRace === ""
                          ? "bg-purple-600 border-purple-500"
                          : "bg-slate-700 border-slate-600 hover:border-purple-500"
                      }`}
                    >
                      Raça Pura
                    </button>
                    {selectedRace.subRaces.map((sr) => (
                      <button
                        key={sr.id}
                        onClick={() => setCharacter({ ...character, subRace: sr.id })}
                        className={`w-full text-left p-3 rounded-lg border-2 transition ${
                          character.subRace === sr.id
                            ? "bg-purple-600 border-purple-500"
                            : "bg-slate-700 border-slate-600 hover:border-purple-500"
                        }`}
                      >
                        {sr.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button onClick={() => setStep(2)} className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                Próximo <ChevronRight className="ml-2" />
              </Button>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Escolha sua Classe</h2>
              <div className="space-y-3 mb-8">
                {classes.map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => setCharacter({ ...character, class: cls.id })}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      character.class === cls.id
                        ? "bg-green-600 border-green-500"
                        : "bg-slate-700 border-slate-600 hover:border-green-500"
                    }`}
                  >
                    <p className="font-bold">{cls.icon} {cls.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{cls.description}</p>
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setStep(1)} variant="outline" className="flex-1 border-slate-600">
                  <ChevronLeft className="mr-2" />
                  Voltar
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Próximo <ChevronRight className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Distribua seus Atributos (1-30)</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {Object.entries(character.attributes).map(([attr, value]) => (
                  <div key={attr}>
                    <div className="flex justify-between mb-2">
                      <label className="font-bold capitalize">{attr}</label>
                      <span className="text-blue-400 font-bold">{value}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={value}
                      onChange={(e) =>
                        handleAttributeChange(attr as keyof Character["attributes"], parseInt(e.target.value))
                      }
                      className="w-full"
                    />
                    <div className="text-sm text-slate-400 mt-1">
                      Mod: {calculateModifier(value) > 0 ? "+" : ""}{calculateModifier(value)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg mb-8 border border-slate-600">
                <p className="text-sm text-slate-300">
                  <strong>HP:</strong> {calculateHP()} | <strong>CA:</strong> {calculateCA()} | <strong>Mana:</strong> {calculateMana()}
                </p>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setStep(2)} variant="outline" className="flex-1 border-slate-600">
                  <ChevronLeft className="mr-2" />
                  Voltar
                </Button>
                <Button onClick={() => setStep(4)} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Próximo <ChevronRight className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Finalize seu Personagem</h2>

              <div className="mb-8">
                <label className="block text-lg font-bold mb-4">Nome do Personagem</label>
                <input
                  type="text"
                  value={character.name}
                  onChange={(e) => setCharacter({ ...character, name: e.target.value })}
                  placeholder="Digite o nome..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-500"
                />
              </div>

              <div className="mb-8">
                <label className="block text-lg font-bold mb-4">Upload de Imagem</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                />
                {character.image && (
                  <img src={character.image} alt="Personagem" className="w-32 h-32 rounded-lg mt-4 object-cover" />
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Perícias (até 4)</h3>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <button
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition ${
                        character.selectedSkills.includes(skill.id)
                          ? "bg-blue-600 border-blue-500"
                          : "bg-slate-700 border-slate-600 hover:border-blue-500"
                      }`}
                    >
                      <p className="font-bold text-sm">{skill.name}</p>
                      <p className="text-xs text-slate-400">{skill.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Talentos (até 3)</h3>
                <TalentSelection
                  selectedTalents={character.selectedTalents}
                  onTalentSelect={(talentId) => {
                    setCharacter({
                      ...character,
                      selectedTalents: [...character.selectedTalents, talentId]
                    });
                  }}
                  onTalentRemove={(talentId) => {
                    setCharacter({
                      ...character,
                      selectedTalents: character.selectedTalents.filter(t => t !== talentId)
                    });
                  }}
                  playerStats={{
                    strength: character.attributes.strength,
                    dexterity: character.attributes.dexterity,
                    intelligence: character.attributes.intelligence,
                    charisma: character.attributes.charisma,
                    constitution: character.attributes.constitution,
                    will: character.attributes.will,
                    level: 1
                  }}
                  maxTalents={3}
                />
              </div>

              <div className="bg-slate-700/50 p-6 rounded-lg mb-8 border border-slate-600">
                <h3 className="text-lg font-bold mb-4">Resumo</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p><strong>Nome:</strong> {character.name || "Sem nome"}</p>
                  <p><strong>Raça:</strong> {selectedRace?.name}</p>
                  <p><strong>Classe:</strong> {selectedClass?.name}</p>
                  <p><strong>HP:</strong> {calculateHP()}</p>
                  <p><strong>CA:</strong> {calculateCA()}</p>
                  <p><strong>Mana:</strong> {calculateMana()}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setStep(3)} variant="outline" className="flex-1 border-slate-600">
                  <ChevronLeft className="mr-2" />
                  Voltar
                </Button>
                <Button onClick={downloadCharacter} className="flex-1 bg-green-600 hover:bg-green-700">
                  <Download className="mr-2" />
                  Baixar Ficha
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
