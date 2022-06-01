const express = require('express');

const UserController = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.get('/', UserController.get);
userRoutes.get('/:userId/songs', UserController.getSongsByUserId);
userRoutes.get('/search', UserController.getPlaylistsWithSongId);

module.exports = userRoutes;
