const express = require('express');
const path = require('path');

const app = express();

// Servir arquivos estáticos do React
app.use(express.static(path.join(__dirname, '../client/build')));

// Direcionar todas as outras solicitações para o ponto de entrada do React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/whoiam', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express está ouvindo na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
