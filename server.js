// Importa o framework Express
const express = require('express');

// Importa o nosso agente
const agent = require('./agent');

// Inicializa a aplicação Express
const app = express();
const PORT = 3000;

// Inicializa o agente (carrega a persona, etc.) ANTES de o servidor começar a ouvir
agent.init();

// Middleware para permitir que o servidor entenda JSON no corpo das requisições
app.use(express.json());

/**
 * Rota de Status (GET /status)
 * Usada para verificar se o servidor está online e respondendo.
 */
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

/**
 * Rota da Persona (GET /persona)
 * Retorna o objeto completo da persona carregado pelo agente.
 */
app.get('/persona', (req, res) => {
  const personaData = agent.getPersona();
  res.status(200).json(personaData);
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor 'Júlia' rodando na porta ${PORT}`);
});