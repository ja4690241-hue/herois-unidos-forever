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
    uniqueAbilities: [
      {
        name: "Golpe Poderoso",
        description: "Dano aumentado em ataques corpo a corpo",
      },
      {
        name: "Resistência Aprimorada",
        description: "Redução de dano de ataques físicos",
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
    uniqueAbilities: [
      {
        name: "Desvio Rápido",
        description: "Bônus ao esquivar de ataques",
      },
      {
        name: "Ataque Relâmpago",
        description: "Pode atacar e se mover antes do inimigo",
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
    uniqueAbilities: [
      {
        name: "Tiro Preciso",
        description: "Bônus ao atacar de longa distância",
      },
      {
        name: "Análise Tática",
        description: "Pode prever movimentos inimigos",
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
    uniqueAbilities: [
      {
        name: "Regeneração Acelerada",
        description: "Cura rápida de ferimentos",
      },
      {
        name: "Mutação Adaptativa",
        description: "Pode mudar de forma para resistir a ataques",
      },
    ],
    specializations: [
      {
        id: "absorvedor-energia",
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
    recommendedSkills: ["Natureza", "Sobrevivência", "Medicina"],
  },
  {
    id: "mago-arcano",
    name: "Mago/Arcano",
    icon: "🔮",
    description: "Mestre das artes mágicas, manipulação de energia e feitiços.",
    attributes: {
      primary: "Inteligência",
      secondary: "Vontade",
    },
    uniqueAbilities: [
      {
        name: "Magia Elemental",
        description: "Pode lançar feitiços baseados em fogo, gelo, eletricidade etc.",
      },
      {
        name: "Escudo Arcano",
        description: "Proteção contra ataques físicos e mágicos",
      },
    ],
    specializations: [
      {
        id: "mago-batalha",
        name: "Mago de Batalha",
        description: "Combina magia com combate físico",
        bonuses: ["+2 em dano mágico", "+1 em CA"],
      },
      {
        id: "invocador",
        name: "Invocador",
        description: "Chama criaturas para lutar ao seu lado",
        bonuses: ["+1 em Magia", "Invoca aliado 1x por combate"],
      },
    ],
    gameStyle: "Magia, manipulação de energia e feitiços",
    recommendedSkills: ["Arcana", "Investigação", "Percepção"],
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
    uniqueAbilities: [
      {
        name: "Modo Turbo",
        description: "Aumento temporário de velocidade e força",
      },
      {
        name: "Hacking Avançado",
        description: "Pode invadir sistemas e desativar dispositivos",
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
    recommendedSkills: ["Tecnologia", "Investigação", "Enganação"],
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
    uniqueAbilities: [
      {
        name: "Passar pela Matéria",
        description: "Pode atravessar paredes e objetos",
      },
      {
        name: "Ataque Fantasma",
        description: "Dano extra contra inimigos desprevenidos",
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
    recommendedSkills: ["Furtividade", "Percepção", "Enganação"],
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
    uniqueAbilities: [
      {
        name: "Ataque Furtivo",
        description: "Dano extra ao atacar inimigos desprevenidos",
      },
      {
        name: "Camuflagem",
        description: "Pode se esconder facilmente",
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
    recommendedSkills: ["Furtividade", "Rastreamento", "Acrobacias"],
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
    uniqueAbilities: [
      {
        name: "Aura Protetora",
        description:
          "Ativa uma aura de 6 metros que concede +2 na CA e resistência a dano elemental a todos os aliados. Duração: 3 rodadas. Usável 3 vezes por descanso longo.",
      },
      {
        name: "Toque Restaurador",
        description: "Como uma ação, cura um aliado em até 1d8 + Mod. Vontade pontos de vida.",
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
    recommendedSkills: ["Medicina", "Percepção", "Persuasão"],
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
  // Armas Leves
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
    id: "revolver-pesado",
    name: "Revolver Pesado",
    type: "leve",
    damage: "2d6",
    critical: "20",
    properties: ["Simples", "Alcance (9m)"],
    range: "9m",
  },
  {
    id: "pistola-silenciada",
    name: "Pistola Silenciada",
    type: "leve",
    damage: "1d8",
    critical: "19/20",
    properties: ["Ataque à distância (9m)", "Furtiva", "Difícil de detectar"],
    range: "9m",
  },
  {
    id: "adagas-gemeas",
    name: "Adagas Gêmeas",
    type: "leve",
    damage: "1d6 (cada)",
    critical: "2x",
    properties: ["Ataque duplo"],
  },
  {
    id: "arco-pulso",
    name: "Arco de Pulso",
    type: "leve",
    damage: "1d8",
    critical: "19/20",
    properties: ["Ataque silencioso", "Dispara flechas de energia"],
    range: "30m",
  },
  {
    id: "adaga-energia",
    name: "Adaga de Energia",
    type: "leve",
    damage: "1d6",
    critical: "19/20",
    properties: ["Causa dano energético", "Pode cortar metais leves"],
  },
  {
    id: "luva-taser",
    name: "Luva Taser",
    type: "leve",
    damage: "1d6",
    critical: "20",
    properties: ["Pode atordoar por 1 turno"],
  },
  {
    id: "shuriken-carbono",
    name: "Shuriken de Carbono",
    type: "leve",
    damage: "1d4",
    critical: "18/20",
    properties: ["Pode ser recuperada após o ataque"],
  },
  {
    id: "nunchaku-liga",
    name: "Nunchaku de Liga Metálica",
    type: "leve",
    damage: "1d6",
    critical: "19/20",
    properties: ["Garante um ataque bônus com -1 de dano"],
  },
  {
    id: "bastao-retratil",
    name: "Bastão Retrátil",
    type: "leve",
    damage: "1d6",
    critical: "2x",
    properties: ["Pode ser escondido facilmente"],
  },

  // Armas Médias
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
    id: "submetralhadora",
    name: "Submetralhadora Compacta",
    type: "média",
    damage: "2d4",
    critical: "20",
    properties: ["Rajada (pode disparar duas vezes, mas com -2 de precisão)"],
    range: "20m",
  },
  {
    id: "espada-energia",
    name: "Espada de Energia",
    type: "média",
    damage: "2d6",
    critical: "19/20",
    properties: ["Causa dano energético", "Brilha no escuro"],
  },
  {
    id: "machado-pesado",
    name: "Machado Pesado",
    type: "média",
    damage: "2d8",
    critical: "19/20",
    properties: ["Dano aumentado contra armaduras"],
  },
  {
    id: "lanca-plasma",
    name: "Lança de Plasma",
    type: "média",
    damage: "2d6",
    critical: "20",
    properties: ["Alcance (6m)", "Causa queimadura contínua"],
    range: "6m",
  },

  // Armas Pesadas
  {
    id: "rifle-pesado",
    name: "Rifle Pesado",
    type: "pesada",
    damage: "3d8",
    critical: "20",
    properties: ["Ataque à distância (40m)", "Requer duas mãos"],
    range: "40m",
  },
  {
    id: "espada-grande",
    name: "Espada Grande",
    type: "pesada",
    damage: "3d6",
    critical: "19/20",
    properties: ["Requer duas mãos", "Dano massivo"],
  },
  {
    id: "martelo-guerra",
    name: "Martelo de Guerra",
    type: "pesada",
    damage: "2d10",
    critical: "20",
    properties: ["Requer duas mãos", "Empurra inimigos 3m"],
  },
  {
    id: "canhao-laser",
    name: "Canhão Laser",
    type: "pesada",
    damage: "4d8",
    critical: "19/20",
    properties: ["Ataque à distância (50m)", "Requer recarga"],
    range: "50m",
  },

  // Armas Exóticas
  {
    id: "espada-temporal",
    name: "Espada Temporal",
    type: "exótica",
    damage: "3d8",
    critical: "18/20",
    properties: ["Ignora 50% da defesa", "Rara"],
  },
  {
    id: "lanca-infinita",
    name: "Lança Infinita",
    type: "exótica",
    damage: "3d10",
    critical: "19/20",
    properties: ["Sempre retorna", "Lendária"],
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
  {
    id: "armadura-energetica",
    name: "Armadura Energética",
    type: "exótica",
    ca: 16,
    properties: ["Absorve dano energético", "Recarregável"],
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
    id: "acrobacias",
    name: "Acrobacias",
    description: "Movimentos corporais complexos e equilíbrio",
    attribute: "Agilidade",
  },
  {
    id: "atletismo",
    name: "Atletismo",
    description: "Força física e resistência",
    attribute: "Força",
  },
  {
    id: "arcana",
    name: "Arcana",
    description: "Conhecimento de magia e feitiços",
    attribute: "Inteligência",
  },
  {
    id: "enganacao",
    name: "Enganação",
    description: "Mentir e enganar outros",
    attribute: "Carisma",
  },
  {
    id: "furtividade",
    name: "Furtividade",
    description: "Se mover silenciosamente e se esconder",
    attribute: "Agilidade",
  },
  {
    id: "investigacao",
    name: "Investigação",
    description: "Procurar por pistas e resolver mistérios",
    attribute: "Inteligência",
  },
  {
    id: "luta",
    name: "Luta",
    description: "Combate corpo a corpo",
    attribute: "Força",
  },
  {
    id: "medicina",
    name: "Medicina",
    description: "Curar ferimentos e diagnosticar doenças",
    attribute: "Inteligência",
  },
  {
    id: "natureza",
    name: "Natureza",
    description: "Conhecimento de plantas e animais",
    attribute: "Inteligência",
  },
  {
    id: "percepcao",
    name: "Percepção",
    description: "Notar detalhes e observar arredores",
    attribute: "Sabedoria",
  },
  {
    id: "persuasao",
    name: "Persuasão",
    description: "Convencer e influenciar outros",
    attribute: "Carisma",
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    description: "Usar e consertar dispositivos tecnológicos",
    attribute: "Inteligência",
  },
  {
    id: "rastreamento",
    name: "Rastreamento",
    description: "Seguir trilhas e rastrear criaturas",
    attribute: "Sabedoria",
  },
  {
    id: "sobrevivencia",
    name: "Sobrevivência",
    description: "Sobreviver em ambientes selvagens",
    attribute: "Sabedoria",
  },
];
