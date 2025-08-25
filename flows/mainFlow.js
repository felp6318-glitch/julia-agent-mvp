/**
 * Manipula a mensagem inicial do usuário, fornecendo uma apresentação padronizada.
 * @param {string} message - A mensagem recebida do usuário (atualmente não utilizada nesta função).
 * @param {object} persona - O objeto da persona carregado.
 * @returns {string} Uma string de apresentação formatada.
 */
function handleMessage(message, persona) {
  // Constrói a resposta usando template literals para incorporar dados da persona.
  const keywordsString = persona.tone.keywords.join(", ");
  return `Olá! Eu sou a ${persona.name}, sua consultora da JT Elite. Estou aqui para te ajudar a conquistar seus objetivos com ${keywordsString}.`;
}

module.exports = { handleMessage };