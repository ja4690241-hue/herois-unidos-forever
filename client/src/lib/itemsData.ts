// Dados de Itens Especiais e Miraculous do Sistema Heróis Unidos

export interface Miraculous {
  id: string;
  name: string;
  emoji: string;
  basicPower: string;
  weapon: string;
  supremePower: string;
  weakness: string;
  theme: string;
}

export interface SpecialItem {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory' | 'magical' | 'tech';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  description: string;
  effect: string;
  cost?: number;
}

export interface TalismanPower {
  id: string;
  name: string;
  emoji: string;
  power: string;
  usage: string;
  weakness: string;
}

// MIRACULOUS - Itens Mágicos Especiais
export const miraculous: Miraculous[] = [
  {
    id: 'miraculous-joaninha',
    name: 'Miraculous da Joaninha',
    emoji: '🐞',
    theme: 'Criação & Sorte',
    basicPower: 'Reflexos Aprimorados (+4 em Reflexos)',
    weapon: 'Loio indestrutil (Alcance 9m)',
    supremePower: 'Sortudo – Pode criar qualquer objeto pequeno uma vez por transformação',
    weakness: 'Só pode usar o poder supremo uma vez por transformação'
  },
  {
    id: 'miraculous-gato',
    name: 'Miraculous do Gato',
    emoji: '🐱',
    theme: 'Destruição & Azar',
    basicPower: 'Super Agilidade (+6m de deslocamento, +2 em Saltos)',
    weapon: 'Bastão retrátil (Pode se estender até 6m)',
    supremePower: 'Cataclismo – Ao tocar algo, pode destruí-lo instantaneamente',
    weakness: 'O poder só pode ser usado uma vez por transformação e afeta seres vivos'
  },
  {
    id: 'miraculous-tartaruga',
    name: 'Miraculous da Tartaruga',
    emoji: '🐢',
    theme: 'Proteção & Defesa',
    basicPower: 'Pele Resistente (+4 CA)',
    weapon: 'Escudo indestrutil (Pode ser usado para defesa total por 1 turno)',
    supremePower: 'Sheller – Cria uma cúpula de energia impenetrável por 3 rodadas',
    weakness: 'A cúpula impede ataques do usuário também'
  },
  {
    id: 'miraculous-raposa',
    name: 'Miraculous da Raposa',
    emoji: '🦊',
    theme: 'Ilusão & Engano',
    basicPower: 'Enganar (+2 em testes de Enganação e Furtividade)',
    weapon: 'Flauta mágica (Amplifica ilusões)',
    supremePower: 'Mirage – Cria uma ilusão hiper-realista por 3 rodadas',
    weakness: 'A ilusão desaparece ao ser tocada'
  },
  {
    id: 'miraculous-cobra',
    name: 'Miraculous da Cobra',
    emoji: '🐍',
    theme: 'Tempo & Repetição',
    basicPower: 'Memória Aprimorada (+2 em Percepção e Reflexos)',
    weapon: 'Bracelete enfeitçado',
    supremePower: 'Segunda Chance – Volta até 6 segundos no tempo',
    weakness: 'Só pode usar o poder uma vez por transformação'
  },
  {
    id: 'miraculous-abelha',
    name: 'Miraculous da Abelha',
    emoji: '🐝',
    theme: 'Rapidez & Controle',
    basicPower: 'Ataque Preciso (+2 em ataques corpo a corpo)',
    weapon: 'Pente mágico (Consegue paralisar um alvo por 1 turno)',
    supremePower: 'Veneno Paralizante – Imobiliza um alvo por 3 rodadas',
    weakness: 'Afeta apenas um alvo por transformação'
  },
  {
    id: 'miraculous-dragao',
    name: 'Miraculous do Dragão',
    emoji: '🐉',
    theme: 'Elementos & Metamorfose',
    basicPower: 'Adaptação Elemental (+2 em testes relacionados ao ambiente)',
    weapon: 'Espada Dragão (Pode mudar de forma entre lança e chicote)',
    supremePower: 'Mudança Elemental – Pode alternar entre fogo, água e vento',
    weakness: 'Só pode trocar de elemento uma vez a cada 2 turnos'
  },
  {
    id: 'miraculous-aguia',
    name: 'Miraculous da Águia',
    emoji: '🦅',
    theme: 'Visão & Velocidade',
    basicPower: 'Olhos de Águia (+2 em Percepção, pode ver no escuro)',
    weapon: 'Garras retráteis',
    supremePower: 'Voo Relâmpago – Pode voar a alta velocidade por 1 minuto',
    weakness: 'Não pode parar de se mover enquanto estiver no ar'
  },
  {
    id: 'miraculous-borboleta',
    name: 'Miraculous da Borboleta',
    emoji: '🦋',
    theme: 'Criação de Vilões & Aliados',
    basicPower: 'Conexão Mental (Pode se comunicar telepaticamente com um alvo)',
    weapon: 'Broche místico (Amplifica influência)',
    supremePower: 'Akumatização – Concede poderes a um NPC em troca de controle parcial',
    weakness: 'Se o alvo resistir à influência, o usuário perde energia'
  },
  {
    id: 'miraculous-pavao',
    name: 'Miraculous do Pavão',
    emoji: '🦚',
    theme: 'Criação & Controle de Criaturas Mágicas',
    basicPower: 'Criação de Vilões (Pode criar criaturas mágicas)',
    weapon: 'Leque mágico',
    supremePower: 'Exaltação – Cria múltiplas criaturas mágicas para ajudar',
    weakness: 'As criaturas desaparecem ao final da transformação'
  }
];

