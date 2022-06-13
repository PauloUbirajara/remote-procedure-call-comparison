const express = require('express');

const SongController = require('../controllers/SongController');

const songRoutes = express.Router();

songRoutes.delete('/:songId', SongController.delete);
songRoutes.get('/', SongController.getAllSongs);
songRoutes.get('/:songId', SongController.getById);
songRoutes.post('/', SongController.create);
songRoutes.put('/:songId', SongController.update);

module.exports = songRoutes;
