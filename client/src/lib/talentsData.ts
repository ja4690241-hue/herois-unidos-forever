export interface Talent {
  id: string;
  name: string;
  description: string;
  type: "ativo" | "passivo";
  cost: number;
  effect: string;
  level: number;
  class: string;
}

export interface Passive {
  id: string;
  name: string;
  description: string;
  effect: string;
  bonus: string[];
}

export interface Background {
  id: string;
  name: string;
  emoji: string;
  description: string;
  skills: string[];
  equipment: string[];
  specialAbility: string;
  abilityDescription: string;
}

export const talents: Talent[] = [
  // Lutador
  {
    id: "lutador-golpe-poderoso",
    name: "Golpe Poderoso",
    description: "Desferir um golpe devastador com toda sua força",
    type: "ativo",
    cost: 5,
    effect: "Causa 2d8 + FOR de dano",
    level: 1,
    class: "Lutador",
  },
  {
    id: "lutador-contra-ataque",
    name: "Contra-Ataque",
    description: "Responder imediatamente a um ataque inimigo",
    type: "ativo",
    cost: 3,
    effect: "Realiza um ataque imediato quando é atingido",
    level: 2,
    class: "Lutador",
  },
  {
    id: "lutador-resistencia",
    name: "Resistência",
    description: "Aumentar resistência física",
    type: "passivo",
    cost: 0,
    effect: "+2 em testes de resistência",
    level: 1,
    class: "Lutador",
  },
  {
    id: "lutador-furia",
    name: "Fúria Guerreira",
    description: "Entrar em fúria para aumentar dano",
    type: "ativo",
    cost: 8,
    effect: "Aumenta dano em 50% por 3 turnos",
    level: 3,
    class: "Lutador",
  },

  // Ágil
  {
    id: "agil-ataque-rapido",
    name: "Ataque Rápido",
    description: "Realizar dois ataques em um turno",
    type: "ativo",
    cost: 4,
    effect: "Realiza 2 ataques com -2 de penalidade",
    level: 1,
    class: "Ágil",
  },
  {
    id: "agil-esquiva",
    name: "Esquiva Acrobática",
    description: "Desviar de ataques com acrobacias",
    type: "ativo",
    cost: 3,
    effect: "+3 em testes de esquiva",
    level: 1,
    class: "Ágil",
  },
  {
    id: "agil-reflexos",
    name: "Reflexos Aguçados",
    description: "Aumentar reflexos naturalmente",
    type: "passivo",
    cost: 0,
    effect: "+1 em iniciativa e CA",
    level: 1,
    class: "Ágil",
  },
  {
    id: "agil-sombra",
    name: "Movimento Sombra",
    description: "Desaparecer e reaparecer em outro local",
    type: "ativo",
    cost: 6,
    effect: "Teleporta até 30 pés e fica invisível por 1 turno",
    level: 3,
    class: "Ágil",
  },

  // Blaster
  {
    id: "blaster-explosao",
    name: "Explosão de Energia",
    description: "Lançar uma onda de energia explosiva",
    type: "ativo",
    cost: 6,
    effect: "Causa 3d6 de dano em área de 15 pés",
    level: 1,
    class: "Blaster",
  },
  {
    id: "blaster-raio",
    name: "Raio Focado",
    description: "Disparar um raio de energia concentrado",
    type: "ativo",
    cost: 4,
    effect: "Causa 2d8 de dano a um alvo",
    level: 1,
    class: "Blaster",
  },
  {
    id: "blaster-escudo",
    name: "Escudo de Energia",
    description: "Criar um escudo protetor",
    type: "passivo",
    cost: 0,
    effect: "+2 em CA enquanto concentrado",
    level: 1,
    class: "Blaster",
  },
  {
    id: "blaster-supernova",
    name: "Supernova",
    description: "Explodir com toda a energia acumulada",
    type: "ativo",
    cost: 10,
    effect: "Causa 4d10 de dano em área de 20 pés",
    level: 5,
    class: "Blaster",
  },

  // Mago
  {
    id: "mago-bola-fogo",
    name: "Bola de Fogo",
    description: "Lançar uma esfera de fogo",
    type: "ativo",
    cost: 5,
    effect: "Causa 3d6 de dano de fogo em área",
    level: 1,
    class: "Mago",
  },
  {
    id: "mago-gelo",
    name: "Congelamento",
    description: "Congelar inimigos no local",
    type: "ativo",
    cost: 4,
    effect: "Paralisa inimigo por 1d4 turnos",
    level: 2,
    class: "Mago",
  },
  {
    id: "mago-teleporte",
    name: "Teleporte",
    description: "Se teletransportar para outro local",
    type: "ativo",
    cost: 3,
    effect: "Teleporta até 60 pés",
    level: 2,
    class: "Mago",
  },
  {
    id: "mago-escudo-magico",
    name: "Escudo Mágico",
    description: "Criar proteção mágica",
    type: "passivo",
    cost: 0,
    effect: "+3 em CA contra magia",
    level: 1,
    class: "Mago",
  },

  // Assassino
  {
    id: "assassino-golpe-critico",
    name: "Golpe Crítico",
    description: "Desferir um golpe letal",
    type: "ativo",
    cost: 4,
    effect: "Causa 3d6 de dano e pode ser crítico",
    level: 1,
    class: "Assassino",
  },
  {
    id: "assassino-invisibilidade",
    name: "Invisibilidade",
    description: "Ficar invisível temporariamente",
    type: "ativo",
    cost: 5,
    effect: "Fica invisível por 3 turnos",
    level: 2,
    class: "Assassino",
  },
  {
    id: "assassino-veneno",
    name: "Veneno Letal",
    description: "Envenenar arma",
    type: "passivo",
    cost: 0,
    effect: "Ataques causam dano adicional de veneno",
    level: 1,
    class: "Assassino",
  },
];

