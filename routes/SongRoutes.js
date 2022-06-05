const express = require('express');

const SongController = require('../controllers/SongController')

const songRoutes = express.Router();

songRoutes.get('/', SongController.get);
songRoutes.post('/', SongController.create);
songRoutes.put('/:songId', SongController.update);
songRoutes.delete('/:songId', SongController.delete);

module.exports = songRoutes;
