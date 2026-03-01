import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TrendingUp, Zap, Shield, Star } from "lucide-react";

export default function EvolutionPoints() {
  const evolutionSteps = [
    {
      title: "Evolução de Raça",
      cost: "10 PE",
      icon: <Star className="text-yellow-400" />,
      description: "Desbloqueia a Forma Suprema da sua raça, concedendo bônus massivos em atributos e novas habilidades exclusivas."
    },
    {
      title: "Híbrido Supremo",
      cost: "30 PE",
      icon: <Zap className="text-purple-400" />,
      description: "Para personagens híbridos, permite fundir as capacidades de ambas as linhagens em uma forma de poder inigualável."
    },
    {
      title: "Melhoria de Equipamento",
      cost: "Varia",
      icon: <Shield className="text-blue-400" />,
      description: "Aprimore suas armas e armaduras para versões Energizadas, Elementais ou de Última Geração."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-300">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Pontos de Evolução (PE)
          </h1>
        </div>

        <section className="mb-12">
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-400" />
              O que são Pontos de Evolução?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Os <strong>Pontos de Evolução (PE)</strong> são a moeda de progressão especial do sistema Heróis Unidos. 
              Diferente dos níveis tradicionais, os PE permitem que você mude sua própria biologia ou tecnologia, 
              atingindo estados de poder que humanos comuns jamais alcançariam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="text-green-400 font-bold text-xl">Missões</div>
                <div className="text-slate-400 text-sm">Ganhe ao completar objetivos épicos</div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="text-green-400 font-bold text-xl">Combate</div>
                <div className="text-slate-400 text-sm">Derrote vilões de nível superior</div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <div className="text-green-400 font-bold text-xl">Roleplay</div>
                <div className="text-slate-400 text-sm">Destaque-se na interpretação</div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6">
          {evolutionSteps.map((step, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400">{step.description}</p>
                </div>
                <div className="bg-slate-700/50 p-6 flex items-center justify-center min-w-[150px]">
                  <div className="text-center">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Custo</div>
                    <div className="text-2xl font-black text-green-400">{step.cost}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm italic">
          * Consulte o mestre para saber quantos Pontos de Evolução você possui atualmente.
        </div>
      </div>
    </div>
  );
}
