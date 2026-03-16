import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Plus, AlertCircle } from "lucide-react";
import { CustomPassive, passiveCategories, validateCustomPassive } from "@/lib/customAbilitiesData";

interface CustomPassiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (passive: CustomPassive) => void;
}

export function CustomPassiveModal({ isOpen, onClose, onSave }: CustomPassiveModalProps) {
  const [passive, setPassive] = useState<Partial<CustomPassive>>({
    type: 'custom',
    category: 'special',
    condition: 'Sempre ativo'
  });

  const [errors, setErrors] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSave = () => {
    const validation = validateCustomPassive(passive);
    
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const newPassive: CustomPassive = {
      id: `custom-passive-${Date.now()}`,
      name: passive.name || '',
      type: passive.type as 'racial' | 'class' | 'talent' | 'custom',
      category: passive.category as any,
      description: passive.description || '',
      effect: passive.effect || '',
      bonus: passive.bonus,
      condition: passive.condition,
      requirements: passive.requirements,
      createdAt: new Date()
    };

    onSave(newPassive);
    setPassive({ type: 'custom', category: 'special', condition: 'Sempre ativo' });
    setErrors([]);
  };

  const categoryInfo = passiveCategories.find(c => c.id === passive.category);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-slate-800 border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Criar Passiva Personalizada</h2>
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
          {/* Categoria */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Categoria</label>
            <select
              value={passive.category || 'special'}
              onChange={(e) => setPassive({ ...passive, category: e.target.value as any })}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
            >
              {passiveCategories.map(cat => (
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
            <label className="block text-sm font-bold text-slate-300 mb-2">Nome da Passiva</label>
            <input
              type="text"
              value={passive.name || ''}
              onChange={(e) => setPassive({ ...passive, name: e.target.value })}
              placeholder="Ex: Foco do Guerreiro, Resistência Mágica, Visão Noturna"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Descrição</label>
            <textarea
              value={passive.description || ''}
              onChange={(e) => setPassive({ ...passive, description: e.target.value })}
              placeholder="Descreva o que a passiva faz..."
              rows={3}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 resize-none"
            />
          </div>

          {/* Efeito */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Efeito</label>
            <textarea
              value={passive.effect || ''}
              onChange={(e) => setPassive({ ...passive, effect: e.target.value })}
              placeholder="Ex: +1 em testes de ataque, +2 em testes de resistência contra magia"
              rows={2}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 resize-none"
            />
          </div>

          {/* Bônus */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Bônus (Opcional)</label>
            <input
              type="text"
              value={passive.bonus || ''}
              onChange={(e) => setPassive({ ...passive, bonus: e.target.value })}
              placeholder="Ex: +2 em Força, +1 CA, +3 em Furtividade"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Condição */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Condição de Ativação</label>
            <select
              value={passive.condition || 'Sempre ativo'}
              onChange={(e) => setPassive({ ...passive, condition: e.target.value })}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-400"
            >
              <option value="Sempre ativo">Sempre ativo</option>
              <option value="Em combate">Em combate</option>
              <option value="Fora de combate">Fora de combate</option>
              <option value="Quando em movimento">Quando em movimento</option>
              <option value="Quando em repouso">Quando em repouso</option>
              <option value="Quando ferido">Quando ferido</option>
              <option value="Quando em perigo">Quando em perigo</option>
              <option value="Personalizado">Personalizado</option>
            </select>
          </div>

          {/* Requisitos */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Requisitos (Opcional)</label>
            <input
              type="text"
              value={passive.requirements || ''}
              onChange={(e) => setPassive({ ...passive, requirements: e.target.value })}
              placeholder="Ex: Nível 5+, Força 15+, Ser da raça Dragão"
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Dicas */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
            <p className="font-bold text-purple-400 mb-2">💡 Dicas para Passivas:</p>
            <ul className="space-y-1 text-sm text-purple-300">
              <li>• Passivas devem ser sempre ativas ou ter condições claras</li>
              <li>• Bônus muito altos podem desbalancear o jogo</li>
              <li>• Combine com outras passivas para criar sinergia</li>
              <li>• Passivas devem refletir a identidade do personagem</li>
              <li>• Defina requisitos para passivas muito poderosas</li>
            </ul>
          </div>

          {/* Botões */}
          <div className="flex gap-3">
            <Button onClick={onClose} variant="outline" className="flex-1 border-slate-600">
              Cancelar
            </Button>
            <Button onClick={handleSave} className="flex-1 bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2" size={18} /> Criar Passiva
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
