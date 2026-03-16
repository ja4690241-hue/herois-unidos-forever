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

// Sistema de Cálculo de EP do PDF
export const epCalculation = {
  offensive: {
    formula: "(Total de dados de dano x 5) = Custo de EP",
    examples: [
      { name: "Magia Fraca (2d6)", cost: 10 },
      { name: "Magia Média (4d6)", cost: 20 },
      { name: "Magia Forte (5d6)", cost: 25 }
    ],
    modifiers: [
      { effect: "Alcance curto", mod: -5 },
      { effect: "Tempo de conjuração longo", mod: -5 },
      { effect: "Componentes raros", mod: -5 }
    ]
  },
  utility: [
    { effect: "Defesa simples (+AC)", cost: 10 },
    { effect: "Absorção/Anulação", cost: 15 },
    { effect: "Regeneração (1d8)", cost: 10 },
    { effect: "Teleporte/Voo", cost: 20 },
    { effect: "Invisibilidade/Intangibilidade", cost: 50 }
  ]
};

export const talents: Talent[] = [
  // Lutador Corpo a Corpo
  { id: "lutador-furia", name: "Fúria Combatente", description: "Dano extra em combate corpo a corpo", type: "ativo", cost: 5, effect: "+2 no dano", level: 1, class: "Lutador Corpo a Corpo" },
  { id: "lutador-defesa", name: "Defesa Aprimorada", description: "+1 CA quando sem armadura pesada", type: "passivo", cost: 0, effect: "+1 CA", level: 2, class: "Lutador Corpo a Corpo" },
  { id: "lutador-golpe", name: "Golpe Poderoso", description: "Pode dobrar o dano em um ataque", type: "ativo", cost: 10, effect: "Dano x2", level: 3, class: "Lutador Corpo a Corpo" },
  { id: "lutador-pele", name: "Pele Resistente", description: "+2 resistência a dano físico", type: "passivo", cost: 0, effect: "RD 2 Físico", level: 6, class: "Lutador Corpo a Corpo" },
  { id: "lutador-brutal", name: "Golpe Brutal", description: "Se acertar crítico, rola dano extra", type: "passivo", cost: 0, effect: "+1 dado de dano no crítico", level: 7, class: "Lutador Corpo a Corpo" },
  { id: "lutador-reg", name: "Regeneração de Combate", description: "Recupera 5 HP por turno abaixo de 50%", type: "passivo", cost: 0, effect: "+5 HP/turno", level: 9, class: "Lutador Corpo a Corpo" },
  
  // Combatente Ágil
  { id: "agil-reflexos", name: "Reflexos Sobrenaturais", description: "Bônus +2 em esquiva", type: "passivo", cost: 0, effect: "+2 esquiva", level: 1, class: "Combatente Ágil" },
  { id: "agil-veloz", name: "Ataque Veloz", description: "+1 iniciativa e movimento após ataque", type: "ativo", cost: 5, effect: "+1 Ini, Mov extra", level: 2, class: "Combatente Ágil" },
  { id: "agil-acrobatico", name: "Golpe Acrobático", description: "Dano extra se atacar após esquivar", type: "ativo", cost: 10, effect: "+1d8 dano após esquiva", level: 3, class: "Combatente Ágil" },
  { id: "agil-fantasma", name: "Passo Fantasma", description: "Ignora ataques de oportunidade 1x por turno", type: "passivo", cost: 0, effect: "Ignora AdO", level: 6, class: "Combatente Ágil" },
  
  // Mago/Arcano
  { id: "mago-inicial", name: "Magia Inicial", description: "Aprende 3 magias básicas", type: "passivo", cost: 0, effect: "3 magias", level: 1, class: "Mago/Arcano" },
  { id: "mago-instantaneo", name: "Feitiço Instantâneo", description: "Lançar magia como ação bônus", type: "ativo", cost: 10, effect: "Ação Bônus", level: 3, class: "Mago/Arcano" },
  { id: "mago-defesa", name: "Defesa Arcana", description: "Redução de dano mágico em 3", type: "passivo", cost: 0, effect: "RD 3 Mágico", level: 6, class: "Mago/Arcano" },
  { id: "mago-contra", name: "Contra-Feitiço", description: "Anula 1 magia do inimigo por descanso", type: "ativo", cost: 15, effect: "Anula magia", level: 9, class: "Mago/Arcano" },
  
  // Blaster
  { id: "blaster-tiro", name: "Tiro Preciso", description: "+2 em ataques a mais de 9m", type: "passivo", cost: 0, effect: "+2 acerto", level: 1, class: "Blaster" },
  { id: "blaster-postura", name: "Postura Defensiva", description: "Pode usar EP para ganhar bônus em CA", type: "ativo", cost: 10, effect: "+2 CA", level: 2, class: "Blaster" },
  { id: "blaster-analise", name: "Análise Tática", description: "Pode prever movimentos inimigos", type: "ativo", cost: 5, effect: "Vantagem no próximo ataque", level: 3, class: "Blaster" },
  
  // Guardião de Suporte
  { id: "guardiao-aura", name: "Aura Protetora", description: "Concede +2 CA e resistência elemental para aliados a até 6m", type: "ativo", cost: 15, effect: "+2 CA Aliados", level: 1, class: "Guardião de Suporte" },
  { id: "guardiao-toque", name: "Toque Restaurador", description: "Cura um aliado em 1d8 + Mod. Vontade", type: "ativo", cost: 10, effect: "Cura 1d8+VON", level: 1, class: "Guardião de Suporte" }
];

