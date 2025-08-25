const fs = require('fs');
const { handleMessage } = require('./flows/mainFlow');

let persona = null;
// Objeto para armazenar o histórico de conversas por sessionId.
// Ex: { "felipe01": [{ user: "Oi", agent: "Olá!..." }] }
const sessions = {}; 

function init() {
  try {
    const data = fs.readFileSync('./persona.json', 'utf-8');
    persona = JSON.parse(data);
    console.log("Persona 'Júlia' carregada com sucesso.");
  } catch (error) {
    console.error("Erro ao carregar o arquivo persona.json:", error);
    process.exit(1);
  }
}

function getPersona() {
  return persona;
}

/**
 * Processa a mensagem do usuário, mantendo o contexto da sessão.
 * @param {string} sessionId - O identificador único da conversa.
 * @param {string} message - A mensagem do usuário.
 * @returns {string} A resposta gerada pelo fluxo.
 */
function processMessage(sessionId, message) {
  // Se a sessão não existir, inicializa com um array vazio.
  if (!sessions[sessionId]) {
    sessions[sessionId] = [];
  }

  // Passa o histórico da sessão atual para o fluxo de conversa.
  const history = sessions[sessionId];
  const reply = handleMessage(message, persona, history);

  // Registra a interação atual no histórico da sessão.
  history.push({
    user: message,
    agent: reply
  });

  return reply;
}

module.exports = { init, getPersona, processMessage };