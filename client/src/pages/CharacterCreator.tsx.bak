import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { races } from "@/lib/gameData";
import { classes } from "@/lib/classesData";
import { backgrounds } from "@/lib/backgroundsData";
import { skills } from "@/lib/skillsData";
import { availableTalents, racePassives, classAbilities, raceEvolutions } from "@/lib/characterCreationData";
import { miraculous, talismans, specialItems } from "@/lib/itemsData";
import { CustomAbility, CustomPassive } from "@/lib/customAbilitiesData";
import { CustomAbilityModal } from "@/components/CustomAbilityModal";
import { CustomPassiveModal } from "@/components/CustomPassiveModal";
import { ChevronLeft, Download, ChevronRight, User, Shield, Zap, BookOpen, Sparkles, Wand2, Plus, Trash2 } from "lucide-react";

interface Character {
  name: string;
  race: string;
  subRace: string;
  class: string;
  background: string;
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
  selectedPassives: string[];
  selectedAbilities: string[];
  selectedMiraculous?: string;
  selectedTalisman?: string;
  selectedItems: string[];
  customAbilities: CustomAbility[];
  customPassives: CustomPassive[];
}

export default function CharacterCreator() {
  const [step, setStep] = useState<number>(1);
  const [character, setCharacter] = useState<Character>({
    name: "",
    race: races[0]?.id || "",
    subRace: "",
    class: classes[0]?.id || "",
    background: backgrounds[0]?.id || "",
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
    selectedPassives: [],
    selectedAbilities: [],
    selectedMiraculous: "",
    selectedTalisman: "",
    selectedItems: [],
    customAbilities: [],
    customPassives: [],
  });

  const [showCustomAbilityModal, setShowCustomAbilityModal] = useState(false);
  const [showCustomPassiveModal, setShowCustomPassiveModal] = useState(false);

  const selectedRace = races.find((r) => r.id === character.race);
  const selectedSubRace = selectedRace?.subRaces?.find((sr) => sr.id === character.subRace);
  const selectedClass = classes.find((c) => c.id === character.class);
  const selectedBackground = backgrounds.find((b) => b.id === character.background);

  // Obter passivas raciais disponíveis
  const availableRacePassives = racePassives.filter((p) => p.raceId === character.race);

  // Obter habilidades de classe disponíveis
  const availableClassAbilities = classAbilities.filter((a) => {
    const classMap: { [key: string]: string } = {
      'lutador-corpo-a-corpo': 'lutador',
      'blaster': 'blaster',
      'mago-arcano': 'mago'
    };
    return a.id.includes(classMap[character.class] || '');
  });

  const handleAttributeChange = (attr: keyof Character["attributes"], value: number) => {
    const newAttributes = { ...character.attributes };
    newAttributes[attr] = Math.max(1, Math.min(30, value));
    setCharacter({ ...character, attributes: newAttributes });
  };

  const toggleSkill = (skillId: string) => {
    const newSkills = character.selectedSkills.includes(skillId)
      ? character.selectedSkills.filter((s) => s !== skillId)
      : [...character.selectedSkills, skillId].slice(0, 4);
    setCharacter({ ...character, selectedSkills: newSkills });
  };

  const toggleTalent = (talentId: string) => {
    const newTalents = character.selectedTalents.includes(talentId)
      ? character.selectedTalents.filter((t) => t !== talentId)
      : [...character.selectedTalents, talentId].slice(0, 3);
    setCharacter({ ...character, selectedTalents: newTalents });
  };

  const togglePassive = (passiveId: string) => {
    const newPassives = character.selectedPassives.includes(passiveId)
      ? character.selectedPassives.filter((p) => p !== passiveId)
      : [...character.selectedPassives, passiveId];
    setCharacter({ ...character, selectedPassives: newPassives });
  };

  const toggleAbility = (abilityId: string) => {
    const newAbilities = character.selectedAbilities.includes(abilityId)
      ? character.selectedAbilities.filter((a) => a !== abilityId)
      : [...character.selectedAbilities, abilityId].slice(0, 2);
    setCharacter({ ...character, selectedAbilities: newAbilities });
  };

  const toggleItem = (itemId: string) => {
    const newItems = character.selectedItems.includes(itemId)
      ? character.selectedItems.filter((i) => i !== itemId)
      : [...character.selectedItems, itemId].slice(0, 5);
    setCharacter({ ...character, selectedItems: newItems });
  };

  const calculateModifier = (attributeValue: number) => {
    return Math.floor((attributeValue - 10) / 2);
  };

  const calculateHP = () => {
    const baseHP = 20;
    const conBonus = calculateModifier(character.attributes.constitution);
    const raceBonus = availableRacePassives.find(p => p.id === 'resistencia-humana') ? 5 : 0;
    const symbiontBonus = availableRacePassives.find(p => p.id === 'ligacao-simbiotica') ? 5 : 0;
    return Math.max(1, baseHP + conBonus + raceBonus + symbiontBonus + 10);
  };

  const calculateCA = () => {
    const baseDex = calculateModifier(character.attributes.dexterity);
    const raceBonus = availableRacePassives.find(p => p.id === 'corpo-aco') ? 2 : 0;
    return 10 + baseDex + raceBonus;
  };

  const handleAddCustomAbility = (ability: CustomAbility) => {
    setCharacter({
      ...character,
      customAbilities: [...character.customAbilities, ability]
    });
    setShowCustomAbilityModal(false);
  };

  const handleRemoveCustomAbility = (abilityId: string) => {
    setCharacter({
      ...character,
      customAbilities: character.customAbilities.filter(a => a.id !== abilityId)
    });
  };

  const handleAddCustomPassive = (passive: CustomPassive) => {
    setCharacter({
      ...character,
      customPassives: [...character.customPassives, passive]
    });
    setShowCustomPassiveModal(false);
  };

  const handleRemoveCustomPassive = (passiveId: string) => {
    setCharacter({
      ...character,
      customPassives: character.customPassives.filter(p => p.id !== passiveId)
    });
  };

  const downloadCharacter = () => {
    const selectedTalentData = availableTalents.filter(t => character.selectedTalents.includes(t.id));
    const selectedPassiveData = racePassives.filter(p => character.selectedPassives.includes(p.id));
    const selectedAbilityData = classAbilities.filter(a => character.selectedAbilities.includes(a.id));
    const selectedMiraculousData = character.selectedMiraculous ? miraculous.find(m => m.id === character.selectedMiraculous) : null;
    const selectedTalismanData = character.selectedTalisman ? talismans.find(t => t.id === character.selectedTalisman) : null;
    const selectedItemsData = specialItems.filter(i => character.selectedItems.includes(i.id));

    const charData = {
      ...character,
      hp: calculateHP(),
      ca: calculateCA(),
      modifiers: {
        strength: calculateModifier(character.attributes.strength),
        dexterity: calculateModifier(character.attributes.dexterity),
        intelligence: calculateModifier(character.attributes.intelligence),
        charisma: calculateModifier(character.attributes.charisma),
        constitution: calculateModifier(character.attributes.constitution),
        will: calculateModifier(character.attributes.will),
      },
      selectedTalentDetails: selectedTalentData,
      selectedPassiveDetails: selectedPassiveData,
      selectedAbilityDetails: selectedAbilityData,
      selectedMiraculousDetails: selectedMiraculousData,
      selectedTalismanDetails: selectedTalismanData,
      selectedItemsDetails: selectedItemsData,
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
          <div className="text-sm text-slate-400">Passo {step} de 12</div>
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
              <Button onClick={() => setStep(2)} className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                Próximo <ChevronRight className="ml-2" />
              </Button>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Escolha sua Sub-Raça</h2>
              <p className="text-slate-400 mb-4">Raça selecionada: <span className="font-bold text-blue-400">{selectedRace?.name}</span></p>
              
              <button
                onClick={() => setCharacter({ ...character, subRace: "" })}
                className={`w-full text-left p-4 rounded-lg border-2 transition mb-4 ${
                  character.subRace === ""
                    ? "bg-blue-600 border-blue-500"
                    : "bg-slate-700 border-slate-600 hover:border-blue-500"
                }`}
              >
                <p className="font-bold">👑 Raça Pura</p>
                <p className="text-xs text-slate-400 mt-1">Escolha a forma pura e original desta raça, sem variações especializadas</p>
                <p className="text-xs text-blue-300 mt-2">Recebe todos os bônus e habilidades da raça base</p>
              </button>

              {selectedRace?.subRaces && selectedRace.subRaces.length > 0 ? (
                <>
                  <p className="text-slate-400 mb-3 text-sm font-semibold">Ou escolha uma especialização:</p>
                  <div className="space-y-3 mb-8">
                    {selectedRace.subRaces.map((subRace) => (
                      <button
                        key={subRace.id}
                        onClick={() => setCharacter({ ...character, subRace: subRace.id })}
                        className={`w-full text-left p-4 rounded-lg border-2 transition ${
                          character.subRace === subRace.id
                            ? "bg-purple-600 border-purple-500"
                            : "bg-slate-700 border-slate-600 hover:border-purple-500"
                        }`}
                      >
                        <p className="font-bold">{subRace.name}</p>
                        <p className="text-xs text-slate-400 mt-1">{subRace.description}</p>
                        <p className="text-xs text-purple-300 mt-2">{subRace.attributeBonus}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : null}
              
              <div className="flex gap-4">
                <Button onClick={() => setStep(1)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(3)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 3 && (
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
                <Button onClick={() => setStep(2)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(4)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 4 && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Escolha seu Antecedente</h2>
              <div className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-2">
                {backgrounds.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setCharacter({ ...character, background: bg.id })}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      character.background === bg.id
                        ? "bg-orange-600 border-orange-500"
                        : "bg-slate-700 border-slate-600 hover:border-orange-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{bg.emoji}</span>
                      <div>
                        <p className="font-bold">{bg.name}</p>
                        <p className="text-xs text-slate-400">{bg.specialAbility}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setStep(3)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(5)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 5 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Atributos e Perícias</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  {Object.entries(character.attributes).map(([attr, value]) => (
                    <div key={attr}>
                      <div className="flex justify-between text-sm mb-1">
                        <label className="capitalize font-bold">{attr}</label>
                        <span className="text-blue-400 font-bold">{value} (Mod: {calculateModifier(value)})</span>
                      </div>
                      <input
                        type="range" min="-1" max="30" value={value}
                        onChange={(e) => handleAttributeChange(attr as keyof Character["attributes"], parseInt(e.target.value))}
                        className="w-full accent-blue-500"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BookOpen size={18} /> Perícias (Selecione 4)</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {skills.map((skill) => (
                      <button
                        key={skill.id}
                        onClick={() => toggleSkill(skill.id)}
                        className={`text-left p-2 rounded text-xs border transition ${
                          character.selectedSkills.includes(skill.id)
                            ? "bg-blue-600 border-blue-400 text-white"
                            : "bg-slate-700 border-slate-600 text-slate-400 hover:border-blue-400"
                        }`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setStep(4)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(6)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 6 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Sparkles size={24} /> Passivas Raciais</h2>
              <p className="text-slate-400 mb-4">Selecione as passivas que deseja para seu personagem:</p>
              <div className="space-y-2 mb-8 max-h-[300px] overflow-y-auto">
                {availableRacePassives.map((passive) => (
                  <button
                    key={passive.id}
                    onClick={() => togglePassive(passive.id)}
                    className={`w-full text-left p-3 rounded-lg border transition ${
                      character.selectedPassives.includes(passive.id)
                        ? "bg-purple-600 border-purple-400"
                        : "bg-slate-700 border-slate-600 hover:border-purple-400"
                    }`}
                  >
                    <p className="font-bold text-sm">{passive.name}</p>
                    <p className="text-xs text-slate-300">{passive.description}</p>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setStep(5)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(7)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 7 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Zap size={24} /> Talentos</h2>
              <p className="text-slate-400 mb-4">Selecione até 3 talentos para seu personagem:</p>
              <div className="space-y-2 mb-8 max-h-[400px] overflow-y-auto">
                {availableTalents.map((talent) => (
                  <button
                    key={talent.id}
                    onClick={() => toggleTalent(talent.id)}
                    className={`w-full text-left p-3 rounded-lg border transition ${
                      character.selectedTalents.includes(talent.id)
                        ? "bg-yellow-600 border-yellow-400"
                        : "bg-slate-700 border-slate-600 hover:border-yellow-400"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-sm">{talent.name}</p>
                        <p className="text-xs text-slate-300">{talent.description}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        talent.rarity === 'common' ? 'bg-gray-600' :
                        talent.rarity === 'uncommon' ? 'bg-green-600' :
                        talent.rarity === 'rare' ? 'bg-blue-600' :
                        talent.rarity === 'epic' ? 'bg-purple-600' : 'bg-orange-600'
                      }`}>
                        {talent.rarity}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setStep(6)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(8)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 8 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Wand2 size={24} /> Miraculous & Talismas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold mb-3 text-lg">Miraculous (Opcional)</h3>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto">
                    {miraculous.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setCharacter({ ...character, selectedMiraculous: character.selectedMiraculous === m.id ? "" : m.id })}
                        className={`w-full text-left p-2 rounded text-xs border transition ${
                          character.selectedMiraculous === m.id
                            ? "bg-pink-600 border-pink-400"
                            : "bg-slate-700 border-slate-600 hover:border-pink-400"
                        }`}
                      >
                        <p className="font-bold">{m.emoji} {m.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-lg">Talismã do Zodíaco (Opcional)</h3>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto">
                    {talismans.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setCharacter({ ...character, selectedTalisman: character.selectedTalisman === t.id ? "" : t.id })}
                        className={`w-full text-left p-2 rounded text-xs border transition ${
                          character.selectedTalisman === t.id
                            ? "bg-red-600 border-red-400"
                            : "bg-slate-700 border-slate-600 hover:border-red-400"
                        }`}
                      >
                        <p className="font-bold">{t.emoji} {t.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setStep(7)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(9)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 9 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Shield size={24} /> Equipamentos & Itens</h2>
              <p className="text-slate-400 mb-4">Selecione até 5 itens especiais para seu personagem:</p>
              <div className="space-y-2 mb-8 max-h-[400px] overflow-y-auto">
                {specialItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full text-left p-3 rounded-lg border transition ${
                      character.selectedItems.includes(item.id)
                        ? "bg-cyan-600 border-cyan-400"
                        : "bg-slate-700 border-slate-600 hover:border-cyan-400"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-xs text-slate-300">{item.description}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.rarity === 'common' ? 'bg-gray-600' :
                        item.rarity === 'uncommon' ? 'bg-green-600' :
                        item.rarity === 'rare' ? 'bg-blue-600' :
                        item.rarity === 'epic' ? 'bg-purple-600' : 'bg-orange-600'
                      }`}>
                        {item.rarity}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button onClick={() => setStep(8)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(11)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 11 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">⚡ Habilidades & Passivas Personalizadas</h2>
              <p className="text-slate-400 mb-6">Crie suas próprias habilidades e passivas únicas para seu personagem!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Habilidades Personalizadas */}
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Zap size={20} /> Habilidades Ativas</h3>
                  <div className="space-y-2 mb-4 max-h-[300px] overflow-y-auto">
                    {character.customAbilities.filter(a => a.type === 'active').map(ability => (
                      <div key={ability.id} className="bg-slate-700 rounded-lg p-3 border border-slate-600">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1">
                            <p className="font-bold text-yellow-400">{ability.name}</p>
                            <p className="text-xs text-slate-400 mt-1">{ability.description}</p>
                            {ability.costEP !== undefined && (
                              <p className="text-xs text-blue-300 mt-1">Custo: {ability.costEP} EP</p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveCustomAbility(ability.id)}
                            className="text-red-400 hover:text-red-300 flex-shrink-0"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setShowCustomAbilityModal(true)}
                    className="w-full bg-yellow-600 hover:bg-yellow-700"
                  >
                    <Plus className="mr-2" size={18} /> Criar Habilidade Ativa
                  </Button>
                </div>

                {/* Passivas Personalizadas */}
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Sparkles size={20} /> Passivas</h3>
                  <div className="space-y-2 mb-4 max-h-[300px] overflow-y-auto">
                    {character.customPassives.map(passive => (
                      <div key={passive.id} className="bg-slate-700 rounded-lg p-3 border border-slate-600">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1">
                            <p className="font-bold text-purple-400">{passive.name}</p>
                            <p className="text-xs text-slate-400 mt-1">{passive.description}</p>
                            {passive.bonus && (
                              <p className="text-xs text-green-300 mt-1">Bônus: {passive.bonus}</p>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveCustomPassive(passive.id)}
                            className="text-red-400 hover:text-red-300 flex-shrink-0"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setShowCustomPassiveModal(true)}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    <Plus className="mr-2" size={18} /> Criar Passiva
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setStep(10)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={() => setStep(12)} className="flex-1 bg-blue-600 hover:bg-blue-700">Próximo</Button>
              </div>
            </Card>
          </div>
        )}

        {step === 12 && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-3xl font-bold mb-6">Resumo do Personagem</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                    <h3 className="text-xs font-bold text-slate-500 uppercase mb-2">Informações</h3>
                    <p className="text-lg font-bold">{selectedRace?.name}</p>
                    {selectedSubRace && <p className="text-sm text-purple-400">{selectedSubRace.name}</p>}
                    <p className="text-blue-400">{selectedClass?.name}</p>
                    <p className="text-orange-400 text-sm">{selectedBackground?.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/20 text-center">
                      <div className="text-xs text-red-400">HP</div>
                      <div className="text-xl font-bold">{calculateHP()}</div>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/20 text-center">
                      <div className="text-xs text-blue-400">CA</div>
                      <div className="text-xl font-bold">{calculateCA()}</div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(character.attributes).map(([attr, value]) => (
                    <div key={attr} className="p-3 bg-slate-700/30 rounded-lg border border-slate-600">
                      <div className="text-[10px] uppercase text-slate-500">{attr}</div>
                      <div className="text-lg font-bold">{value}</div>
                      <div className="text-xs text-blue-400">Mod: {calculateModifier(value)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                  <h3 className="font-bold text-purple-400 mb-2">Passivas Selecionadas</h3>
                  <div className="space-y-1 text-sm">
                    {character.selectedPassives.length > 0 ? (
                      racePassives.filter(p => character.selectedPassives.includes(p.id)).map(p => (
                        <p key={p.id} className="text-slate-300">• {p.name}</p>
                      ))
                    ) : (
                      <p className="text-slate-500 italic">Nenhuma passiva selecionada</p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                  <h3 className="font-bold text-yellow-400 mb-2">Talentos Selecionados</h3>
                  <div className="space-y-1 text-sm">
                    {character.selectedTalents.length > 0 ? (
                      availableTalents.filter(t => character.selectedTalents.includes(t.id)).map(t => (
                        <p key={t.id} className="text-slate-300">• {t.name}</p>
                      ))
                    ) : (
                      <p className="text-slate-500 italic">Nenhum talento selecionado</p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                  <h3 className="font-bold text-pink-400 mb-2">Miraculous & Talisma</h3>
                  <div className="space-y-1 text-sm">
                    {character.selectedMiraculous ? (
                      <p className="text-slate-300">🎭 {miraculous.find(m => m.id === character.selectedMiraculous)?.name}</p>
                    ) : (
                      <p className="text-slate-500 italic">Nenhum miraculous</p>
                    )}
                    {character.selectedTalisman ? (
                      <p className="text-slate-300">✨ {talismans.find(t => t.id === character.selectedTalisman)?.name}</p>
                    ) : (
                      <p className="text-slate-500 italic">Nenhum talismã</p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                  <h3 className="font-bold text-cyan-400 mb-2">Itens Selecionados</h3>
                  <div className="space-y-1 text-sm">
                    {character.selectedItems.length > 0 ? (
                      specialItems.filter(i => character.selectedItems.includes(i.id)).map(i => (
                        <p key={i.id} className="text-slate-300">• {i.name}</p>
                      ))
                    ) : (
                      <p className="text-slate-500 italic">Nenhum item selecionado</p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                  <h3 className="font-bold text-yellow-400 mb-2">Habilidades Personalizadas</h3>
                  <div className="space-y-1 text-sm">
                    {character.customAbilities.length > 0 ? (
                      character.customAbilities.map(a => (
                        <div key={a.id} className="text-slate-300">
                          <p className="font-semibold">• {a.name} ({a.type === 'active' ? 'Ativa' : 'Passiva'})</p>
                          {a.costEP !== undefined && <p className="text-xs text-blue-300 ml-4">Custo: {a.costEP} EP</p>}
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 italic">Nenhuma habilidade personalizada</p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                  <h3 className="font-bold text-purple-400 mb-2">Passivas Personalizadas</h3>
                  <div className="space-y-1 text-sm">
                    {character.customPassives.length > 0 ? (
                      character.customPassives.map(p => (
                        <div key={p.id} className="text-slate-300">
                          <p className="font-semibold">• {p.name}</p>
                          {p.bonus && <p className="text-xs text-green-300 ml-4">Bônus: {p.bonus}</p>}
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 italic">Nenhuma passiva personalizada</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setStep(11)} variant="outline" className="flex-1 border-slate-600">Voltar</Button>
                <Button onClick={downloadCharacter} className="flex-1 bg-green-600 hover:bg-green-700">
                  <Download className="mr-2" /> Salvar Ficha Completa
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Modais de Criação */}
      <CustomAbilityModal
        isOpen={showCustomAbilityModal}
        onClose={() => setShowCustomAbilityModal(false)}
        onSave={handleAddCustomAbility}
      />
      <CustomPassiveModal
        isOpen={showCustomPassiveModal}
        onClose={() => setShowCustomPassiveModal(false)}
        onSave={handleAddCustomPassive}
      />
    </div>
  );
}
