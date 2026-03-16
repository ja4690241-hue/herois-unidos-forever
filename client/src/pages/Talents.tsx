import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { talents, genericTalents, epCalculation } from "@/lib/talentsData";
import { ChevronLeft, Zap, Shield, Star } from "lucide-react";

export default function Talents() {
  const [activeTab, setActiveTab] = useState<'class' | 'generic' | 'rules'>('class');

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-slate-400 border-slate-400/30 bg-slate-400/10';
      case 'uncommon': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'rare': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'epic': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      case 'legendary': return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-slate-300">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Talentos e Habilidades
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-slate-800/50 p-1 rounded-xl border border-slate-700 w-fit">
          <Button 
            variant={activeTab === 'class' ? 'default' : 'ghost'} 
            onClick={() => setActiveTab('class')}
            className={activeTab === 'class' ? 'bg-blue-600' : ''}
          >
            Habilidades de Classe
          </Button>
          <Button 
            variant={activeTab === 'generic' ? 'default' : 'ghost'} 
            onClick={() => setActiveTab('generic')}
            className={activeTab === 'generic' ? 'bg-blue-600' : ''}
          >
            Talentos Genéricos
          </Button>
          <Button 
            variant={activeTab === 'rules' ? 'default' : 'ghost'} 
            onClick={() => setActiveTab('rules')}
            className={activeTab === 'rules' ? 'bg-blue-600' : ''}
          >
            Regras de EP
          </Button>
        </div>

        {activeTab === 'class' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talents.map((talent) => (
              <Card key={talent.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-blue-900/40 text-blue-400 border border-blue-500/20">
                      {talent.class}
                    </span>
                    <span className="text-xs font-bold text-slate-500">Nível {talent.level}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{talent.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm italic">"{talent.description}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${talent.type === 'ativo' ? 'bg-orange-900/20 text-orange-400' : 'bg-teal-900/20 text-teal-400'}`}>
                      {talent.type}
                    </span>
                    {talent.cost > 0 && (
                      <span className="flex items-center gap-1 text-orange-400 font-bold">
                        <Zap size={14} /> {talent.cost} EP
                      </span>
                    )}
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border-l-2 border-blue-500">
                    <p className="text-sm text-slate-200">{talent.effect}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'generic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {genericTalents.map((talent) => (
              <Card key={talent.id} className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded border ${getRarityColor(talent.rarity)}`}>
                      {talent.rarity}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">{talent.category}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{talent.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">{talent.description}</p>
                  <div className="p-3 bg-purple-900/10 rounded border border-purple-500/20">
                    <h4 className="text-xs font-bold text-purple-400 uppercase mb-1">Efeito</h4>
                    <p className="text-sm text-slate-200">{talent.mechanicEffect}</p>
                  </div>
                  {talent.prerequisites.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Pré-requisitos</h4>
                      <div className="flex flex-wrap gap-2">
                        {talent.prerequisites.map((pre, i) => (
                          <span key={i} className="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400 border border-slate-700">
                            {pre.description}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Zap /> Cálculo de Custo (EP)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-2">Habilidades Ofensivas</h4>
                  <div className="p-4 bg-slate-900 rounded-lg border border-orange-500/30 text-center mb-4">
                    <code className="text-lg text-orange-400">{epCalculation.offensive.formula}</code>
                  </div>
                  <div className="space-y-2">
                    {epCalculation.offensive.examples.map((ex, i) => (
                      <div key={i} className="flex justify-between text-sm text-slate-300 p-2 bg-slate-700/30 rounded">
                        <span>{ex.name}</span>
                        <span className="font-bold">{ex.cost} EP</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Redutores de Custo</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {epCalculation.offensive.modifiers.map((mod, i) => (
                      <div key={i} className="flex justify-between text-sm text-slate-300 p-2 bg-green-900/10 border border-green-500/20 rounded">
                        <span>{mod.effect}</span>
                        <span className="font-bold text-green-400">{mod.mod} EP</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Shield /> Habilidades Utilitárias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {epCalculation.utility.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-slate-900/50 rounded border border-slate-700">
                      <span className="text-sm text-slate-300">{item.effect}</span>
                      <span className="text-sm font-bold text-blue-400">{item.cost} EP</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
                  <h4 className="text-sm font-bold text-blue-400 mb-2">Nota do Mestre</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Habilidades passivas não possuem custo de EP, mas devem ser equilibradas com penalidades situacionais ou limites de uso por descanso longo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
