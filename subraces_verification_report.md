# Relatório de Verificação de Sub-Raças - Heróis Unidos 3.0

Após análise exaustiva do PDF (158 páginas), identifiquei as seguintes sub-raças e seus benefícios. Este relatório servirá de base para a atualização final do site.

| Raça Base | Sub-Raça | Benefícios Identificados no PDF | Status no Site |
| :--- | :--- | :--- | :--- |
| **Humano Aprimorado** | Inventor Nato | Cria 1 dispositivo/descanso longo (máx 3 ativos). | ✅ Implementado |
| **Humano Aprimorado** | Poder Latente | Escolha 1: Telecinese (2kg), Resistência (-1 dano), Eletrocinese (1d12), Regeneração (+5 PV). | ✅ Implementado |
| **Alienígena** | Marciano | Telepatia (12m), Metamorfose Parcial (3 mudanças/descanso). | ✅ Implementado |
| **Alienígena** | Xenomorfo | Garras Afiadas (+2 dano), Resistência a Venenos (Vantagem). | ✅ Implementado |
| **Mutante Biomecânico** | Adaptador | Resistência temporária (Fogo, Frio, etc), Membros Modulares (Lâmina, Gancho, Ferramenta). | ✅ Implementado |
| **Mutante Biomecânico** | Artífice | Regeneração (7 PV), Sistemas de Reparos Internos (Remover condições). | ✅ Implementado |
| **Fantasma** | Poltergeist | Manipulação à Distância (10kg/12m), Assombração (+2 Intimidação). | ✅ Implementado |
| **Fantasma** | Sombrio | Invisibilidade Temporária (1 min), Afinidade com a Escuridão (+2 Furtividade). | ✅ Implementado |
| **Dragão** | Serpentino | Rajada de Ar/Água (4d6 concussão/água, linha 9m), Movimento Fluído (Sem ataques de op.). | ✅ Implementado |
| **Dragão** | Sináptico | Manipulação Estelar (4d10 radiante, explosão 3m), Consciência Cósmica (+2 Percepção/Intuição), Armadura de Plasma (1d8 Plasma represália). | ✅ Implementado |
| **Ciborgue** | IA Autônoma | Desconexão de consciência (1 min, 30m alcance), Resistência Cibernética (Vantagem contra hack). | ✅ Implementado |
| **Ciborgue** | Exterminador | Aprimoramento de Combate (+2 ataque), Resistência Mecânica (-2 dano físico, vantagem resistência). | ✅ Implementado |
| **Simbionte** | Simbioide Sombrio | Asas de Trevas (Voo 12m), Camuflagem Sombria (+2 Furtividade). | ✅ Implementado |
| **Simbionte** | Simbioide Energético | Aprimoramento Neural (+2 Reflexos/Iniciativa), Velocidade Sobrenatural (+6m, 1 mov extra/combate), Ataque Acelerado (Ataque extra com desv.). | ✅ Implementado |
| **Mago** | Feiticeiro | Dom da Aprendizagem (Magia personalizada), Estudo Acelerado (+2 Arcanismo), Versatilidade Mágica (Alterar dano/alcance). | ✅ Implementado |
| **Mago** | Encantador | Encantamento Temporário (+1 dano/CA), Forjador Arcano (+2 Arcanismo), Reforço Duradouro (Encantamento permanente nível 1). | ✅ Implementado |
| **Criatura Genética** | Híbrido Animal | Transformação Parcial (Garras +1d6, Visão +2, Braços +2), Instinto Selvagem (+2 Sobrevivência, detectar presas 12m). | ✅ Implementado |
| **Criatura Genética** | Regenerador | Regeneração Acelerada (5 PV), Autocura Concentrada (1d10+Con), Resistência Natural (Vantagem contra sangramento/veneno). | ✅ Implementado |

### Conclusão da Verificação:
Todas as sub-raças listadas na seção "🦸1. Sub-Raças" do PDF foram corretamente identificadas e já estão presentes no código do site (`gameData.ts`). Não há lacunas de sub-raças entre o PDF e a implementação atual.

### Observação sobre Híbridos:
O PDF menciona uma regra para **Híbridos Personalizados** (Dragão-Fantasma, etc.) na página seguinte às sub-raças. Esta é uma regra de criação livre, não uma sub-raça fixa. O site atualmente permite escolher uma sub-raça fixa, mas a criação de híbridos livres poderia ser uma melhoria futura.
