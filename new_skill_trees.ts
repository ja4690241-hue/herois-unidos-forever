import { SkillTree } from './skillTreesData';

export const newSkillTrees: SkillTree[] = [
  {
    "id": "poder-elemental",
    "name": "Árvore de Poder Elemental",
    "description": "Para personagens com poderes baseados em fogo, gelo, eletricidade, etc.",
    "icon": "🔥",
    "classId": "generico",
    "nodes": [
      {
        "id": "controle-elemental",
        "name": "Controle Elemental",
        "description": "Escolha um elemento; seus ataques ganham +1d4 de dano desse tipo.​",
        "level": 1,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 1+ e Afinidade Elemental",
            "description": "Nível 1+ e Afinidade Elemental"
          }
        ],
        "bonuses": [
          "Escolha um elemento; seus ataques ganham +1d4 de dano desse tipo.​"
        ],
        "icon": "✨"
      },
      {
        "id": "resistncia-elemental",
        "name": "Resistência Elemental",
        "description": "Você recebe resistência ao mesmo tipo de dano do seu elemento.​",
        "level": 2,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 3+ e Controle Elemental",
            "description": "Nível 3+ e Controle Elemental"
          }
        ],
        "bonuses": [
          "Você recebe resistência ao mesmo tipo de dano do seu elemento.​"
        ],
        "icon": "✨"
      },
      {
        "id": "rajada-elemental",
        "name": "Rajada Elemental",
        "description": "Você pode gastar 2 pontos de energia para liberar uma explosão elemental em um raio de 3 metros.​",
        "level": 3,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 5+ e Resistência Elemental",
            "description": "Nível 5+ e Resistência Elemental"
          }
        ],
        "bonuses": [
          "Você pode gastar 2 pontos de energia para liberar uma explosão elemental em um raio de 3 metros.​"
        ],
        "icon": "✨"
      },
      {
        "id": "imunidade-elemental",
        "name": "Imunidade Elemental",
        "description": "Agora você se torna imune ao seu próprio elemento.​",
        "level": 4,
        "prerequisites": [
          {
            "type": "custom",
            "name": "Nível 10+ e Rajada Elemental",
            "description": "Nível 10+ e Rajada Elemental"
          }
        ],
        "bonuses": [
          "Agora você se torna imune ao seu próprio elemento.​"
        ],
        "icon": "✨"
      }
    ]
  }
];
