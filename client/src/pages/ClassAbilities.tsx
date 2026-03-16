import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { talents } from "@/lib/talentsData";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Zap, Star, Shield, Sword, Target, Wand2, Ghost, Skull, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClassAbilities() {
  const classes = Array.from(new Set(talents.map(t => t.class)));
  
  const getClassIcon = (className: string) => {
    switch (className) {
      case 'Lutador Corpo a Corpo': return <Sword className="text-red-400" />;
      case 'Combatente Ágil': return <Zap className="text-yellow-400" />;
      case 'Mago/Arcano': return <Wand2 className="text-purple-400" />;
      case 'Blaster': return <Target className="text-blue-400" />;
      case 'Fantasma/Sombra': return <Ghost className="text-slate-400" />;
      case 'Guardião de Suporte': return <Shield className="text-green-400" />;
      default: return <Star className="text-slate-400" />;
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Habilidades de Classe
          </h1>
        </div>

        <Tabs defaultValue={classes[0]} className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-slate-800 border-slate-700 h-auto p-1 flex-wrap justify-center">
              {classes.map(cls => (
                <TabsTrigger 
                  key={cls} 
                  value={cls}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 py-2 text-xs md:text-sm"
                >
                  <span className="mr-2 hidden md:inline">{getClassIcon(cls)}</span>
                  {cls}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {classes.map(cls => (
            <TabsContent key={cls} value={cls} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {talents.filter(t => t.class === cls).sort((a, b) => a.level - b.level).map(talent => (
                  <Card key={talent.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all overflow-hidden group">
                    <CardHeader className="pb-2 bg-slate-900/50">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-900/50 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-500/20">
                            Nível {talent.level}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                            talent.type === 'ativo' 
                              ? 'bg-orange-900/30 text-orange-400 border-orange-500/20' 
                              : 'bg-teal-900/30 text-teal-400 border-teal-500/20'
                          }`}>
                            {talent.type.toUpperCase()}
                          </span>
                        </div>
                        {talent.cost > 0 && (
                          <div className="flex items-center gap-1 text-blue-400 font-bold text-xs">
                            <Zap size={12} /> {talent.cost} EP
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg font-bold text-white mt-3 group-hover:text-blue-400 transition-colors">
                        {talent.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-4">
                      <p className="text-slate-400 text-sm italic leading-relaxed">
                        "{talent.description}"
                      </p>
                      <div className="p-3 bg-slate-900/80 rounded-lg border-l-2 border-blue-500">
                        <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Efeito</span>
                        <p className="text-sm text-slate-200">{talent.effect}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
