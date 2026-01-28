import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap, Users, Sword, BookOpen, Wand2, Skull } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🦸</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Heróis Unidos 3.0
            </h1>
          </div>
          <div className="flex gap-4">
            <Link href="/races">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Raças
              </Button>
            </Link>
            <Link href="/character-creator">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Criar Personagem
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Sistema de RPG Interativo
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Crie seu personagem, escolha sua raça, domine habilidades especiais e enfrente vilões poderosos em um mundo de fantasia épica.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/character-creator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                <Zap className="mr-2" />
                Começar Agora
              </Button>
            </Link>
            <Link href="/races">
              <Button size="lg" variant="outline" className="text-lg border-slate-600 hover:bg-slate-800">
                Explorar Raças
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-16">
        <h3 className="text-3xl font-bold mb-12 text-center">Explore o Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Races Card */}
          <Link href="/races">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-xl font-bold mb-2">Raças</h4>
                <p className="text-slate-400 mb-4">
                  Escolha entre 9 raças únicas, cada uma com atributos especiais, habilidades e evoluções.
                </p>
                <div className="text-sm text-blue-400">Explorar raças →</div>
              </div>
            </Card>
          </Link>

          {/* Character Creator Card */}
          <Link href="/character-creator">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">⚔️</div>
                <h4 className="text-xl font-bold mb-2">Criar Personagem</h4>
                <p className="text-slate-400 mb-4">
                  Construa seu herói do zero. Escolha raça, atributos, habilidades e equipamento.
                </p>
                <div className="text-sm text-blue-400">Criar agora →</div>
              </div>
            </Card>
          </Link>

          {/* Combat Rules Card */}
          <Link href="/combat-rules">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2">Regras de Combate</h4>
                <p className="text-slate-400 mb-4">
                  Aprenda as regras de combate, cálculo de dano, defesa e testes de resistência.
                </p>
                <div className="text-sm text-blue-400">Aprender →</div>
              </div>
            </Card>
          </Link>

          {/* Villains Card */}
          <Link href="/villains">
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">😈</div>
                <h4 className="text-xl font-bold mb-2">Vilões</h4>
                <p className="text-slate-400 mb-4">
                  Enfrente vilões poderosos com fichas completas, habilidades e fraquezas únicas.
                </p>
                <div className="text-sm text-purple-400">Ver vilões →</div>
              </div>
            </Card>
          </Link>

          {/* Evolution Card */}
          <Link href="/evolution">
            <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">Evolução</h4>
                <p className="text-slate-400 mb-4">
                  Evolua seu personagem gastando Pontos de Evolução para desbloquear formas supremas.
                </p>
                <div className="text-sm text-green-400">Explorar →</div>
              </div>
            </Card>
          </Link>

          {/* Rules Reference Card */}
          <Link href="/rules">
            <Card className="bg-slate-800 border-slate-700 hover:border-yellow-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">📖</div>
                <h4 className="text-xl font-bold mb-2">Referência de Regras</h4>
                <p className="text-slate-400 mb-4">
                  Consulte o manual completo de regras, atributos, perícias e mecânicas do jogo.
                </p>
                <div className="text-sm text-yellow-400">Consultar →</div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* System Overview */}
      <section className="container py-16 border-t border-slate-700">
        <h3 className="text-3xl font-bold mb-12 text-center">Como Funciona</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h4 className="font-bold mb-2">Escolha sua Raça</h4>
            <p className="text-slate-400">
              Selecione entre 9 raças únicas, cada uma com atributos e habilidades especiais.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h4 className="font-bold mb-2">Distribua Atributos</h4>
            <p className="text-slate-400">
              Customize seus atributos: Força, Destreza, Inteligência, Carisma, Resistência e Vontade.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">3️⃣</div>
            <h4 className="font-bold mb-2">Selecione Habilidades</h4>
            <p className="text-slate-400">
              Escolha habilidades especiais que refletem sua raça e estilo de combate.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">4️⃣</div>
            <h4 className="font-bold mb-2">Entre em Combate</h4>
            <p className="text-slate-400">
              Enfrente inimigos, ganhe experiência e evolua seu personagem para formas supremas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-16 bg-slate-800/50 rounded-lg border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">9+</div>
            <p className="text-slate-300">Raças Disponíveis</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
            <p className="text-slate-300">Vilões Poderosos</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
            <p className="text-slate-300">Possibilidades de Jogo</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-16 py-8">
        <div className="container text-center text-slate-400">
          <p>© 2026 Heróis Unidos 3.0 - Sistema de RPG Interativo</p>
          <p className="text-sm mt-2">Criado para aventuras épicas e histórias inesquecíveis</p>
        </div>
      </footer>
    </div>
  );
}
