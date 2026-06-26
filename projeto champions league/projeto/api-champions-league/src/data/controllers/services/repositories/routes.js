const express = require('express');
const router = express.Router();
const playersController = require('./controllers/players-controller');

// Rota de Boas-vindas
router.get('/', (req, res) => res.json({ message: "Bem-vindo à API da Champions League ⚽" }));

// Rotas de Clubes
router.get('/api/clubs', playersController.getClubs);

// Rotas de Jogadores (CRUD)
router.get('/api/players', playersController.getAll);
router.get('/api/players/:id', playersController.getById);
router.post('/api/players', playersController.create);
router.patch('/api/players/:id', playersController.update);
router.delete('/api/players/:id', playersController.delete);

module.exports = router;