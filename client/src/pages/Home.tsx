import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap, Users, Sword, BookOpen, Wand2, Skull, Target, TrendingUp, Briefcase, ShieldCheck, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          {/* Class Abilities Card */}
          <Link href="/class-abilities">
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4 text-purple-400"><Sparkles size={40} /></div>
                <h4 className="text-xl font-bold mb-2">Habilidades de Classe</h4>
                <p className="text-slate-400 mb-4">
                  Poderes exclusivos de cada classe, organizados por nível de progressão.
                </p>
                <div className="text-sm text-purple-400">Ver habilidades →</div>
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

          {/* Skills Card */}
          <Link href="/skills">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-2">Perícias</h4>
                <p className="text-slate-400 mb-4">
                  Domine 18 perícias diferentes, desde Atletismo até Conhecimento Arcano.
                </p>
                <div className="text-sm text-blue-400">Ver perícias →</div>
              </div>
            </Card>
          </Link>

          {/* Talents Card */}
          <Link href="/talents">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4 text-yellow-400"><Star size={40} /></div>
                <h4 className="text-xl font-bold mb-2">Talentos</h4>
                <p className="text-slate-400 mb-4">
                  Talentos genéricos, categorias de raridade e regras de cálculo de EP.
                </p>
                <div className="text-sm text-yellow-400">Ver talentos →</div>
              </div>
            </Card>
          </Link>

          {/* Passives Card */}
          <Link href="/passives">
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4 text-teal-400"><ShieldCheck size={40} /></div>
                <h4 className="text-xl font-bold mb-2">Passivas</h4>
                <p className="text-slate-400 mb-4">
                  Habilidades que não custam EP e estão sempre ativas no seu herói.
                </p>
                <div className="text-sm text-teal-400">Ver passivas →</div>
              </div>
            </Card>
          </Link>

          {/* Backgrounds Card */}
          <Link href="/backgrounds">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-xl font-bold mb-2">Antecedentes</h4>
                <p className="text-slate-400 mb-4">
                  Escolha sua origem: de Cientista Genial a Anti-Herói, com habilidades únicas.
                </p>
                <div className="text-sm text-blue-400">Ver origens →</div>
              </div>
            </Card>
          </Link>

          {/* Evolution Points Card */}
          <Link href="/evolution-points">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold mb-2">Pontos de Evolução</h4>
                <p className="text-slate-400 mb-4">
                  Aprenda como ganhar e gastar PE para atingir sua Forma Suprema.
                </p>
                <div className="text-sm text-blue-400">Ver evolução →</div>
              </div>
            </Card>
          </Link>

          {/* Villains Card */}
          <Link href="/villains">
            <Card className="bg-slate-800 border-slate-700 hover:border-red-500 transition cursor-pointer h-full">
              <div className="p-6">
                <div className="text-4xl mb-4 text-red-500"><Skull size={40} /></div>
                <h4 className="text-xl font-bold mb-2">Vilões</h4>
                <p className="text-slate-400 mb-4">
                  Enfrente ameaças lendárias como o Híbrido Supremo e Generais Mutantes.
                </p>
                <div className="text-sm text-red-500">Ver vilões →</div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-900">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-2xl">🦸</div>
            <span className="text-xl font-bold">Heróis Unidos 3.0</span>
          </div>
          <p className="text-slate-500">© 2026 Heróis Unidos 3.0 - Sistema de RPG Interativo</p>
        </div>
      </footer>
    </div>
  );
}
