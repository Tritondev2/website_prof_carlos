const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // O token geralmente é enviado no cabeçalho 'Authorization' como 'Bearer TOKEN'
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Adicionamos o ID do usuário ao objeto da requisição para uso posterior
    req.userId = decoded.id;
    next(); // Passa para a próxima função (o controller da rota)
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
}

module.exports = authMiddleware;