export const passives: Passive[] = [
  {
    id: "passiva-resistencia-fisica",
    name: "Resistência Física",
    description: "Aumentar resistência a dano físico",
    effect: "Reduz dano físico em 10%",
    bonus: ["+2 CON"],
  },
  {
    id: "passiva-reflexos",
    name: "Reflexos Aguçados",
    description: "Aumentar reflexos naturalmente",
    effect: "Ganha +1 em iniciativa",
    bonus: ["+1 DES", "+1 CA"],
  },
  {
    id: "passiva-foco",
    name: "Foco Mental",
    description: "Melhorar concentração",
    effect: "Ganha +2 em testes de concentração",
    bonus: ["+2 INT"],
  },
  {
    id: "passiva-regeneracao",
    name: "Regeneração",
    description: "Recuperar HP naturalmente",
    effect: "Recupera 1 HP por turno",
    bonus: ["+1 HP/turno"],
  },
  {
    id: "passiva-visao-noturna",
    name: "Visão Noturna",
    description: "Enxergar no escuro",
    effect: "Pode ver até 60 pés no escuro",
    bonus: ["Visão em escuridão"],
  },
  {
    id: "passiva-imunidade-veneno",
    name: "Imunidade a Veneno",
    description: "Ser imune a venenos",
    effect: "Imune a efeitos de veneno",
    bonus: ["Imunidade completa"],
  },
  {
    id: "passiva-voo",
    name: "Voo",
    description: "Capacidade de voar",
    effect: "Pode voar com velocidade de 30 pés",
    bonus: ["Velocidade de voo"],
  },
  {
    id: "passiva-telepátia",
    name: "Telepatia",
    description: "Comunicação mental",
    effect: "Pode se comunicar telepaticamente",
    bonus: ["Comunicação mental"],
  },
];

// ============================================
// TALENTOS GENÉRICOS DO SISTEMA
// ============================================

