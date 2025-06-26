require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts'); // 1. Importar as novas rotas

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Roteamento
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes); // 2. Usar as novas rotas

app.get('/', (req, res) => {
  res.send('API do Professor Carlos está online e funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor back-end rodando na porta ${PORT}`);
  console.log(`Acesse http://localhost:${PORT} para testar a conexão.`);
});