const express = require('express');

const UserController = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.get('/', UserController.get);
userRoutes.post('/', UserController.create);
userRoutes.put('/:userId', UserController.update);
userRoutes.delete('/:userId', UserController.delete);

userRoutes.get('/:userId/songs', UserController.getSongsByUserId);
userRoutes.get('/search', UserController.getPlaylistsWithSongId);




module.exports = userRoutes;