export interface GenericTalent {
  id: string;
  name: string;
  category: 'combat' | 'precision' | 'energy' | 'mental' | 'technology' | 'stealth' | 'defense';
  description: string;
  mechanicEffect: string;
  limitation?: string;
  prerequisites: TalentPrerequisite[];
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface TalentPrerequisite {
  type: 'attribute' | 'level' | 'skill' | 'talent' | 'custom';
  name: string;
  value?: number;
  description: string;
}

export const genericTalents: GenericTalent[] = [
  // Combate Avançado
  {
    id: 'furia-incontrolavel',
    name: 'Fúria Incontrolável',
    category: 'combat',
    description: 'Quando em desvantagem, sua raiva explode e você ataca com ferocidade brutal.',
    mechanicEffect: '+2 no dano de ataques corpo a corpo, mas sofre -1 de CA por 3 turnos.',
    limitation: 'Uma vez por combate',
    prerequisites: [
      { type: 'attribute', name: 'Força', value: 14, description: 'Força 14+' },
      { type: 'attribute', name: 'Resistência', value: 12, description: 'Resistência 12+' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'parry-mestre',
    name: 'Parry Mestre',
    category: 'combat',
    description: 'Você domina a arte de desviar e bloquear ataques com precisão cirúrgica.',
    mechanicEffect: 'Pode reduzir o dano recebido em 4 uma vez por turno ao segurando uma arma corpo a corpo.',
    limitation: 'Uma vez por turno',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 14, description: 'Agilidade 14+' },
      { type: 'skill', name: 'Proficiência com armas corpo a corpo', description: 'Proficiência com armas corpo a corpo' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'lutador-incansavel',
    name: 'Lutador Incansável',
    category: 'combat',
    description: 'Quanto mais ferido você fica, mais forte você se torna.',
    mechanicEffect: 'Quando sua vida cair abaixo de 50%, recebe +1 em todos os testes de ataque.',
    prerequisites: [
      { type: 'attribute', name: 'Resistência', value: 14, description: 'Resistência 14+' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'instinto-sobrevivencia',
    name: 'Instinto de Sobrevivência',
    category: 'combat',
    description: 'Você possui um reflexo de sobrevivência que o mantém vivo em situações críticas.',
    mechanicEffect: 'Se for atingido por um ataque que te derrubaria, pode rolar um teste de Reflexos (CD 18) para ficar com 1 de HP.',
    limitation: 'Uma vez por combate',
    prerequisites: [
      { type: 'level', name: 'Nível', value: 5, description: 'Nível 5+' },
      { type: 'attribute', name: 'Reflexos', value: 12, description: 'Reflexos 12+' }
    ],
    rarity: 'rare'
  },
  // Precisão e Ataques à Distância
  {
    id: 'disparo-devastador',
    name: 'Disparo Devastador',
    category: 'precision',
    description: 'Você tira o máximo proveito de um momento de pausa para disparar um tiro perfeito.',
    mechanicEffect: 'Se não se mover no turno, pode dobrar o dano de um ataque à distância.',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 14, description: 'Agilidade 14+' },
      { type: 'skill', name: 'Mira Avançada', description: 'Mira Avançada' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'olho-aguia',
    name: 'Olho de Águia',
    category: 'precision',
    description: 'Sua visão é aguçada como a de uma águia, permitindo disparos precisos de longa distância.',
    mechanicEffect: 'Você reduz a penalidade por ataques de longa distância pela metade.',
    prerequisites: [
      { type: 'attribute', name: 'Percepção', value: 12, description: 'Percepção 12+' },
      { type: 'skill', name: 'Arma de longo alcance', description: 'Proficiência com arma de longo alcance' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'ricochete-perfeito',
    name: 'Ricochete Perfeito',
    category: 'precision',
    description: 'Você pode usar o ambiente a seu favor, ricocheteando projéteis para atingir inimigos escondidos.',
    mechanicEffect: 'Pode disparar contra superfícies para atingir inimigos atrás de cobertura.',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 16, description: 'Agilidade 16+' },
      { type: 'talent', name: 'Disparo Devastador', description: 'Talento: Disparo Devastador' }
    ],
    rarity: 'rare'
  },
  {
    id: 'balisticas-perfeita',
    name: 'Balística Perfeita',
    category: 'precision',
    description: 'Seus cálculos balísticos são absolutamente perfeitos, ignorando qualquer obstáculo.',
    mechanicEffect: 'Seus ataques à distância ignoram resistência normal e CA de cobertura parcial.',
    limitation: 'Requer foco e concentração',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 18, description: 'Agilidade 18+' },
      { type: 'level', name: 'Nível', value: 10, description: 'Nível 10+' }
    ],
    rarity: 'epic'
  },
  // Poderes Energéticos
  {
    id: 'onda-choque',
    name: 'Onda de Choque',
    category: 'energy',
    description: 'Você libera uma explosão de energia pura que empurra tudo ao seu redor.',
    mechanicEffect: 'Libera uma explosão de energia que empurra todos os inimigos num raio de 3 metros.',
    limitation: 'Custa 2 EP',
    prerequisites: [
      { type: 'attribute', name: 'Energia', value: 12, description: 'Energia 12+ ou habilidade elemental' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'escudo-energia',
    name: 'Escudo de Energia',
    category: 'energy',
    description: 'Você cria um escudo temporário de energia pura que absorve dano.',
    mechanicEffect: 'Uma vez por combate, pode ativar um escudo temporário que absorve 10 pontos de dano.',
    limitation: 'Uma vez por combate',
    prerequisites: [
      { type: 'level', name: 'Nível', value: 5, description: 'Nível 5+' },
      { type: 'attribute', name: 'Energia', value: 14, description: 'Energia 14+' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'evolucao-energetica',
    name: 'Evolução Energética',
    category: 'energy',
    description: 'Seus ataques elementais evoluem para um nível superior de poder.',
    mechanicEffect: 'Seus ataques elementais ganham +1d6 de dano extra.',
    prerequisites: [
      { type: 'level', name: 'Nível', value: 7, description: 'Nível 7+' },
      { type: 'skill', name: 'Poder Elemental ativo', description: 'Poder Elemental ativo' }
    ],
    rarity: 'rare'
  },
  {
    id: 'fluxo-arcano',
    name: 'Fluxo Arcano',
    category: 'energy',
    description: 'Você sincroniza sua essência com a magia ao seu redor, reduzindo o custo de seus feitiços.',
    mechanicEffect: 'Reduz o custo de habilidades mágicas ou de energia em 1 ponto.',
    prerequisites: [
      { type: 'attribute', name: 'Inteligência', value: 14, description: 'Inteligência 14+ ou Magia Avançada' }
    ],
    rarity: 'rare'
  },
  // Defesa e Resistência
  {
    id: 'casca-dura',
    name: 'Casca Dura',
    category: 'defense',
    description: 'Sua pele se torna resistente como uma casca, protegendo você de danos físicos.',
    mechanicEffect: 'Reduz todo dano físico recebido em 3.',
    prerequisites: [
      { type: 'attribute', name: 'Resistência', value: 14, description: 'Resistência 14+' },
      { type: 'level', name: 'Nível', value: 3, description: 'Nível 3+' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'resistencia-absoluta',
    name: 'Resistência Absoluta',
    category: 'defense',
    description: 'Você consegue resistir aos ataques mais devastadores reduzindo seu impacto.',
    mechanicEffect: 'Você reduz pela metade o dano sofrido por um ataque uma vez por combate.',
    limitation: 'Uma vez por combate',
    prerequisites: [
      { type: 'attribute', name: 'Resistência', value: 16, description: 'Resistência 16+' },
      { type: 'level', name: 'Nível', value: 8, description: 'Nível 8+' }
    ],
    rarity: 'rare'
  },
  {
    id: 'fator-cura-acelerado',
    name: 'Fator de Cura Acelerado',
    category: 'defense',
    description: 'Seu corpo se regenera rapidamente, curando ferimentos a cada turno.',
    mechanicEffect: 'Você regenera 1d4 HP no início de cada turno.',
    prerequisites: [
      { type: 'attribute', name: 'Resistência', value: 14, description: 'Resistência 14+' },
      { type: 'level', name: 'Nível', value: 5, description: 'Nível 5+' }
    ],
    rarity: 'rare'
  },
  {
    id: 'pele-aco',
    name: 'Pele de Aço',
    category: 'defense',
    description: 'Sua pele se torna tão dura quanto aço, oferecendo proteção permanente.',
    mechanicEffect: 'Sua CA natural aumenta em +2 permanentemente.',
    prerequisites: [
      { type: 'attribute', name: 'Resistência', value: 18, description: 'Resistência 18+' },
      { type: 'level', name: 'Nível', value: 12, description: 'Nível 12+' }
    ],
    rarity: 'epic'
  },
  // Furtividade
  {
    id: 'movimento-fantasma',
    name: 'Movimento Fantasma',
    category: 'stealth',
    description: 'Você se move tão silenciosamente que nem mesmo superfícies ruidosas o denunciam.',
    mechanicEffect: 'Você ignora superfícies ruidosas ao se mover furtivamente.',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 12, description: 'Agilidade 12+' },
      { type: 'skill', name: 'Furtividade Treinada', description: 'Furtividade Treinada' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'assassino-silencioso',
    name: 'Assassino Silencioso',
    category: 'stealth',
    description: 'Seus ataques furtivos são tão precisos que ignoram até mesmo armaduras.',
    mechanicEffect: 'Ataques furtivos ignoram armaduras naturais e CA de cobertura.',
    prerequisites: [
      { type: 'level', name: 'Nível', value: 5, description: 'Nível 5+' },
      { type: 'attribute', name: 'Agilidade', value: 14, description: 'Agilidade 14+' }
    ],
    rarity: 'rare'
  },
  {
    id: 'desaparecimento-rapido',
    name: 'Desaparecimento Rápido',
    category: 'stealth',
    description: 'Você consegue se esconder instantaneamente, desaparecendo da vista de todos.',
    mechanicEffect: 'Pode gastar uma ação bônus para se esconder instantaneamente.',
    limitation: 'Uma vez por turno',
    prerequisites: [
      { type: 'level', name: 'Nível', value: 7, description: 'Nível 7+' },
      { type: 'attribute', name: 'Furtividade', value: 12, description: 'Furtividade 12+' }
    ],
    rarity: 'rare'
  },
  {
    id: 'passos-sombras',
    name: 'Passos nas Sombras',
    category: 'stealth',
    description: 'Você pode se teletransportar instantaneamente entre áreas escuras.',
    mechanicEffect: 'Você pode se teletransportar para um local escuro a até 6 metros de distância.',
    limitation: 'Requer um local escuro de destino',
    prerequisites: [
      { type: 'level', name: 'Nível', value: 10, description: 'Nível 10+' },
      { type: 'talent', name: 'Assassino Silencioso', description: 'Talento: Assassino Silencioso' }
    ],
    rarity: 'epic'
  },
  {
    id: 'mestre-furtividade',
    name: 'Mestre da Furtividade',
    category: 'stealth',
    description: 'Você é um mestre absoluto em se esconder e passar despercebido.',
    mechanicEffect: '+3 em testes de furtividade.',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 12, description: 'Agilidade 12+' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'sombra-rapida',
    name: 'Sombra Rápida',
    category: 'stealth',
    description: 'Você se move tão rápido nas sombras que parece desaparecer.',
    mechanicEffect: 'Você pode se mover silenciosamente sem penalidade.',
    prerequisites: [
      { type: 'attribute', name: 'Agilidade', value: 14, description: 'Agilidade 14+' }
    ],
    rarity: 'uncommon'
  },
  {
    id: 'mestre-disfarce',
    name: 'Mestre do Disfarce',
    category: 'stealth',
    description: 'Você pode imitar qualquer pessoa com perfeição, copiando vozes e gestos.',
    mechanicEffect: 'Você pode imitar vozes e gestos de outras pessoas com facilidade.',
    prerequisites: [
      { type: 'attribute', name: 'Carisma', value: 14, description: 'Carisma 14+' }
    ],
    rarity: 'uncommon'
  }
];

export interface UniqueTalent extends GenericTalent {
  characterSpecific?: string;
}

export const uniqueTalents: UniqueTalent[] = [
  // Ben 10 Talents
  {
    id: 'codigo-mestre',
    name: 'Código Mestre',
    category: 'combat',
    description: 'Você domina completamente o Omnitrix ou tecnologia similar, desbloqueando todas as transformações.',
    mechanicEffect: 'Pode se transformar sem limite de tempo. Desbloqueia modos especiais como Modo Supremo ou fusões de DNA alienígena.',
    prerequisites: [
      { type: 'custom', name: 'Portador de Omnitrix', description: 'Portador de Omnitrix ou Tecnologia Similar' },
      { type: 'level', name: 'Nível', value: 12, description: 'Nível 12+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Ben 10'
  },
  {
    id: 'dna-supremo',
    name: 'DNA Supremo',
    category: 'combat',
    description: 'Você evolui seus alienígenas para a versão suprema, desbloqueando poderes inimagináveis.',
    mechanicEffect: 'Pode escolher entre forma normal ou Suprema ao se transformar. Formas Supremas recebem +2 em todos os atributos e novas habilidades. Pode fundir até dois alienígenas para criar combinações únicas.',
    prerequisites: [
      { type: 'talent', name: 'Código Mestre', description: 'Talento: Código Mestre ou Experiência com o Omnitrix' },
      { type: 'level', name: 'Nível', value: 15, description: 'Nível 15+' }
    ],
    rarity: 'legendary',
    characterSpecific: 'Ben 10'
  },
  // Mutante Rex Talents
  {
    id: 'mestre-nanotecnologia',
    name: 'Mestre da Nanotecnologia',
    category: 'technology',
    description: 'Seus Nanites são totalmente controláveis, sem limitações, permitindo criações ilimitadas.',
    mechanicEffect: 'Pode criar qualquer arma ou ferramenta a partir do próprio corpo. Pode curar qualquer dano usando Nanites, até membros perdidos. Pode hackear outros seres tecnológicos e controlá-los.',
    prerequisites: [
      { type: 'custom', name: 'Infecção por Nanites Avançados', description: 'Infecção por Nanites Avançados' },
      { type: 'level', name: 'Nível', value: 10, description: 'Nível 10+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Mutante Rex'
  },
  {
    id: 'forma-omega',
    name: 'Forma Omega',
    category: 'combat',
    description: 'Você alcança o ápice da evolução dos Nanites, se tornando praticamente invencível.',
    mechanicEffect: 'Pode ativar o Modo Omega, aumentando seu poder 10x por 1 minuto. Ganha resistência absoluta a qualquer tipo de hack ou vírus. Pode fundir-se a qualquer tecnologia, assumindo controle dela.',
    limitation: 'Modo Omega dura apenas 1 minuto, uma vez por combate',
    prerequisites: [
      { type: 'custom', name: 'Nanites Omega', description: 'Portador dos Nanites Omega' },
      { type: 'level', name: 'Nível', value: 15, description: 'Nível 15+' }
    ],
    rarity: 'legendary',
    characterSpecific: 'Mutante Rex'
  },
  // Danny Phantom Talents
  {
    id: 'mestre-intangibilidade',
    name: 'Mestre da Intangibilidade',
    category: 'combat',
    description: 'Você pode se tornar completamente intangível, até contra ataques especiais.',
    mechanicEffect: 'Pode atravessar tudo, até barreiras mágicas ou tecnológicas. Pode tocar objetos enquanto intangível para manipulá-los. Pode gastar 1 EP para tornar-se invisível além da intangibilidade.',
    prerequisites: [
      { type: 'custom', name: 'Ser Meio-Fantasma', description: 'Ser Meio-Fantasma ou Habilidade de Intangibilidade' },
      { type: 'level', name: 'Nível', value: 8, description: 'Nível 8+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Danny Phantom'
  },
  {
    id: 'explosao-fantasma-suprema',
    name: 'Explosão Fantasma Suprema',
    category: 'energy',
    description: 'Seu Golpe Fantasma atinge níveis devastadores, capaz de anular poderes de outros fantasmas.',
    mechanicEffect: 'Pode disparar um ataque de energia fantasma massivo em área. Se atingir um fantasma, anula seus poderes temporariamente.',
    limitation: 'Custa 3 EP',
    prerequisites: [
      { type: 'custom', name: 'Habilidade de Explosão Fantasma Avançada', description: 'Habilidade de Explosão Fantasma Avançada' },
      { type: 'level', name: 'Nível', value: 12, description: 'Nível 12+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Danny Phantom'
  },
  // Jake Long (Dragão Ocidental) Talents
  {
    id: 'modo-dragao-supremo',
    name: 'Modo Dragão Supremo',
    category: 'combat',
    description: 'Você libera o potencial máximo da sua forma dracônica.',
    mechanicEffect: 'Pode usar chamas mágicas que queimam até espíritos e espectros. Seus golpes físicos causam o dobro de dano contra qualquer criatura maligna. Pode voar em velocidade supersônica.',
    prerequisites: [
      { type: 'custom', name: 'Ser um Dragão', description: 'Ser um Dragão ou Similar' },
      { type: 'level', name: 'Nível', value: 10, description: 'Nível 10+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Jake Long'
  },
  {
    id: 'alma-dragao-ancestral',
    name: 'Alma do Dragão Ancestral',
    category: 'combat',
    description: 'Você canaliza o poder dos dragões antigos, obtendo sabedoria e força imemorial.',
    mechanicEffect: 'Seus ataques agora causam dano elemental extra (fogo, raio, gelo, etc.). Ganha uma resistência quase total a qualquer ataque mágico. Pode usar um rugido dracônico que paralisa inimigos fracos pelo medo.',
    prerequisites: [
      { type: 'talent', name: 'Modo Dragão Supremo', description: 'Talento: Modo Dragão Supremo ou Conexão Dracônica Forte' },
      { type: 'level', name: 'Nível', value: 15, description: 'Nível 15+' }
    ],
    rarity: 'legendary',
    characterSpecific: 'Jake Long'
  },
  // Randy Cunningham Talents
  {
    id: 'modo-ninja-supremo',
    name: 'Modo Ninja Supremo',
    category: 'stealth',
    description: 'Você atinge o auge das artes ninjas, ficando praticamente indetectável.',
    mechanicEffect: 'Seus movimentos são totalmente silenciosos, sem chance de detecção. Pode refletir qualquer ataque de longo alcance com sua katana. Ganha um instinto de perigo, podendo esquivar automaticamente de um ataque mortal.',
    limitation: 'Modo dura 5 turnos por ativação',
    prerequisites: [
      { type: 'custom', name: 'Ser Ninja', description: 'Ser Ninja ou Treinamento Especializado em Técnicas Ninja' },
      { type: 'level', name: 'Nível', value: 12, description: 'Nível 12+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Randy Cunningham'
  },
  // Max Steel Talents
  {
    id: 'modo-turbo-supremo',
    name: 'Modo Turbo Supremo',
    category: 'combat',
    description: 'Você libera todo o potencial do Modo Turbo, se tornando uma máquina de combate.',
    mechanicEffect: 'Pode aumentar sua força e velocidade em o dobro do deslocamento por 3 turnos. Seu corpo se adapta a qualquer ambiente, incluindo espaço ou submersão profunda. Pode gerar rajadas de energia super concentradas.',
    limitation: 'Modo Turbo dura 3 turnos, uma vez por combate',
    prerequisites: [
      { type: 'custom', name: 'Modo Turbo Avançado', description: 'Modo Turbo Avançado ou Acessórios Nano-Tecnológicos' },
      { type: 'level', name: 'Nível', value: 12, description: 'Nível 12+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Max Steel'
  },
  // Sábados Secretos Talents
  {
    id: 'mestre-criptozoologista',
    name: 'Mestre Criptozoologista',
    category: 'mental',
    description: 'Você entende todas as criaturas ocultas do mundo e pode controlá-las.',
    mechanicEffect: 'Pode se comunicar com qualquer criptoide e convencê-lo a ajudar. Ganha resistência total contra magia de criaturas míticas. Pode invocar um Criptoide para lutar ao seu lado 1x por dia.',
    prerequisites: [
      { type: 'custom', name: 'Conhecimento Profundo', description: 'Conhecimento Profundo sobre Criaturas Místicas e Criptoides' },
      { type: 'level', name: 'Nível', value: 10, description: 'Nível 10+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Sábados Secretos'
  },
  // Titã Simbiônico Talents
  {
    id: 'fusao-maxima',
    name: 'Fusão Máxima',
    category: 'technology',
    description: 'Você pode se fundir com qualquer máquina ou ser tecnológico, criando um Titã supremo.',
    mechanicEffect: 'Qualquer máquina pilotável se torna uma armadura viva para você. Se fundindo com outro personagem, os status combinam e atingem o máximo. Pode controlar tecnologias à distância como se fossem parte de você.',
    prerequisites: [
      { type: 'custom', name: 'Pilotagem de Mechas', description: 'Pilotagem de Mechas ou Fusão de Entidades Tecnológicas' },
      { type: 'level', name: 'Nível', value: 12, description: 'Nível 12+' }
    ],
    rarity: 'epic',
    characterSpecific: 'Titã Simbiônico'
  },
  // Miraculous Talents
  {
    id: 'miraculous-supremo',
    name: 'Miraculous Supremo',
    category: 'combat',
    description: 'Você libera 100% do potencial do seu Miraculous, desbloqueando poder absoluto.',
    mechanicEffect: 'Pode usar seu poder especial quantas vezes quiser sem limite de tempo. Seu Kwami pode ajudar ativamente em combate.',
    prerequisites: [
      { type: 'custom', name: 'Portador de Miraculous', description: 'Portador de um Miraculous e Conexão Total com seu Kwami' },
      { type: 'level', name: 'Nível', value: 15, description: 'Nível 15+' }
    ],
    rarity: 'legendary',
    characterSpecific: 'Miraculous'
  }
];

// Helper functions
export function getTalentsByCategory(category: string): (GenericTalent | UniqueTalent)[] {
  return [...genericTalents, ...uniqueTalents].filter(talent => talent.category === category);
}

export function getCharacterTalents(characterName: string): UniqueTalent[] {
  return uniqueTalents.filter(talent => talent.characterSpecific === characterName);
}

export function checkPrerequisites(talent: GenericTalent | UniqueTalent, playerStats: Record<string, number>): { met: boolean; missing: string[] } {
  const missing: string[] = [];

  for (const prereq of talent.prerequisites) {
    if (prereq.type === 'attribute') {
      if ((playerStats[prereq.name] || 0) < (prereq.value || 0)) {
        missing.push(`${prereq.name} ${prereq.value || 0}+`);
      }
    } else if (prereq.type === 'level') {
      if ((playerStats['level'] || 0) < (prereq.value || 0)) {
        missing.push(`Nível ${prereq.value || 0}+`);
      }
    }
  }

  return {
    met: missing.length === 0,
    missing
  };
}

export const backgrounds: Background[] = [
  {
    id: "bg-cientista",
    name: "Cientista Genial",
    emoji: "🧪",
    description: "Você sempre esteve à frente do seu tempo, criando invenções inovadoras",
    skills: ["Investigação", "Tecnologia"],
    equipment: ["Ferramentas científicas", "Tablet de dados", "Laboratório portátil"],
    specialAbility: "Mente Brilhante",
    abilityDescription: "Gastar 1 ponto de energia para entender rapidamente o funcionamento de qualquer tecnologia",
  },
  {
    id: "bg-guerreiro",
    name: "Guerreiro de Elite",
    emoji: "⚔️",
    description: "Treinado desde jovem para a batalha, você conhece os caminhos da guerra",
    skills: ["Atletismo", "Intimidação"],
    equipment: ["Armadura leve", "Espada de treinamento", "Medalhão de guerra"],
    specialAbility: "Reflexos Rápidos",
    abilityDescription: "Rolar um teste de Reflexos com vantagem uma vez por descanso longo",
  },
  {
    id: "bg-escolhido",
    name: "Escolhido por um Poder Maior",
    emoji: "✨",
    description: "O destino traçou um caminho especial para você",
    skills: ["Religião", "Intuição"],
    equipment: ["Amuleto sagrado", "Livro antigo de profecias", "Túnica mística"],
    specialAbility: "Visões do Futuro",
    abilityDescription: "Uma vez por dia, receber uma dica enigmática sobre o futuro",
  },
  {
    id: "bg-agente",
    name: "Agente Secreto",
    emoji: "🕵️",
    description: "Missões clandestinas, espionagem e combate nas sombras",
    skills: ["Furtividade", "Enganação"],
    equipment: ["Comunicações criptografadas", "Traje camuflado", "Arma discreta"],
    specialAbility: "Cobertura Perfeita",
    abilityDescription: "Se esconder em plena luz do dia uma vez por descanso curto",
  },
  {
    id: "bg-aventureiro",
    name: "Aventureiro Espacial",
    emoji: "🚀",
    description: "Você já explorou os confins do espaço",
    skills: ["Pilotagem", "Sobrevivência"],
    equipment: ["Traje pressurizado", "Comunicador interestelar", "Mapa galáctico"],
    specialAbility: "Conhecimento Cósmico",
    abilityDescription: "Sempre sabe onde está e pode identificar espécies alienígenas",
  },
  {
    id: "bg-ex-vilao",
    name: "Ex-Vilão Redimido",
    emoji: "😈",
    description: "Seu passado sombrio está atrás de você",
    skills: ["Intimidação", "Persuasão"],
    equipment: ["Relíquia de seu passado", "Capa escura", "Máscara antiga"],
    specialAbility: "Sombra do Passado",
    abilityDescription: "Convencer um inimigo de que ainda é um vilão",
  },
  {
    id: "bg-humano",
    name: "Humano Comum",
    emoji: "🤔",
    description: "Você é apenas uma pessoa normal... Ou pelo menos era",
    skills: ["Persuasão", "Percepção"],
    equipment: ["Smartphone", "Carteira de identidade", "Lembrança de casa"],
    specialAbility: "Força de Vontade",
    abilityDescription: "Substituir qualquer teste de atributo por um teste de Carisma",
  },
  {
    id: "bg-artefato",
    name: "Portador de um Artefato Poderoso",
    emoji: "🏆",
    description: "Você encontrou ou foi escolhido por um artefato de imenso poder",
    skills: ["Arcano", "Investigação"],
    equipment: ["Artefato misterioso", "Diário de anotações", "Luvas especiais"],
    specialAbility: "Sinergia com o Artefato",
    abilityDescription: "Gastar 1 ponto de energia para ativar uma habilidade única",
  },
  {
    id: "bg-organizacao",
    name: "Criado por uma Organização Secreta",
    emoji: "🏛️",
    description: "Desde jovem, você foi moldado por uma instituição misteriosa",
    skills: ["Intimidação", "Investigação"],
    equipment: ["Identificação da organização", "Traje especial", "Contato anônimo"],
    specialAbility: "Treinamento Secreto",
    abilityDescription: "Ganhar proficiência em uma perícia e rolar com vantagem",
  },
  {
    id: "bg-sobrevivente",
    name: "Sobrevivente de um Mundo Perdido",
    emoji: "🌋",
    description: "Você veio de uma realidade alternativa ou um reino perdido",
    skills: ["Sobrevivência", "Intuição"],
    equipment: ["Arma primitiva ou exótica", "Fragmento do seu mundo", "Mapa antigo"],
    specialAbility: "Vontade de Ferro",
    abilityDescription: "Gastar 1 ponto de energia para rolar novamente um teste de resistência",
  },
  {
    id: "bg-estudante",
    name: "Estudante de Magia ou Ciências Ocultas",
    emoji: "📜",
    description: "Você dedicou sua vida ao estudo dos segredos do universo",
    skills: ["Arcano", "História"],
    equipment: ["Grimório", "Conjunto de runas", "Óculos de leitura"],
    specialAbility: "Conhecimento Proibido",
    abilityDescription: "Lembrar de uma informação obscura sobre um ser ou fenômeno",
  },
  {
    id: "bg-piloto",
    name: "Piloto de Elite",
    emoji: "🚗",
    description: "Seja no ar, na terra ou no espaço, ninguém pilota como você",
    skills: ["Pilotagem", "Reflexos"],
    equipment: ["Chave de um veículo especial", "Traje de piloto", "Óculos de proteção"],
    specialAbility: "Maestria em Pilotar",
    abilityDescription: "Ganhar +2 em testes de pilotagem",
  },
];
