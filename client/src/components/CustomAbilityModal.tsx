import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Plus, AlertCircle } from "lucide-react";
import { CustomAbility, abilityCategories, abilityCreationGuidelines, validateCustomAbility } from "@/lib/customAbilitiesData";

interface CustomAbilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ability: CustomAbility) => void;
}

export function CustomAbilityModal({ isOpen, onClose, onSave }: CustomAbilityModalProps) {
  const [ability, setAbility] = useState<Partial<CustomAbility>>({
    type: 'active',
    category: 'combat',
    costEP: 1,
    cooldown: '1 turno',
    range: '12 metros',
    duration: '1 turno'
  });

  const [errors, setErrors] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSave = () => {
    const validation = validateCustomAbility(ability);
    
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const newAbility: CustomAbility = {
      id: `custom-ability-${Date.now()}`,
      name: ability.name || '',
      type: ability.type as 'active' | 'passive',
      category: ability.category as any,
      description: ability.description || '',
      effect: ability.effect || '',
      costEP: ability.costEP,
      cooldown: ability.cooldown,
      range: ability.range,
      duration: ability.duration,
      requirements: ability.requirements,
      weakness: ability.weakness,
      createdAt: new Date()
    };

    onSave(newAbility);
    setAbility({ type: 'active', category: 'combat', costEP: 1 });
    setErrors([]);
  };

  const categoryInfo = abilityCategories.find(c => c.id === ability.category);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-slate-800 border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Criar Habilidade Personalizada</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {errors.length > 0 && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <div className="flex gap-2 mb-2">
              <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
              <p className="font-bold text-red-400">Erros encontrados:</p>
            </div>
            <ul className="space-y-1 text-sm text-red-300">
              {errors.map((error, i) => (
                <li key={i}>• {error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-6">
          {/* Tipo de Habilidade */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Tipo de Habilidade</label>
            <div className="grid grid-cols-2 gap-2">
              {['active', 'passive'].map(type => (
                <button
                  key={type}
                  onClick={() => setAbility({ ...ability, type: type as 'active' | 'passive' })}
                  className={`p-3 rounded-lg border-2 transition text-left ${
                    ability.type === type
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-blue-400'
                  }`}
                >
                  <p className="font-bold capitalize">{type === 'active' ? '⚡ Ativa' : '✨ Passiva'}</p>
                  <p className="text-xs text-slate-400">
                    {type === 'active' ? 'Requer ativação e custo' : 'Sempre ativa'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Categoria</label>
            <select
              value={ability.category || 'combat'}
              onChange={(e) => setAbility({ ...ability, category: e.target.value as any })}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
            >
              {abilityCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name} - {cat.description}
                </option>
              ))}
            </select>
            {categoryInfo && (
              <p className="text-xs text-slate-400 mt-1">{categoryInfo.description}</p>
            )}
          </div>

          {/* Nome */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Nome da Habilidade</label>
            <input
              type="text"
              value={ability.name || ''}
              onChange={(e) => setAbility({ ...ability, name: e.target.value })}
              placeholder="Ex: Rajada de Energia, Defesa Total, Teleporte"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Descrição</label>
            <textarea
              value={ability.description || ''}
              onChange={(e) => setAbility({ ...ability, description: e.target.value })}
              placeholder="Descreva o que a habilidade faz e como funciona..."
              rows={3}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>

          {/* Efeito */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Efeito</label>
            <textarea
              value={ability.effect || ''}
              onChange={(e) => setAbility({ ...ability, effect: e.target.value })}
              placeholder="Ex: Causa 3d6 de dano de energia em linha de 9m"
              rows={2}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>

          {/* Campos para Habilidades Ativas */}
          {ability.type === 'active' && (
            <>
              {/* Custo EP */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Custo de Energia (EP)</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={ability.costEP || 0}
                    onChange={(e) => setAbility({ ...ability, costEP: parseInt(e.target.value) })}
                    className="w-20 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                  />
                  <span className="text-sm text-slate-400">EP (0-10)</span>
                </div>
              </div>

              {/* Alcance */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Alcance</label>
                <select
                  value={ability.range || '12 metros'}
                  onChange={(e) => setAbility({ ...ability, range: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                >
                  {abilityCreationGuidelines.rangeOptions.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Duração */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Duração</label>
                <select
                  value={ability.duration || '1 turno'}
                  onChange={(e) => setAbility({ ...ability, duration: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                >
                  {abilityCreationGuidelines.durationOptions.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              {/* Cooldown */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Tempo de Recarga</label>
                <select
                  value={ability.cooldown || '1 turno'}
                  onChange={(e) => setAbility({ ...ability, cooldown: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                >
                  {abilityCreationGuidelines.cooldownOptions.map(cooldown => (
                    <option key={cooldown} value={cooldown}>{cooldown}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {/* Fraqueza */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Fraqueza/Limitação</label>
            <textarea
              value={ability.weakness || ''}
              onChange={(e) => setAbility({ ...ability, weakness: e.target.value })}
              placeholder="Descreva qualquer limitação ou fraqueza desta habilidade..."
              rows={2}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>

          {/* Requisitos */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Requisitos (Opcional)</label>
            <input
              type="text"
              value={ability.requirements || ''}
              onChange={(e) => setAbility({ ...ability, requirements: e.target.value })}
              placeholder="Ex: Nível 5+, Força 15+, Conhecimento de Magia"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Dicas */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <p className="font-bold text-blue-400 mb-2">💡 Dicas de Balanceamento:</p>
            <ul className="space-y-1 text-sm text-blue-300">
              {abilityCreationGuidelines.tips.map((tip, i) => (
                <li key={i}>• {tip}</li>
              ))}
            </ul>
          </div>

          {/* Botões */}
          <div className="flex gap-3">
            <Button onClick={onClose} variant="outline" className="flex-1 border-slate-600">
              Cancelar
            </Button>
            <Button onClick={handleSave} className="flex-1 bg-green-600 hover:bg-green-700">
              <Plus className="mr-2" size={18} /> Criar Habilidade
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
