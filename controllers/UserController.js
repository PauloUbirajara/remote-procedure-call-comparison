const DatabaseService = require('../services/DatabaseService');

class UserController {
	get(_req, res) {
		try {
			const users = DatabaseService.users;

			// Transformar todos os IDs de músicas para a música encontrada no DatabaseService.songs
			users.map((u) => {
				u.playlists.map((p) => {
					p.songs = DatabaseService.songs.filter((s) => p.songs.includes(s.id));
				});
				return u;
			});

			return res.status(200).json(users);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	create(req, res) {
		const user = req.body;
		try {
			DatabaseService.users.push(user);
			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const userId = req.params.userId;
		const newUser = req.body;

		try {
			DatabaseService.users = DatabaseService.users.map((user) => {
				if (user.id === userId) {
					return newUser;
				}
				return user;
			});

			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const userId = req.params.userId;
		try {
			DatabaseService.users = DatabaseService.users.filter(
				(user) => user.id !== userId
			);
			return res.status(200).json(userId);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	getSongsByUserId(req, res) {
		const { userId } = req.params;

		try {
			const user = DatabaseService.users.find((u) => u.id === parseInt(userId));

			if (!user) return res.sendStatus(404);

			const songsIds = Array(
				...new Set(user.playlists.flatMap((p) => p.songs))
			);
			const songs = songsIds.map((id) =>
				DatabaseService.songs.find((s) => s.id === id)
			);

			return res.status(200).json(songs);
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

			return res.status(200).json(playlists);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = new UserController();
