const DatabaseService = require('../services/DatabaseService');

class PlaylistController {
	get(_req, res) {
		const playlists = DatabaseService.playlists;
		playlists.forEach((p) => {
			p.songs = DatabaseService.songs.filter((s) => p.songs.includes(s.id));
		});
		return res.json(playlists);
	}

	create(req, res) {
		const playlist = req.body;
		try {
			DatabaseService.playlists.push(playlist);
			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const playlistId = req.params.playlistId;
		const newplaylist = req.body;

		try {
			DatabaseService.playlists = DatabaseService.playlists.map((playlist) => {
				if (playlist.id === playlistId) {
					return newplaylist;
				}
				return playlist;
			});

			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const playlistId = req.params.playlistId;
		try {
			DatabaseService.playlists = DatabaseService.playlists.filter(
				(playlist) => playlist.id !== playlistId
			);
			return res.json(playlistId);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	getSongsByPlaylistId(req, res) {
		const { playlistId } = req.params;
		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);

			if (!playlist) {
				return res.sendStatus(404);
			}

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
