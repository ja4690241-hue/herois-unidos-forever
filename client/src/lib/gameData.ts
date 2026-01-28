// Game data for Heróis Unidos 3.0 RPG System

export interface Ability {
  name: string;
  description: string;
  effect?: string;
}

export interface SubRace {
  id: string;
  name: string;
  description: string;
  attributeBonus: string;
}

export interface Race {
  id: string;
  name: string;
  icon: string;
  description: string;
  attributes: {
    bonus: string;
    details: string;
  };
  specialAbilities: Ability[];
  weakness: string;
  evolution?: {
    name: string;
    description: string;
    bonuses: string[];
  };
  examples: string[];
  subRaces?: SubRace[];
}

export const races: Race[] = [
  {
    id: "humanos-aprimorados",
    name: "Humanos Aprimorados",
    icon: "💪",
    description: "Humanos que transcenderam seus limites através de treinamento intensivo ou modificações genéticas.",
    attributes: {
      bonus: "+2 em Carisma e Resistência",
      details: "Cada Raça concede +2 em dois Qualquer atributo"
    },
    specialAbilities: [
      {
        name: "Treinamento Intensivo",
        description: "+2 em uma Perícia à sua escolha ao criar a ficha"
      },
      {
        name: "Resistência Humana",
        description: "Recebe +5 pontos de vida (PV) extras permanentemente"
      },
      {
        name: "Superação",
        description: "1 vez por dia, pode refazer um teste falho, seja de ataque, resistência ou perícia"
      }
    ],
    weakness: "A vulnerabilidade depende do tipo de aprimoramento (tecnologia vulnerável a EMP, mutação instável, etc.)",
    evolution: {
      name: "Humano Supremo",
      description: "Amplifica suas capacidades físicas ao extremo",
      bonuses: ["+1 adicional em todos os atributos", "Acesso a uma habilidade exclusiva"]
    },
    examples: ["Max Steel", "Randy Cunningham", "Os Thundermans"],
    subRaces: [
      {
        id: "humano-soldado",
        name: "Soldado Aprimorado",
        description: "Treinamento militar intensivo com foco em combate",
        attributeBonus: "+3 em Força, +2 em Resistência"
      },
      {
        id: "humano-tecnico",
        name: "Técnico Aprimorado",
        description: "Especializado em tecnologia e engenharia",
        attributeBonus: "+3 em Inteligência, +2 em Destreza"
      },
      {
        id: "humano-puro",
        name: "Humano Puro",
        description: "Humano natural sem modificações especiais",
        attributeBonus: "+1 em todos os atributos"
      }
    ]
  },
  {
    id: "alienigenas",
    name: "Alienígenas",
    icon: "👽",
    description: "Seres de origem extraterrestre com capacidades adaptáveis e poderes inatos únicos.",
    attributes: {
      bonus: "+2 em um Atributo à escolha, +1 em outro Atributo à escolha",
      details: "Escolha dois atributos diferentes para potencializar"
    },
    specialAbilities: [
      {
        name: "Adaptabilidade Extraterrestre",
        description: "Não sofre penalidades ao respirar ou sobreviver em ambientes hostis (espaço, fundo do mar, planetas tóxicos)"
      },
      {
        name: "Resistência Alienígena",
        description: "+2 em testes de resistência contra efeitos físicos ou mentais"
      },
      {
        name: "Poder Inato",
        description: "Escolha 1 habilidade especial que reflita a natureza da sua espécie (ex.: telepatia, garras naturais, asas, camuflagem, etc.)"
      }
    ],
    weakness: "A depender da espécie, escolha ou defina com o mestre uma fraqueza relevante (vulnerável a temperaturas extremas, sensível a luz solar, fraqueza a um elemento)",
    evolution: {
      name: "Forma Avançada",
      description: "O alienígena atinge o ápice de sua evolução",
      bonuses: ["+2 em um novo Atributo", "Ganha uma habilidade alienígena extra"]
    },
    examples: ["Ben 10 e suas transformações"],
    subRaces: [
      {
        id: "alienigena-reptiliano",
        name: "Reptiliano",
        description: "Alienígena com características reptilianas",
        attributeBonus: "+2 em Força, +2 em Destreza"
      },
      {
        id: "alienigena-telepatico",
        name: "Telepático",
        description: "Alienígena com poderes telepáticos",
        attributeBonus: "+3 em Inteligência, +1 em Vontade"
      },
      {
        id: "alienigena-puro",
        name: "Alienígena Puro",
        description: "Alienígena genérico sem especialização",
        attributeBonus: "+2 em Atributo à escolha"
      }
    ]
  },
  {
    id: "mutantes-biomecânicos",
    name: "Mutantes Biomecânicos",
    icon: "⚙️",
    description: "Seres que combinam biologia com tecnologia, capazes de regeneração e mutação rápida.",
    attributes: {
      bonus: "+2 em Força e Resistência",
      details: "Força e Resistência aumentadas significativamente"
    },
    specialAbilities: [
      {
        name: "Regeneração",
        description: "Cura 5 PV por turno"
      },
      {
        name: "Criação Biomecânica",
        description: "Pode criar armas ou armaduras biológicas"
      },
      {
        name: "Mutação Rápida",
        description: "1 por dia, pode adaptar seu corpo para ganhar uma nova habilidade temporária por um 1 minuto"
      }
    ],
    weakness: "Vulnerável a ataques que interfiram com tecnologia (Ex.: pulsos eletromagnéticos ou vírus cibernéticos)",
    evolution: {
      name: "Forma Apex",
      description: "Um ser de pura biomecânica com capacidades ampliadas",
      bonuses: ["+1 adicional em Força e Constituição", "Ganha uma nova arma biológica permanente"]
    },
    examples: ["Mutante Rex"],
    subRaces: [
      {
        id: "biomecânico-combate",
        name: "Guerreiro Biomecânico",
        description: "Otimizado para combate corpo a corpo",
        attributeBonus: "+3 em Força, +1 em Resistência"
      },
      {
        id: "biomecânico-defesa",
        name: "Protetor Biomecânico",
        description: "Especializado em defesa e proteção",
        attributeBonus: "+2 em Resistência, +2 em Constituição"
      },
      {
        id: "biomecânico-puro",
        name: "Mutante Puro",
        description: "Mutante biomecânico genérico",
        attributeBonus: "+2 em Força e Resistência"
      }
    ]
  },
  {
    id: "fantasmas-espiritos",
    name: "Fantasmas/Espíritos",
    icon: "👻",
    description: "Seres espectrais que podem atravessar matéria e emitir ataques sônicos devastadores.",
    attributes: {
      bonus: "+2 em Agilidade e Vontade",
      details: "Agilidade e Vontade aumentadas para combate etéreo"
    },
    specialAbilities: [
      {
        name: "Intangibilidade",
        description: "Pode atravessar paredes, objetos sólidos e armadilhas sem sofrer efeitos, até número de uso de acordo com a proficiência"
      },
      {
        name: "Voo",
        description: "Pode se mover livremente no ar"
      },
      {
        name: "Grito Fantasma",
        description: "Pode emitir uma onda sônica destrutiva. Alcance: Cone de 9m. Efeito: Causa 4d8 de dano sônico e empurra criaturas 3 metros"
      }
    ],
    weakness: "Vulnerável a equipamentos de contenção espectral, energia ectoplasmática ou tecnologia anti-fantasma ou ferro",
    evolution: {
      name: "Forma Espectral Suprema",
      description: "Controla completamente seus poderes espectrais",
      bonuses: ["Dano do Grito Fantasma aumenta para 6d8", "Pode manter Intangibilidade por até 1 minuto contínuo"]
    },
    examples: ["Danny Phantom"],
    subRaces: [
      {
        id: "fantasma-ofensivo",
        name: "Espírito Ofensivo",
        description: "Especializado em ataques espectrais",
        attributeBonus: "+2 em Poder, +2 em Agilidade"
      },
      {
        id: "fantasma-defensivo",
        name: "Espírito Defensivo",
        description: "Especializado em proteção e intangibilidade",
        attributeBonus: "+2 em Vontade, +2 em Resistência"
      },
      {
        id: "fantasma-puro",
        name: "Fantasma Puro",
        description: "Fantasma genérico equilibrado",
        attributeBonus: "+2 em Agilidade e Vontade"
      }
    ]
  },
  {
    id: "dragoes-hibridos",
    name: "Dragões/Híbridos Dracônicos",
    icon: "🐉",
    description: "Seres com sangue dracônico que podem se transformar parcialmente e lançar rajadas elementais.",
    attributes: {
      bonus: "+2 em Força e Poder",
      details: "Força e Poder dracônicos aumentados"
    },
    specialAbilities: [
      {
        name: "Transformação Parcial",
        description: "Pode ativar partes dracônicas (Ex.: garras, asas, cauda) por até 1 minuto. Enquanto ativo: Garras: dano de (dano 2d8 + mod cortante). Asas: deslocamento de voo igual ao terrestre"
      },
      {
        name: "Resistência Elemental",
        description: "Escolha um elemento (fogo, gelo, raio etc) e ganhe resistência contra ele"
      },
      {
        name: "Sopro Dracônico",
        description: "Pode lançar uma rajada de elemental. Alcance: Cone de 6 metros. Dano: 4d6 do elemento escolhido. Teste de resistência: Agilidade (CD baseada no Poder) para metade do dano"
      }
    ],
    weakness: "Orgulho dracônico: sofre desvantagem em testes de resistência contra provocações ou insultos",
    evolution: {
      name: "Forma Dracônica Completa",
      description: "Transforma-se totalmente em um dragão",
      bonuses: ["+2 em Força adicional", "Deslocamento de voo dobrado", "Sopro Dracônico aumenta para 6d6"]
    },
    examples: ["Jake Long"],
    subRaces: [
      {
        id: "dragao-fogo",
        name: "Dragão de Fogo",
        description: "Dragão especializado em fogo",
        attributeBonus: "+3 em Poder, +1 em Força"
      },
      {
        id: "dragao-gelo",
        name: "Dragão de Gelo",
        description: "Dragão especializado em gelo",
        attributeBonus: "+2 em Inteligência, +2 em Vontade"
      },
      {
        id: "dragao-puro",
        name: "Dragão Puro",
        description: "Dragão genérico equilibrado",
        attributeBonus: "+2 em Força e Poder"
      }
    ]
  },
  {
    id: "ciborgues-androides",
    name: "Ciborgues/Androides",
    icon: "🤖",
    description: "Seres cibernéticos com corpos de aço e sistemas avançados de análise de dados.",
    attributes: {
      bonus: "+2 em Inteligência e Resistência",
      details: "Inteligência e Resistência mecânicas aumentadas"
    },
    specialAbilities: [
      {
        name: "Corpo de Aço",
        description: "Resistência a dano físico (+2 na Defesa)"
      },
      {
        name: "Sistemas Avançados",
        description: "Pode armazenar e analisar dados rapidamente, obtendo vantagem em testes de Tecnologia e Investigação"
      },
      {
        name: "Regeneração Mecânica",
        description: "Pode consertar seu corpo utilizando ferramentas ou sistemas de reparo. Recupera 5 PV por minuto fora de combate ou como ação ao usar kits tecnológicos"
      }
    ],
    weakness: "Vulnerável a pulsos eletromagnéticos (EMP) ou vírus cibernéticos que podem desativar seus sistemas",
    evolution: {
      name: "Upgrade de Última Geração",
      description: "Melhora seus sistemas com tecnologia de ponta",
      bonuses: ["+1 adicional em Inteligência e Resistência", "Ganha um arma ou sistema cibernético exclusivo (Ex.: canhão embutido, propulsores, camuflagem óptica)"]
    },
    examples: ["Titã Simbiónico", "Max Steel em modo cibernético"],
    subRaces: [
      {
        id: "ciborgue-combate",
        name: "Ciborgue de Combate",
        description: "Otimizado para combate",
        attributeBonus: "+2 em Força, +2 em Inteligência"
      },
      {
        id: "ciborgue-suporte",
        name: "Ciborgue de Suporte",
        description: "Especializado em apoio e análise",
        attributeBonus: "+3 em Inteligência, +1 em Carisma"
      },
      {
        id: "ciborgue-puro",
        name: "Androide Puro",
        description: "Androide genérico equilibrado",
        attributeBonus: "+2 em Inteligência e Resistência"
      }
    ]
  },
  {
    id: "seres-simbiontes",
    name: "Seres com Simbiontes",
    icon: "🎃",
    description: "Seres em fusão com organismos simbióticos que concedem poderes e adaptações únicas.",
    attributes: {
      bonus: "+2 em Poder e Vontade",
      details: "Poder e Vontade aumentados pela ligação simbiótica"
    },
    specialAbilities: [
      {
        name: "Ligação Simbiótica",
        description: "+5 PV extras. +1 bônus em todos os ataques físicos"
      },
      {
        name: "Adaptação Rápida",
        description: "Pode mudar de forma para: Melhorar ataque → recebe +2 de dano por 1 turno. Melhorar defesa → recebe +2 na Defesa (CA) por 1 turno. Pode usar essa adaptação até 3 vezes por descanso"
      },
      {
        name: "Armas Naturais",
        description: "Pode criar lâminas, garras tentáculos (dano 2d8 + mod)"
      }
    ],
    weakness: "Vulnerável a ataques que separem o hospedeiro do simbionte ou interfiram na ligação",
    evolution: {
      name: "Forma de Fusão Suprema",
      description: "A ligação simbiótica atinge o auge, tornando o ser praticamente indivisível",
      bonuses: ["+2 adicionais em Poder e Vontade", "Ganha uma habilidade exclusiva do simbionte (Ex.: tentáculos, explosão de energia, forma gigante)"]
    },
    examples: ["Titã Simbiónico"],
    subRaces: [
      {
        id: "simbionte-agressivo",
        name: "Simbionte Agressivo",
        description: "Simbionte focado em ataque",
        attributeBonus: "+3 em Poder, +1 em Força"
      },
      {
        id: "simbionte-defensivo",
        name: "Simbionte Defensivo",
        description: "Simbionte focado em defesa",
        attributeBonus: "+2 em Vontade, +2 em Resistência"
      },
      {
        id: "simbionte-puro",
        name: "Simbionte Puro",
        description: "Simbionte genérico equilibrado",
        attributeBonus: "+2 em Poder e Vontade"
      }
    ]
  },
  {
    id: "magos-sobrenaturais",
    name: "Magos/Sobrenaturais",
    icon: "🎩",
    description: "Mestres das artes arcanas com acesso a feitiços e encantamentos especiais.",
    attributes: {
      bonus: "+2 em Inteligência e Carisma",
      details: "Inteligência e Carisma mágicos aumentados"
    },
    specialAbilities: [
      {
        name: "Magia Inata",
        description: "Pode lançar feitiços básicos (como criar luz, mover objetos pequenos ou detectar magia) sem custo adicional de energia. (Efeito e lista a definir com o mestre)"
      },
      {
        name: "Resistência à Magia",
        description: "Recebe +2 na Defesa (CA) contra ataques mágicos e efeitos arcanos"
      },
      {
        name: "Ritualista",
        description: "Pode preparar 1 encantamento especial antes de cada batalha que dura até 10 minutos ou até ser usado. Exemplo: escudo mágico (+2 CA), arma encantada (+1 dano) ou bênção (+2 em um teste). Pode ser personalizado conforme a especialização mágica"
      }
    ],
    weakness: "Vulnerável a anti-magia ou campos que suprimem poderes arcanos",
    evolution: {
      name: "Arquimago",
      description: "Um mestre das artes arcanas",
      bonuses: ["+1 adicional em Inteligência e Carisma", "Pode preparar 2 encantamentos especiais antes de cada batalha"]
    },
    examples: ["Feiticeiros"],
    subRaces: [
      {
        id: "mago-fogo",
        name: "Mago de Fogo",
        description: "Especialista em magia de fogo",
        attributeBonus: "+2 em Inteligência, +2 em Poder"
      },
      {
        id: "mago-gelo",
        name: "Mago de Gelo",
        description: "Especialista em magia de gelo",
        attributeBonus: "+2 em Inteligência, +2 em Vontade"
      },
      {
        id: "mago-puro",
        name: "Mago Puro",
        description: "Mago genérico equilibrado",
        attributeBonus: "+2 em Inteligência e Carisma"
      }
    ]
  },
  {
    id: "criaturas-geneticas",
    name: "Criaturas Genéticas/Experimentos Científicos",
    icon: "👹",
    description: "Seres criados através de engenharia genética com mutações únicas e instinto de sobrevivência apurado.",
    attributes: {
      bonus: "+2 em Resistência e Força",
      details: "Resistência e Força genéticas aumentadas"
    },
    specialAbilities: [
      {
        name: "Habilidades Inusitadas",
        description: "Escolha 1 mutação única ao criar o personagem, como: Visão térmica. Braços extras. Garras retráteis. Carapaça protetora (+1 CA). (ou outra, com aprovação do mestre)"
      },
      {
        name: "Camuflagem Biológica",
        description: "Pode alterar sua aparência para se esconder, recebendo vantagem em testes de Furtividade quando em ambiente compatível (Ex.: floresta, esgoto, laboratório)"
      },
      {
        name: "Instinto de Sobrevivência",
        description: "Sempre age primeiro no primeiro turno de combate, independentemente da iniciativa, graças ao seu reflexo predatório"
      }
    ],
    weakness: "Vulnerável a agentes químicos ou biológicos que afetam sua genética",
    evolution: {
      name: "Forma Mutante Suprema",
      description: "Sua biologia se aperfeiçoa",
      bonuses: ["+1 adicional em Força e Resistência", "Nova mutação à escolha"]
    },
    examples: ["Criaturas dos Sábados Secretos"],
    subRaces: [
      {
        id: "criatura-predadora",
        name: "Predadora",
        description: "Criatura otimizada para caça",
        attributeBonus: "+3 em Força, +1 em Destreza"
      },
      {
        id: "criatura-defensora",
        name: "Defensora",
        description: "Criatura otimizada para defesa",
        attributeBonus: "+2 em Resistência, +2 em Constituição"
      },
      {
        id: "criatura-pura",
        name: "Criatura Pura",
        description: "Criatura genérica equilibrada",
        attributeBonus: "+2 em Resistência e Força"
      }
    ]
  }
];

