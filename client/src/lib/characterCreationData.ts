// Dados consolidados para a Criação de Personagem
// Inclui Talentos, Passivas, Habilidades e Evoluções

export interface CharacterTalent {
  id: string;
  name: string;
  category: string;
  description: string;
  effect: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  prerequisites?: string[];
}

export interface CharacterPassive {
  id: string;
  name: string;
  description: string;
  effect: string;
  type: 'racial' | 'class' | 'background' | 'special';
  raceId?: string;
  classId?: string;
}

export interface CharacterAbility {
  id: string;
  name: string;
  description: string;
  level: number;
  cost?: number; // Custo em EP
  effect: string;
  type: 'active' | 'passive';
}

// TALENTOS GENÉRICOS DISPONÍVEIS PARA TODOS
export const availableTalents: CharacterTalent[] = [
  // Talentos de Combate
  {
    id: 'ataque-poderoso',
    name: 'Ataque Poderoso',
    category: 'combat',
    description: 'Você pode reduzir sua precisão em -2 para causar +4 de dano.',
    effect: 'Reduz precisão em -2 para +4 de dano',
    rarity: 'common'
  },
  {
    id: 'ataque-giratrio',
    name: 'Ataque Giratório',
    category: 'combat',
    description: 'Acerta todos os inimigos ao redor uma vez por turno.',
    effect: 'Acerta todos os inimigos ao redor (1x/turno)',
    rarity: 'common'
  },
  {
    id: 'bloqueio-reflexivo',
    name: 'Bloqueio Reflexivo',
    category: 'combat',
    description: 'Se você estiver segurando uma arma corpo a corpo, pode reduzir o dano de ataques recebidos em 2.',
    effect: 'Reduz dano recebido em 2 (com arma corpo a corpo)',
    rarity: 'common'
  },
  {
    id: 'especialista-duas-armas',
    name: 'Especialista em Duas Armas',
    category: 'combat',
    description: 'Reduz a penalidade para lutar com duas armas em -2.',
    effect: 'Penalidade de duas armas reduzida em -2',
    rarity: 'common'
  },
  {
    id: 'furia-incontrolavel',
    name: 'Fúria Incontrolável',
    category: 'combat',
    description: 'Quando em desvantagem, sua raiva explode.',
    effect: '+2 no dano corpo a corpo, -1 CA por 3 turnos',
    rarity: 'uncommon',
    prerequisites: ['Força 14+']
  },

  // Talentos de Precisão
  {
    id: 'tiro-rpido',
    name: 'Tiro Rápido',
    category: 'precision',
    description: 'Faça dois ataques à distância no mesmo turno com -2 de penalidade.',
    effect: 'Dois ataques à distância (-2 penalidade)',
    rarity: 'common'
  },
  {
    id: 'mestre-mira',
    name: 'Mestre da Mira',
    category: 'precision',
    description: 'Seu dano à distância aumenta em +2.',
    effect: '+2 no dano à distância',
    rarity: 'common'
  },
  {
    id: 'penetrao-armadura',
    name: 'Penetração de Armadura',
    category: 'precision',
    description: 'Seus ataques ignoram 3 pontos da CA inimiga.',
    effect: 'Ignora 3 pontos da CA inimiga',
    rarity: 'common'
  },
  {
    id: 'mestre-explosivos',
    name: 'Mestre dos Explosivos',
    category: 'precision',
    description: 'Seus ataques explosivos têm +1 metro de raio.',
    effect: '+1 metro de raio em ataques explosivos',
    rarity: 'common'
  },

  // Talentos de Energia
  {
    id: 'canalizar-energia',
    name: 'Canalizar Energia',
    category: 'energy',
    description: 'Seus ataques energéticos ignoram resistência normal.',
    effect: 'Ataques energéticos ignoram resistência normal',
    rarity: 'common'
  },
  {
    id: 'amplificao-bioenergtica',
    name: 'Amplificação Bioenergética',
    category: 'energy',
    description: 'Você pode gastar 2 EP para aumentar seu dano em +3.',
    effect: 'Gasta 2 EP para +3 de dano',
    rarity: 'common',
    cost: 2
  },
  {
    id: 'resistncia-caos',
    name: 'Resistência ao Caos',
    category: 'energy',
    description: 'Reduz em 3 qualquer dano de magia ou energia recebida.',
    effect: 'Reduz em 3 dano de magia ou energia',
    rarity: 'common'
  },
  {
    id: 'controle-elemental',
    name: 'Controle Elemental',
    category: 'energy',
    description: 'Escolha um elemento (fogo, gelo, eletricidade, etc.), seus ataques ganham +1d4 de dano extra desse tipo.',
    effect: '+1d4 de dano extra do elemento escolhido',
    rarity: 'common'
  },

  // Talentos Mentais
  {
    id: 'mente-resistente',
    name: 'Mente Resistente',
    category: 'mental',
    description: '+2 em testes de resistência contra ilusões e controle mental.',
    effect: '+2 em testes contra ilusões/controle mental',
    rarity: 'common'
  },
  {
    id: 'anlise-rpida',
    name: 'Análise Rápida',
    category: 'mental',
    description: 'Você pode gastar uma ação para descobrir fraquezas do inimigo.',
    effect: 'Ação para descobrir fraquezas do inimigo',
    rarity: 'common'
  },
  {
    id: 'estrategista',
    name: 'Estrategista',
    category: 'mental',
    description: 'Você pode usar uma ação bônus para coordenar aliados, dando +1 nos ataques deles.',
    effect: 'Ação bônus para +1 nos ataques de aliados',
    rarity: 'common'
  },
  {
    id: 'memria-fotogrfica',
    name: 'Memória Fotográfica',
    category: 'mental',
    description: 'Você se lembra de qualquer detalhe que tenha visto nas últimas 24h.',
    effect: 'Lembra de detalhes vistos nas últimas 24h',
    rarity: 'common'
  },
  {
    id: 'mente-blindada',
    name: 'Mente Blindada',
    category: 'mental',
    description: 'Sua vontade é como uma fortaleza.',
    effect: 'Vantagem em testes de resistência contra efeitos mentais',
    rarity: 'rare',
    prerequisites: ['Vontade 13+']
  },

  // Talentos Tecnológicos
  {
    id: 'hacker-mestre',
    name: 'Hacker Mestre',
    category: 'technology',
    description: '+3 em testes para invadir sistemas digitais.',
    effect: '+3 em testes para invadir sistemas digitais',
    rarity: 'common'
  },
  {
    id: 'criador-gadgets',
    name: 'Criador de Gadgets',
    category: 'technology',
    description: 'Você pode fabricar dispositivos tecnológicos personalizados.',
    effect: 'Pode fabricar dispositivos tecnológicos personalizados',
    rarity: 'common'
  },
  {
    id: 'armadura-personalizada',
    name: 'Armadura Personalizada',
    category: 'technology',
    description: 'Suas armaduras tecnológicas recebem +2 CA extra.',
    effect: 'Armaduras tecnológicas recebem +2 CA extra',
    rarity: 'common'
  },
  {
    id: 'fuso-ciberntica',
    name: 'Fusão Cibernética',
    category: 'technology',
    description: 'Você pode instalar implantes biomecânicos sem penalidade.',
    effect: 'Instala implantes biomecânicos sem penalidade',
    rarity: 'common'
  },

  // Talentos de Furtividade
  {
    id: 'mestre-furtividade',
    name: 'Mestre da Furtividade',
    category: 'stealth',
    description: '+3 em testes de furtividade.',
    effect: '+3 em testes de furtividade',
    rarity: 'common'
  },
  {
    id: 'assassinato-silencioso',
    name: 'Assassinato Silencioso',
    category: 'stealth',
    description: 'Se atacar um inimigo sem que ele perceba, causa dano dobrado.',
    effect: 'Dano dobrado em ataque furtivo',
    rarity: 'common'
  },
  {
    id: 'sombra-rpida',
    name: 'Sombra Rápida',
    category: 'stealth',
    description: 'Você pode se mover silenciosamente sem penalidade.',
    effect: 'Move-se silenciosamente sem penalidade',
    rarity: 'common'
  },
  {
    id: 'mestre-disfarce',
    name: 'Mestre do Disfarce',
    category: 'stealth',
    description: 'Você pode imitar vozes e gestos de outras pessoas com facilidade.',
    effect: 'Imita vozes e gestos com facilidade',
    rarity: 'common'
  }
];

