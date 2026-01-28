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
