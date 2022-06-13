const DatabaseService = require('../services/DatabaseService');

class PlaylistController {
	getAllPlaylists(_req, res) {
		const playlists = DatabaseService.playlists;
		return res.json(playlists);
	}

	create(req, res) {
		const { name, songs } = req.body;
		const playlist = {
			id: Math.max(...DatabaseService.playlists.map((p) => p.id)) + 1,
			name,
			songs: songs || []
		};
		DatabaseService.playlists.push(playlist);
		return res.json(playlist);
	}

	getSongsByPlaylistId(req, res) {
		const { playlistId } = req.params;
		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);
			if (!playlist) return res.sendStatus(404);
			playlist.songs = DatabaseService.songs.filter((s) =>
				playlist.songs.includes(s.id)
			);
			const { songs } = playlist;
			return res.json(songs);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const { playlistId } = req.params;
		const { name, songs } = req.body;

		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);

			if (!playlist) return res.sendStatus(404);
			playlist.name = name;
			playlist.songs = songs || [];
			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	getById(req, res) {
		const { playlistId } = req.params;
		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);

			if (!playlist) return res.sendStatus(404);
			return res.json(playlist);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const { playlistId } = req.params;
		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);

			if (!playlist) return res.sendStatus(404);
			DatabaseService.playlists = DatabaseService.playlists.filter(
				(p) => p.id !== playlist.id
			);
			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	search(req, res) {
		const { songId } = req.query;
		console.log(songId)

		try {
			const playlists = DatabaseService.playlists.filter((p) =>
				p.songs.includes(parseInt(songId))
			);
			console.log(playlists)

			if (!playlists) return res.sendStatus(404);
			return res.json(playlists);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	addSongToPlaylist(req, res) {
		const { playlistId } = req.params;
		const { songId } = req.body;

		try {
			const playlist = DatabaseService.playlists.find(
				(p) => p.id === parseInt(playlistId)
			);

			if (!playlist) return res.sendStatus(404);
			playlist.songs.push(parseInt(songId));
			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = new PlaylistController();
