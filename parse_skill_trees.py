import re
import json

def parse_skill_trees(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Normalizar quebras de linha
    content = re.sub(r'\f', '', content)
    content = re.sub(r'\n(?!\s*Nível\s\d|\s*Árvore\sdo\s|\s*Árvore\sde\s|\s*Árvore\sbaseados|\s*Exemplo\sde\sHabilidades:)', ' ', content)

    # Encontrar todas as seções de Árvore de Habilidades
    # O padrão é "Árvore [Nome da Árvore] (Para [Descrição])"
    # Ou "Nível X - [Nome da Habilidade] (Pré-requisito: [Requisito]) – [Descrição]"
    
    # Vou focar na Árvore do Guerreiro Supremo e Árvore de Poder Elemental, que têm a estrutura de Nível X
    
    skill_trees = []
    
    # Árvore de Poder Elemental
    elemental_tree_content = re.search(r'🔥 Árvore baseados.*?Nível 5 - Avatar Elemental \(Pré-requisito: Nível 15\+ e Imunidade Elemental\) – Você pode entrar em um estado onde ganha \+2 CA e \+2 de dano com seu elemento por 1 minuto.', content, re.DOTALL)
    if elemental_tree_content:
        elemental_tree_content = elemental_tree_content.group(0)
        nodes = []
        # Regex para encontrar os nós (Nível X - Nome (Pré-requisito) – Descrição)
        elemental_nodes_raw = re.findall(r'(Nível\s\d\s-\s.*?)\n', elemental_tree_content, re.DOTALL)
        
        for node_raw in elemental_nodes_raw:
            match = re.match(r'Nível\s(\d)\s-\s(.*?)\s*\(Pré-requisito:\s*(.*?)\)\s*–\s*(.*)', node_raw.strip(), re.DOTALL)
            if match:
                level = int(match.group(1))
                name = match.group(2).strip()
                prereq_text = match.group(3).strip()
                description = match.group(4).strip()
                
                prerequisites = []
                if prereq_text:
                    prerequisites.append({
                        "type": "custom",
                        "name": prereq_text,
                        "description": prereq_text
                    })
                
                node_id = name.lower().replace(' ', '-').replace('(', '').replace(')', '').replace(':', '').replace('+', '').replace('/', '-')
                node_id = re.sub(r'[^a-z0-9-]', '', node_id)
                
                nodes.append({
                    "id": node_id,
                    "name": name,
                    "description": description,
                    "level": level,
                    "prerequisites": prerequisites,
                    "bonuses": [description],
                    "icon": "✨"
                })
        
        skill_trees.append({
            "id": "poder-elemental",
            "name": "Árvore de Poder Elemental",
            "description": "Para personagens com poderes baseados em fogo, gelo, eletricidade, etc.",
            "icon": "🔥",
            "classId": "generico", # Pode ser usado por várias classes
            "nodes": nodes
        })

    # Árvore do Guerreiro Supremo
    guerreiro_tree_content = re.search(r'⚔ Árvore do Guerreiro Supremo.*?Nível 5 - Mestre de Armas \(Pré-requisito: Nível 10\+ e Bloqueio Reflexivo\) – Você pode usar qualquer arma com proficiência.', content, re.DOTALL)
    if guerreiro_tree_content:
        guerreiro_tree_content = guerreiro_tree_content.group(0)
        nodes = []
        # Regex para encontrar os nós (Nível X - Nome (Pré-requisito) – Descrição)
        guerreiro_nodes_raw = re.findall(r'(Nível\s\d\s-\s.*?)\n', guerreiro_tree_content, re.DOTALL)
        
        for node_raw in guerreiro_nodes_raw:
            match = re.match(r'Nível\s(\d)\s-\s(.*?)\s*\(Pré-requisito:\s*(.*?)\)\s*–\s*(.*)', node_raw.strip(), re.DOTALL)
            if match:
                level = int(match.group(1))
                name = match.group(2).strip()
                prereq_text = match.group(3).strip()
                description = match.group(4).strip()
                
                prerequisites = []
                if prereq_text:
                    prerequisites.append({
                        "type": "custom",
                        "name": prereq_text,
                        "description": prereq_text
                    })
                
                node_id = name.lower().replace(' ', '-').replace('(', '').replace(')', '').replace(':', '').replace('+', '').replace('/', '-')
                node_id = re.sub(r'[^a-z0-9-]', '', node_id)
                
                nodes.append({
                    "id": node_id,
                    "name": name,
                    "description": description,
                    "level": level,
                    "prerequisites": prerequisites,
                    "bonuses": [description],
                    "icon": "⚔️"
                })
        
        skill_trees.append({
            "id": "guerreiro-supremo",
            "name": "Árvore do Guerreiro Supremo",
            "description": "Para lutadores corpo a corpo e especialistas em combate físico.",
            "icon": "🛡️",
            "classId": "generico",
            "nodes": nodes
        })

    return skill_trees

skill_trees_data = parse_skill_trees('/home/ubuntu/herois-unidos/habilidades_extraidas.txt')

# Gerar o código TypeScript
ts_code = "import { SkillTree } from './skillTreesData';\n\n"
ts_code += "export const newSkillTrees: SkillTree[] = "
ts_code += json.dumps(skill_trees_data, indent=2, ensure_ascii=False)
ts_code += ";\n"

# Salvar o código em um arquivo temporário
with open('/home/ubuntu/herois-unidos/new_skill_trees.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"Árvores de Habilidades extraídas: {len(skill_trees_data)}")
print("Arquivo new_skill_trees.ts gerado com sucesso.")
