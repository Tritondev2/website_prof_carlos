const express = require('express');
const router = express.Router();
const db = require('../database');
const authMiddleware = require('../middleware/authMiddleware');

// ROTA: GET /api/posts - Listar todos os posts (Pública)
router.get('/', (req, res) => {
  // Usamos JOIN para buscar também o email do autor de cada post
  const sql = `
    SELECT posts.id, posts.title, posts.content, posts.created_at, users.email as author_email
    FROM posts
    JOIN users ON posts.author_id = users.id
    ORDER BY posts.created_at DESC
  `;
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar posts.', error: err.message });
    }
    res.json(rows);
  });
});

// ROTA: POST /api/posts - Criar um novo post (Protegida)
router.post('/', authMiddleware, (req, res) => {
  const { title, content } = req.body;
  const author_id = req.userId; // Obtido do middleware de autenticação

  if (!title || !content) {
    return res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
  }

  const sql = 'INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)';
  db.run(sql, [title, content, author_id], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Erro ao criar post.', error: err.message });
    }
    res.status(201).json({ message: 'Post criado com sucesso!', postId: this.lastID });
  });
});

// ROTA: GET /api/posts/:postId/comments - Listar comentários de um post (Pública)
router.get('/:postId/comments', (req, res) => {
    const { postId } = req.params;
    const sql = `
        SELECT comments.id, comments.content, comments.created_at, users.email as author_email
        FROM comments
        JOIN users ON comments.author_id = users.id
        WHERE comments.post_id = ?
        ORDER BY comments.created_at ASC
    `;
    db.all(sql, [postId], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao buscar comentários.', error: err.message });
        }
        res.json(rows);
    });
});

// ROTA: POST /api/posts/:postId/comments - Criar um novo comentário (Protegida)
router.post('/:postId/comments', authMiddleware, (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    const author_id = req.userId;

    if (!content) {
        return res.status(400).json({ message: 'O conteúdo do comentário é obrigatório.' });
    }

    const sql = 'INSERT INTO comments (content, author_id, post_id) VALUES (?, ?, ?)';
    db.run(sql, [content, author_id, postId], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Erro ao criar comentário.', error: err.message });
        }
        res.status(201).json({ message: 'Comentário criado com sucesso!', commentId: this.lastID });
    });
});


module.exports = router;