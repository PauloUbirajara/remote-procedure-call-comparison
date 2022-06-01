const DatabaseService = require('../services/DatabaseService');

class PlaylistController {
	get(_req, res) {
		const playlists = DatabaseService.playlists;
		playlists.forEach((p) => {
			p.songs = DatabaseService.songs.filter((s) => p.songs.includes(s.id));
		});
		return res.json(playlists);
	}

	getSongsByPlaylistId(req, res) {
		const { playlistId } = req.params;
		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);

			if (!playlist) return res.sendStatus(404);
			const songsIds = Array(...new Set(playlist.songs));
			const songs = songsIds.map((id) =>
				DatabaseService.songs.find((s) => s.id === id)
			);

			return res.json(songs);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = new PlaylistController();