// TALISMAS DO ZODÍACO CHINÊS
export const talismans: TalismanPower[] = [
  {
    id: 'talisman-rato',
    name: 'Talismã do Rato',
    emoji: '🐭',
    power: 'Animação de Objetos – Dá vida a objetos inanimados, permitindo que sigam ordens simples por 1d4+1 turnos',
    usage: 'Gasta 2 EP por objeto animado',
    weakness: 'Os objetos animados não possuem inteligência própria e podem agir de forma errática'
  },
  {
    id: 'talisman-boi',
    name: 'Talismã do Boi',
    emoji: '🐂',
    power: 'Força Sobrenatural – Concede Força sobre-humana, dobrando o dano corpo a corpo e permitindo erguer até 10 toneladas',
    usage: 'Ativação passiva',
    weakness: 'O usuário pode quebrar acidentalmente objetos frágeis ao tocá-los'
  },
  {
    id: 'talisman-tigre',
    name: 'Talismã do Tigre',
    emoji: '🐅',
    power: 'Equilíbrio Yin-Yang – Separa o usuário em duas versões de si mesmo – uma boa e outra má, ambas com 100% do poder original',
    usage: 'Duração de 1 minuto (10 turnos)',
    weakness: 'Ambas as metades agem independentemente e podem entrar em conflito'
  },
  {
    id: 'talisman-coelho',
    name: 'Talismã do Coelho',
    emoji: '🐇',
    power: 'Super Velocidade – Multiplica a velocidade do usuário por 5, permitindo ataques rápidos e esquivas relâmpago',
    usage: 'Ativação passiva',
    weakness: 'O usuário pode perder o controle ao se mover em alta velocidade'
  },
  {
    id: 'talisman-dragao',
    name: 'Talismã do Dragão',
    emoji: '🐉',
    power: 'Explosões de Energia – Dispara rajadas de energia flamejante (3d10 de dano em área de 3m)',
    usage: 'Gasta 5 EP por disparo',
    weakness: 'O usuário pode sofrer recuo da explosão'
  },
  {
    id: 'talisman-serpente',
    name: 'Talismã da Serpente',
    emoji: '🐍',
    power: 'Invisibilidade – O usuário se torna totalmente invisível por 1d6+2 turnos',
    usage: 'Gasta 3 EP por ativação',
    weakness: 'Qualquer ataque quebra a invisibilidade'
  },
  {
    id: 'talisman-cavalo',
    name: 'Talismã do Cavalo',
    emoji: '🐴',
    power: 'Velocidade Extrema – Aumenta o deslocamento em 12m e permite fazer 2 ações por turno',
    usage: 'Ativação passiva',
    weakness: 'Não pode usar ações defensivas enquanto se move'
  },
  {
    id: 'talisman-cabra',
    name: 'Talismã da Cabra',
    emoji: '🐐',
    power: 'Escalada Sobrenatural – Pode escalar qualquer superfície, mesmo vertical ou invertida',
    usage: 'Ativação passiva',
    weakness: 'Não funciona em superfícies extremamente lisas (vidro polido)'
  },
  {
    id: 'talisman-macaco',
    name: 'Talismã do Macaco',
    emoji: '🐵',
    power: 'Agilidade Acrobática – +4 em Acrobacia, pode fazer piruetas e esquivas impossíveis',
    usage: 'Ativação passiva',
    weakness: 'Reduz o dano corpo a corpo em -1'
  },
  {
    id: 'talisman-galo',
    name: 'Talismã do Galo',
    emoji: '🐓',
    power: 'Grito Sonic – Emite um grito que causa 2d8 de dano sônico em um cone de 6m',
    usage: 'Gasta 4 EP por uso',
    weakness: 'O usuário também sofre dano reduzido do seu próprio grito'
  },
  {
    id: 'talisman-cao',
    name: 'Talismã do Cão',
    emoji: '🐕',
    power: 'Olfato Aguçado – Pode rastrear qualquer criatura por seu cheiro até 1km de distância',
    usage: 'Ativação passiva',
    weakness: 'Cheiros fortes podem confundir o rastreamento'
  },
  {
    id: 'talisman-porco',
    name: 'Talismã do Porco',
    emoji: '🐷',
    power: 'Força Bruta – +3 em testes de Força, pode quebrar qualquer barreira não-mágica',
    usage: 'Ativação passiva',
    weakness: 'Reduz a Agilidade em -2'
  }
];

