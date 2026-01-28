# Heróis Unidos 3.0 - Sistema de RPG Interativo

Um sistema completo de RPG web interativo com criação de personagens, simulador de combate, talentos, habilidades e muito mais.

## 🎮 Funcionalidades

- **Criador de Personagem**: Sistema completo de 4 passos para criar personagens
  - Seleção de raça (9+ raças disponíveis)
  - Escolha de classe e atributos
  - Seleção de perícias (até 4)
  - Seleção de talentos (até 3) com 7 categorias diferentes

- **Sistema de Talentos**: 
  - 7 categorias: Combate, Precisão, Energia, Mental, Tecnologia, Furtividade, Defesa
  - Raridades: Comum, Incomum, Raro, Épico, Lendário
  - Pré-requisitos de atributos e níveis
  - Efeitos e limites de uso

- **Páginas Disponíveis**:
  - Home - Página inicial
  - Races - Explorar todas as raças
  - Classes - Ver classes disponíveis
  - Skills - Perícias do sistema
  - Talents - Galeria de talentos
  - Spells - Feitiços disponíveis
  - Artifacts - Artefatos especiais
  - Vehicles - Veículos
  - Villains - Vilões para combate
  - Combat Simulator - Simulador de combate
  - Character Creator - Criador de personagem

## 🛠️ Tecnologias

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build**: Vite

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

## 📁 Estrutura do Projeto

```
client/
├── public/          # Arquivos estáticos
├── src/
│   ├── pages/       # Páginas da aplicação
│   ├── components/  # Componentes reutilizáveis
│   ├── lib/         # Funções utilitárias e dados
│   │   ├── gameData.ts        # Dados de raças, classes, etc
│   │   ├── talentsData.ts     # Dados de talentos
│   │   └── ...
│   ├── contexts/    # React contexts
│   ├── App.tsx      # Componente raiz
│   └── index.css    # Estilos globais
└── index.html       # HTML principal
```

## 🎨 Dados Disponíveis

### Raças (gameData.ts)
- Humanos Aprimorados
- Alienígenas
- Mutantes
- Dragões
- Fantasmas
- Heróis Clássicos
- E mais...

### Talentos (talentsData.ts)
- **Combate**: Fúria Incontrolável, Parry Mestre, Lutador Incansável, etc
- **Precisão**: Tiro Perfeito, Reflexos Aguçados, etc
- **Energia**: Explosão de Energia, Canalização de Mana, etc
- **Mental**: Telepatia, Controle Mental, etc
- **Tecnologia**: Código Mestre, Modo Turbo Supremo, etc
- **Furtividade**: Invisibilidade, Movimento Silencioso, etc
- **Defesa**: Escudo de Energia, Regeneração, etc

## 🚀 Como Usar

1. **Acessar a Home**: Página inicial com navegação
2. **Explorar Conteúdo**: Visite as páginas de raças, classes, talentos, etc
3. **Criar Personagem**: Clique em "Criar Personagem" e siga os 4 passos
4. **Baixar Ficha**: Após criar, baixe a ficha em PDF
5. **Simular Combate**: Use o simulador para testar combates

## 📝 Personalização

### Adicionar Novo Talento

Edite `client/src/lib/talentsData.ts`:

```typescript
export const talents: Record<TalentCategory, Talent[]> = {
  combat: [
    {
      id: "novo-talento",
      name: "Novo Talento",
      description: "Descrição do talento",
      effect: "Efeito do talento",
      rarity: "uncommon",
      category: "combat",
      prerequisites: ["Força 14+"],
      usageLimit: "Uma vez por combate",
    },
    // ... mais talentos
  ],
  // ... outras categorias
};
```

### Modificar Cores e Tema

Edite `client/src/index.css` para alterar as variáveis de cor:

```css
:root {
  --primary: oklch(...);
  --background: oklch(...);
  /* ... mais variáveis */
}
```

## 🐛 Troubleshooting

**Erro de TypeScript**: Execute `pnpm check` para verificar erros
**Servidor não inicia**: Limpe `node_modules` e reinstale com `pnpm install`
**Estilos não aparecem**: Verifique se o Tailwind CSS está compilando

## 📄 Licença

MIT

## 👤 Autor

Sistema desenvolvido com React, TypeScript e Tailwind CSS.

---

**Versão**: 3.0  
**Última atualização**: Janeiro 2026
