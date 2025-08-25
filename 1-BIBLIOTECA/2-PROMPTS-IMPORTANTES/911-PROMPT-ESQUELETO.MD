



















































Arquiteto, vamos iniciar o "Sprint 3: Memória e Contexto".

**Objetivo:**
Implementar uma memória de sessão simples para que a Júlia possa manter o contexto dentro de uma única conversa.

**Tarefa Específica:**
Sua tarefa é criar o prompt técnico completo para o Executor (Gemini 2.5 Pro) realizar a "Tarefa 3.1: Implementação da Memória de Curto Prazo (Sessão)".

**Recursos Fornecidos:**
Para esta tarefa, o Executor precisará: 
1. Em agent.js, criar uma estrutura de dados simples (um objeto JavaScript) para armazenar históricos de conversa por sessionId. Ex: const sessions = {};.
2. Modificar a rota POST /chat em server.js para aceitar um sessionId no corpo da requisição. Ex: { "sessionId": "user123", "message": "oi" }.
3. No agent.js, antes de chamar o fluxo, armazenar a mensagem do usuário e a resposta do agente no objeto sessions sob o sessionId correspondente.
4. Modificar mainFlow.js para que, se a conversa já começou (ou seja, já existe um histórico para aquele sessionId), ele dê uma resposta diferente. Ex: "Olá novamente!" em vez da apresentação completa.

**Formato da Saída:**
O prompt que você criar para o Gemini deve ser completo e conter as seguintes seções:
1.  As modificações exatas a serem feitas nos arquivos `agent.js` , 'mainFlow.js' e `server.js`.
2.  Instruções claras de teste para o Thunder Client, detalhando a rota, o método, o corpo (body) da requisição e a resposta esperada baseado no seguinte:
'''
Primeira Chamada: POST /chat com { "sessionId": "felipe01", "message": "Oi" } retorna a apresentação completa.
Segunda Chamada: POST /chat com { "sessionId": "felipe01", "message": "Tudo bem?" } retorna uma resposta de continuação (ex: "Olá novamente!").
Novo Usuário: POST /chat com { "sessionId": "juarez02", "message": "Oi" } retorna a apresentação completa, provando que as sessões são independentes.
'''
3.  Um checklist de validação da entrega para eu poder verificar o trabalho do Executor.

















































Arquiteto, vamos iniciar o "Sprint 1: Fundação e Persona (O Nascimento da Júlia)".

**Objetivo:**
Objetivo do Sprint: Construir o esqueleto do projeto. Ter um servidor rodando que sabe quem é a "Júlia", mas ainda não sabe conversar.

**Tarefa Específica:**
Sua tarefa é criar o prompt técnico completo para o Executor (Gemini 2.5 Pro) realizar a " 1.1: Estruturação do Ambiente e Servidor Base".

**Recursos Fornecidos:**
Instruções gerais necessárias, pois é o primeiro passo.

**Formato da Saída:**
O prompt que você criar para o Gemini deve ser completo e conter as seguintes seções:
1. Criar o arquivo server.js com uma rota de teste (/status) que retorna { status: 'ok' }.
2. Criar o arquivo agent.js com uma estrutura inicial (função init vazia).
3. Configurar o script dev no package.json para rodar com nodemon.
4. Criar Um checklist de validação da entrega o Gestor poder verificar o trabalho do Executor com:
- Instruções claras de teste para realziar o comando 'npm run dev' e ver se o servidor incia sem erros.
- Instruções claras de teste para o Thunder Client, detalhando onde e como aplicar uma requisição GET para http://localhost:3000/status que retorna o JSON { "status": "ok" } com status 200 OK
