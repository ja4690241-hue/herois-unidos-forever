#!/usr/bin/env node

/**
 * Keep-Alive Monitor para Heróis Unidos 3.0
 * Monitora a saúde do servidor e mantém-o sempre ativo
 * Faz requisições periódicas para manter o servidor "acordado"
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const SERVER_URL = 'http://localhost:3000';
const CHECK_INTERVAL = 30000; // 30 segundos
const LOG_FILE = '/tmp/herois-keep-alive.log';
const PID_FILE = '/tmp/herois-server.pid';
const MAX_RETRIES = 3;

// Função para registrar logs
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(logMessage);
  fs.appendFileSync(LOG_FILE, logMessage);
}

// Função para fazer requisição de keep-alive
function keepAlive() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    timeout: 5000
  };

  const req = http.request(options, (res) => {
    if (res.statusCode === 200 || res.statusCode === 304) {
      log(`✓ Keep-Alive: Servidor respondendo normalmente (Status: ${res.statusCode})`);
    } else {
      log(`⚠ Keep-Alive: Servidor respondendo com status ${res.statusCode}`);
    }
  });

  req.on('error', (error) => {
    log(`✗ Keep-Alive: Erro ao conectar ao servidor - ${error.message}`);
    checkServerHealth();
  });

  req.on('timeout', () => {
    req.destroy();
    log(`✗ Keep-Alive: Timeout ao conectar ao servidor`);
    checkServerHealth();
  });

  req.end();
}

// Função para verificar saúde do servidor
function checkServerHealth() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'HEAD',
    timeout: 3000
  };

  const req = http.request(options, (res) => {
    if (res.statusCode === 200 || res.statusCode === 304) {
      log(`✓ Health Check: Servidor está saudável`);
      return;
    }
  });

  req.on('error', (error) => {
    log(`✗ Health Check Falhou: ${error.message}`);
    restartServer();
  });

  req.on('timeout', () => {
    req.destroy();
    log(`✗ Health Check Timeout`);
    restartServer();
  });

  req.end();
}

// Função para reiniciar o servidor
function restartServer() {
  log(`🔄 Tentando reiniciar o servidor...`);
  
  try {
    // Ler o PID do servidor anterior
    if (fs.existsSync(PID_FILE)) {
      const pid = fs.readFileSync(PID_FILE, 'utf8').trim();
      try {
        process.kill(parseInt(pid), 'SIGTERM');
        log(`Processo anterior (PID: ${pid}) encerrado`);
      } catch (e) {
        log(`Não foi possível encerrar processo anterior: ${e.message}`);
      }
    }

    // Aguardar um pouco antes de reiniciar
    setTimeout(() => {
      const { spawn } = require('child_process');
      const server = spawn('node', ['dist/index.js'], {
        cwd: '/home/ubuntu/herois-unidos',
        env: { ...process.env, NODE_ENV: 'production' },
        detached: true,
        stdio: 'ignore'
      });

      fs.writeFileSync(PID_FILE, server.pid.toString());
      log(`✓ Servidor reiniciado com sucesso (PID: ${server.pid})`);
      server.unref();
    }, 2000);
  } catch (error) {
    log(`✗ Erro ao reiniciar servidor: ${error.message}`);
  }
}

// Inicializar monitoramento
function startMonitoring() {
  log(`🚀 Iniciando Keep-Alive Monitor para Heróis Unidos 3.0`);
  log(`📍 URL do servidor: ${SERVER_URL}`);
  log(`⏱️  Intervalo de verificação: ${CHECK_INTERVAL}ms`);
  log(`📝 Log: ${LOG_FILE}`);
  log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

  // Fazer primeira verificação imediatamente
  keepAlive();

  // Configurar intervalo de verificação
  setInterval(() => {
    keepAlive();
  }, CHECK_INTERVAL);

  // Verificação de saúde mais profunda a cada 2 minutos
  setInterval(() => {
    checkServerHealth();
  }, 120000);

  // Tratamento de sinais para graceful shutdown
  process.on('SIGTERM', () => {
    log(`📛 Recebido sinal SIGTERM, encerrando monitor...`);
    process.exit(0);
  });

  process.on('SIGINT', () => {
    log(`📛 Recebido sinal SIGINT, encerrando monitor...`);
    process.exit(0);
  });
}

// Iniciar o monitor
startMonitoring();
