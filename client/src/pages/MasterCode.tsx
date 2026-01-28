import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, Copy, Check } from "lucide-react";

export default function MasterCode() {
  const [copied, setCopied] = useState(false);
  const [masterPassword, setMasterPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const MASTER_PASSWORD = "HEROIS2025";
  const masterCode = "HU-2025-MASTER-RPG-SYSTEM";

  const handleUnlock = () => {
    if (masterPassword === MASTER_PASSWORD) {
      setIsUnlocked(true);
      setMasterPassword("");
    } else {
      alert("Código Mestre incorreto!");
      setMasterPassword("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(masterCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-slate-300">
              <ChevronLeft className="mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">🔐 Código Mestre</h1>
        </div>
      </header>

      <div className="container py-12">
        {!isUnlocked ? (
          <div className="max-w-md mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔐</div>
                <h2 className="text-2xl font-bold mb-2">Acesso Restrito</h2>
                <p className="text-slate-400">Digite a senha do Código Mestre</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Senha Mestre</label>
                  <input
                    type="password"
                    value={masterPassword}
                    onChange={(e) => setMasterPassword(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleUnlock()}
                    placeholder="Digite a senha..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <Button
                  onClick={handleUnlock}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
                >
                  Desbloquear
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold mb-2">Acesso Concedido!</h2>
              <p className="text-slate-400">Bem-vindo, Mestre do Jogo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Master Code */}
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl font-bold mb-4">Código Mestre do Sistema</h3>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 mb-4">
                  <p className="font-mono text-lg text-yellow-400 break-all">{masterCode}</p>
                </div>
                <Button
                  onClick={copyToClipboard}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 w-4 h-4" />
                      Copiar Código
                    </>
                  )}
                </Button>
              </Card>

              {/* System Stats */}
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl font-bold mb-4">Estatísticas do Sistema</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Classes Disponíveis:</span>
                    <span className="font-bold text-blue-400">9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Raças Disponíveis:</span>
                    <span className="font-bold text-blue-400">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Níveis Máximos:</span>
                    <span className="font-bold text-blue-400">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Magias Disponíveis:</span>
                    <span className="font-bold text-blue-400">8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Artefatos/Implantes:</span>
                    <span className="font-bold text-blue-400">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Veículos:</span>
                    <span className="font-bold text-blue-400">10</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Master Controls */}
            <Card className="bg-slate-800 border-slate-700 p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Controles do Mestre</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/character-creator">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6">
                    👤 Criar Personagem
                  </Button>
                </Link>
                <Link href="/combat-simulator">
                  <Button className="w-full bg-red-600 hover:bg-red-700 py-6">
                    ⚔️ Simulador de Combate
                  </Button>
                </Link>
                <Link href="/class-progression">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6">
                    📊 Progressão de Classes
                  </Button>
                </Link>
                <Link href="/spells">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 py-6">
                    🔮 Magias e Feitiços
                  </Button>
                </Link>
                <Link href="/artifacts">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 py-6">
                    💎 Artefatos e Implantes
                  </Button>
                </Link>
                <Link href="/vehicles">
                  <Button className="w-full bg-green-600 hover:bg-green-700 py-6">
                    🚀 Veículos
                  </Button>
                </Link>
              </div>
            </Card>

            {/* System Info */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl font-bold mb-4">ℹ️ Informações do Sistema</h3>
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-bold text-blue-300 mb-1">🎮 Nome do Sistema:</p>
                  <p>Heróis Unidos 3.0 - Sistema de RPG Interativo</p>
                </div>
                <div>
                  <p className="font-bold text-blue-300 mb-1">📖 Versão:</p>
                  <p>2.0 COMPLETO</p>
                </div>
                <div>
                  <p className="font-bold text-blue-300 mb-1">✨ Recursos:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Criador de Personagem Avançado (4 passos)</li>
                    <li>Sistema de Combate Simulado com IA</li>
                    <li>Progressão de Níveis (1-15)</li>
                    <li>8 Classes com Habilidades Especiais</li>
                    <li>10+ Raças com Sub-raças</li>
                    <li>Sistema de Magia e Feitiços</li>
                    <li>Artefatos e Implantes Biotecnológicos</li>
                    <li>Veículos de 4 tipos (Terrestre, Aéreo, Aquático, Espacial)</li>
                    <li>Cálculo de Modificadores Automático</li>
                    <li>Upload de Imagem de Personagem</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-blue-300 mb-1">🔒 Código Mestre:</p>
                  <p className="font-mono text-yellow-400">{masterCode}</p>
                </div>
              </div>
            </Card>

            {/* Logout */}
            <div className="mt-8 text-center">
              <Button
                onClick={() => setIsUnlocked(false)}
                variant="outline"
                className="border-slate-600 hover:bg-slate-800"
              >
                🚪 Sair do Código Mestre
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
