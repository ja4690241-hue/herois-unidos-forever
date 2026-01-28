// Advanced Game Data: Progression, Talents, Spells, Artifacts, Vehicles

export interface ClassProgression {
  classId: string;
  className: string;
  icon: string;
  levels: {
    level: number;
    ability: string;
    description: string;
  }[];
}

export interface Spell {
  id: string;
  name: string;
  level: number;
  damage: string;
  range: string;
  duration: string;
  description: string;
  cost: number; // EP cost
  icon: string;
}

export interface Artifact {
  id: string;
  name: string;
  type: "artefato" | "implante";
  effect: string;
  bonus: string[];
  rarity: "comum" | "raro" | "lendário";
  icon: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: "terrestre" | "aéreo" | "aquático" | "espacial";
  speed: number;
  capacity: number;
  specialEffect: string;
  icon: string;
}

export const classProgressions: ClassProgression[] = [
  {
    classId: "lutador-corpo-a-corpo",
    className: "Lutador Corpo a Corpo",
    icon: "🥊",
    levels: [
      { level: 1, ability: "Golpe Poderoso", description: "Dano aumentado em ataques corpo a corpo" },
      { level: 2, ability: "Resistência Aprimorada", description: "Redução de dano físico em 1 ponto" },
      { level: 3, ability: "Contra-Ataque", description: "Pode contra-atacar após esquivar" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Ataque Extra", description: "Faça um ataque adicional por turno" },
      { level: 6, ability: "Investida Brutal", description: "Avance 6m e ataque com +1d4 dano" },
      { level: 7, ability: "Postura Defensiva", description: "Ganhe +2 CA por 1 turno" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Golpe Devastador", description: "Crítico em 18-20 com dano triplicado" },
      { level: 10, ability: "Fúria Suprema", description: "Aumente dano em 3d6 por 3 turnos" },
      { level: 11, ability: "Ataque Extra 2", description: "Faça dois ataques adicionais por turno" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Reflexos Aprimorados", description: "+2 em testes de Reflexos" },
      { level: 14, ability: "Escudo Vivo", description: "Reduza dano recebido em 5 por turno" },
      { level: 15, ability: "Forma Suprema", description: "Transforme-se em forma suprema por 3 turnos" },
    ],
  },
  {
    classId: "combatente-agil",
    className: "Combatente Ágil",
    icon: "🏃",
    levels: [
      { level: 1, ability: "Desvio Rápido", description: "Bônus ao esquivar de ataques" },
      { level: 2, ability: "Ataque Relâmpago", description: "Pode atacar e se mover antes do inimigo" },
      { level: 3, ability: "Pirueta", description: "Se mover 3m como ação bônus" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Ataque Duplo", description: "Faça dois ataques por turno" },
      { level: 6, ability: "Dança Letal", description: "Faça 2 ataques como ação bônus" },
      { level: 7, ability: "Invisibilidade Parcial", description: "Fique invisível por 1 turno" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Reflexos Aguçados", description: "+3 em testes de Reflexos" },
      { level: 10, ability: "Sombra Perfeita", description: "Quase impossível de detectar" },
      { level: 11, ability: "Ataque Triplo", description: "Faça três ataques por turno" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Velocidade Extrema", description: "Dobra velocidade de movimento" },
      { level: 14, ability: "Forma Espectral", description: "Atravesse objetos por 1 turno" },
      { level: 15, ability: "Mestre da Velocidade", description: "Faça 4 ataques por turno" },
    ],
  },
  {
    classId: "blaster",
    className: "Blaster",
    icon: "🏹",
    levels: [
      { level: 1, ability: "Tiro Preciso", description: "+2 em ataques a distância" },
      { level: 2, ability: "Postura Defensiva", description: "Ganhe +2 CA por 1 turno" },
      { level: 3, ability: "Mira Avançada", description: "Dobro de alcance em armas" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Ataque Extra", description: "Faça um ataque adicional" },
      { level: 6, ability: "Disparo Rápido", description: "Ataque como ação bônus" },
      { level: 7, ability: "Perfuração", description: "Ignora 3 pontos de CA" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Bater e Correr", description: "+1 deslocamento após atacar" },
      { level: 10, ability: "Sobrecarregar Munição", description: "Dano dobrado ao gastar EP" },
      { level: 11, ability: "Ataque Extra 2", description: "Faça dois ataques adicionais" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Disparo Letal", description: "+2 de dano em ataques" },
      { level: 14, ability: "Disparo Triplo", description: "Dispare contra 3 alvos" },
      { level: 15, ability: "Modo Sniper", description: "Dano triplicado por 1 turno" },
    ],
  },
  {
    classId: "mago-arcano",
    className: "Mago/Arcano",
    icon: "🔮",
    levels: [
      { level: 1, ability: "Magia Inicial", description: "Aprende 3 magias" },
      { level: 2, ability: "Aprimoramento Mágico", description: "+1 magia de nível 2" },
      { level: 3, ability: "Feitiço Instantâneo", description: "Lançar magia como ação bônus" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Aprimoramento Mágico", description: "+1 magia de nível 3" },
      { level: 6, ability: "Defesa Arcana", description: "Redução de dano mágico em 3" },
      { level: 7, ability: "Controle Elemental", description: "Escolha novo tipo de dano" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Contra-Feitiço", description: "Anula 1 magia do inimigo" },
      { level: 10, ability: "Absorção Arcana", description: "Recupera 5 EP ao sofrer dano" },
      { level: 11, ability: "Magia Avançada", description: "+1 magia de nível 4" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Magia Avançada", description: "+1 magia de nível 5" },
      { level: 14, ability: "Magia Potencializada", description: "Dobrar dano de uma magia" },
      { level: 15, ability: "Magia Suprema", description: "Lançar feitiço sem gastar EP" },
    ],
  },
  {
    classId: "ciborgue-engenheiro",
    className: "Ciborgue/Engenheiro",
    icon: "🤖",
    levels: [
      { level: 1, ability: "Modo Turbo", description: "Aumento de velocidade e força" },
      { level: 2, ability: "Hacking Básico", description: "Desativa um dispositivo" },
      { level: 3, ability: "Drone Auxiliar", description: "Invoca um drone" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Modo Turbo Avançado", description: "Aumenta força e velocidade" },
      { level: 6, ability: "Hacking Avançado", description: "Controla um dispositivo" },
      { level: 7, ability: "Escudo Energético", description: "Cria escudo de proteção" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Pulso EMP", description: "Desativa múltiplos dispositivos" },
      { level: 10, ability: "Modo Turbo Supremo", description: "Máxima potência por 1 turno" },
      { level: 11, ability: "Hacking Supremo", description: "Controla múltiplos dispositivos" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Armadura Adaptativa", description: "+3 CA permanente" },
      { level: 14, ability: "Arma Integrada", description: "Arma embutida no corpo" },
      { level: 15, ability: "Forma Suprema", description: "Transformação completa" },
    ],
  },
  {
    classId: "fantasma-sombra",
    className: "Fantasma/Sombra",
    icon: "👻",
    levels: [
      { level: 1, ability: "Intangibilidade", description: "Atravessa paredes" },
      { level: 2, ability: "Voo", description: "Pode se mover no ar" },
      { level: 3, ability: "Grito Fantasma", description: "Onda sônica destrutiva" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Forma Etérea", description: "Fica etéreo e imune" },
      { level: 6, ability: "Toque Gelado", description: "Ataque causa dano especial" },
      { level: 7, ability: "Invisibilidade", description: "Fica invisível" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Viagem Sombria", description: "Teletransporte entre sombras" },
      { level: 10, ability: "Possessão", description: "Controla um inimigo" },
      { level: 11, ability: "Forma Sombria", description: "Transformação sombria" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Dreno de Vida", description: "Drena HP de inimigos" },
      { level: 14, ability: "Escuridão Absoluta", description: "Cria escuridão total" },
      { level: 15, ability: "Rei das Sombras", description: "Controla todas as sombras" },
    ],
  },
  {
    classId: "predador-assassino",
    className: "Predador/Assassino",
    icon: "🔪",
    levels: [
      { level: 1, ability: "Ataque Furtivo", description: "Dano extra ao atacar desprevenido" },
      { level: 2, ability: "Camuflagem", description: "Pode se esconder facilmente" },
      { level: 3, ability: "Golpe Crítico", description: "Crítico em 18-20" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Assassinato", description: "Ataque furtivo causa 3x dano" },
      { level: 6, ability: "Rastreamento", description: "+3 em Rastreamento" },
      { level: 7, ability: "Sentir Presa", description: "Sente inimigos a 20m" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Morte Instantânea", description: "Mata inimigos com menos de 20 HP" },
      { level: 10, ability: "Caçador Supremo", description: "Não pode ser rastreado" },
      { level: 11, ability: "Ataque Triplo", description: "Faça três ataques" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Predador Perfeito", description: "Crítico em 17-20" },
      { level: 14, ability: "Invisibilidade Perfeita", description: "Invisível sempre" },
      { level: 15, ability: "Morte Negra", description: "Um ataque mata qualquer inimigo" },
    ],
  },
  {
    classId: "guardiao-suporte",
    className: "Guardião de Suporte",
    icon: "🛡️",
    levels: [
      { level: 1, ability: "Aura Protetora", description: "Aura de 6m concede +1 CA" },
      { level: 2, ability: "Toque Restaurador", description: "Cura 1d8 + Vontade" },
      { level: 3, ability: "Escudo Divino", description: "Absorve dano para aliados" },
      { level: 4, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 5, ability: "Aura Aprimorada", description: "Aura concede +2 CA" },
      { level: 6, ability: "Cura Aprimorada", description: "Cura 2d8 + Vontade" },
      { level: 7, ability: "Proteção de Grupo", description: "Protege múltiplos aliados" },
      { level: 8, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 9, ability: "Aura Suprema", description: "Aura concede +3 CA" },
      { level: 10, ability: "Ressurreição", description: "Ressuscita um aliado" },
      { level: 11, ability: "Cura em Massa", description: "Cura múltiplos aliados" },
      { level: 12, ability: "+2 em um Atributo", description: "Aumente qualquer atributo em 2" },
      { level: 13, ability: "Proteção Absoluta", description: "Imunidade a dano" },
      { level: 14, ability: "Bênção Divina", description: "Concede bônus a aliados" },
      { level: 15, ability: "Guardião Supremo", description: "Proteção perfeita" },
    ],
  },
];

export const spells: Spell[] = [
  {
    id: "lanca-fogo",
    name: "Lança de Fogo",
    level: 1,
    damage: "2d6",
    range: "20m",
    duration: "Instantâneo",
    description: "Lança uma bola de fogo que explode no alvo",
    cost: 5,
    icon: "🔥",
  },
  {
    id: "raio-congelante",
    name: "Raio Congelante",
    level: 2,
    damage: "4d6",
    range: "30m",
    duration: "Instantâneo",
    description: "Congela o alvo e reduz velocidade",
    cost: 8,
    icon: "❄️",
  },
  {
    id: "lanca-solar",
    name: "Lança Solar",
    level: 3,
    damage: "5d6",
    range: "40m",
    duration: "Instantâneo",
    description: "Ataque radiante devastador",
    cost: 12,
    icon: "☀️",
  },
  {
    id: "escudo-magico",
    name: "Escudo Mágico",
    level: 1,
    damage: "0",
    range: "Toque",
    duration: "3 turnos",
    description: "Proteção mágica +2 CA",
    cost: 3,
    icon: "✨",
  },
  {
    id: "cura-basica",
    name: "Cura Básica",
    level: 1,
    damage: "0",
    range: "10m",
    duration: "Instantâneo",
    description: "Cura 1d8 + Inteligência",
    cost: 4,
    icon: "💚",
  },
  {
    id: "teleporte",
    name: "Teletransporte",
    level: 2,
    damage: "0",
    range: "30m",
    duration: "Instantâneo",
    description: "Se move instantaneamente",
    cost: 7,
    icon: "✨",
  },
  {
    id: "invisibilidade",
    name: "Invisibilidade",
    level: 2,
    damage: "0",
    range: "Toque",
    duration: "10 turnos",
    description: "Fica invisível",
    cost: 6,
    icon: "👻",
  },
  {
    id: "explosao-arcana",
    name: "Explosão Arcana",
    level: 3,
    damage: "6d6",
    range: "20m",
    duration: "Instantâneo",
    description: "Explosão mágica em área",
    cost: 15,
    icon: "💥",
  },
];

export const artifacts: Artifact[] = [
  {
    id: "omni-nucleo",
    name: "Omni-Núcleo",
    type: "artefato",
    effect: "Permite transformar-se em diferentes formas alienígenas",
    bonus: ["+2 em todos os atributos", "Transformação 1x por combate"],
    rarity: "lendário",
    icon: "🔵",
  },
  {
    id: "miraculous",
    name: "Miraculous",
    type: "artefato",
    effect: "Dá habilidades mágicas",
    bonus: ["+3 em Magia", "+10 EP"],
    rarity: "lendário",
    icon: "💎",
  },
  {
    id: "espada-dimensional",
    name: "Espada Dimensional",
    type: "artefato",
    effect: "Corta através do espaço-tempo",
    bonus: ["+3 em dano", "Ignora armadura"],
    rarity: "lendário",
    icon: "⚔️",
  },
  {
    id: "luvas-titanicas",
    name: "Luvas Titânicas",
    type: "artefato",
    effect: "Concede força sobre-humana",
    bonus: ["+5 Força", "+2d6 dano"],
    rarity: "lendário",
    icon: "👊",
  },
  {
    id: "anel-celestial",
    name: "Anel Celestial",
    type: "artefato",
    effect: "Permite controlar a gravidade",
    bonus: ["+3 em Inteligência", "Levitação"],
    rarity: "lendário",
    icon: "💍",
  },
  {
    id: "olhos-ciberneticos",
    name: "Olhos Cibernéticos",
    type: "implante",
    effect: "Visão noturna e infravermelha",
    bonus: ["+2 em Percepção", "Visão no escuro"],
    rarity: "raro",
    icon: "👁️",
  },
  {
    id: "pele-titanio",
    name: "Pele de Titânio",
    type: "implante",
    effect: "Redução de dano físico em 3 pontos",
    bonus: ["+3 CA", "Reduz dano em 3"],
    rarity: "raro",
    icon: "🛡️",
  },
  {
    id: "coracao-energetico",
    name: "Coração Energético",
    type: "implante",
    effect: "Regenera 5 HP por turno",
    bonus: ["+5 HP/turno", "+20 HP máximo"],
    rarity: "raro",
    icon: "❤️",
  },
  {
    id: "processador-neural",
    name: "Processador Neural",
    type: "implante",
    effect: "+2 em testes de Inteligência e Reflexos",
    bonus: ["+2 Inteligência", "+2 Reflexos"],
    rarity: "raro",
    icon: "🧠",
  },
  {
    id: "pernas-hidraulicas",
    name: "Pernas Hidráulicas",
    type: "implante",
    effect: "Dobra a velocidade de movimento",
    bonus: ["+2 Velocidade", "Pulo 3x mais alto"],
    rarity: "raro",
    icon: "🦵",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: "moto-veloztech",
    name: "Moto VelozTech",
    type: "terrestre",
    speed: 200,
    capacity: 1,
    specialEffect: "Pode andar em paredes por 2 turnos",
    icon: "🏎️",
  },
  {
    id: "carro-blindado",
    name: "Carro Blindado Aegis",
    type: "terrestre",
    speed: 150,
    capacity: 4,
    specialEffect: "Reduz 50% do dano de explosões",
    icon: "🚗",
  },
  {
    id: "trax",
    name: "T.R.A.X",
    type: "terrestre",
    speed: 80,
    capacity: 6,
    specialEffect: "Canhão embutido (4d10 dano)",
    icon: "🚙",
  },
  {
    id: "jato-furtivo",
    name: "Jato Furtivo Shadow",
    type: "aéreo",
    speed: 1200,
    capacity: 2,
    specialEffect: "Invisível a radares",
    icon: "✈️",
  },
  {
    id: "drone-striker",
    name: "Drone de Combate Striker",
    type: "aéreo",
    speed: 500,
    capacity: 0,
    specialEffect: "Metralhadora de energia (2d8)",
    icon: "🚁",
  },
  {
    id: "helicoptero-gaviao",
    name: "Helicóptero Gavião",
    type: "aéreo",
    speed: 600,
    capacity: 6,
    specialEffect: "Guincho para resgates",
    icon: "🚁",
  },
  {
    id: "submarino-leviatan",
    name: "Submarino Leviatã",
    type: "aquático",
    speed: 100,
    capacity: 10,
    specialEffect: "Pode ficar invisível debaixo d'água",
    icon: "🌊",
  },
  {
    id: "jet-ski-cyclone",
    name: "Jet Ski Cyclone",
    type: "aquático",
    speed: 180,
    capacity: 2,
    specialEffect: "Pode andar na superfície da água",
    icon: "🌊",
  },
  {
    id: "nave-estelar",
    name: "Nave Estelar Fênix",
    type: "espacial",
    speed: 30000,
    capacity: 6,
    specialEffect: "Pode realizar saltos hiperespaciais",
    icon: "🚀",
  },
  {
    id: "caca-estelar",
    name: "Caça Estelar Raijin",
    type: "espacial",
    speed: 50000,
    capacity: 6,
    specialEffect: "Escudo de plasma e lasers duplos",
    icon: "🚀",
  },
];
