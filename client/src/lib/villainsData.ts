export interface Villain {
  id: string;
  name: string;
  title: string;
  icon: string;
  difficulty: "Médio" | "Difícil" | "Extremo" | "Lendário";
  description: string;
  stats: {
    hp: number;
    ca: number;
    attack: string;
    energy: number;
  };
  abilities: {
    name: string;
    effect: string;
  }[];
}

export const villains: Villain[] = [
  {
    id: "v-hibrido-supremo",
    name: "Híbrido Supremo",
    title: "O Ápice da Evolução",
    icon: "🧬",
    difficulty: "Lendário",
    description: "Um ser que atingiu a perfeição genética, combinando traços de múltiplas raças e poderes divinos.",
    stats: {
      hp: 1500,
      ca: 28,
      attack: "+18 (4d12 + 10)",
      energy: 500
    },
    abilities: [
      {
        name: "Adaptação Reativa",
        effect: "Ganha resistência ao último tipo de dano recebido até o próximo turno."
      },
      {
        name: "Aniquilação Molecular",
        effect: "Disparo de energia que ignora resistências e causa 10d10 de dano (Custo: 50 EP)."
      },
      {
        name: "Presença Dominadora",
        effect: "Inimigos próximos devem passar em teste de Vontade (DC 20) ou ficarão paralisados por medo."
      }
    ]
  },
  {
    id: "v-general-mutante",
    name: "General Mutante",
    title: "Líder da Resistência",
    icon: "🎖️",
    difficulty: "Extremo",
    description: "Um mutante veterano de guerra com pele impenetrável e força descomunal.",
    stats: {
      hp: 800,
      ca: 24,
      attack: "+12 (3d10 + 8)",
      energy: 200
    },
    abilities: [
      {
        name: "Pele de Titânio",
        effect: "Reduz todo dano físico recebido em 10 pontos."
      },
      {
        name: "Grito de Guerra",
        effect: "Aliados ganham +2 em ataques e CA por 3 rodadas."
      }
    ]
  },
  {
    id: "v-ia-corrompida",
    name: "I.A. Corrompida",
    title: "O Vírus de Sistema",
    icon: "💻",
    difficulty: "Difícil",
    description: "Uma inteligência artificial que tomou controle de um exército de drones e máquinas de guerra.",
    stats: {
      hp: 450,
      ca: 18,
      attack: "+10 (2d8 + 5)",
      energy: 300
    },
    abilities: [
      {
        name: "Sobrecarga Digital",
        effect: "Desativa equipamentos tecnológicos e cibernéticos em área por 1 turno."
      },
      {
        name: "Enxame de Drones",
        effect: "Invoca 3 drones de ataque com 50 HP cada."
      }
    ]
  }
];
