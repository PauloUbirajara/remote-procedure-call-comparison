const express = require('express');

const PlaylistController = require('../controllers/PlaylistController')

const playlistRoutes = express.Router();

playlistRoutes.get('/', PlaylistController.get);
playlistRoutes.post('/', PlaylistController.create);
playlistRoutes.put('/:playlistId', PlaylistController.update);
playlistRoutes.delete('/:playlistId', PlaylistController.delete);

playlistRoutes.get('/:playlistId/songs', PlaylistController.getSongsByPlaylistId);

module.exports = playlistRoutes;
