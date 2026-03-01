import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/skillsData";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Book, Brain, Dumbbell, Users, Shield, Zap } from "lucide-react";

export default function Skills() {
  const getIcon = (attr: string) => {
    switch (attr) {
      case 'Força': return <Dumbbell className="text-red-400" />;
      case 'Destreza': return <Zap className="text-yellow-400" />;
      case 'Constituição': return <Shield className="text-green-400" />;
      case 'Inteligência': return <Brain className="text-blue-400" />;
      case 'Carisma': return <Users className="text-orange-400" />;
      case 'Vontade': return <Book className="text-purple-400" />;
      default: return <Book className="text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-300">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Perícias do Sistema
          </h1>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl mb-10">
          <p className="text-slate-300 leading-relaxed">
            As perícias representam o treinamento e conhecimento do seu herói. Cada teste de perícia é feito rolando 
            <strong> 1d20 + Modificador de Atributo + Bônus de Treinamento</strong>.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-400 rounded-full" /> Força</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded-full" /> Destreza</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded-full" /> Inteligência</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-orange-400 rounded-full" /> Carisma</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.id} className="bg-slate-800 border-slate-700 hover:border-emerald-500 transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold text-white">{skill.name}</CardTitle>
                {getIcon(skill.attribute)}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700">
                    Atributo: {skill.attribute}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed h-12 overflow-hidden">
                  {skill.description}
                </p>
                <div className="p-3 bg-emerald-900/10 rounded border-l-2 border-emerald-500">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Exemplos de Uso</span>
                  <p className="text-xs text-slate-300 italic line-clamp-2">{skill.examples}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
