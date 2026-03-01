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
  benefits?: string[];
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
    cost?: number;
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
      bonuses: ["+1 adicional em todos os atributos", "Acesso a uma habilidade exclusiva"],
      cost: 10
    },
    examples: ["Max Steel", "Randy Cunningham", "Os Thundermans"],
    subRaces: [
      {
        id: "inventor-nato",
        name: "Inventor Nato",
        description: "Cria dispositivos tecnológicos de uso único.",
        attributeBonus: "+2 em Inteligência",
        benefits: ["Cria 1 dispositivo por descanso longo", "Até 3 dispositivos ativos"]
      },
      {
        id: "poder-latente",
        name: "Poder Latente",
        description: "Possui um poder inato adormecido.",
        attributeBonus: "+2 em Vontade",
        benefits: ["Escolha 1: Telecinese, Resistência Física, Eletrocinese ou Regeneração"]
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
    weakness: "A depender da espécie, escolha ou defina com o mestre uma fraqueza relevante (Ex.: vulnerável a temperaturas extremas, sensível a luz solar, fraqueza a um elemento).",
    evolution: {
      name: "Forma Avançada",
      description: "O alienígena atinge o ápice de sua evolução",
      bonuses: ["+2 em um novo Atributo", "Ganha uma habilidade alienígena extra"],
      cost: 10
    },
    examples: ["Ben 10 e suas transformações"],
    subRaces: [
      {
        id: "marciano",
        name: "Marciano",
        description: "Alienígena com poderes mentais e metamorfose.",
        attributeBonus: "+2 em Inteligência",
        benefits: ["Telepatia (12m)", "Metamorfose Parcial"]
      },
      {
        id: "xenomorfo",
        name: "Xenomorfo",
        description: "Alienígena predador com garras e resistência.",
        attributeBonus: "+2 em Força",
        benefits: ["Garras Afiadas (+2 dano)", "Resistência a Venenos"]
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
    weakness: "Vulnerável a ataques que interfiram com tecnologia (Ex.: pulsos eletromagnéticos ou vírus cibernéticos).",
    evolution: {
      name: "Forma Apex",
      description: "Um ser de pura biomecânica com capacidades ampliadas",
      bonuses: ["+1 adicional em Força e Constituição", "Ganha uma nova arma biológica permanente"],
      cost: 10
    },
    examples: ["Mutante Rex"],
    subRaces: [
      {
        id: "adaptador",
        name: "Adaptador",
        description: "Pode escolher resistências temporárias.",
        attributeBonus: "+2 em Resistência",
        benefits: ["Resistência temporária (Fogo, Frio, etc)", "Membros Modulares"]
      },
      {
        id: "artifice",
        name: "Artífice",
        description: "Especialista em reparos e regeneração acelerada.",
        attributeBonus: "+2 em Inteligência",
        benefits: ["Regeneração Acelerada (7 PV)", "Sistemas de Reparos Internos"]
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
        description: "Pode atravessar paredes, objetos sólidos e armadilhas sem sofrer efeitos, até numero de uso de acordo com a proficiência"
      },
      {
        name: "Voo",
        description: "Pode se mover livremente no ar"
      },
      {
        name: "Grito Fantasma",
        description: "Pode emitir uma onda sônica destrutiva. Alcance: Cone de 9m. Efeito: Causa 4d8 de dano sônico e empurra criaturas 3 metros."
      }
    ],
    weakness: "Vulnerável a equipamentos de contenção espectral, energia ectoplasmática ou tecnologia anti-fantasma ou ferro",
    evolution: {
      name: "Forma Espectral Suprema",
      description: "Controla completamente seus poderes espectrais",
      bonuses: ["Dano do Grito Fantasma aumenta para 6d8", "Pode manter Intangibilidade por até 1 minuto contínuo"],
      cost: 10
    },
    examples: ["Danny Phantom"],
    subRaces: [
      {
        id: "poltergeist",
        name: "Poltergeist",
        description: "Manipula objetos à distância.",
        attributeBonus: "+2 em Vontade",
        benefits: ["Manipulação à Distância (10kg/12m)", "Assombração (+2 Intimidação)"]
      },
      {
        id: "sombrio",
        name: "Sombrio",
        description: "Mestre da furtividade e invisibilidade.",
        attributeBonus: "+2 em Agilidade",
        benefits: ["Invisibilidade Temporária", "Afinidade com a Escuridão"]
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
        description: "Pode lançar uma rajada de elemental: Alcance: Cone de 6 metros, Dano: 4d6 do elemento escolhido."
      }
    ],
    weakness: "Orgulho dracônico: sofre desvantagem em testes sociais quando insultado ou provocado. Vulnerável ao elemento oposto.",
    evolution: {
      name: "Forma Dracônica Completa",
      description: "Transforma-se totalmente em um dragão",
      bonuses: ["+2 em Força adicional", "Deslocamento de voo dobrado", "Sopro Dracônico aumenta para 6d6"],
      cost: 10
    },
    examples: ["Jake Long"],
    subRaces: [
      {
        id: "serpentino",
        name: "Dragão Serpentino",
        description: "Ágil e fluido como uma serpente.",
        attributeBonus: "+2 em Agilidade",
        benefits: ["Corpo Ágil (+2 Acrobacia)", "Sopro Serpentino (9m)", "Movimento Fluído"]
      },
      {
        id: "sinaptico",
        name: "Dragão Sináptico",
        description: "Conexão cósmica e poderes de plasma.",
        attributeBonus: "+2 em Inteligência",
        benefits: ["Manipulação Estelar (4d10)", "Consciência Cósmica", "Armadura de Plasma"]
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
      details: "Inteligência e Resistência aprimoradas ciberneticamente"
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
        description: "Pode consertar seu corpo utilizando ferramentas ou sistemas de reparo. Recupera 5 PV por minuto fora de combate."
      }
    ],
    weakness: "Vulnerável a pulsos eletromagnéticos (PEM) e hacks — pode ficar Paralisado por 1 turno.",
    evolution: {
      name: "Upgrade de Última Geração",
      description: "Melhora seus sistemas com tecnologia de ponta",
      bonuses: ["+1 adicional em Inteligência e Resistência", "Ganha um arma ou sistema cibernético exclusivo"],
      cost: 10
    },
    examples: ["Titã Simbiônico", "Max Steel em modo cibernético"],
    subRaces: [
      {
        id: "ia-autonoma",
        name: "IA Autônoma",
        description: "Consciência digital capaz de se projetar em redes.",
        attributeBonus: "+2 em Inteligência",
        benefits: ["Projeção em Rede", "Resistência Cibernética"]
      },
      {
        id: "exterminador",
        name: "Exterminador",
        description: "Otimizado para combate letal e resistência física.",
        attributeBonus: "+2 em Força",
        benefits: ["Aprimoramento de Combate (+2 ataque)", "Resistência Mecânica"]
      }
    ]
  },
  {
    id: "seres-simbiontes",
    name: "Seres com Simbiontes",
    icon: "🎃",
    description: "Hospedeiros de entidades simbióticas que concedem habilidades físicas aumentadas e adaptação rápida.",
    attributes: {
      bonus: "+2 em Poder e Vontade",
      details: "Poder e Vontade aumentados pela ligação simbiótica"
    },
    specialAbilities: [
      {
        name: "Ligação Simbiótica",
        description: "+5 PV extras e +1 bônus em todos os ataques físicos"
      },
      {
        name: "Adaptação Rápida",
        description: "Pode mudar de forma para melhorar ataque ou defesa (+2) por 1 turno. Usável 3 vezes por descanso."
      },
      {
        name: "Armas Naturais",
        description: "Pode criar lâminas, garras ou tentáculos (dano 2d8 + mod)"
      }
    ],
    weakness: "Dependente do simbionte: se a ligação for cortada (fogo, som forte), sofre desvantagem em todas as ações.",
    evolution: {
      name: "Forma de Fusão Suprema",
      description: "A ligação simbiótica atinge o auge",
      bonuses: ["+2 adicionais em Poder e Vontade", "Ganha uma habilidade exclusiva do simbionte"],
      cost: 10
    },
    examples: ["Titã Simbiônico"],
    subRaces: [
      {
        id: "simbioide-sombrio",
        name: "Simbioide Sombrio",
        description: "Especialista em furtividade e voo.",
        attributeBonus: "+2 em Agilidade",
        benefits: ["Asas de Trevas", "Camuflagem Sombria"]
      },
      {
        id: "simbioide-energetico",
        name: "Simbioide Energético",
        description: "Velocidade e reflexos sobre-humanos.",
        attributeBonus: "+2 em Destreza",
        benefits: ["Aprimoramento Neural", "Velocidade Sobrenatural", "Ataque Acelerado"]
      }
    ]
  },
  {
    id: "magos-sobrenaturais",
    name: "Magos/Sobrenaturais",
    icon: "🎩",
    description: "Mestres das artes arcanas capazes de lançar feitiços e preparar encantamentos rituais.",
    attributes: {
      bonus: "+2 em Inteligência e Carisma",
      details: "Inteligência e Carisma aumentados para manipulação mágica"
    },
    specialAbilities: [
      {
        name: "Magia Inata",
        description: "Pode lançar feitiços básicos sem custo adicional de energia"
      },
      {
        name: "Resistência à Magia",
        description: "Recebe +2 na Defesa (CA) contra ataques mágicos e efeitos arcanos"
      },
      {
        name: "Ritualista",
        description: "Pode preparar 1 encantamento especial antes de cada batalha que dura até 10 minutos."
      }
    ],
    weakness: "Vulnerável a efeitos que bloqueiam ou anulam magia (zonas anti-magia, campos de contenção mística).",
    evolution: {
      name: "Arquimago",
      description: "Um mestre absoluto das artes arcanas",
      bonuses: ["+1 adicional em Inteligência e Carisma", "Pode preparar 2 encantamentos especiais"],
      cost: 10
    },
    examples: ["Feiticeiros"],
    subRaces: [
      {
        id: "feiticeiro",
        name: "Feiticeiro",
        description: "Especialista em personalização de magias.",
        attributeBonus: "+2 em Inteligência",
        benefits: ["Dom da Aprendizagem", "Estudo Acelerado", "Versatilidade Mágica"]
      },
      {
        id: "encantador",
        name: "Encantador",
        description: "Mestre em imbuir itens com poder mágico.",
        attributeBonus: "+2 em Carisma",
        benefits: ["Encantamento Temporário", "Forjador Arcano", "Reforço Duradouro"]
      }
    ]
  },
  {
    id: "criaturas-geneticas",
    name: "Criaturas Genéticas",
    icon: "👹",
    description: "Experimentos científicos com mutações únicas, camuflagem biológica e instintos predatórios.",
    attributes: {
      bonus: "+2 em Resistência e Força",
      details: "Resistência e Força aumentadas por modificação genética"
    },
    specialAbilities: [
      {
        name: "Habilidades Inusitadas",
        description: "Escolha 1 mutação única: Visão térmica, Braços extras, Garras retráteis ou Carapaça protetora (+1 CA)"
      },
      {
        name: "Camuflagem Biológica",
        description: "Pode alterar aparência para se esconder, recebendo vantagem em Furtividade em ambientes compatíveis"
      },
      {
        name: "Instinto de Sobrevivência",
        description: "Sempre age primeiro no primeiro turno de combate, graças ao seu reflexo predatório"
      }
    ],
    weakness: "Vulnerável a produtos químicos experimentais ou soro supressor que enfraquece mutações.",
    evolution: {
      name: "Forma Mutante Suprema",
      description: "Sua biologia se aperfeiçoa ao nível máximo",
      bonuses: ["+1 adicional em Força e Resistência", "Nova mutação à escolha"],
      cost: 10
    },
    examples: ["Criaturas dos Sábados Secretos"],
    subRaces: [
      {
        id: "hibrido-animal",
        name: "Híbrido Animal",
        description: "Transforma partes do corpo para ganhar habilidades animais.",
        attributeBonus: "+2 em Força",
        benefits: ["Transformação Parcial (Garras, Visão, etc)", "Instinto Selvagem"]
      },
      {
        id: "regenerador",
        name: "Regenerador",
        description: "Biologia focada em cura extrema.",
        attributeBonus: "+2 em Resistência",
        benefits: ["Regeneração Acelerada (5 PV)", "Autocura Concentrada", "Resistência Natural"]
      }
    ]
  }
];
