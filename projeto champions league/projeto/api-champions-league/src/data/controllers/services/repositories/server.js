const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para o Express entender JSON no corpo da requisição (POST/PATCH)
app.use(express.json());

// Injetando as rotas na aplicação
app.use(routes);

app.listen(PORT, () => {
  console.log(`⚽ Servidor da Champions League rodando em http://localhost:${PORT}`);
});