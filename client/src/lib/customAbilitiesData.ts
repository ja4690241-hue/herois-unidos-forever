// Sistema de Criação de Habilidades e Passivas Personalizadas

export interface CustomAbility {
  id: string;
  name: string;
  type: 'active' | 'passive';
  category: 'combat' | 'utility' | 'defense' | 'support' | 'movement' | 'mental' | 'elemental' | 'custom';
  description: string;
  effect: string;
  costEP?: number; // Custo em Energia (EP) - apenas para habilidades ativas
  cooldown?: string; // Tempo de recarga (ex: "1 turno", "1 minuto", "1 descanso curto")
  range?: string; // Alcance (ex: "toque", "12m", "vista")
  duration?: string; // Duração (ex: "1 turno", "1 minuto", "permanente")
  requirements?: string; // Requisitos (ex: "Nível 5+", "Força 15+")
  weakness?: string; // Fraqueza ou limitação
  createdAt?: Date;
  createdBy?: string;
}

export interface CustomPassive {
  id: string;
  name: string;
  type: 'racial' | 'class' | 'talent' | 'custom';
  category: 'attribute' | 'resistance' | 'skill' | 'special' | 'custom';
  description: string;
  effect: string;
  bonus?: string; // Bônus (ex: "+2 em Força", "+1 CA")
  condition?: string; // Condição de ativação (ex: "sempre ativo", "quando em combate")
  requirements?: string; // Requisitos
  createdAt?: Date;
  createdBy?: string;
}

// Categorias de Habilidades
export const abilityCategories = [
  { id: 'combat', name: 'Combate', icon: '⚔️', description: 'Habilidades ofensivas e de ataque' },
  { id: 'utility', name: 'Utilidade', icon: '🔧', description: 'Habilidades práticas e funcionais' },
  { id: 'defense', name: 'Defesa', icon: '🛡️', description: 'Habilidades defensivas e de proteção' },
  { id: 'support', name: 'Suporte', icon: '🤝', description: 'Habilidades de auxílio a aliados' },
  { id: 'movement', name: 'Movimento', icon: '💨', description: 'Habilidades de deslocamento' },
  { id: 'mental', name: 'Mental', icon: '🧠', description: 'Habilidades psíquicas e mentais' },
  { id: 'elemental', name: 'Elemental', icon: '⚡', description: 'Habilidades com elementos' },
  { id: 'custom', name: 'Customizado', icon: '✨', description: 'Habilidade única e personalizada' }
];

// Categorias de Passivas
export const passiveCategories = [
  { id: 'attribute', name: 'Atributo', icon: '💪', description: 'Bônus a atributos' },
  { id: 'resistance', name: 'Resistência', icon: '🛡️', description: 'Resistências e imunidades' },
  { id: 'skill', name: 'Perícia', icon: '📚', description: 'Bônus a perícias' },
  { id: 'special', name: 'Especial', icon: '⭐', description: 'Efeitos especiais únicos' },
  { id: 'custom', name: 'Customizado', icon: '✨', description: 'Passiva única e personalizada' }
];

// Modelos de Habilidades Pré-Definidas (para referência)
export const abilityTemplates: CustomAbility[] = [
  {
    id: 'template-ataque-basico',
    name: 'Ataque Básico',
    type: 'active',
    category: 'combat',
    description: 'Um ataque simples com arma ou corpo a corpo',
    effect: 'Causa dano baseado na arma + modificador de Força ou Destreza',
    costEP: 0,
    cooldown: 'Sem recarga',
    range: 'Toque ou alcance da arma',
    duration: 'Instantâneo',
    weakness: 'Sem fraqueza especial'
  },
  {
    id: 'template-defesa-total',
    name: 'Defesa Total',
    type: 'active',
    category: 'defense',
    description: 'Concentra-se totalmente em defesa',
    effect: '+4 em CA até o próximo turno',
    costEP: 1,
    cooldown: 'Sem recarga',
    range: 'Pessoal',
    duration: '1 turno',
    weakness: 'Não pode atacar enquanto em defesa total'
  },
  {
    id: 'template-rajada-energia',
    name: 'Rajada de Energia',
    type: 'active',
    category: 'elemental',
    description: 'Lança uma onda de energia em linha reta',
    effect: '3d6 de dano de energia em linha de 9m',
    costEP: 3,
    cooldown: '1 turno',
    range: '9 metros em linha',
    duration: 'Instantâneo',
    weakness: 'Pode ser bloqueada por barreiras'
  },
  {
    id: 'template-teleporte',
    name: 'Teleporte',
    type: 'active',
    category: 'movement',
    description: 'Desaparece e reaparece em outro local',
    effect: 'Se move até 30m instantaneamente',
    costEP: 4,
    cooldown: '1 minuto',
    range: 'Até 30 metros de distância',
    duration: 'Instantâneo',
    weakness: 'Não pode teleportar através de barreiras mágicas'
  },
  {
    id: 'template-cura',
    name: 'Cura',
    type: 'active',
    category: 'support',
    description: 'Restaura pontos de vida',
    effect: 'Recupera 2d8 + modificador de Carisma de PV',
    costEP: 3,
    cooldown: '1 descanso curto',
    range: 'Toque ou 6m',
    duration: 'Instantâneo',
    weakness: 'Não funciona em mortos'
  }
];

