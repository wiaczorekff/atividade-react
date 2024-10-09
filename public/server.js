const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect('https://cloud.mongodb.com/v2/66e21e8344bee6458394672d#/overview', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log(err));

// Rotas
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});