🚀 Projeto Júlia - Agente de IA Comercial (MVP)

Este repositório contém o código-fonte do MVP (Minimum Viable Product) da Júlia, uma Agente de IA Comercial desenvolvida para a JT Elite.

## 🎯 Objetivo do Projeto

Substituir o chatbot atual por uma experiência de atendimento humanizada, persuasiva e focada em conversão, seguindo uma arquitetura modular que permite a fácil integração da lógica de vendas pelo time comercial.

## 🛠️ Arquitetura

O projeto é dividido em camadas claras para garantir a manutenibilidade e a escalabilidade:

-   `server.js`: O servidor Express que expõe a API da Júlia.
-   `agent.js`: O orquestrador central que gerencia o fluxo da conversa.
-   `persona.json`: O "DNA" da Júlia, definindo seu nome, tom de voz e exemplos de fala.
-   `/flows`: Pasta contendo os módulos de diálogo (diagnóstico, benefícios, etc.).
-   `/memory`: Pasta contendo a lógica de memória de sessão.

## ⚙️ Como Rodar o Projeto Localmente

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão LTS recomendada)
-   [Git](https://git-scm.com/)

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd SEU-REPOSITORIO
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

O servidor estará rodando em `http://localhost:3000`.

## 🔌 Como Integrar a Lógica de Vendas (Para o Time Comercial)

A arquitetura foi projetada para ser plug-and-play. Para adicionar ou modificar a lógica de vendas, você precisa editar **APENAS UM ARQUIVO**:

-   **`flows/sales.js`**

Este arquivo é o ponto de entrada para qualquer conversa relacionada a preços, planos ou matrículas. Nenhuma outra parte do código precisa ser alterada.

## 🤝 Contribuição

Este projeto é gerenciado por Felipe Araújo, com arquitetura do ChatGPT e execução técnica do Gemini 2.5 Pro.
```

Resumo e Organização

1.  **Sua Organização:** Continue usando sua estrutura de pastas (`1-BIBLIOTECA`, `2-PROMPTS`, etc.) para seus documentos de planejamento. Isso é ótimo. O código do projeto (`server.js`, `flows/`, etc.) deve ficar na raiz, junto com o `README.md` e o `.gitignore`.
2.  **Próximo Passo:** Após configurar o Git e criar o `README.md`, você está oficialmente pronto para iniciar o **Sprint 1**. O ambiente está preparado, seguro e documentado.

****************************************************************************************************************
# Sprint 1 - 
Projeto Júlia - Agente de IA Comercial

Este projeto é o MVP (Minimum Viable Product) de um agente de IA comercial chamado Júlia. O objetivo é criar um serviço modular e escalável.

## Ambiente de Desenvolvimento

-   Windows 10
-   Node.js
-   Visual Studio Code
-   Nodemon para hot-reloading

## Como Executar

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  O servidor estará disponível em `http://localhost:3000`.

## Rotas Disponíveis

-   `GET /status`: Verifica a saúde do serviço.
-   `GET /persona`: Retorna o objeto JSON com a persona completa da agente Júlia.
-   `POST /chat`: Ponto de entrada para interagir com a agente.
    -   **Corpo da Requisição:** `{ "message": "Sua mensagem aqui" }`
    -   **Resposta:** `{ "reply": "Resposta da Júlia" }`


