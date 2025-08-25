Bloco 2: Prompt Padrão para Correção de Erros (Sua Biblioteca)
Este é o template que você usará quando um teste falhar. Ele é estruturado para dar ao Arquiteto todo o contexto necessário para diagnosticar o problema e propor uma solução precisa.



***********************************************************************************************

Exemplo Preenchido (Hipotético):

******************************************************************************************

Arquiteto, encontramos um erro na execução da "Task 2.1" do Sprint 2.

**Objetivo:**
O objetivo era que, ao enviar um POST para a rota `/chat`, o servidor respondesse com a apresentação da Júlia.

**Análise do Erro:**
*   **Ação Executada:** Segui as instruções de teste, enviando uma requisição POST para `http://localhost:3000/chat` com o body `{ "message": "oi" }` via Thunder Client.
*   **Resultado Inesperado (Erro):** O servidor travou e o terminal exibiu o seguinte erro:
    `TypeError: Cannot read properties of undefined (reading 'name') at handleMessage (C:\ProjetoJulia\flows\mainFlow.js:3:45)`

**Recursos Fornecidos:**
Abaixo está o checklist de handoff que o Executor entregou, para sua referência e análise.

[Cole aqui o "Checklist de Handoff para o Arquiteto" que eu terei fornecido]

**Tarefa Específica:**
Por favor, analise o erro, a provável causa (parece que o objeto `persona` não está chegando na função `handleMessage`) e gere um novo prompt técnico para o Executor (Gemini 2.5 Pro) corrigir o problema. O prompt deve focar apenas nos arquivos que precisam de alteração.

************************************************************************************************************