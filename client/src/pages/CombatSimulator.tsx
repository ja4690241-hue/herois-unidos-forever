import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, Zap } from "lucide-react";

interface CombatCharacter {
  name: string;
  hp: number;
  maxHp: number;
  ca: number;
  mana: number;
  maxMana: number;
  strength: number;
  dexterity: number;
  intelligence: number;
}

export default function CombatSimulator() {
  const [character1, setCharacter1] = useState<CombatCharacter>({
    name: "Herói 1",
    hp: 50,
    maxHp: 50,
    ca: 12,
    mana: 30,
    maxMana: 30,
    strength: 16,
    dexterity: 14,
    intelligence: 12,
  });

  const [character2, setCharacter2] = useState<CombatCharacter>({
    name: "Herói 2",
    hp: 45,
    maxHp: 45,
    ca: 13,
    mana: 35,
    maxMana: 35,
    strength: 14,
    dexterity: 16,
    intelligence: 14,
  });

  const [combatLog, setCombatLog] = useState<string[]>([
    "🎮 Combate iniciado!",
    "Prepare-se para a batalha!",
  ]);
  const [combatActive, setCombatActive] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateDamage = (attacker: CombatCharacter, defender: CombatCharacter): number => {
    const baseDamage = Math.floor(Math.random() * 8) + 1;
    const strModifier = Math.floor((attacker.strength - 10) / 2);
    const totalDamage = Math.max(1, baseDamage + strModifier);
    const isCritical = Math.random() < 0.1;
    return isCritical ? totalDamage * 2 : totalDamage;
  };

  const calculateHitChance = (attacker: CombatCharacter, defender: CombatCharacter): boolean => {
    const dexModifier = Math.floor((attacker.dexterity - 10) / 2);
    const roll = Math.floor(Math.random() * 20) + 1 + dexModifier;
    return roll >= defender.ca;
  };

  const performAttack = (attacker: CombatCharacter, defender: CombatCharacter, isChar1: boolean) => {
    const newLog = [...combatLog];

    if (calculateHitChance(attacker, defender)) {
      const damage = calculateDamage(attacker, defender);
      const newHp = Math.max(0, defender.hp - damage);

      if (isChar1) {
        setCharacter2({ ...character2, hp: newHp });
      } else {
        setCharacter1({ ...character1, hp: newHp });
      }

      newLog.push(`⚔️ ${attacker.name} ataca ${defender.name} causando ${damage} dano!`);

      if (newHp <= 0) {
        newLog.push(`💀 ${defender.name} foi derrotado!`);
        newLog.push(`🏆 ${attacker.name} venceu o combate!`);
        setWinner(attacker.name);
        setCombatActive(false);
      }
    } else {
      newLog.push(`❌ ${attacker.name} errou o ataque!`);
    }

    setCombatLog(newLog);
  };

  const performMagicAttack = (attacker: CombatCharacter, defender: CombatCharacter, isChar1: boolean) => {
    const newLog = [...combatLog];

    if (attacker.mana < 10) {
      newLog.push(`⚠️ ${attacker.name} não tem mana suficiente!`);
      setCombatLog(newLog);
      return;
    }

    const magicDamage = Math.floor(Math.random() * 12) + 5 + Math.floor((attacker.intelligence - 10) / 2);
    const newHp = Math.max(0, defender.hp - magicDamage);
    const newMana = attacker.mana - 10;

    if (isChar1) {
      setCharacter1({ ...character1, mana: newMana });
      setCharacter2({ ...character2, hp: newHp });
    } else {
      setCharacter2({ ...character2, mana: newMana });
      setCharacter1({ ...character1, hp: newHp });
    }

    newLog.push(`🔮 ${attacker.name} lança feitiço em ${defender.name} causando ${magicDamage} dano!`);

    if (newHp <= 0) {
      newLog.push(`💀 ${defender.name} foi derrotado!`);
      newLog.push(`🏆 ${attacker.name} venceu o combate!`);
      setWinner(attacker.name);
      setCombatActive(false);
    }

    setCombatLog(newLog);
  };

  const startCombat = () => {
    setCombatActive(true);
    setWinner(null);
    setCombatLog(["🎮 Combate iniciado!", "Que a batalha comece!"]);
    setCharacter1({ ...character1, hp: character1.maxHp, mana: character1.maxMana });
    setCharacter2({ ...character2, hp: character2.maxHp, mana: character2.maxMana });
  };

  const resetCombat = () => {
    setCombatActive(false);
    setWinner(null);
    setCombatLog(["🎮 Combate finalizado!", "Prepare-se para uma nova batalha!"]);
    setCharacter1({ ...character1, hp: character1.maxHp, mana: character1.maxMana });
    setCharacter2({ ...character2, hp: character2.maxHp, mana: character2.maxMana });
  };

  const getHealthBarColor = (hp: number, maxHp: number) => {
    const percentage = (hp / maxHp) * 100;
    if (percentage > 50) return "bg-green-500";
    if (percentage > 25) return "bg-yellow-500";
    return "bg-red-500";
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
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Simulador de Combate
          </h1>
        </div>
      </header>

      <div className="container py-12">
        {/* Combat Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Character 1 */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-4">{character1.name}</h2>

            {/* Health Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>HP</span>
                <span className="text-red-400">
                  {character1.hp}/{character1.maxHp}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full transition-all ${getHealthBarColor(character1.hp, character1.maxHp)}`}
                  style={{ width: `${(character1.hp / character1.maxHp) * 100}%` }}
                />
              </div>
            </div>

            {/* Mana Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Mana</span>
                <span className="text-blue-400">
                  {character1.mana}/{character1.maxMana}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all"
                  style={{ width: `${(character1.mana / character1.maxMana) * 100}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-sm mb-6">
              <p>
                <span className="text-slate-400">CA:</span> <span className="font-bold">{character1.ca}</span>
              </p>
              <p>
                <span className="text-slate-400">FOR:</span> <span className="font-bold">{character1.strength}</span>
              </p>
              <p>
                <span className="text-slate-400">DES:</span> <span className="font-bold">{character1.dexterity}</span>
              </p>
              <p>
                <span className="text-slate-400">INT:</span> <span className="font-bold">{character1.intelligence}</span>
              </p>
            </div>

            {/* Actions */}
            {combatActive && (
              <div className="space-y-2">
                <Button
                  onClick={() => performAttack(character1, character2, true)}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  ⚔️ Atacar
                </Button>
                <Button
                  onClick={() => performMagicAttack(character1, character2, true)}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={character1.mana < 10}
                >
                  🔮 Feitiço
                </Button>
              </div>
            )}
          </Card>

          {/* VS */}
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl font-bold text-yellow-400 mb-4">VS</div>
            {!combatActive && !winner && (
              <Button
                onClick={startCombat}
                className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg"
              >
                🎮 Iniciar Combate
              </Button>
            )}
            {winner && (
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400 mb-4">🏆 {winner} Venceu!</p>
                <Button
                  onClick={resetCombat}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Novo Combate
                </Button>
              </div>
            )}
          </div>

          {/* Character 2 */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-4 text-right">{character2.name}</h2>

            {/* Health Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-400">
                  {character2.hp}/{character2.maxHp}
                </span>
                <span>HP</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full transition-all ${getHealthBarColor(character2.hp, character2.maxHp)}`}
                  style={{ width: `${(character2.hp / character2.maxHp) * 100}%` }}
                />
              </div>
            </div>

            {/* Mana Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-blue-400">
                  {character2.mana}/{character2.maxMana}
                </span>
                <span>Mana</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all"
                  style={{ width: `${(character2.mana / character2.maxMana) * 100}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-sm mb-6 text-right">
              <p>
                <span className="font-bold">{character2.ca}</span> <span className="text-slate-400">:CA</span>
              </p>
              <p>
                <span className="font-bold">{character2.strength}</span> <span className="text-slate-400">:FOR</span>
              </p>
              <p>
                <span className="font-bold">{character2.dexterity}</span> <span className="text-slate-400">:DES</span>
              </p>
              <p>
                <span className="font-bold">{character2.intelligence}</span> <span className="text-slate-400">:INT</span>
              </p>
            </div>

            {/* Actions */}
            {combatActive && (
              <div className="space-y-2">
                <Button
                  onClick={() => performAttack(character2, character1, false)}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  ⚔️ Atacar
                </Button>
                <Button
                  onClick={() => performMagicAttack(character2, character1, false)}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={character2.mana < 10}
                >
                  🔮 Feitiço
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* Combat Log */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h3 className="text-xl font-bold mb-4">📜 Log de Combate</h3>
          <div className="bg-slate-900 p-4 rounded-lg h-64 overflow-y-auto space-y-2">
            {combatLog.map((log, idx) => (
              <p key={idx} className="text-sm text-slate-300">
                {log}
              </p>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <Link href="/character-creator" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Criar Personagem
            </Button>
          </Link>
          <Link href="/vehicles" className="flex-1">
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800 text-lg py-6">
              Ver Veículos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