export const passives: Passive[] = [
  // Raças Base
  { id: "passiva-treinamento-intensivo", name: "Treinamento Intensivo", description: "+2 em uma Perícia à sua escolha.", effect: "+2 em uma Perícia", bonus: ["Humanos Aprimorados"] },
  { id: "passiva-resistencia-humana", name: "Resistência Humana", description: "Recebe +5 pontos de vida (PV) extras permanentemente.", effect: "+5 PV Máximo", bonus: ["Humanos Aprimorados"] },
  { id: "passiva-adaptabilidade-alien", name: "Adaptabilidade Extraterrestre", description: "Não sofre penalidades em ambientes hostis (espaço, mar, tóxico).", effect: "Imunidade a Penalidades Ambientais", bonus: ["Alienígenas"] },
  { id: "passiva-resistencia-alien", name: "Resistência Alienígena", description: "+2 em testes de resistência contra efeitos físicos ou mentais.", effect: "+2 em Testes de Resistência", bonus: ["Alienígenas"] },
  { id: "passiva-regeneracao-mutante", name: "Regeneração Mutante", description: "Cura 5 PV por turno automaticamente.", effect: "Cura 5 PV/Turno", bonus: ["Mutantes Biomecânicos"] },
  { id: "passiva-voo-fantasma", name: "Voo Fantasma", description: "Pode se mover livremente no ar.", effect: "Deslocamento de Voo", bonus: ["Fantasmas/Espíritos"] },
  { id: "passiva-resistencia-elemental", name: "Resistência Elemental", description: "Resistência contra um elemento escolhido (fogo, gelo, raio, etc).", effect: "Resistência Elemental", bonus: ["Dragões/Híbridos Dracônicos"] },
  { id: "passiva-corpo-aco", name: "Corpo de Aço", description: "Resistência a dano físico (+2 na Defesa).", effect: "+2 na Defesa (CA)", bonus: ["Ciborgues/Androides"] },
  { id: "passiva-ligacao-simbiotica", name: "Ligação Simbiótica", description: "+5 PV extras e +1 bônus em todos os ataques físicos.", effect: "+5 PV, +1 Ataque Físico", bonus: ["Seres com Simbiontes"] },
  { id: "passiva-resistencia-magia", name: "Resistência à Magia", description: "Recebe +2 na Defesa (CA) contra ataques mágicos.", effect: "+2 CA contra Magia", bonus: ["Magos/Sobrenaturais"] },
  { id: "passiva-instinto-sobrevivencia", name: "Instinto de Sobrevivência", description: "Sempre age primeiro no primeiro turno de combate.", effect: "Iniciativa Prioritária (1º Turno)", bonus: ["Criaturas Genéticas"] },
  
  // Sub-Raças
  { id: "passiva-resistencia-fisica-latente", name: "Resistência Física Latente", description: "Redução de 1 ponto de dano físico por ataque recebido.", effect: "RD 1 Físico", bonus: ["Humano Poder Latente"] },
  { id: "passiva-regeneracao-acelerada-latente", name: "Regeneração Acelerada", description: "Recupera +5 PV por turno, desde que não esteja inconsciente.", effect: "+5 PV/Turno", bonus: ["Humano Poder Latente"] },
  { id: "passiva-resistencia-venenos", name: "Resistência a Venenos", description: "Vantagem em testes contra venenos e metade do dano venoso.", effect: "Vantagem e RD Veneno", bonus: ["Xenomorfo"] },
  { id: "passiva-regeneracao-artifice", name: "Regeneração de Artífice", description: "Recupera 7 PV por turno automaticamente.", effect: "Cura 7 PV/Turno", bonus: ["Mutante Artífice"] },
  { id: "passiva-assombracao", name: "Assombração", description: "Ganha +2 em testes de Intimidação.", effect: "+2 Intimidação", bonus: ["Poltergeist"] },
  { id: "passiva-afinidade-escuridao", name: "Afinidade com a Escuridão", description: "Ganha +2 em testes de Furtividade em baixa iluminação.", effect: "+2 Furtividade (Escuro)", bonus: ["Fantasma Sombrio"] },
  { id: "passiva-corpo-agil-dragao", name: "Corpo Ágil", description: "Ganha +2 em testes de Acrobacia e passa por espaços estreitos.", effect: "+2 Acrobacia", bonus: ["Dragão Serpentino"] },
  { id: "passiva-movimento-fluido", name: "Movimento Fluído", description: "Não provoca ataques de oportunidade ao sair do alcance.", effect: "Imunidade a AdO", bonus: ["Dragão Serpentino"] },
  { id: "passiva-consciencia-cosmica", name: "Consciência Cósmica", description: "+2 em Percepção e Intuição, detecta presenças a 10m.", effect: "+2 Percepção/Intuição", bonus: ["Dragões Sinápticos"] },
  { id: "passiva-armadura-plasma", name: "Armadura de Plasma", description: "Inimigos que atacam corpo a corpo sofrem 1d8 de dano Plasma.", effect: "1d8 Dano de Retorno", bonus: ["Dragões Sinápticos"] },
  { id: "passiva-resistencia-cibernetica", name: "Resistência Cibernética", description: "Vantagem contra intrusão digital e controle de sistemas.", effect: "Vantagem contra Hack", bonus: ["IA Autônoma"] },
  { id: "passiva-resistencia-mecanica", name: "Resistência Mecânica", description: "Reduz em 2 pontos dano de armas não-energéticas.", effect: "RD 2 (Físico não-mágico)", bonus: ["Ciborgue Exterminador"] },
  { id: "passiva-camuflagem-sombria", name: "Camuflagem Sombria", description: "Em escuridão ou penumbra, recebe +2 em Furtividade.", effect: "+2 Furtividade", bonus: ["Simbioide Sombrio"] },
  { id: "passiva-aprimoramento-neural", name: "Aprimoramento Neural", description: "Recebe +2 em testes de Reflexos e Iniciativa.", effect: "+2 Reflexos/Iniciativa", bonus: ["Simbioide Energético"] },
  { id: "passiva-estudo-acelerado", name: "Estudo Acelerado", description: "Ganha +2 em testes de Conhecimento Arcano e Arcanismo.", effect: "+2 Arcanismo", bonus: ["Mago Feiticeiro"] },
  { id: "passiva-forjador-arcano", name: "Forjador Arcano", description: "Recebe +2 em testes de Arcanismo para itens mágicos.", effect: "+2 Arcanismo (Itens)", bonus: ["Mago Encantador"] },
  { id: "passiva-instinto-selvagem", name: "Instinto Selvagem", description: "Recebe +2 em Sobrevivência e detecta presas a 12m.", effect: "+2 Sobrevivência", bonus: ["Híbrido Animal"] },
  { id: "passiva-resistencia-natural-celular", name: "Resistência Natural Celular", description: "Vantagem em testes contra sangramento e veneno.", effect: "Vantagem contra Sangramento/Veneno", bonus: ["Criatura Regenerador"] }
];

