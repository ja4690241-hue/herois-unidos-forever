export interface Skill {
  id: string;
  name: string;
  attribute: string;
  description: string;
}

export const skills: Skill[] = [
  { id: "atletismo", name: "Atletismo", attribute: "Força", description: "Escalar, saltar, correr e atividades físicas brutas." },
  { id: "acrobacia", name: "Acrobacia", attribute: "Agilidade", description: "Equilíbrio, cambalhotas e manobras ágeis." },
  { id: "furtividade", name: "Furtividade", attribute: "Agilidade", description: "Esconder-se e mover-se silenciosamente." },
  { id: "reflexos", name: "Reflexos", attribute: "Agilidade", description: "Reagir rapidamente a perigos e esquivar." },
  { id: "engenharia", name: "Engenharia", attribute: "Inteligência", description: "Construir, consertar e entender máquinas." },
  { id: "tecnologia", name: "Tecnologia", attribute: "Inteligência", description: "Hackear, usar sistemas e dispositivos avançados." },
  { id: "investigacao", name: "Investigação", attribute: "Inteligência", description: "Encontrar pistas e resolver mistérios." },
  { id: "percepcao", name: "Percepção", attribute: "Vontade", description: "Notar detalhes, sons e presenças escondidas." },
  { id: "sobrevivencia", name: "Sobrevivência", attribute: "Vontade", description: "Rastrear, caçar e sobreviver em ambientes selvagens." },
  { id: "medicina", name: "Medicina", attribute: "Inteligência", description: "Tratar ferimentos, doenças e entender biologia." },
  { id: "arcano", name: "Conhecimento Arcano", attribute: "Inteligência", description: "Entender magia, rituais e itens místicos." },
  { id: "intuicao", name: "Intuição", attribute: "Vontade", description: "Perceber intenções e mentiras de outros." },
  { id: "intimidacao", name: "Intimidação", attribute: "Carisma", description: "Coagir e assustar outros através da força ou presença." },
  { id: "persuasao", name: "Persuasão", attribute: "Carisma", description: "Convencer outros através de diplomacia e lábia." },
  { id: "enganacao", name: "Enganação", attribute: "Carisma", description: "Mentir e enganar sem ser percebido." },
  { id: "historia", name: "História", attribute: "Inteligência", description: "Conhecimento sobre o passado e lendas." },
  { id: "religiao", name: "Religião", attribute: "Vontade", description: "Conhecimento sobre deuses, cultos e mitos." },
  { id: "pilotagem", name: "Pilotagem", attribute: "Agilidade", description: "Operar veículos terrestres, aéreos ou espaciais." }
];