// PASSIVAS RACIAIS
export const racePassives: CharacterPassive[] = [
  // Humanos Aprimorados
  {
    id: 'treinamento-intensivo',
    name: 'Treinamento Intensivo',
    description: '+2 em uma Perícia à sua escolha ao criar a ficha',
    effect: '+2 em uma Perícia',
    type: 'racial',
    raceId: 'humanos-aprimorados'
  },
  {
    id: 'resistencia-humana',
    name: 'Resistência Humana',
    description: 'Recebe +5 pontos de vida (PV) extras permanentemente',
    effect: '+5 PV Máximo',
    type: 'racial',
    raceId: 'humanos-aprimorados'
  },
  {
    id: 'superacao',
    name: 'Superação',
    description: '1 vez por dia, pode refazer um teste falho, seja de ataque, resistência ou perícia',
    effect: 'Refaz um teste 1x/dia',
    type: 'racial',
    raceId: 'humanos-aprimorados'
  },

  // Alienígenas
  {
    id: 'adaptabilidade-extraterrestre',
    name: 'Adaptabilidade Extraterrestre',
    description: 'Não sofre penalidades ao respirar ou sobreviver em ambientes hostis (espaço, fundo do mar, planetas tóxicos)',
    effect: 'Imunidade a Penalidades Ambientais',
    type: 'racial',
    raceId: 'alienigenas'
  },
  {
    id: 'resistencia-alienigena',
    name: 'Resistência Alienígena',
    description: '+2 em testes de resistência contra efeitos físicos ou mentais',
    effect: '+2 em Testes de Resistência',
    type: 'racial',
    raceId: 'alienigenas'
  },
  {
    id: 'poder-inato',
    name: 'Poder Inato',
    description: 'Escolha 1 habilidade especial que reflita a natureza da sua espécie (ex.: telepatia, garras naturais, asas, camuflagem, etc.)',
    effect: 'Habilidade especial única',
    type: 'racial',
    raceId: 'alienigenas'
  },

  // Mutantes Biomecânicos
  {
    id: 'regeneracao-mutante',
    name: 'Regeneração',
    description: 'Cura 5 PV por turno',
    effect: 'Cura 5 PV/Turno',
    type: 'racial',
    raceId: 'mutantes-biomcanicos'
  },
  {
    id: 'criacao-biomcanica',
    name: 'Criação Biomecânica',
    description: 'Pode criar armas ou armaduras biológicas',
    effect: 'Cria armas/armaduras biológicas',
    type: 'racial',
    raceId: 'mutantes-biomcanicos'
  },
  {
    id: 'mutacao-rpida',
    name: 'Mutação Rápida',
    description: '1 por dia, pode adaptar seu corpo para ganhar uma nova habilidade temporária por um 1 minuto',
    effect: 'Habilidade temporária 1x/dia',
    type: 'racial',
    raceId: 'mutantes-biomcanicos'
  },

  // Fantasmas/Espíritos
  {
    id: 'intangibilidade',
    name: 'Intangibilidade',
    description: 'Pode atravessar paredes, objetos sólidos e armadilhas sem sofrer efeitos, até número de uso de acordo com a proficiência',
    effect: 'Atravessa obstáculos (limitado)',
    type: 'racial',
    raceId: 'fantasmas-espiritos'
  },
  {
    id: 'voo-fantasma',
    name: 'Voo',
    description: 'Pode se mover livremente no ar',
    effect: 'Deslocamento de Voo',
    type: 'racial',
    raceId: 'fantasmas-espiritos'
  },
  {
    id: 'grito-fantasma',
    name: 'Grito Fantasma',
    description: 'Pode emitir uma onda sônica destrutiva. Alcance: Cone de 9m. Efeito: Causa 4d8 de dano sônico e empurra criaturas 3 metros',
    effect: '4d8 dano sônico (Cone 9m)',
    type: 'racial',
    raceId: 'fantasmas-espiritos'
  },

  // Dragões/Híbridos Dracônicos
  {
    id: 'transformacao-parcial',
    name: 'Transformação Parcial',
    description: 'Pode ativar partes dracônicas (Ex.: garras, asas, cauda) por até 1 minutos. Enquanto ativo: Garras: dano de (dano 2d8 + mod cortante), Asas: deslocamento de voo igual ao terrestre',
    effect: 'Ativa partes dracônicas (1 min)',
    type: 'racial',
    raceId: 'dragoes-hibridos'
  },
  {
    id: 'resistencia-elemental-dragao',
    name: 'Resistência Elemental',
    description: 'Escolha um elemento (fogo, gelo, raio ect) e ganhe resistência contra ele',
    effect: 'Resistência Elemental',
    type: 'racial',
    raceId: 'dragoes-hibridos'
  },
  {
    id: 'sopro-draconico',
    name: 'Sopro Dracônico',
    description: 'Pode lançar uma rajada de elemental. Alcance: Cone de 6 metros, Dano: 4d6 do elemento escolhido, Teste de resistência: Agilidade (CD baseada no Poder) para metade do dano',
    effect: '4d6 dano elemental (Cone 6m)',
    type: 'racial',
    raceId: 'dragoes-hibridos'
  },

  // Ciborgues/Androides
  {
    id: 'corpo-aco',
    name: 'Corpo de Aço',
    description: 'Resistência a dano físico (+2 na Defesa)',
    effect: '+2 na Defesa (CA)',
    type: 'racial',
    raceId: 'ciborgues-androides'
  },
  {
    id: 'sistemas-avancados',
    name: 'Sistemas Avançados',
    description: 'Pode armazenar e analisar dados rapidamente, obtendo vantagem em testes de Tecnologia e Investigação',
    effect: 'Vantagem em Tecnologia/Investigação',
    type: 'racial',
    raceId: 'ciborgues-androides'
  },
  {
    id: 'regeneracao-mecanica',
    name: 'Regeneração Mecânica',
    description: 'Pode consertar seu corpo utilizando ferramentas ou sistemas de reparo. Recupera 5 PV por minuto fora de combate ou como ação ao usar kits tecnológicos',
    effect: 'Recupera 5 PV/min',
    type: 'racial',
    raceId: 'ciborgues-androides'
  },

  // Seres com Simbiontes
  {
    id: 'ligacao-simbiotica',
    name: 'Ligação Simbiótica',
    description: '+5 PV extras e +1 bônus em todos os ataques físicos',
    effect: '+5 PV, +1 Ataque Físico',
    type: 'racial',
    raceId: 'seres-simbiontes'
  },
  {
    id: 'adaptacao-rpida',
    name: 'Adaptação Rápida',
    description: 'Pode mudar de forma para: Melhorar ataque → recebe +2 de dano por 1 turno, Melhorar defesa → recebe +2 na Defesa (CA) por 1 turno. Pode usar essa adaptação até 3 vezes por descanso',
    effect: 'Muda forma 3x/descanso',
    type: 'racial',
    raceId: 'seres-simbiontes'
  },
  {
    id: 'armas-naturais',
    name: 'Armas Naturais',
    description: 'Pode criar lâminas, garras tentáculos (dano 2d8 + mod)',
    effect: 'Cria armas naturais (2d8)',
    type: 'racial',
    raceId: 'seres-simbiontes'
  },

  // Magos/Sobrenaturais
  {
    id: 'magia-inata',
    name: 'Magia Inata',
    description: 'Pode lançar feitiços básicos (como criar luz, mover objetos pequenos ou detectar magia) sem custo adicional de energia',
    effect: 'Feitiços básicos grátis',
    type: 'racial',
    raceId: 'magos-sobrenaturais'
  },
  {
    id: 'resistencia-magia',
    name: 'Resistência à Magia',
    description: 'Recebe +2 na Defesa (CA) contra ataques mágicos e efeitos arcanos',
    effect: '+2 CA contra Magia',
    type: 'racial',
    raceId: 'magos-sobrenaturais'
  },
  {
    id: 'ritualista',
    name: 'Ritualista',
    description: 'Pode preparar 1 encantamento especial antes de cada batalha que dura até 10 minutos ou até ser usado',
    effect: 'Encantamento pré-preparado',
    type: 'racial',
    raceId: 'magos-sobrenaturais'
  },

  // Criaturas Genéticas
  {
    id: 'instinto-sobrevivencia',
    name: 'Instinto de Sobrevivência',
    description: 'Sempre age primeiro no primeiro turno de combate, independentemente da iniciativa, graças ao seu reflexo predatório',
    effect: 'Iniciativa Prioritária (1º Turno)',
    type: 'racial',
    raceId: 'criaturas-geneticas'
  }
];

