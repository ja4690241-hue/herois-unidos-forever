// Classes, Specializations, Equipment and Skills Data

export interface Specialization {
  id: string;
  name: string;
  description: string;
  bonuses: string[];
}

export interface ClassData {
  id: string;
  name: string;
  icon: string;
  description: string;
  attributes: {
    primary: string;
    secondary: string;
  };
  uniqueAbilities: {
    name: string;
    description: string;
  }[];
  specializations: Specialization[];
  gameStyle: string;
  recommendedSkills: string[];
  hpPerLevel: number;
  manaPerLevel: number;
}

export const classes: ClassData[] = [
  {
    id: "lutador-corpo-a-corpo",
    name: "Lutador Corpo a Corpo",
    icon: "🥊",
    description: "Especialista em combate direto com força e resistência extremas.",
    attributes: {
      primary: "Força",
      secondary: "Resistência",
    },
    hpPerLevel: 10,
    manaPerLevel: 5,
    uniqueAbilities: [
      {
        name: "Fúria Combatente",
        description: "+2 no dano corpo a corpo.",
      },
      {
        name: "Postura Defensiva",
        description: "+2 CA gastando 1 EP.",
      },
    ],
    specializations: [
      {
        id: "berserker",
        name: "Berserker",
        description: "Fúria incontrolável que aumenta o dano",
        bonuses: ["+3 em dano físico", "+2 em Força"],
      },
      {
        id: "tanque",
        name: "Tanque",
        description: "Defesa elevada e resistência a dano",
        bonuses: ["+2 em CA", "+3 em Resistência"],
      },
    ],
    gameStyle: "Forte e resistência em combate direto, golpes físicos",
    recommendedSkills: ["Atletismo", "Luta", "Resistência"],
  },
  {
    id: "combatente-agil",
    name: "Combatente Ágil",
    icon: "🏃",
    description: "Mestre em esquivas rápidas e ataques ágeis com acrobacias.",
    attributes: {
      primary: "Agilidade",
      secondary: "Vontade",
    },
    hpPerLevel: 8,
    manaPerLevel: 6,
    uniqueAbilities: [
      {
        name: "Reflexos Sobrenaturais",
        description: "+2 em esquiva.",
      },
      {
        name: "Ataque Veloz",
        description: "+1 iniciativa e movimento extra.",
      },
    ],
    specializations: [
      {
        id: "ninja",
        name: "Ninja",
        description: "Furtividade e ataques surpresa",
        bonuses: ["+3 em Furtividade", "+2 em Agilidade"],
      },
      {
        id: "acrobata",
        name: "Acrobata",
        description: "Movimentos impossíveis e ataques aéreos",
        bonuses: ["+2 em Acrobacias", "+1 em dano aéreo"],
      },
    ],
    gameStyle: "Esquivas rápidas, ataques ágeis, acrobacias",
    recommendedSkills: ["Acrobacias", "Furtividade", "Reflexos"],
  },
  {
    id: "blaster",
    name: "Blaster (Atacante à Distância)",
    icon: "🏹",
    description: "Especialista em ataques de longo alcance com tecnologia e táticas.",
    attributes: {
      primary: "Inteligência",
      secondary: "Agilidade",
    },
    hpPerLevel: 7,
    manaPerLevel: 10,
    uniqueAbilities: [
      {
        name: "Tiro Preciso",
        description: "Bônus ao atacar de longa distância",
      },
      {
        name: "Disparo Duplo",
        description: "Atira duas vezes no mesmo turno gastando EP.",
      },
    ],
    specializations: [
      {
        id: "sniper",
        name: "Sniper",
        description: "Foco em tiros de precisão",
        bonuses: ["+3 em ataques à distância", "+2 em Inteligência"],
      },
      {
        id: "engenheiro-armas",
        name: "Engenheiro de Armas",
        description: "Criação de novas armas e gadgets",
        bonuses: ["+2 em Tecnologia", "+1 em dano de armas"],
      },
    ],
    gameStyle: "Ataques de longo alcance, tecnologia e táticas",
    recommendedSkills: ["Tecnologia", "Investigação", "Percepção"],
  },
  {
    id: "mutante-evolutivo",
    name: "Mutante Evolutivo",
    icon: "🔹",
    description: "Mestre em adaptação, regeneração e mudanças corporais.",
    attributes: {
      primary: "Resistência",
      secondary: "Poder",
    },
    hpPerLevel: 12,
    manaPerLevel: 5,
    uniqueAbilities: [
      {
        name: "Regeneração Acelerada",
        description: "+2 HP por turno se abaixo de 50%.",
      },
      {
        name: "Pele Resistente",
        description: "+1 CA natural permanente.",
      },
    ],
    specializations: [
      {
        id: "absorvedor-energy",
        name: "Absorvedor de Energia",
        description: "Usa energia inimiga para se fortalecer",
        bonuses: ["+2 em Resistência", "Absorve 10% do dano"],
      },
      {
        id: "mutante-caotico",
        name: "Mutante Caótico",
        description: "Habilidades mutáveis a cada combate",
        bonuses: ["+1 em todos os atributos", "Muda forma 1x por turno"],
      },
    ],
    gameStyle: "Adaptação, regeneração e mudanças corporais",
    recommendedSkills: ["Sobrevivência", "Atletismo", "Medicina"],
  },
  {
    id: "ciborgue-engenheiro",
    name: "Ciborgue/Engenheiro",
    icon: "🤖",
    description: "Especialista em tecnologia avançada e implantes cibernéticos.",
    attributes: {
      primary: "Inteligência",
      secondary: "Poder",
    },
    hpPerLevel: 9,
    manaPerLevel: 8,
    uniqueAbilities: [
      {
        name: "Cibernética",
        description: "+1 em CA permanente.",
      },
      {
        name: "Reparo Rápido",
        description: "Recupera 5 HP gastando 10 EP.",
      },
    ],
    specializations: [
      {
        id: "ciborgue-blindado",
        name: "Ciborgue Blindado",
        description: "Tanque com defesa aprimorada",
        bonuses: ["+2 em CA", "+2 em Resistência"],
      },
      {
        id: "hacker-tecnologico",
        name: "Hacker Tecnológico",
        description: "Mestre da invasão digital",
        bonuses: ["+3 em Tecnologia", "Desativa sistemas 1x por combate"],
      },
    ],
    gameStyle: "Tecnologia avançada, implantes cibernéticos",
    recommendedSkills: ["Tecnologia", "Engenharia", "Investigação"],
  },
  {
    id: "fantasma-sombra",
    name: "Fantasma/Sombra",
    icon: "👻",
    description: "Mestre da invisibilidade, intangibilidade e ataques surpresa.",
    attributes: {
      primary: "Agilidade",
      secondary: "Vontade",
    },
    hpPerLevel: 6,
    manaPerLevel: 12,
    uniqueAbilities: [
      {
        name: "Sopro Espectral",
        description: "Dano em cone (4m) gastando EP.",
      },
      {
        name: "Visão Espectral",
        description: "Enxerga seres invisíveis e no escuro.",
      },
    ],
    specializations: [
      {
        id: "cacador-almas",
        name: "Caçador de Almas",
        description: "Rouba energia vital dos inimigos",
        bonuses: ["+2 em dano especial", "Drena 5 HP por ataque"],
      },
      {
        id: "mestre-invisibilidade",
        name: "Mestre da Invisibilidade",
        description: "Torna-se quase impossível de detectar",
        bonuses: ["+3 em Furtividade", "Invisibilidade 1x por combate"],
      },
    ],
    gameStyle: "Invisibilidade, intangibilidade, ataques surpresa",
    recommendedSkills: ["Furtividade", "Arcano", "Enganação"],
  },
  {
    id: "predador-assassino",
    name: "Predador/Assassino",
    icon: "🔪",
    description: "Especialista em ataques furtivos, golpes críticos e rastreamento.",
    attributes: {
      primary: "Agilidade",
      secondary: "Inteligência",
    },
    hpPerLevel: 7,
    manaPerLevel: 6,
    uniqueAbilities: [
      {
        name: "Ataque Furtivo",
        description: "+1d6 dano em alvos distraídos ou surpresos.",
      },
      {
        name: "Movimento Silencioso",
        description: "+2 em testes de Furtividade.",
      },
    ],
    specializations: [
      {
        id: "mestre-cacada",
        name: "Mestre da Caçada",
        description: "Rastreamento e armadilhas",
        bonuses: ["+2 em Rastreamento", "+1 em armadilhas"],
      },
      {
        id: "assassino-silencioso",
        name: "Assassino Silencioso",
        description: "Elimina alvos sem ser notado",
        bonuses: ["+3 em dano crítico", "+2 em Furtividade"],
      },
    ],
    gameStyle: "Ataques furtivos, golpes críticos, rastreamento",
    recommendedSkills: ["Furtividade", "Enganação", "Acrobacias"],
  },
  {
    id: "guardiao-suporte",
    name: "Guardião de Suporte",
    icon: "🛡️",
    description: "Especialista em proteger aliados, fornecer bônus e curar ferimentos.",
    attributes: {
      primary: "Vontade",
      secondary: "Poder",
    },
    hpPerLevel: 11,
    manaPerLevel: 7,
    uniqueAbilities: [
      {
        name: "Interceptar",
        description: "Impõe desvantagem em ataque contra aliado próximo.",
      },
      {
        name: "Aura Protetora",
        description: "Aliados a até 3m ganham +2 CA.",
      },
    ],
    specializations: [
      {
        id: "curandeiro",
        name: "Curandeiro",
        description: "Especialista em cura e restauração",
        bonuses: ["+2 em cura", "+1 em Medicina"],
      },
      {
        id: "protetor",
        name: "Protetor",
        description: "Defende aliados com escudos",
        bonuses: ["+2 em CA de aliados", "+1 em Resistência"],
      },
    ],
    gameStyle: "Proteção de aliados, bônus e cura de ferimentos",
    recommendedSkills: ["Medicina", "Intimidação", "Persuasão"],
  },
];

