import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { vehicles } from "@/lib/advancedGameData";
import { ChevronLeft } from "lucide-react";

export default function Vehicles() {
  const [filterType, setFilterType] = useState<"terrestre" | "aéreo" | "aquático" | "espacial" | null>(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState(vehicles[0].id);

  const selectedVehicle = vehicles.find((v) => v.id === selectedVehicleId);
  const filteredVehicles = filterType
    ? vehicles.filter((v) => v.type === filterType)
    : vehicles;

  const types = Array.from(new Set(vehicles.map((v) => v.type)));

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "terrestre":
        return "🏎️";
      case "aéreo":
        return "✈️";
      case "aquático":
        return "🌊";
      case "espacial":
        return "🚀";
      default:
        return "🚗";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "terrestre":
        return "Terrestre";
      case "aéreo":
        return "Aéreo";
      case "aquático":
        return "Aquático";
      case "espacial":
        return "Espacial";
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
          <h1 className="text-2xl font-bold">Veículos</h1>
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
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type as any)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    filterType === type
                      ? "bg-blue-600 border border-blue-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  {getTypeIcon(type)} {getTypeLabel(type)}
                </button>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">Veículos</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredVehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicleId(vehicle.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedVehicleId === vehicle.id
                      ? "bg-green-600 border border-green-500"
                      : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{vehicle.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{vehicle.name}</div>
                      <div className="text-xs text-slate-400">{vehicle.speed} km/h</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-3">
            {selectedVehicle && (
              <>
                <Card className="bg-slate-800 border-slate-700 p-8 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">
                        {selectedVehicle.icon} {selectedVehicle.name}
                      </h2>
                      <p className="text-slate-300">{selectedVehicle.specialEffect}</p>
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                      {getTypeLabel(selectedVehicle.type)}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Velocidade</p>
                      <p className="text-3xl font-bold text-red-400">{selectedVehicle.speed}</p>
                      <p className="text-xs text-slate-500">km/h</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Capacidade</p>
                      <p className="text-3xl font-bold text-blue-400">{selectedVehicle.capacity}</p>
                      <p className="text-xs text-slate-500">
                        {selectedVehicle.capacity === 0 ? "Controlado remotamente" : "passageiros"}
                      </p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                      <p className="text-slate-400 text-sm mb-1">Tipo</p>
                      <p className="text-2xl font-bold text-green-400">{getTypeIcon(selectedVehicle.type)}</p>
                      <p className="text-xs text-slate-500">{getTypeLabel(selectedVehicle.type)}</p>
                    </div>
                  </div>
                </Card>

                {/* All Vehicles by Type */}
                {types.map((type) => {
                  const typeVehicles = vehicles.filter((v) => v.type === type);
                  return (
                    <div key={type} className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">
                        {getTypeIcon(type)} Veículos {getTypeLabel(type)}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {typeVehicles.map((vehicle) => (
                          <Card
                            key={vehicle.id}
                            className={`bg-slate-800 border-slate-700 p-6 cursor-pointer transition hover:border-green-500 ${
                              selectedVehicleId === vehicle.id ? "border-green-500" : ""
                            }`}
                            onClick={() => setSelectedVehicleId(vehicle.id)}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start gap-3">
                                <span className="text-4xl">{vehicle.icon}</span>
                                <div>
                                  <p className="font-bold text-lg">{vehicle.name}</p>
                                  <p className="text-sm text-slate-400">{vehicle.speed} km/h</p>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-slate-300 mb-3">{vehicle.specialEffect}</p>
                            <div className="flex justify-between text-xs text-slate-500">
                              <span>Capacidade: {vehicle.capacity}</span>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4">
          <Link href="/combat-simulator" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
              Simulador de Combate
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
