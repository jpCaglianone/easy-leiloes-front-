const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Configurando o middleware CORS para permitir todas as origens
app.use(cors());

// Servindo arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Rota para buscar os produtos do servidor remoto
app.get('/auction-api/product', async function (req, res) {
  try {
    const response = await fetch('http://localhost:8080/auction-api/product');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar os produtos' });
  }
});

// Rota para servir o arquivo HTML principal
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciando o servidor na porta 8080
app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});
