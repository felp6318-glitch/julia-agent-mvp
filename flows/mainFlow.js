// Importa o manipulador de vendas do módulo desacoplado.
const { handleSales } = require('./sales');

/**
 * Roteia a mensagem do usuário para o fluxo apropriado (vendas ou geral).
 * @param {string} message - A mensagem recebida do usuário.
 * @param {object} persona - O objeto da persona carregado.
 * @param {Array} history - O histórico de mensagens da sessão atual.
 * @returns {string} A resposta apropriada.
 */
function handleMessage(message, persona, history) {
  const lowerMsg = message.toLowerCase();

  // Passo 1: Detecção de intenção de venda. Se encontrada, delega e encerra.
  if (lowerMsg.includes("preço") || lowerMsg.includes("comprar")) {
    return handleSales(message, history);
  }

  // Passo 2: Se não for venda, continua com o fluxo de conversa padrão.
  if (!history || history.length === 0) {
    const keywordsString = persona.tone.keywords.join(", ");
    return `Olá! Eu sou a ${persona.name}, sua consultora da JT Elite. Estou aqui para te ajudar a conquistar seus objetivos com ${keywordsString}.`;
  } else {
    return `Olá novamente! Você disse: "${message}". Vamos continuar nossa conversa.`;
  }
}

module.exports = { handleMessage };