




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