export const genericTalents: GenericTalent[] = [
  {
    id: 'furia-incontrolavel',
    name: 'Fúria Incontrolável',
    category: 'combat',
    description: 'Quando em desvantagem, sua raiva explode.',
    mechanicEffect: '+2 no dano corpo a corpo, -1 CA por 3 turnos.',
    limitation: 'Uma vez por combate',
    prerequisites: [{ type: 'attribute', name: 'Força', value: 14, description: 'Força 14+' }],
    rarity: 'uncommon'
  },
  {
    id: 'mente-blindada',
    name: 'Mente Blindada',
    category: 'mental',
    description: 'Sua vontade é como uma fortaleza.',
    mechanicEffect: 'Vantagem em testes de resistência contra efeitos mentais.',
    prerequisites: [{ type: 'attribute', name: 'Vontade', value: 13, description: 'Vontade 13+' }],
    rarity: 'rare'
  },
  {
    id: 'ataque-poderoso',
    name: 'Ataque Poderoso',
    category: 'combat',
    description: 'Você pode reduzir sua precisão em -2 para causar +4 de dano.',
    mechanicEffect: 'Reduz precisão em -2 para +4 de dano.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'ataque-giratrio',
    name: 'Ataque Giratório',
    category: 'combat',
    description: 'Acerta todos os inimigos ao redor uma vez por turno.',
    mechanicEffect: 'Acerta todos os inimigos ao redor (1x/turno).',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'bloqueio-reflexivo',
    name: 'Bloqueio Reflexivo',
    category: 'combat',
    description: 'Se você estiver segurando uma arma corpo a corpo, pode reduzir o dano de ataques recebidos em 2.',
    mechanicEffect: 'Reduz dano recebido em 2 (com arma corpo a corpo).',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'especialista-em-duas-armas',
    name: 'Especialista em Duas Armas',
    category: 'combat',
    description: 'Reduz a penalidade para lutar com duas armas em -2.',
    mechanicEffect: 'Penalidade de duas armas reduzida em -2.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'tiro-rpido',
    name: 'Tiro Rápido',
    category: 'precision',
    description: 'Faça dois ataques à distância no mesmo turno com -2 de penalidade.',
    mechanicEffect: 'Dois ataques à distância (-2 penalidade).',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'mestre-da-mira',
    name: 'Mestre da Mira',
    category: 'precision',
    description: 'Seu dano à distância aumenta em +2.',
    mechanicEffect: '+2 no dano à distância.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'penetrao-de-armadura',
    name: 'Penetração de Armadura',
    category: 'precision',
    description: 'Seus ataques ignoram 3 pontos da CA inimiga.',
    mechanicEffect: 'Ignora 3 pontos da CA inimiga.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'mestre-dos-explosivos',
    name: 'Mestre dos Explosivos',
    category: 'precision',
    description: 'Seus ataques explosivos têm +1 metro de raio.',
    mechanicEffect: '+1 metro de raio em ataques explosivos.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'canalizar-energia',
    name: 'Canalizar Energia',
    category: 'energy',
    description: 'Seus ataques energéticos ignoram resistência normal.',
    mechanicEffect: 'Ataques energéticos ignoram resistência normal.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'amplificao-bioenergtica',
    name: 'Amplificação Bioenergética',
    category: 'energy',
    description: 'Você pode gastar 2 EP para aumentar seu dano em +3.',
    mechanicEffect: 'Gasta 2 EP para +3 de dano.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'resistncia-ao-caos',
    name: 'Resistência ao Caos',
    category: 'energy',
    description: 'Reduz em 3 qualquer dano de magia ou energia recebida.',
    mechanicEffect: 'Reduz em 3 dano de magia ou energia.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'controle-elemental',
    name: 'Controle Elemental',
    category: 'energy',
    description: 'Escolha um elemento (fogo, gelo, eletricidade, etc.), seus ataques ganham +1d4 de dano extra desse tipo.',
    mechanicEffect: '+1d4 de dano extra do elemento escolhido.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'mente-resistente',
    name: 'Mente Resistente',
    category: 'mental',
    description: '+2 em testes de resistência contra ilusões e controle mental.',
    mechanicEffect: '+2 em testes contra ilusões/controle mental.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'anlise-rpida',
    name: 'Análise Rápida',
    category: 'mental',
    description: 'Você pode gastar uma ação para descobrir fraquezas do inimigo.',
    mechanicEffect: 'Ação para descobrir fraquezas do inimigo.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'estrategista',
    name: 'Estrategista',
    category: 'mental',
    description: 'Você pode usar uma ação bônus para coordenar aliados, dando +1 nos ataques deles.',
    mechanicEffect: 'Ação bônus para +1 nos ataques de aliados.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'memria-fotogrfica',
    name: 'Memória Fotográfica',
    category: 'mental',
    description: 'Você se lembra de qualquer detalhe que tenha visto nas últimas 24h.',
    mechanicEffect: 'Lembra de detalhes vistos nas últimas 24h.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'hacker-mestre',
    name: 'Hacker Mestre',
    category: 'technology',
    description: '+3 em testes para invadir sistemas digitais.',
    mechanicEffect: '+3 em testes para invadir sistemas digitais.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'criador-de-gadgets',
    name: 'Criador de Gadgets',
    category: 'technology',
    description: 'Você pode fabricar dispositivos tecnológicos personalizados.',
    mechanicEffect: 'Pode fabricar dispositivos tecnológicos personalizados.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'armadura-personalizada',
    name: 'Armadura Personalizada',
    category: 'technology',
    description: 'Suas armaduras tecnológicas recebem +2 CA extra.',
    mechanicEffect: 'Armaduras tecnológicas recebem +2 CA extra.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'fuso-ciberntica',
    name: 'Fusão Cibernética',
    category: 'technology',
    description: 'Você pode instalar implantes biomecânicos sem penalidade.',
    mechanicEffect: 'Instala implantes biomecânicos sem penalidade.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'mestre-da-furtividade',
    name: 'Mestre da Furtividade',
    category: 'stealth',
    description: '+3 em testes de furtividade.',
    mechanicEffect: '+3 em testes de furtividade.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'assassinato-silencioso',
    name: 'Assassinato Silencioso',
    category: 'stealth',
    description: 'Se atacar um inimigo sem que ele perceba, causa dano dobrado.',
    mechanicEffect: 'Dano dobrado em ataque furtivo.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'sombra-rpida',
    name: 'Sombra Rápida',
    category: 'stealth',
    description: 'Você pode se mover silenciosamente sem penalidade.',
    mechanicEffect: 'Move-se silenciosamente sem penalidade.',
    prerequisites: [],
    rarity: 'common'
  },
  {
    id: 'mestre-do-disfarce',
    name: 'Mestre do Disfarce',
    category: 'stealth',
    description: 'Você pode imitar vozes e gestos de outras pessoas com facilidade.',
    mechanicEffect: 'Imita vozes e gestos com facilidade.',
    prerequisites: [],
    rarity: 'common'
  }
];
