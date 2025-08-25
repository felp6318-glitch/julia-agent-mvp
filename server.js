const express = require('express');
const agent = require('./agent');

const app = express();
const PORT = 3000;

app.use(express.json());

agent.init();

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/persona', (req, res) => {
  const personaData = agent.getPersona();
  res.status(200).json(personaData);
});

/**
 * Rota de Chat (POST /chat)
 * Agora requer sessionId para manter o contexto da conversa.
 */
app.post('/chat', (req, res) => {
  const { sessionId, message } = req.body;

  // Validação para garantir que ambos os campos foram enviados.
  if (!sessionId || !message) {
    return res.status(400).json({ error: "Os campos 'sessionId' e 'message' são obrigatórios." });
  }

  // Processa a mensagem usando o sessionId para rastrear a conversa.
  const reply = agent.processMessage(sessionId, message);
  res.status(200).json({ reply });
});

app.listen(PORT, () => {
  console.log(`Servidor 'Júlia' rodando na porta ${PORT}`);
});