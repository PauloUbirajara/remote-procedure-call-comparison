const express = require('express');

const SongController = require('../controllers/SongController')

const songRoutes = express.Router();

songRoutes.get('/', SongController.get);

module.exports = songRoutes;