// HABILIDADES ESPECIAIS POR CLASSE
export const classAbilities: CharacterAbility[] = [
  // Lutador Corpo a Corpo
  {
    id: 'golpe-rapido',
    name: 'Golpe Rápido',
    description: 'Ataque mais rápido com -1 de dano',
    level: 1,
    effect: '+1 ataque por turno, -1 dano por ataque',
    type: 'active'
  },
  {
    id: 'esquiva-aprimorada',
    name: 'Esquiva Aprimorada',
    description: 'Aumenta CA em 1 permanentemente',
    level: 3,
    effect: '+1 CA, +2 em testes de reflexo',
    type: 'passive'
  },
  {
    id: 'ataque-poderoso-classe',
    name: 'Ataque Poderoso',
    description: 'Dano aumentado em 1d4',
    level: 1,
    effect: '+1d4 dano, -1 em defesa',
    type: 'active'
  },

  // Blaster
  {
    id: 'mira-laser',
    name: 'Mira Laser',
    description: '+2 em ataques à distância',
    level: 3,
    effect: '+2 em ataques à distância',
    type: 'passive'
  },
  {
    id: 'disparo-duplo',
    name: 'Disparo Duplo',
    description: 'Atira duas vezes no mesmo turno',
    level: 6,
    effect: '+1 ataque por turno, -1 em precisão',
    type: 'active'
  },

  // Mago/Arcano
  {
    id: 'bola-fogo',
    name: 'Bola de Fogo',
    description: 'Lança uma bola de fogo em 2d6',
    level: 1,
    cost: 10,
    effect: '2d6 dano de fogo, Área de 2m',
    type: 'active'
  },
  {
    id: 'escudo-basico',
    name: 'Escudo Básico',
    description: 'Proteção mágica +2 CA',
    level: 1,
    cost: 5,
    effect: '+2 CA, Dura 3 turnos',
    type: 'active'
  }
];

