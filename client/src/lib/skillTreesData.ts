// Skill Trees and Ability Progressions

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  level: number;
  prerequisites?: string[];
  bonuses: string[];
  icon: string;
}

export interface SkillTree {
  id: string;
  name: string;
  description: string;
  icon: string;
  classId: string;
  nodes: SkillNode[];
}

export const skillTrees: SkillTree[] = [
  {
    "id": "poder-elemental",
    "name": "Árvore de Poder Elemental",
    "description": "Para personagens com poderes baseados em fogo, gelo, eletricidade, etc.",
    "icon": "🔥",
    "classId": "generico",
    "nodes": [
      {
        "id": "controle-elemental",
        "name": "Controle Elemental",
        "description": "Escolha um elemento; seus ataques ganham +1d4 de dano desse tipo.",
        "level": 1,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 1+ e Afinidade Elemental",
            "description": "Nível 1+ e Afinidade Elemental"
          }
        ],
        "bonuses": [
          "+1d4 de dano do elemento escolhido."
        ],
        "icon": "✨"
      },
      {
        "id": "resistncia-elemental",
        "name": "Resistência Elemental",
        "description": "Você recebe resistência ao mesmo tipo de dano do seu elemento.",
        "level": 2,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 3+ e Controle Elemental",
            "description": "Nível 3+ e Controle Elemental"
          }
        ],
        "bonuses": [
          "Resistência ao elemento escolhido."
        ],
        "icon": "✨"
      },
      {
        "id": "rajada-elemental",
        "name": "Rajada Elemental",
        "description": "Você pode gastar 2 pontos de energia para liberar uma explosão elemental em um raio de 3 metros.",
        "level": 3,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 5+ e Resistência Elemental",
            "description": "Nível 5+ e Resistência Elemental"
          }
        ],
        "bonuses": [
          "Explosão elemental (Raio de 3m) por 2 EP."
        ],
        "icon": "✨"
      },
      {
        "id": "imunidade-elemental",
        "name": "Imunidade Elemental",
        "description": "Agora você se torna imune ao seu próprio elemento.",
        "level": 4,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 10+ e Rajada Elemental",
            "description": "Nível 10+ e Rajada Elemental"
          }
        ],
        "bonuses": [
          "Imunidade ao elemento escolhido."
        ],
        "icon": "✨"
      },
      {
        "id": "avatar-elemental",
        "name": "Avatar Elemental",
        "description": "Você pode entrar em um estado onde ganha +2 CA e +2 de dano com seu elemento por 1 minuto.",
        "level": 5,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 15+ e Imunidade Elemental",
            "description": "Nível 15+ e Imunidade Elemental"
          }
        ],
        "bonuses": [
          "+2 CA e +2 de dano com elemento por 1 minuto."
        ],
        "icon": "✨"
      }
    ]
  },
  // Lutador Corpo a Corpo Trees
  {
    id: "velocidade-lutador",
    name: "Árvore: Velocidade",
    description: "Aumenta a velocidade e agilidade em combate",
    icon: "💨",
    classId: "lutador-corpo-a-corpo",
    nodes: [
      {
        id: "golpe-rapido",
        name: "Golpe Rápido",
        description: "Ataque mais rápido com -1 de dano",
        level: 1,
        bonuses: ["+1 ataque por turno", "-1 dano por ataque"],
        icon: "⚡",
      },
      {
        id: "esquiva-aprimorada",
        name: "Esquiva Aprimorada",
        description: "Aumenta CA em 1 permanentemente",
        level: 3,
        prerequisites: ["golpe-rapido"],
        bonuses: ["+1 CA", "+2 em testes de reflexo"],
        icon: "🛡️",
      },
      {
        id: "movimento-fantasma",
        name: "Movimento Fantasma",
        description: "Se mover sem provocar ataques de oportunidade",
        level: 6,
        prerequisites: ["esquiva-aprimorada"],
        bonuses: ["Sem ataques de oportunidade ao se mover"],
        icon: "👻",
      },
    ],
  },
  {
    id: "furia-lutador",
    name: "Árvore: Fúria",
    description: "Aumenta dano e agressividade",
    icon: "🔥",
    classId: "lutador-corpo-a-corpo",
    nodes: [
      {
        id: "ataque-poderoso",
        name: "Ataque Poderoso",
        description: "Dano aumentado em 1d4",
        level: 1,
        bonuses: ["+1d4 dano", "-1 em defesa"],
        icon: "💥",
      },
      {
        id: "golpe-devastador",
        name: "Golpe Devastador",
        description: "Crítico em 19-20 com dano dobrado",
        level: 5,
        prerequisites: ["ataque-poderoso"],
        bonuses: ["Crítico 19-20", "Dano crítico dobrado"],
        icon: "⚔️",
      },
      {
        id: "furia-suprema",
        name: "Fúria Suprema",
        description: "Aumenta todos os ataques em 2d4 por 3 turnos",
        level: 10,
        prerequisites: ["golpe-devastador"],
        bonuses: ["+2d4 dano por 3 turnos", "Usável 1x por combate"],
        icon: "🌪️",
      },
    ],
  },

  // Combatente Ágil Trees
  {
    id: "acrobacias-agil",
    name: "Árvore: Acrobacias",
    description: "Movimentos impossíveis e ataques aéreos",
    icon: "🤸",
    classId: "combatente-agil",
    nodes: [
      {
        id: "pirueta",
        name: "Pirueta",
        description: "Se mover 3m como ação bônus",
        level: 1,
        bonuses: ["Movimento extra 3m", "+1 em esquivas"],
        icon: "🌀",
      },
      {
        id: "ataque-aereo",
        name: "Ataque Aéreo",
        description: "Ataque enquanto pula com +1 dano",
        level: 4,
        prerequisites: ["pirueta"],
        bonuses: ["+1 dano em ataques aéreos", "Pode atacar enquanto se move"],
        icon: "🦅",
      },
      {
        id: "danca-letal",
        name: "Dança Letal",
        description: "Faça 2 ataques como ação bônus",
        level: 8,
        prerequisites: ["ataque-aereo"],
        bonuses: ["+1 ataque por turno", "+2 em esquivas"],
        icon: "💃",
      },
    ],
  },
  {
    id: "furtividade-agil",
    name: "Árvore: Furtividade",
    description: "Invisibilidade e ataques surpresa",
    icon: "🥷",
    classId: "combatente-agil",
    nodes: [
      {
        id: "esconder-rapido",
        name: "Esconder Rápido",
        description: "Se esconder como ação bônus",
        level: 1,
        bonuses: ["+3 em Furtividade", "Ação bônus para se esconder"],
        icon: "👁️",
      },
      {
        id: "invisibilidade-parcial",
        name: "Invisibilidade Parcial",
        description: "Fica invisível por 1 turno",
        level: 5,
        prerequisites: ["esconder-rapido"],
        bonuses: ["Invisibilidade 1x por combate", "+5 em Furtividade"],
        icon: "🫥",
      },
      {
        id: "sombra-perfeita",
        name: "Sombra Perfeita",
        description: "Quase impossível de detectar",
        level: 10,
        prerequisites: ["invisibilidade-parcial"],
        bonuses: ["Invisibilidade 2x por combate", "Ataques furtivos causam 2x dano"],
        icon: "🌑",
      },
    ],
  },

  // Blaster Trees
  {
    id: "precisao-blaster",
    name: "Árvore: Precisão",
    description: "Tiros precisos e de longo alcance",
    icon: "🎯",
    classId: "blaster",
    nodes: [
      {
        id: "mira-laser",
        name: "Mira Laser",
        description: "+2 em ataques à distância",
        level: 3,
        bonuses: ["+2 em ataques à distância"],
        icon: "🔴",
      },
      {
        id: "disparo-duplo",
        name: "Disparo Duplo",
        description: "Atira duas vezes no mesmo turno",
        level: 6,
        prerequisites: ["mira-laser"],
        bonuses: ["+1 ataque por turno", "-1 em precisão"],
        icon: "💥",
      },
      {
        id: "sniper-perfeito",
        name: "Sniper Perfeito",
        description: "Se ficar parado, ignora 50% da defesa",
        level: 10,
        prerequisites: ["disparo-duplo"],
        bonuses: ["Ignora 50% da CA", "+3 em dano crítico"],
        icon: "🎖️",
      },
    ],
  },
  {
    id: "tecnologia-blaster",
    name: "Árvore: Tecnologia",
    description: "Gadgets e armas tecnológicas",
    icon: "⚙️",
    classId: "blaster",
    nodes: [
      {
        id: "drone-auxiliar",
        name: "Drone Auxiliar",
        description: "Invoca um drone para ajudar",
        level: 2,
        bonuses: ["Drone causa 1d6 dano", "Dura 3 turnos"],
        icon: "🤖",
      },
      {
        id: "mina-explosiva",
        name: "Mina Explosiva",
        description: "Coloca uma mina que explode em 2d8",
        level: 5,
        prerequisites: ["drone-auxiliar"],
        bonuses: ["Mina causa 2d8 dano", "Área de 3m"],
        icon: "💣",
      },
      {
        id: "sistema-defesa",
        name: "Sistema de Defesa",
        description: "Cria escudo tecnológico",
        level: 9,
        prerequisites: ["mina-explosiva"],
        bonuses: ["+3 CA", "Absorve 10 pontos de dano"],
        icon: "🛡️",
      },
    ],
  },

  // Mago/Arcano Trees
  {
    id: "magia-elemental",
    name: "Árvore: Magia Elemental",
    description: "Feitiços de fogo, gelo e eletricidade",
    icon: "🔥",
    classId: "mago-arcano",
    nodes: [
      {
        id: "bola-fogo",
        name: "Bola de Fogo",
        description: "Lança uma bola de fogo em 2d6",
        level: 1,
        bonuses: ["2d6 dano de fogo", "Área de 2m"],
        icon: "🔥",
      },
      {
        id: "rajada-elemental",
        name: "Rajada Elemental",
        description: "Aumenta dano de feitiços em 1d6",
        level: 5,
        prerequisites: ["bola-fogo"],
        bonuses: ["+1d6 dano", "Todos os feitiços"],
        icon: "⚡",
      },
      {
        id: "avatar-elemental",
        name: "Avatar Elemental",
        description: "Se transforma em elemental por 3 turnos",
        level: 15,
        prerequisites: ["rajada-elemental"],
        bonuses: ["+3d6 dano", "Imunidade a fogo", "Usável 1x por dia"],
        icon: "🌪️",
      },
    ],
  },
  {
    id: "escudo-arcano",
    name: "Árvore: Escudo Arcano",
    description: "Proteção mágica e resistência",
    icon: "🛡️",
    classId: "mago-arcano",
    nodes: [
      {
        id: "escudo-basico",
        name: "Escudo Básico",
        description: "Proteção mágica +2 CA",
        level: 1,
        bonuses: ["+2 CA", "Dura 3 turnos"],
        icon: "✨",
      },
      {
        id: "escudo-aprimorado",
        name: "Escudo Aprimorado",
        description: "Absorve 1d8 dano",
        level: 4,
        prerequisites: ["escudo-basico"],
        bonuses: ["Absorve 1d8 dano", "+3 CA"],
        icon: "🔮",
      },
      {
        id: "escudo-supremo",
        name: "Escudo Supremo",
        description: "Absorve 3d8 dano e reflete 50%",
        level: 12,
        prerequisites: ["escudo-aprimorado"],
        bonuses: ["Absorve 3d8 dano", "Reflete 50% do dano"],
        icon: "👑",
      },
    ],
  },

  // Ciborgue/Engenheiro Trees
  {
    id: "modo-turbo",
    name: "Árvore: Modo Turbo",
    description: "Velocidade e força aumentadas",
    icon: "⚡",
    classId: "ciborgue-engenheiro",
    nodes: [
      {
        id: "turbo-basico",
        name: "Turbo Básico",
        description: "Aumenta velocidade por 2 turnos",
        level: 1,
        bonuses: ["+2 em movimento", "+1 ataque"],
        icon: "🏃",
      },
      {
        id: "turbo-avancado",
        name: "Turbo Avançado",
        description: "Aumenta força e velocidade",
        level: 5,
        prerequisites: ["turbo-basico"],
        bonuses: ["+2 Força", "+3 movimento", "+1d4 dano"],
        icon: "💨",
      },
      {
        id: "turbo-supremo",
        name: "Turbo Supremo",
        description: "Máxima potência por 1 turno",
        level: 12,
        prerequisites: ["turbo-avancado"],
        bonuses: ["+4 Força", "+5 movimento", "+2d6 dano", "Usável 1x por combate"],
        icon: "🚀",
      },
    ],
  },
  {
    id: "hacking-ciborgue",
    name: "Árvore: Hacking",
    description: "Invasão de sistemas e controle",
    icon: "💻",
    classId: "ciborgue-engenheiro",
    nodes: [
      {
        id: "hack-basico",
        name: "Hack Básico",
        description: "Desativa um dispositivo por 1 turno",
        level: 2,
        bonuses: ["Desativa dispositivo", "Alcance 10m"],
        icon: "🔓",
      },
      {
        id: "hack-avancado",
        name: "Hack Avançado",
        description: "Controla um dispositivo",
        level: 6,
        prerequisites: ["hack-basico"],
        bonuses: ["Controla dispositivo", "Dura 2 turnos"],
        icon: "🎮",
      },
      {
        id: "hack-supremo",
        name: "Hack Supremo",
        description: "Controla múltiplos dispositivos",
        level: 14,
        prerequisites: ["hack-avancado"],
        bonuses: ["Controla 3 dispositivos", "Dura 3 turnos"],
        icon: "🌐",
      },
    ],
  },

  // Fantasma/Sombra Trees
  {
    id: "intangibilidade",
    name: "Árvore: Intangibilidade",
    description: "Atravessar matéria e objetos",
    icon: "👻",
    classId: "fantasma-sombra",
    nodes: [
      {
        id: "passar-paredes",
        name: "Passar por Paredes",
        description: "Atravessa paredes por 1 turno",
        level: 1,
        bonuses: ["Atravessa objetos sólidos", "Dura 1 turno"],
        icon: "🚪",
      },
      {
        id: "forma-etera",
        name: "Forma Etérea",
        description: "Fica etéreo e imune a ataques físicos",
        level: 5,
        prerequisites: ["passar-paredes"],
        bonuses: ["Imune a dano físico", "Dura 2 turnos"],
        icon: "💫",
      },
      {
        id: "viagem-sombria",
        name: "Viagem Sombria",
        description: "Teletransporte entre sombras",
        level: 10,
        prerequisites: ["forma-etera"],
        bonuses: ["Teletransporte 20m", "Aparece atrás do inimigo"],
        icon: "🌑",
      },
    ],
  },
  {
    id: "ataque-fantasma",
    name: "Árvore: Ataque Fantasma",
    description: "Dano espectral e invulnerabilidade",
    icon: "⚔️",
    classId: "fantasma-sombra",
    nodes: [
      {
        id: "toque-gelado",
        name: "Toque Gelado",
        description: "Ataque causa 1d8 dano espectral",
        level: 1,
        bonuses: ["1d8 dano espectral", "Ignora 50% da armadura"],
        icon: "❄️",
      },
      {
        id: "grito-fantasma",
        name: "Grito Fantasma",
        description: "Emite onda sônica em cone de 9m",
        level: 4,
        prerequisites: ["toque-gelado"],
        bonuses: ["4d8 dano sônico", "Empurra 3m"],
        icon: "📢",
      },
      {
        id: "possessao",
        name: "Possessão",
        description: "Controla um inimigo por 1 turno",
        level: 11,
        prerequisites: ["grito-fantasma"],
        bonuses: ["Controla inimigo", "Dura 1 turno"],
        icon: "👹",
      },
    ],
  },

  // Predador/Assassino Trees
  {
    id: "ataque-furtivo",
    name: "Árvore: Ataque Furtivo",
    description: "Golpes críticos e dano aumentado",
    icon: "🔪",
    classId: "predador-assassino",
    nodes: [
      {
        id: "golpe-critico",
        name: "Golpe Crítico",
        description: "Crítico em 18-20 com dano dobrado",
        level: 1,
        bonuses: ["Crítico 18-20", "Dano dobrado"],
        icon: "💀",
      },
      {
        id: "assassinato",
        name: "Assassinato",
        description: "Ataque furtivo causa 3x dano",
        level: 5,
        prerequisites: ["golpe-critico"],
        bonuses: ["3x dano em ataques furtivos"],
        icon: "🗡️",
      },
      {
        id: "morte-instantanea",
        name: "Morte Instantânea",
        description: "Crítico mata inimigos com menos de 20 HP",
        level: 12,
        prerequisites: ["assassinato"],
        bonuses: ["Mata inimigos com menos de 20 HP", "Crítico 17-20"],
        icon: "💥",
      },
    ],
  },
  {
    id: "rastreamento",
    name: "Árvore: Rastreamento",
    description: "Seguir e localizar presas",
    icon: "🐾",
    classId: "predador-assassino",
    nodes: [
      {
        id: "rastrear-basico",
        name: "Rastrear Básico",
        description: "+3 em Rastreamento",
        level: 1,
        bonuses: ["+3 em Rastreamento", "Vê trilhas invisíveis"],
        icon: "👁️",
      },
      {
        id: "sentir-presa",
        name: "Sentir Presa",
        description: "Sente inimigos a 20m",
        level: 4,
        prerequisites: ["rastrear-basico"],
        bonuses: ["Detecta inimigos a 20m", "Visão no escuro"],
        icon: "👃",
      },
      {
        id: "caçador-supremo",
        name: "Caçador Supremo",
        description: "Não pode ser rastreado",
        level: 10,
        prerequisites: ["sentir-presa"],
        bonuses: ["Invisível para rastreamento", "Detecta tudo a 30m"],
        icon: "🦁",
      },
    ],
  },

  // Guardião de Suporte Trees
  {
    id: "aura-protetora",
    name: "Árvore: Aura Protetora",
    description: "Proteção de aliados",
    icon: "✨",
    classId: "guardiao-suporte",
    nodes: [
      {
        id: "aura-basica",
        name: "Aura Básica",
        description: "Aura de 6m concede +1 CA a aliados",
        level: 1,
        bonuses: ["+1 CA a aliados", "Raio 6m"],
        icon: "🌟",
      },
      {
        id: "aura-aprimorada",
        name: "Aura Aprimorada",
        description: "Aura concede +2 CA e resistência",
        level: 5,
        prerequisites: ["aura-basica"],
        bonuses: ["+2 CA", "Resistência a dano elemental"],
        icon: "💫",
      },
      {
        id: "aura-suprema",
        name: "Aura Suprema",
        description: "Aura concede +3 CA e imunidade",
        level: 12,
        prerequisites: ["aura-aprimorada"],
        bonuses: ["+3 CA", "Imunidade a efeitos negativos"],
        icon: "👑",
      },
    ],
  },
  {
    id: "cura-suporte",
    name: "Árvore: Cura",
    description: "Restauração e suporte",
    icon: "💚",
    classId: "guardiao-suporte",
    nodes: [
      {
        id: "cura-basica",
        name: "Cura Básica",
        description: "Cura 1d8 + Vontade",
        level: 1,
        bonuses: ["Cura 1d8 + Vontade", "Alcance 10m"],
        icon: "🩹",
      },
      {
        id: "cura-aprimorada",
        name: "Cura Aprimorada",
        description: "Cura 2d8 + Vontade",
        level: 4,
        prerequisites: ["cura-basica"],
        bonuses: ["Cura 2d8 + Vontade", "Cura 2 aliados"],
        icon: "💊",
      },
      {
        id: "ressurreicao",
        name: "Ressurreição",
        description: "Ressuscita um aliado com 50% HP",
        level: 15,
        prerequisites: ["cura-aprimorada"],
        bonuses: ["Ressuscita aliado", "50% HP máximo", "Usável 1x por dia"],
        icon: "✝️",
      },
    ],
  },
];