export interface Villain {
  id: string;
  name: string;
  title: string;
  level: number;
  threat: string;
  hp: number;
  ca: number;
  attacks: {
    name: string;
    bonus: number;
    damage: string;
    effect?: string;
  }[];
  abilities: Ability[];
  weakness: string;
  quote: string;
}

export const villains: Villain[] = [
  {
    id: "lord-cronox",
    name: "LORD CRONOX",
    title: "MESTRE DO TEMPO",
    level: 15,
    threat: "Ameaça Cósmica",
    hp: 200,
    ca: 18,
    attacks: [
      {
        name: "Lança Temporal",
        bonus: 10,
        damage: "3d12 de dano temporal"
      },
      {
        name: "Explosão de Estase",
        bonus: 0,
        damage: "Todos no raio de 10m fazem teste de Reflexos CD 18 ou ficam paralisados por 1d4 turnos",
        effect: "Área de efeito"
      }
    ],
    abilities: [
      {
        name: "Rebobinar",
        description: "Uma vez por turno, pode refazer um ataque ou esquivar automaticamente"
      },
      {
        name: "Parar o Tempo",
        description: "1x por combate, todos os outros ficam congelados por 1 turno"
      },
      {
        name: "Visão do Futuro",
        description: "+5 em testes de percepção e reflexos"
      }
    ],
    weakness: "Se for preso em um loop temporal, perde todas as ações",
    quote: "O tempo é meu brinquedo... e vocês são apenas poeira na eternidade!"
  },
  {
    id: "general-onslaught",
    name: "GENERAL ONSLAUGHT",
    title: "O EXTERMINADOR DE MUNDOS",
    level: 20,
    threat: "Ameaça Extrema",
    hp: 400,
    ca: 22,
    attacks: [
      {
        name: "Espada de Aniquilação",
        bonus: 12,
        damage: "4d12 de dano energético"
      },
      {
        name: "Canhão de Destroços",
        bonus: 10,
        damage: "3d10 em área de 10m",
        effect: "Área de efeito"
      }
    ],
    abilities: [
      {
        name: "Imortalidade Parcial",
        description: "Regenera 20 HP por turno"
      },
      {
        name: "Aura de Medo",
        description: "Criaturas de nível 10 ou inferior fazem teste de Vontade CD 19 ou ficam apavoradas"
      },
      {
        name: "Golpe Supersônico",
        description: "Se atacar depois de se mover, adiciona +2d10 ao dano"
      }
    ],
    weakness: "Orgulho excessivo; se desafiado a um duelo, pode aceitar e ignorar aliados",
    quote: "Apenas os fortes merecem existir. O resto deve ser apagado da história!"
  },
  {
    id: "virus-prime",
    name: "VIRUS PRIME",
    title: "O DESTRUIDOR DIGITAL",
    level: 17,
    threat: "Ameaça Global",
    hp: 150,
    ca: 16,
    attacks: [
      {
        name: "Hacker Total",
        bonus: 0,
        damage: "Controla qualquer sistema em um raio de 30m",
        effect: "Controle de tecnologia"
      },
      {
        name: "Rajada de Dados Corruptos",
        bonus: 8,
        damage: "3d8 de dano elétrico"
      },
      {
        name: "Assumir Controle",
        bonus: 0,
        damage: "Pode tomar o corpo de um inimigo que falhe em um teste de Vontade CD 18",
        effect: "Possessão"
      }
    ],
    abilities: [
      {
        name: "Corromper Tecnologia",
        description: "Desativa qualquer equipamento em um raio de 20m"
      },
      {
        name: "Regeneração Digital",
        description: "Se estiver em um ambiente conectado à internet, regenera 10 HP por turno"
      },
      {
        name: "Duplicação de Código",
        description: "Pode criar cópias ilusórias para confundir inimigos"
      }
    ],
    weakness: "Vulnerável a ataques mágicos ou desativação completa de sistemas eletrônicos",
    quote: "Seu mundo depende da tecnologia... e agora, ele pertence a mim!"
  }
];