// Modelos de Passivas Pré-Definidas (para referência)
export const passiveTemplates: CustomPassive[] = [
  {
    id: 'template-foco-guerreiro',
    name: 'Foco do Guerreiro',
    type: 'custom',
    category: 'special',
    description: 'Aumenta precisão em combate',
    effect: '+1 em testes de ataque',
    bonus: '+1 em ataques',
    condition: 'Sempre ativo'
  },
  {
    id: 'template-resistencia-magica',
    name: 'Resistência Mágica',
    type: 'custom',
    category: 'resistance',
    description: 'Resistência natural a magia',
    effect: '+2 em testes de resistência contra magia',
    bonus: '+2 em resistência mágica',
    condition: 'Sempre ativo'
  },
  {
    id: 'template-visao-noturna',
    name: 'Visão Noturna',
    type: 'custom',
    category: 'special',
    description: 'Pode ver perfeitamente no escuro',
    effect: 'Visão em escuridão total até 12m',
    condition: 'Sempre ativo'
  },
  {
    id: 'template-regeneracao',
    name: 'Regeneração',
    type: 'custom',
    category: 'special',
    description: 'Recupera-se naturalmente de ferimentos',
    effect: 'Recupera 1 PV por turno fora de combate',
    condition: 'Fora de combate'
  }
];

// Diretrizes para Criação de Habilidades
export const abilityCreationGuidelines = {
  costEPRange: { min: 0, max: 10, description: 'Custo em Energia (EP) deve estar entre 0 e 10' },
  damageRange: { min: '1d4', max: '6d10', description: 'Dano deve ser razoável para o nível' },
  cooldownOptions: [
    'Sem recarga',
    '1 turno',
    '1 minuto',
    '1 descanso curto (10 minutos)',
    '1 descanso longo (1 hora)',
    '1 dia'
  ],
  rangeOptions: [
    'Toque',
    '6 metros',
    '12 metros',
    '30 metros',
    '60 metros',
    'Ilimitado (vista)',
    'Pessoal'
  ],
  durationOptions: [
    'Instantâneo',
    '1 turno',
    '1 minuto',
    '10 minutos',
    '1 hora',
    'Permanente até desativar',
    'Permanente'
  ],
  tips: [
    'Habilidades mais poderosas devem ter custos maiores ou cooldowns mais longos',
    'Defina sempre uma fraqueza ou limitação para balancear a habilidade',
    'Considere o nível do personagem ao criar habilidades muito poderosas',
    'Habilidades ofensivas devem ter alcance e dano bem definidos',
    'Passivas devem ser sempre ativas ou ter condições claras de ativação'
  ]
};

// Função para validar uma habilidade personalizada
export function validateCustomAbility(ability: Partial<CustomAbility>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!ability.name || ability.name.trim().length === 0) {
    errors.push('Nome da habilidade é obrigatório');
  }

  if (!ability.description || ability.description.trim().length === 0) {
    errors.push('Descrição é obrigatória');
  }

  if (!ability.effect || ability.effect.trim().length === 0) {
    errors.push('Efeito é obrigatório');
  }

  if (ability.type === 'active' && (!ability.costEP || ability.costEP < 0 || ability.costEP > 10)) {
    errors.push('Custo de EP deve estar entre 0 e 10');
  }

  if (ability.type === 'active' && (!ability.cooldown || ability.cooldown.trim().length === 0)) {
    errors.push('Tempo de recarga é obrigatório para habilidades ativas');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// Função para validar uma passiva personalizada
export function validateCustomPassive(passive: Partial<CustomPassive>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!passive.name || passive.name.trim().length === 0) {
    errors.push('Nome da passiva é obrigatório');
  }

  if (!passive.description || passive.description.trim().length === 0) {
    errors.push('Descrição é obrigatória');
  }

  if (!passive.effect || passive.effect.trim().length === 0) {
    errors.push('Efeito é obrigatório');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
