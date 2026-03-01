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

export const backgrounds: Background[] = [
  {
    id: "cientista-genial",
    name: "Cientista Genial",
    emoji: "🧪",
    description: "Você sempre esteve à frente do seu tempo, criando invenções inovadoras ou descobrindo segredos do universo.",
    skills: ["Investigação", "Tecnologia"],
    equipment: ["Ferramentas científicas", "Tablet de dados", "Laboratório portátil"],
    specialAbility: "Mente Brilhante",
    abilityDescription: "Você pode gastar 1 ponto de energia para entender rapidamente o funcionamento de qualquer tecnologia ou criatura desconhecida."
  },
  {
    id: "guerreiro-elite",
    name: "Guerreiro de Elite",
    emoji: "⚔️",
    description: "Treinado desde jovem para a batalha, você conhece os caminhos da guerra e da disciplina.",
    skills: ["Atletismo", "Intimidação"],
    equipment: ["Armadura leve", "Espada de treinamento", "Medalhão de guerra"],
    specialAbility: "Reflexos Rápidos",
    abilityDescription: "Você pode rolar um teste de Reflexos com vantagem uma vez por descanso longo."
  },
  {
    id: "escolhido-poder",
    name: "Escolhido por um Poder Maior",
    emoji: "✨",
    description: "O destino traçou um caminho especial para você, e forças misteriosas influenciam sua jornada.",
    skills: ["Religião", "Intuição"],
    equipment: ["Amuleto sagrado", "Livro antigo de profecias", "Túnica mística"],
    specialAbility: "Visões do Futuro",
    abilityDescription: "Uma vez por dia, você pode fazer uma pergunta ao mestre e receber uma dica enigmática sobre o futuro."
  },
  {
    id: "agente-secreto",
    name: "Agente Secreto",
    emoji: "🕵️",
    description: "Missões clandestinas, espionagem e combate nas sombras fazem parte do seu passado.",
    skills: ["Furtividade", "Enganação"],
    equipment: ["Comunicações criptografadas", "Traje camuflado", "Arma discreta"],
    specialAbility: "Cobertura Perfeita",
    abilityDescription: "Você pode se esconder em plena luz do dia uma vez por descanso curto."
  },
  {
    id: "aventureiro-espacial",
    name: "Aventureiro Espacial",
    emoji: "🚀",
    description: "Você já explorou os confins do espaço e encontrou mistérios além da imaginação.",
    skills: ["Pilotagem", "Sobrevivência"],
    equipment: ["Traje pressurizado", "Comunicador interestelar", "Mapa galáctico"],
    specialAbility: "Conhecimento Cósmico",
    abilityDescription: "Você sempre sabe onde está e pode identificar espécies alienígenas comuns sem testes."
  },
  {
    id: "ex-vilao",
    name: "Ex-Vilão Redimido",
    emoji: "😈",
    description: "Seu passado sombrio está atrás de você, mas sua experiência ainda é uma arma poderosa.",
    skills: ["Intimidação", "Persuasão"],
    equipment: ["Relíquia de seu passado vilanesco", "Capa escura", "Máscara antiga"],
    specialAbility: "Sombra do Passado",
    abilityDescription: "Uma vez por dia, você pode convencer um inimigo de que ainda é um vilão, fazendo-o hesitar ou revelar informações."
  },
  {
    id: "humano-comum",
    name: "Humano Comum (Ou Quase)",
    emoji: "🤔",
    description: "Você é apenas uma pessoa normal… Ou pelo menos era, até entrar nesse mundo de heróis.",
    skills: ["Persuasão", "Percepção"],
    equipment: ["Smartphone", "Carteira de identidade", "Uma lembrança de casa"],
    specialAbility: "Força de Vontade",
    abilityDescription: "Você pode substituir qualquer teste de atributo por um teste de Carisma uma vez por descanso longo."
  },
  {
    id: "portador-artefato",
    name: "Portador de um Artefato Poderoso",
    emoji: "🏆",
    description: "Você encontrou ou foi escolhido por um artefato de imenso poder, que mudou sua vida para sempre.",
    skills: ["Arcano", "Investigação"],
    equipment: ["Artefato misterioso (Omnitrix, Miraculous, etc.)", "Diário de anotações", "Luvas especiais"],
    specialAbility: "Sinergia com o Artefato",
    abilityDescription: "Você pode gastar 1 ponto de energia para ativar uma habilidade única do seu artefato por 1 turno."
  },
  {
    id: "organizacao-secreta",
    name: "Criado por uma Organização Secreta",
    emoji: "🏛",
    description: "Desde jovem, você foi moldado por uma instituição misteriosa, seja para o bem ou para o mal.",
    skills: ["Intimidação", "Investigação"],
    equipment: ["Identificação da organização", "Traje especial", "Contato anônimo"],
    specialAbility: "Treinamento Secreto",
    abilityDescription: "Escolha uma perícia; você ganha proficiência nela e pode rolar com vantagem uma vez por descanso longo."
  },
  {
    id: "mundo-perdido",
    name: "Sobrevivente de um Mundo Perdido",
    emoji: "🌋",
    description: "Você veio de uma realidade alternativa, um reino perdido ou um planeta destruído.",
    skills: ["Sobrevivência", "Intuição"],
    equipment: ["Arma primitiva ou exótica", "Fragmento do seu mundo", "Mapa antigo"],
    specialAbility: "Vontade de Ferro",
    abilityDescription: "Você pode gastar 1 ponto de energia para rolar novamente um teste de resistência contra medo ou encanto."
  },
  {
    id: "estudante-magia",
    name: "Estudante de Magia ou Ciências Ocultas",
    emoji: "📜",
    description: "Você dedicou sua vida ao estudo dos segredos do universo, seja magia, ciência ou ambos.",
    skills: ["Arcano", "História"],
    equipment: ["Grimório ou caderno de anotações", "Conjunto de runas", "Óculos de leitura"],
    specialAbility: "Conhecimento Proibido",
    abilityDescription: "Você pode gastar 1 ponto de energia para lembrar de uma informação obscura sobre um ser, local ou fenômeno sobrenatural."
  },
  {
    id: "piloto-elite",
    name: "Piloto de Elite",
    emoji: "🏎",
    description: "Seja no ar, na terra ou no espaço, ninguém pilota como você.",
    skills: ["Pilotagem", "Reflexos"],
    equipment: ["Chave de um veículo especial", "Traje de piloto", "Óculos de proteção"],
    specialAbility: "Reação Relâmpago",
    abilityDescription: "Você pode gastar 1 ponto de energia para agir primeiro na ordem de iniciativa."
  },
  {
    id: "detetive-paranormal",
    name: "Detetive Paranormal",
    emoji: "👻",
    description: "Você investiga eventos inexplicáveis, lidando com o que a maioria considera lendas ou boatos.",
    skills: ["Percepção", "Investigação"],
    equipment: ["Gravador de voz", "Lanterna UV", "Kit de exorcismo"],
    specialAbility: "Olho para o Oculto",
    abilityDescription: "Você pode gastar 1 ponto de energia para ver criaturas invisíveis ou detectar magia por 1 minuto."
  },
  {
    id: "humano-modificado",
    name: "Humano Modificado por Experimento",
    emoji: "🧬",
    description: "Seu corpo foi alterado, seja por acidente, ciência ou intenção, te dando habilidades únicas.",
    skills: ["Medicina", "Reflexos"],
    equipment: ["Amostra de DNA alterado", "Equipamento médico improvisado", "Diário de registros"],
    specialAbility: "Regeneração Parcial",
    abilityDescription: "Uma vez por descanso curto, você pode recuperar 1d10 pontos de vida como ação bônus."
  },
  {
    id: "experimento-fracassado",
    name: "Experimento Fracassado",
    emoji: "🦠",
    description: "Você foi criado, alterado ou aprimorado por mãos ambiciosas — mas algo deu errado.",
    skills: ["Medicina", "Furtividade"],
    equipment: ["Frasco com substância instável", "Registro incompleto", "Uniforme de laboratório"],
    specialAbility: "Instabilidade Mutagênica",
    abilityDescription: "Gastar 1 EP para vantagem em resistência de Constituição ou +1d4 dano. Rolar 1d6: se 1, sofre 1d4 de dano."
  },
  {
    id: "guardiao-selvagem",
    name: "Guardião Selvagem",
    emoji: "🌲",
    description: "Você cresceu em meio à natureza indomada, protegendo florestas, montanhas ou ruínas esquecidas.",
    skills: ["Sobrevivência", "Atletismo"],
    equipment: ["Arma rústica", "Capa de camuflagem natural", "Talismã protetor"],
    specialAbility: "Instinto Primitivo",
    abilityDescription: "Você pode gastar 1 ponto de energia para detectar automaticamente criaturas escondidas num raio de 12 metros."
  },
  {
    id: "anti-heroi",
    name: "Anti-Herói",
    emoji: "🗡",
    description: "Você luta pelo bem... mas do seu jeito. Suas ações nem sempre são nobres, mas seus resultados são inegáveis.",
    skills: ["Intimidação", "Furtividade"],
    equipment: ["Capa ou casaco", "Arma de vigilante", "Kit de primeiros socorros"],
    specialAbility: "Zonas Cinzentas",
    abilityDescription: "Gastar 1 EP para agir fora das regras, garantindo vantagem em testes sociais ou de infiltração."
  },
  {
    id: "legado",
    name: "Legado",
    emoji: "🫅",
    description: "Você carrega o nome e o fardo de uma linhagem lendária. Seja herdeiro de um herói, vilão ou dinastia.",
    skills: ["História", "Persuasão"],
    equipment: ["Insígnia familiar", "Relíquia ancestral", "Documento de linhagem"],
    specialAbility: "Peso do Nome",
    abilityDescription: "Gastar 1 EP para impor respeito automaticamente, obtendo vantagem em Persuasão ou Intimidação por 1 cena."
  },
  {
    id: "mestre-disfarce",
    name: "Mestre do Disfarce",
    emoji: "🎭",
    description: "Sua verdadeira identidade é um mistério. Você vive atrás de máscaras e personagens.",
    skills: ["Enganação", "Furtividade"],
    equipment: ["Kit de disfarces completo", "Identidade falsa", "Coleção de máscaras"],
    specialAbility: "Identidade Flexível",
    abilityDescription: "Gastar 1 EP para assumir rapidamente uma nova identidade, garantindo vantagem em Enganação ou Furtividade."
  },
  {
    id: "mestre-esportes",
    name: "Mestre dos Esportes",
    emoji: "⚽",
    description: "A disciplina, o esforço físico e a competição moldaram quem você é.",
    skills: ["Atletismo", "Reflexos"],
    equipment: ["Uniforme esportivo", "Medalha de campeonato", "Kit de treino"],
    specialAbility: "Fôlego de Campeão",
    abilityDescription: "Gastar 1 EP para ignorar penalidades de exaustão física por 1 cena."
  },
  {
    id: "inventor-visionario",
    name: "Inventor Visionário",
    emoji: "💡",
    description: "Você sempre teve a mente inquieta, criando engenhocas, armas ou dispositivos que mudam o mundo.",
    skills: ["Engenharia", "Tecnologia"],
    equipment: ["Ferramentas de precisão", "Protótipo de invenção", "Óculos de proteção"],
    specialAbility: "Improviso Criativo",
    abilityDescription: "Gastar 1 EP para criar um dispositivo improvisado que proporciona vantagem em um teste relevante."
  },
  {
    id: "filho-sobrenatural",
    name: "Filho do Sobrenatural",
    emoji: "🔮",
    description: "Seu sangue carrega traços místicos ou monstruosos. Habilidades estranhas despertaram dentro de você.",
    skills: ["Intuição", "Arcano"],
    equipment: ["Amuleto canalizador", "Diário de manifestações", "Capa com símbolos"],
    specialAbility: "Despertar Sobrenatural",
    abilityDescription: "Gastar 1 EP para ativar um poder inato (resistência, visão no escuro, força) por 1 minuto."
  }
];