export interface CombatRule {
  name: string;
  description: string;
  example?: string;
}

export const combatRules: CombatRule[] = [
  {
    name: "Classe de Armadura (CA)",
    description: "Representa a dificuldade de acertar um personagem. Quanto maior, mais difícil de acertar.",
    example: "CA 15 significa que o atacante precisa de um resultado de 15 ou mais no d20 para acertar"
  },
  {
    name: "Pontos de Vida (PV)",
    description: "Representam a saúde do personagem. Quando chegam a 0, o personagem fica inconsciente.",
    example: "Um personagem com 50 PV pode sofrer 50 pontos de dano antes de cair"
  },
  {
    name: "Testes de Resistência",
    description: "Usados para resistir a efeitos como paralisia, veneno ou magia.",
    example: "Teste de Resistência CD 18 para evitar ser paralisado por 1d4 turnos"
  },
  {
    name: "Dano em Dados",
    description: "O dano é representado por dados. d6 = 1-6, d8 = 1-8, d10 = 1-10, d12 = 1-12",
    example: "2d8 + 3 significa rolar dois dados de 8 lados e adicionar 3 ao resultado"
  },
  {
    name: "Alcance",
    description: "Define até onde um ataque pode chegar. Cone, raio ou linha.",
    example: "Cone de 9m significa um ataque em forma de cone com 9 metros de alcance"
  }
];
