/**
 * Manipula a mensagem do usuário com base no contexto da conversa.
 * @param {string} message - A mensagem recebida do usuário.
 * @param {object} persona - O objeto da persona carregado.
 * @param {Array} history - O histórico de mensagens da sessão atual.
 * @returns {string} A resposta apropriada.
 */
function handleMessage(message, persona, history) {
  // Se o histórico estiver vazio, é a primeira mensagem da sessão.
  if (!history || history.length === 0) {
    const keywordsString = persona.tone.keywords.join(", ");
    return `Olá! Eu sou a ${persona.name}, sua consultora da JT Elite. Estou aqui para te ajudar a conquistar seus objetivos com ${keywordsString}.`;
  } else {
    // Para mensagens subsequentes, fornece uma resposta de continuação.
    return `Olá novamente! Você disse: "${message}". Vamos continuar nossa conversa.`;
  }
}

module.exports = { handleMessage };