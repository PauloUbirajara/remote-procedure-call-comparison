const DatabaseService = require('../services/DatabaseService');

class UserController {
	get(_req, res) {
		return res.json(DatabaseService.users);
	}

	getSongsByUserId(req, res) {
		const { userId } = req.params;

		try {
			const user = DatabaseService.users.find((u) => u.id === parseInt(userId));

			if (!user) return res.sendStatus(404);

			const songsIds = Array(...new Set(user.playlists.flatMap((p) => p.songs)));
			const songs = songsIds.map((id) => DatabaseService.songs.find((s) => s.id === id));

			return res.json(songs);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	getPlaylistsWithSongId(req, res) {
		const { songId } = req.query;
		try {
			const playlists = DatabaseService.users.flatMap((u) =>
				u.playlists.filter((p) => p.songs.includes(parseInt(songId)))
			);
			if (!playlists) return res.sendStatus(404);

			return res.json(playlists);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = new UserController();