export interface Weapon {
  id: string;
  name: string;
  type: "leve" | "média" | "pesada" | "exótica";
  damage: string;
  critical: string;
  properties: string[];
  range?: string;
}

export const weapons: Weapon[] = [
  {
    id: "pistola-energetica",
    name: "Pistola Energética",
    type: "leve",
    damage: "1d8",
    critical: "19/20",
    properties: ["Ataque à distância (15/30m)", "6 tiros por carga"],
    range: "15/30m",
  },
  {
    id: "fuzil-plasma",
    name: "Fuzil de Plasma",
    type: "média",
    damage: "2d8",
    critical: "20",
    properties: ["Ataque à distância (30m)", "Superaquece"],
    range: "30m",
  },
  {
    id: "espada-grande",
    name: "Espada Grande",
    type: "pesada",
    damage: "3d6",
    critical: "19/20",
    properties: ["Requer duas mãos", "Dano massivo"],
  },
];

export interface Armor {
  id: string;
  name: string;
  type: string;
  ca: number;
  properties: string[];
}

export const armors: Armor[] = [
  {
    id: "armadura-leve",
    name: "Armadura Leve",
    type: "leve",
    ca: 11,
    properties: ["Não restringe movimento", "Silenciosa"],
  },
  {
    id: "armadura-media",
    name: "Armadura Média",
    type: "média",
    ca: 13,
    properties: ["Equilíbrio entre proteção e mobilidade"],
  },
  {
    id: "armadura-pesada",
    name: "Armadura Pesada",
    type: "pesada",
    ca: 15,
    properties: ["Máxima proteção", "Reduz velocidade"],
  },
];

export interface Skill {
  id: string;
  name: string;
  description: string;
  attribute: string;
}

export const skills: Skill[] = [
  {
    id: "atletismo",
    name: "Atletismo",
    description: "Força física e resistência",
    attribute: "Força",
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    description: "Uso de dispositivos e hacking",
    attribute: "Inteligência",
  },
  {
    id: "furtividade",
    name: "Furtividade",
    description: "Se mover silenciosamente",
    attribute: "Agilidade",
  },
];
