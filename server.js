// Importa o framework Express
const express = require('express');

// Importa o nosso agente
const agent = require('./agent');

// Inicializa a aplicação Express
const app = express();
const PORT = 3000;

// Middleware para permitir que o servidor entenda JSON no corpo das requisições
// É importante que esteja antes da definição das rotas que o utilizam.
app.use(express.json());

// Inicializa o agente (carrega a persona, etc.)
agent.init();

/**
 * Rota de Status (GET /status)
 */
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

/**
 * Rota da Persona (GET /persona)
 */
app.get('/persona', (req, res) => {
  const personaData = agent.getPersona();
  res.status(200).json(personaData);
});

/**
 * Rota de Chat (POST /chat)
 * Ponto de entrada para a conversa com o agente.
 */
app.post('/chat', (req, res) => {
  const { message } = req.body;

  // Validação básica para garantir que a mensagem foi enviada
  if (!message) {
    return res.status(400).json({ error: "O campo 'message' é obrigatório no corpo da requisição." });
  }

  // Processa a mensagem através do agente
  const reply = agent.processMessage(message);

  // Retorna a resposta do agente
  res.status(200).json({ reply });
});


// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor 'Júlia' rodando na porta ${PORT}`);
});