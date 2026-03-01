#!/bin/bash

# Script de Inicialização Permanente - Heróis Unidos 3.0
# Este script garante que o servidor continue rodando indefinidamente

set -e

PROJECT_DIR="/home/ubuntu/herois-unidos"
LOG_DIR="/tmp"
SERVER_LOG="$LOG_DIR/herois-server-permanent.log"
MONITOR_LOG="$LOG_DIR/herois-monitor-permanent.log"
PID_FILE="$LOG_DIR/herois-server.pid"

echo "═══════════════════════════════════════════════════════════════"
echo "🚀 Iniciando Heróis Unidos 3.0 - Modo Permanente"
echo "═══════════════════════════════════════════════════════════════"
echo "📍 Diretório do projeto: $PROJECT_DIR"
echo "📝 Log do servidor: $SERVER_LOG"
echo "📝 Log do monitor: $MONITOR_LOG"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Parar qualquer instância anterior
echo "🛑 Parando instâncias anteriores..."
pkill -f "node dist/index.js" 2>/dev/null || true
pkill -f "keep-alive-monitor.js" 2>/dev/null || true
sleep 2

# Limpar arquivos de log antigos
if [ -f "$SERVER_LOG" ]; then
  echo "🗑️  Limpando log anterior do servidor..."
  > "$SERVER_LOG"
fi

if [ -f "$MONITOR_LOG" ]; then
  echo "🗑️  Limpando log anterior do monitor..."
  > "$MONITOR_LOG"
fi

# Iniciar o servidor em background
echo "⚙️  Iniciando servidor Node.js..."
cd "$PROJECT_DIR"
NODE_ENV=production nohup node dist/index.js >> "$SERVER_LOG" 2>&1 &
SERVER_PID=$!
echo $SERVER_PID > "$PID_FILE"
echo "✓ Servidor iniciado (PID: $SERVER_PID)"

# Aguardar o servidor ficar pronto
echo "⏳ Aguardando servidor ficar pronto..."
sleep 3

# Verificar se o servidor está respondendo
MAX_ATTEMPTS=10
ATTEMPT=0
while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
  if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✓ Servidor está respondendo!"
    break
  fi
  ATTEMPT=$((ATTEMPT + 1))
  if [ $ATTEMPT -lt $MAX_ATTEMPTS ]; then
    echo "⏳ Tentativa $ATTEMPT/$MAX_ATTEMPTS... aguardando..."
    sleep 2
  fi
done

if [ $ATTEMPT -eq $MAX_ATTEMPTS ]; then
  echo "✗ Servidor não respondeu após $MAX_ATTEMPTS tentativas"
  echo "📝 Verifique o log: $SERVER_LOG"
  exit 1
fi

# Iniciar o monitor de keep-alive
echo "🔄 Iniciando monitor de Keep-Alive..."
nohup node "$PROJECT_DIR/keep-alive-monitor.cjs" >> "$MONITOR_LOG" 2>&1 &
MONITOR_PID=$!
echo "✓ Monitor iniciado (PID: $MONITOR_PID)"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Heróis Unidos 3.0 está rodando em modo permanente!"
echo "🌐 Acesse em: http://localhost:3000"
echo "📊 Monitoramento ativo e contínuo"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Logs disponíveis:"
echo "   • Servidor: $SERVER_LOG"
echo "   • Monitor: $MONITOR_LOG"
echo ""
echo "🛑 Para parar o servidor, execute:"
echo "   kill $SERVER_PID"
echo ""
echo "🔍 Para verificar o status, execute:"
echo "   ps aux | grep -E 'node|keep-alive'"
echo ""