// EVOLUÇÕES RACIAIS
export const raceEvolutions = {
  'humanos-aprimorados': [
    { level: 5, name: 'Força Aumentada', effect: '+2 em Força' },
    { level: 10, name: 'Resistência Máxima', effect: '+10 PV' },
    { level: 15, name: 'Reflexos de Herói', effect: '+2 em Iniciativa' }
  ],
  'alienigenas': [
    { level: 5, name: 'Adaptação Avançada', effect: '+1 em todos os atributos' },
    { level: 10, name: 'Forma Alternativa', effect: 'Pode mudar de forma 1x/dia' },
    { level: 15, name: 'Poder Cósmico', effect: '+3 em ataques energéticos' }
  ],
  'mutantes-biomcanicos': [
    { level: 5, name: 'Mutação Aprimorada', effect: '+1d4 de dano' },
    { level: 10, name: 'Regeneração Acelerada', effect: 'Cura 10 PV/turno' },
    { level: 15, name: 'Forma Suprema', effect: 'Pode se transformar em forma aprimorada' }
  ],
  'fantasmas-espiritos': [
    { level: 5, name: 'Intangibilidade Aprimorada', effect: 'Pode atravessar mais vezes' },
    { level: 10, name: 'Forma Etérea', effect: 'Pode atravessar ataques 1x/combate' },
    { level: 15, name: 'Viagem Sombria', effect: 'Teletransporte entre sombras' }
  ],
  'dragoes-hibridos': [
    { level: 5, name: 'Asas Desenvolvidas', effect: 'Voo permanente' },
    { level: 10, name: 'Sopro Aprimorado', effect: '+2d6 no dano do sopro' },
    { level: 15, name: 'Forma Dracônica Completa', effect: 'Transformação total em dragão' }
  ],
  'ciborgues-androides': [
    { level: 5, name: 'Upgrade Tecnológico', effect: '+1 em testes de Tecnologia' },
    { level: 10, name: 'Armadura Reforçada', effect: '+2 CA' },
    { level: 15, name: 'Inteligência Artificial', effect: 'Pode analisar inimigos automaticamente' }
  ],
  'seres-simbiontes': [
    { level: 5, name: 'Ligação Aprimorada', effect: '+10 PV' },
    { level: 10, name: 'Fusão Perfeita', effect: '+2 em todos os ataques' },
    { level: 15, name: 'Forma Híbrida Suprema', effect: 'Combina poderes de ambas as formas' }
  ],
  'magos-sobrenaturais': [
    { level: 5, name: 'Magia Aprimorada', effect: '+1 em feitiços' },
    { level: 10, name: 'Resistência Arcana', effect: '+3 CA contra magia' },
    { level: 15, name: 'Avatar Mágico', effect: 'Se torna um avatar de magia pura' }
  ],
  'criaturas-geneticas': [
    { level: 5, name: 'Instinto Aguçado', effect: '+2 em Percepção' },
    { level: 10, name: 'Evolução Genética', effect: '+2 em dois atributos' },
    { level: 15, name: 'Forma Perfeita', effect: 'Evolução genética completa' }
  ]
};
