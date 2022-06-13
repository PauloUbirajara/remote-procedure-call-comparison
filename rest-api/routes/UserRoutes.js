const express = require('express');

const UserController = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.delete('/:userId', UserController.delete);
userRoutes.get('/', UserController.getAllUsers);
userRoutes.get('/:userId', UserController.getById);
userRoutes.get('/:userId/songs', UserController.getSongsByUserId);
userRoutes.post('/', UserController.create);
userRoutes.put('/:userId', UserController.update);

module.exports = userRoutes;
