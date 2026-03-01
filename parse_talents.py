import re
import json

def parse_talents(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    category_map = {
        "Talentos de Combate": "combat",
        "Talentos de Precisão": "precision",
        "Talentos de Energia e Poderes Especiais": "energy",
        "Talentos Mentais e Estratégicos": "mental",
        "Talentos Tecnológicos": "technology",
        "Talentos de Furtividade e Assassinato": "stealth",
        "Combate Avançado": "combat"
    }

    content = re.sub(r'\f', '', content) # Remover form feed characters
    content = re.sub(r'\n(?!\s*✔|\s*⚔|\s*🎯|\s*💥|\s*🧠|\s*🔧|\s*🕶️|\s*➤)', ' ', content)

    sections = re.split(r'(⚔ Talentos de Combate|🎯 Talentos de Precisão|💥 Talentos de Energia e Poderes Especiais|🧠 Talentos Mentais e Estratégicos|🔧 Talentos Tecnológicos|🕶️ Talentos de Furtividade e Assassinato|⚔ Combate Avançado)', content)

    generic_talents = []
    current_category = None

    for i in range(1, len(sections), 2):
        category_title = sections[i].strip()
        category_content = sections[i+1]
        current_category = category_map.get(category_title.replace('⚔ ', '').replace('🎯 ', '').replace('💥 ', '').replace('🧠 ', '').replace('🔧 ', '').replace('🕶️ ', ''))

        if not current_category:
            continue

        talents_raw = re.findall(r'✔(.*?)(?=\s*✔|$)', category_content, re.DOTALL)

        for talent_raw in talents_raw:
            talent_text = talent_raw.strip()
            prereq_text = ''
            if "Pré-requisito:" in talent_text:
                talent_text, prereq_part = talent_text.split("Pré-requisito:", 1)
                prereq_text = prereq_part.split(')')[0].strip() + ')'

            parts = re.split(r'\s*–\s*', talent_text, 1)
            if len(parts) < 2:
                continue
            
            name = parts[0].strip()
            description = parts[1].strip()

            prerequisites = []
            if prereq_text:
                prerequisites.append({
                    "type": "custom",
                    "name": prereq_text,
                    "description": prereq_text
                })

            talent_id = name.lower().replace(' ', '-').replace('(', '').replace(')', '').replace(':', '').replace('+', '').replace('/', '-')
            talent_id = re.sub(r'[^a-z0-9-]', '', talent_id)

            talent = {
                "id": talent_id,
                "name": name,
                "category": current_category,
                "description": description,
                "mechanicEffect": description, # Simplified for now
                "prerequisites": prerequisites,
                "rarity": "common"
            }
            generic_talents.append(talent)

    return generic_talents

talents_data = parse_talents('/home/ubuntu/herois-unidos/talentos_extraidos.txt')

# Gerar o código TypeScript
ts_code = "export const newGenericTalents = "
ts_code += json.dumps(talents_data, indent=2, ensure_ascii=False)
ts_code += ";\n"

# Salvar o código em um arquivo temporário
with open('/home/ubuntu/herois-unidos/new_generic_talents.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"Talentos extraídos: {len(talents_data)}")
print("Arquivo new_generic_talents.ts gerado com sucesso.")