// ITENS ESPECIAIS E EQUIPAMENTOS
export const specialItems: SpecialItem[] = [
  // Armas
  {
    id: 'espada-magica',
    name: 'Espada Mágica',
    type: 'weapon',
    rarity: 'rare',
    description: 'Uma espada que brilha com magia azul. Causa +1d4 de dano mágico adicional.',
    effect: '+1d4 dano mágico, +1 em ataques',
    cost: 500
  },
  {
    id: 'arco-velocidade',
    name: 'Arco da Velocidade',
    type: 'weapon',
    rarity: 'epic',
    description: 'Um arco que permite disparar flechas em velocidade sobrenatural.',
    effect: 'Permite 2 ataques por turno, +2 em precisão',
    cost: 1000
  },
  {
    id: 'machado-fogo',
    name: 'Machado do Fogo',
    type: 'weapon',
    rarity: 'rare',
    description: 'Um machado envolvido em chamas eternas.',
    effect: '+2d6 dano de fogo, Causa queimadura (1d4 dano/turno)',
    cost: 750
  },

  // Armaduras
  {
    id: 'armadura-dragao',
    name: 'Armadura de Dragão',
    type: 'armor',
    rarity: 'epic',
    description: 'Armadura feita de escamas de dragão. Oferece proteção máxima.',
    effect: '+4 CA, Resistência a fogo',
    cost: 2000
  },
  {
    id: 'capa-invisibilidade',
    name: 'Capa da Invisibilidade',
    type: 'armor',
    rarity: 'legendary',
    description: 'Uma capa que torna o usuário invisível.',
    effect: 'Invisibilidade total, +3 em Furtividade',
    cost: 5000
  },
  {
    id: 'escudo-magico',
    name: 'Escudo Mágico',
    type: 'armor',
    rarity: 'rare',
    description: 'Um escudo que absorve magia.',
    effect: '+2 CA, +3 contra ataques mágicos',
    cost: 800
  },

  // Acessórios
  {
    id: 'anel-poder',
    name: 'Anel do Poder',
    type: 'accessory',
    rarity: 'epic',
    description: 'Um anel que amplifica os poderes do usuário.',
    effect: '+2 em todos os atributos, +1 em dano',
    cost: 1500
  },
  {
    id: 'amuleto-protecao',
    name: 'Amuleto de Proteção',
    type: 'accessory',
    rarity: 'uncommon',
    description: 'Um amuleto que protege contra mal.',
    effect: '+1 CA, Resistência a magia negra',
    cost: 300
  },
  {
    id: 'corrente-velocidade',
    name: 'Corrente da Velocidade',
    type: 'accessory',
    rarity: 'rare',
    description: 'Uma corrente que aumenta a velocidade do usuário.',
    effect: '+3m de deslocamento, +2 em Iniciativa',
    cost: 600
  },

  // Itens Mágicos
  {
    id: 'pocao-cura',
    name: 'Poção de Cura',
    type: 'magical',
    rarity: 'common',
    description: 'Uma poção que cura ferimentos.',
    effect: 'Recupera 2d8 PV',
    cost: 100
  },
  {
    id: 'pocao-forca',
    name: 'Poção de Força',
    type: 'magical',
    rarity: 'uncommon',
    description: 'Uma poção que aumenta a força temporariamente.',
    effect: '+4 em Força por 1 hora',
    cost: 250
  },
  {
    id: 'pergaminho-teleporte',
    name: 'Pergaminho de Teleporte',
    type: 'magical',
    rarity: 'rare',
    description: 'Um pergaminho que permite teletransporte.',
    effect: 'Teleporta até 30m, Uso único',
    cost: 400
  },

  // Itens Tecnológicos
  {
    id: 'gadget-comunicacao',
    name: 'Gadget de Comunicação',
    type: 'tech',
    rarity: 'uncommon',
    description: 'Um dispositivo que permite comunicação à longa distância.',
    effect: 'Comunicação sem limite de distância, +1 em Investigação',
    cost: 350
  },
  {
    id: 'armadura-tech',
    name: 'Armadura Tecnológica',
    type: 'tech',
    rarity: 'epic',
    description: 'Uma armadura de alta tecnologia com sistemas avançados.',
    effect: '+3 CA, Voo limitado, +2 em testes de Tecnologia',
    cost: 2500
  },
  {
    id: 'drone-combate',
    name: 'Drone de Combate',
    type: 'tech',
    rarity: 'rare',
    description: 'Um drone que ajuda em combate.',
    effect: 'Drone faz 1d8 de dano por turno, pode ser controlado remotamente',
    cost: 1200
  }
];

// EVOLUÇÕES E UPGRADES DE ITENS
export const itemEvolutions = {
  'espada-magica': [
    { level: 5, name: 'Espada Mágica +1', effect: '+2d4 dano mágico' },
    { level: 10, name: 'Espada Mágica +2', effect: '+3d4 dano mágico, +2 em ataques' },
    { level: 15, name: 'Espada Lendária', effect: '+4d4 dano mágico, Crítico em 19-20' }
  ],
  'armadura-dragao': [
    { level: 5, name: 'Armadura de Dragão +1', effect: '+5 CA' },
    { level: 10, name: 'Armadura de Dragão +2', effect: '+6 CA, Imunidade a fogo' },
    { level: 15, name: 'Armadura Dracônica Suprema', effect: '+7 CA, Imunidade a todos os elementos' }
  ]
};
