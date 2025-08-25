// Importa o módulo 'fs' (File System)
const fs = require('fs');
// Importa o manipulador de mensagens do nosso novo fluxo de conversa
const { handleMessage } = require('./flows/mainFlow');

// Variável para armazenar os dados da persona em memória
let persona = null;

/**
 * Inicializa o agente, carregando a persona do arquivo JSON.
 */
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

/**
 * Retorna o objeto da persona carregado.
 * @returns {object | null}
 */
function getPersona() {
  return persona;
}

/**
 * Processa a mensagem do usuário, delegando para o fluxo de conversa apropriado.
 * @param {string} message - A mensagem do usuário.
 * @returns {string} A resposta gerada pelo fluxo.
 */
function processMessage(message) {
  // Por enquanto, apenas chama o handleMessage do fluxo principal.
  const reply = handleMessage(message, persona);
  return reply;
}

// Exporta as funções, incluindo a nova 'processMessage'
module.exports = { init, getPersona, processMessage };