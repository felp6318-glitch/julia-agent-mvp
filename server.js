// Importa o framework Express
    const express = require('express');

    // Cria uma instância do aplicativo Express
    const app = express();

    // Define a porta em que o servidor vai rodar
    const PORT = 3000;

    // Rota de teste inicial
    app.get('/', (req, res) => {
      res.send('Servidor da Júlia está no ar!');
    });

    // Inicia o servidor e o faz "escutar" na porta definida
    app.listen(PORT, () => {
      console.log(`🚀 Servidor da Júlia rodando em http://localhost:${PORT}`);
    });