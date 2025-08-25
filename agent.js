// Importa o módulo 'fs' (File System) para interagir com o sistema de arquivos
const fs = require('fs');

// Variável para armazenar os dados da persona em memória após o carregamento
let persona = null;

/**
 * Função de inicialização do Agente Júlia.
 * Lê o arquivo persona.json de forma síncrona, converte o conteúdo para um objeto JSON
 * e o armazena na variável 'persona'.
 */
function init() {
  try {
    const data = fs.readFileSync('./persona.json', 'utf-8');
    persona = JSON.parse(data);
    console.log("Persona 'Júlia' carregada com sucesso.");
  } catch (error) {
    console.error("Erro ao carregar o arquivo persona.json:", error);
    // Em caso de erro, o processo é encerrado para evitar que o agente opere sem sua persona.
    process.exit(1); 
  }
}

/**
 * Retorna o objeto da persona que foi carregado na memória.
 * @returns {object | null} O objeto da persona ou null se não foi carregado.
 */
function getPersona() {
  return persona;
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = { init, getPersona };