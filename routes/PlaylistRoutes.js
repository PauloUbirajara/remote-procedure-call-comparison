const express = require('express');

const PlaylistController = require('../controllers/PlaylistController')

const playlistRoutes = express.Router();

playlistRoutes.get('/', PlaylistController.get);
playlistRoutes.get('/:playlistId/songs', PlaylistController.getSongsByPlaylistId);

module.exports = playlistRoutes;
