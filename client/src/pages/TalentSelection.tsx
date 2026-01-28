import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { genericTalents, uniqueTalents, getTalentsByCategory, checkPrerequisites } from '@/lib/talentsData';

interface TalentSelectionProps {
  selectedTalents: string[];
  onTalentSelect: (talentId: string) => void;
  onTalentRemove: (talentId: string) => void;
  playerStats?: Record<string, number>;
  maxTalents?: number;
}

const rarityColors: Record<string, string> = {
  common: 'bg-gray-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  epic: 'bg-purple-500',
  legendary: 'bg-yellow-500'
};

const categoryLabels: Record<string, string> = {
  combat: '⚔️ Combate',
  precision: '🎯 Precisão',
  energy: '💥 Energia',
  mental: '🧠 Mental',
  technology: '🔧 Tecnologia',
  stealth: '🕶️ Furtividade',
  defense: '🛡️ Defesa'
};

export default function TalentSelection({
  selectedTalents,
  onTalentSelect,
  onTalentRemove,
  playerStats = {},
  maxTalents = 3
}: TalentSelectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('combat');

  const allTalents = useMemo(() => [...genericTalents, ...uniqueTalents], []);

  const filteredTalents = useMemo(() => {
    return allTalents.filter(talent => {
      const matchesSearch = talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           talent.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = talent.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, allTalents]);

  const getTalentById = (id: string) => allTalents.find(t => t.id === id);

  const canAddMore = selectedTalents.length < maxTalents;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Selecione seus Talentos</h2>
        <p className="text-muted-foreground">
          Escolha até {maxTalents} talentos para seu personagem
        </p>
      </div>

      {/* Talentos Selecionados */}
      {selectedTalents.length > 0 && (
        <Card className="p-4 bg-primary/10 border-primary/20">
          <h3 className="font-semibold mb-3">Talentos Selecionados ({selectedTalents.length}/{maxTalents})</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTalents.map(talentId => {
              const talent = getTalentById(talentId);
              if (!talent) return null;
              return (
                <div key={talentId} className="flex items-center gap-2 bg-background rounded-lg p-2 border">
                  <span className="text-sm font-medium">{talent.name}</span>
                  <button
                    onClick={() => onTalentRemove(talentId)}
                    className="text-xs text-destructive hover:text-destructive/80 font-bold"
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Barra de Busca */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar talentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background"
        />
      </div>

      {/* Abas de Categorias */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory}>
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <TabsTrigger key={key} value={key} className="text-xs">
              {label.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(categoryLabels).map(category => (
          <TabsContent key={category} value={category} className="space-y-4">
            {filteredTalents.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                Nenhum talento encontrado nesta categoria
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTalents.map(talent => {
                  const isSelected = selectedTalents.includes(talent.id);
                  const prereqCheck = checkPrerequisites(talent, playerStats);
                  const canSelect = canAddMore || isSelected;

                  return (
                    <Card
                      key={talent.id}
                      className={`p-4 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/10'
                          : 'hover:border-primary/50'
                      } ${!canSelect && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="space-y-3">
                        {/* Cabeçalho */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{talent.name}</h4>
                            {('characterSpecific' in talent) && (talent as any).characterSpecific && (
                              <p className="text-xs text-muted-foreground">
                                Único de: {(talent as any).characterSpecific}
                              </p>
                            )}
                          </div>
                          <Badge className={`${rarityColors[talent.rarity]} text-white text-xs`}>
                            {talent.rarity}
                          </Badge>
                        </div>

                        {/* Descrição */}
                        <p className="text-xs text-muted-foreground">{talent.description}</p>

                        {/* Efeito Mecânico */}
                        <div className="bg-background/50 rounded p-2">
                          <p className="text-xs font-medium text-foreground">
                            <span className="text-primary">Efeito:</span> {talent.mechanicEffect}
                          </p>
                        </div>

                        {/* Limitação */}
                        {talent.limitation && (
                          <p className="text-xs text-amber-600 dark:text-amber-400">
                            ⚠️ {talent.limitation}
                          </p>
                        )}

                        {/* Pré-requisitos */}
                        {talent.prerequisites.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-xs font-medium text-foreground">Pré-requisitos:</p>
                            <div className="space-y-1">
                              {talent.prerequisites.map((prereq, idx) => (
                                <div
                                  key={idx}
                                  className={`text-xs p-1 rounded ${
                                    prereqCheck.met
                                      ? 'text-green-600 dark:text-green-400 bg-green-500/10'
                                      : 'text-red-600 dark:text-red-400 bg-red-500/10'
                                  }`}
                                >
                                  {prereqCheck.met ? '✓' : '✗'} {prereq.description}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Botão de Seleção */}
                        <Button
                          onClick={() => {
                            if (isSelected) {
                              onTalentRemove(talent.id);
                            } else if (canSelect) {
                              onTalentSelect(talent.id);
                            }
                          }}
                          disabled={!canSelect && !isSelected}
                          variant={isSelected ? 'default' : 'outline'}
                          size="sm"
                          className="w-full text-xs"
                        >
                          {isSelected ? '✓ Selecionado' : 'Selecionar'}
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Informações */}
      <Card className="p-4 bg-muted/50">
        <h4 className="font-semibold text-sm mb-2">ℹ️ Informações sobre Talentos</h4>
        <ul className="text-xs space-y-1 text-muted-foreground">
          <li>• <span className="font-medium">Talentos Genéricos:</span> Disponíveis para todos os personagens</li>
          <li>• <span className="font-medium">Talentos Únicos:</span> Exclusivos para personagens específicos</li>
          <li>• <span className="font-medium">Raridade:</span> Quanto mais raro, mais poderoso o talento</li>
          <li>• <span className="font-medium">Pré-requisitos:</span> Você precisa atender aos requisitos para selecionar</li>
        </ul>
      </Card>
    </div>
  );
}
