Bloco 1: Prompt Padrão para Criação de Tarefas (Sua Biblioteca)
Este é o template que você usará para solicitar a criação de uma nova tarefa. Ele segue a fórmula de 4 partes que definimos: Objetivo, Tarefa, Recursos, Formato.



**************************************************************************************

Arquiteto, vamos iniciar o "Sprint 2: O Coração da Conversa".

**Objetivo:**
Implementar o mecanismo de diálogo mais básico, permitindo que a Júlia responda a uma mensagem inicial com sua apresentação.

**Tarefa Específica:**
Sua tarefa é criar o prompt técnico completo para o Executor (Gemini 2.5 Pro) realizar a "Task 2.1: Implementação do Fluxo de Conversa Inicial".

**Recursos Fornecidos:**
Para esta tarefa, o Executor precisará:
1.  Criar um novo arquivo `flows/mainFlow.js`.
2.  Nesse arquivo, criar uma função `handleMessage(message, persona)` que retorna a saudação de apresentação da persona.
3.  Conectar este novo fluxo ao `agent.js` e expor através de uma nova rota `POST /chat` no `server.js`.
4.  A resposta deve usar o campo `presentation` do objeto `persona.voice`.

**Formato da Saída:**
O prompt que você criar para o Gemini deve ser completo e conter as seguintes seções:
1.  O código completo do novo arquivo `flows/mainFlow.js`.
2.  As modificações exatas a serem feitas nos arquivos `agent.js` e `server.js`.
3.  Instruções claras de teste para o Thunder Client, detalhando a rota, o método, o corpo (body) da requisição e a resposta esperada.
4.  Um checklist de validação da entrega para eu poder verificar o trabalho do Executor.

********************************************************************************************