import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { weapons, armors } from "@/lib/classesData";
import { ChevronLeft, Sword, Shield } from "lucide-react";

type EquipmentTab = "weapons" | "armors";

export default function Equipment() {
  const [activeTab, setActiveTab] = useState<EquipmentTab>("weapons");
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0]);
  const [selectedArmor, setSelectedArmor] = useState(armors[0]);

  const weaponsByType = {
    leve: weapons.filter((w) => w.type === "leve"),
    média: weapons.filter((w) => w.type === "média"),
    pesada: weapons.filter((w) => w.type === "pesada"),
    exótica: weapons.filter((w) => w.type === "exótica"),
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
          <h1 className="text-2xl font-bold">Equipamentos, Itens e Artefatos</h1>
        </div>
      </header>

      <div className="container py-12">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("weapons")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === "weapons"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Sword className="inline mr-2 w-5 h-5" />
            Armas
          </button>
          <button
            onClick={() => setActiveTab("armors")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === "armors"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Shield className="inline mr-2 w-5 h-5" />
            Armaduras
          </button>
        </div>

        {/* Weapons Tab */}
        {activeTab === "weapons" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Weapons List */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-4">Armas Disponíveis</h2>
              <div className="space-y-4">
                {Object.entries(weaponsByType).map(([type, typeWeapons]) => (
                  <div key={type}>
                    <h3 className="text-sm font-bold text-blue-400 mb-2 uppercase">
                      Armas {type}
                    </h3>
                    <div className="space-y-2">
                      {typeWeapons.map((weapon) => (
                        <button
                          key={weapon.id}
                          onClick={() => setSelectedWeapon(weapon)}
                          className={`w-full text-left p-2 rounded-lg transition text-sm ${
                            selectedWeapon.id === weapon.id
                              ? "bg-blue-600 border border-blue-500"
                              : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                          }`}
                        >
                          <p className="font-semibold">{weapon.name}</p>
                          <p className="text-xs text-slate-400">{weapon.damage} dano</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weapon Details */}
            <div className="lg:col-span-3">
              <Card className="bg-slate-800 border-slate-700 p-8">
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <h3 className="text-4xl font-bold mb-2">{selectedWeapon.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-slate-700 px-3 py-1 rounded text-sm capitalize">
                      {selectedWeapon.type}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-slate-700">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Dano</p>
                    <p className="text-3xl font-bold text-red-400">
                      {selectedWeapon.damage}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Crítico</p>
                    <p className="text-3xl font-bold text-yellow-400">
                      {selectedWeapon.critical}
                    </p>
                  </div>
                  {selectedWeapon.range && (
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Alcance</p>
                      <p className="text-xl font-bold text-blue-400">
                        {selectedWeapon.range}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4">Propriedades</h4>
                  <div className="space-y-2">
                    {selectedWeapon.properties.map((prop, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-700/50 p-3 rounded-lg border-l-4 border-blue-500"
                      >
                        <p className="text-slate-300 text-sm">{prop}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Armors Tab */}
        {activeTab === "armors" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Armors List */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-4">Armaduras Disponíveis</h2>
              <div className="space-y-2">
                {armors.map((armor) => (
                  <button
                    key={armor.id}
                    onClick={() => setSelectedArmor(armor)}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      selectedArmor.id === armor.id
                        ? "bg-blue-600 border border-blue-500"
                        : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <p className="font-semibold text-sm">{armor.name}</p>
                    <p className="text-xs text-slate-400">CA +{armor.ca}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Armor Details */}
            <div className="lg:col-span-3">
              <Card className="bg-slate-800 border-slate-700 p-8">
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <h3 className="text-4xl font-bold mb-2">{selectedArmor.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-slate-700 px-3 py-1 rounded text-sm capitalize">
                      {selectedArmor.type}
                    </span>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-slate-700">
                  <p className="text-slate-400 text-sm mb-2">Classe de Armadura</p>
                  <p className="text-4xl font-bold text-green-400">
                    {selectedArmor.ca}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4">Propriedades</h4>
                  <div className="space-y-2">
                    {selectedArmor.properties.map((prop, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-700/50 p-3 rounded-lg border-l-4 border-green-500"
                      >
                        <p className="text-slate-300 text-sm">{prop}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

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
