const DatabaseService = require('../services/DatabaseService');

class UserController {
	getAllUsers(_req, res) {
		return res.json(DatabaseService.users);
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

			return res.json(songs);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	create(req, res) {
		const { name, username, playlists } = req.body;

		try {
			const user = {
				id: Math.max(...DatabaseService.users.map((u) => u.id)) + 1,
				name,
				username,
				playlists: playlists || []
			};
			DatabaseService.users.push(user);
			return res.json(user);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const { userId } = req.params;
		const { name, username, playlists } = req.body;

		try {
			const user = DatabaseService.users.find((u) => u.id === parseInt(userId));

			if (!user) return res.sendStatus(404);
			user.name = name;
			user.username = username;
			user.playlists = playlists || [];

			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const { userId } = req.params;

		try {
			const user = DatabaseService.users.find((u) => u.id === parseInt(userId));

			if (!user) return res.sendStatus(404);
			DatabaseService.users = DatabaseService.users.filter(
				(u) => u.id !== user.id
			);
			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	getById(req, res) {
		const { userId } = req.params;

		try {
			const user = DatabaseService.users.find((u) => u.id === parseInt(userId));

			if (!user) return res.sendStatus(404);
			return res.json(user);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = new UserController();
