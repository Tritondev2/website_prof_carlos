const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');
const router = express.Router();

// ROTA: /api/auth/register
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  // Gera o "hash" da senha para não salvá-la em texto puro
  const hashedPassword = bcrypt.hashSync(password, 8);

  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.run(sql, [email, hashedPassword], function (err) {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT') {
        return res.status(409).json({ message: 'Este email já está em uso.' });
      }
      return res.status(500).json({ message: 'Erro interno do servidor ao registrar.', error: err.message });
    }
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  });
});

// ROTA: /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.get(sql, [email], (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Erro interno do servidor.', error: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: 'Email ou senha inválidos.' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Email ou senha inválidos.' });
    }

    // Gera o token de acesso (crachá)
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '24h', // Token expira em 24 horas
    });

    res.status(200).json({
      message: 'Login bem-sucedido!',
      token: token,
    });
  });
});

module.exports = router;