// Importa o framework Express
const express = require('express');

// Importa o nosso agente (ainda sem uso funcional nesta sprint)
const agent = require('./agent');

// Inicializa a aplicação Express
const app = express();
const PORT = 3000;

// Middleware para permitir que o servidor entenda JSON no corpo das requisições
app.use(express.json());

/**
 * Rota de Status (GET /status)
 * Usada para verificar se o servidor está online e respondendo.
 */
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor 'Júlia' rodando na porta ${PORT}`);
  // Chama a função de inicialização do agente (atualmente vazia)
  agent.init();
});