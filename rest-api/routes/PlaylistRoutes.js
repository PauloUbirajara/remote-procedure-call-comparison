const express = require('express');

const PlaylistController = require('../controllers/PlaylistController');

const playlistRoutes = express.Router();

playlistRoutes.delete('/:playlistId', PlaylistController.delete);
playlistRoutes.get('/', PlaylistController.getAllPlaylists);
playlistRoutes.get('/:playlistId', PlaylistController.getById);
playlistRoutes.get('/:playlistId/songs', PlaylistController.getSongsByPlaylistId);
playlistRoutes.get('/search', PlaylistController.search);
playlistRoutes.post('/', PlaylistController.create);
playlistRoutes.post('/:playlistId', PlaylistController.addSongToPlaylist);
playlistRoutes.put('/:playlistId/', PlaylistController.update);

module.exports = playlistRoutes;
