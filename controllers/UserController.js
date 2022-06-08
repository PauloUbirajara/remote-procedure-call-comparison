const DatabaseService = require('../services/DatabaseService');

class UserController {
	get(_req, res) {
		try {
			const users = DatabaseService.users;

			// Transformar todos os IDs de músicas para a música encontrada no DatabaseService.songs
			const usersWithSongInfo = users.map(getSongInfoForUser);

			return res.status(200).json(usersWithSongInfo);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	create(req, res) {
		let user = req.body;

		try {
			// Ajustar id de usuário para ser o maior
			delete user['id'];
			const nextId = Math.max(...DatabaseService.users.map((u) => u.id)) + 1;
			user = Object.assign({ id: nextId }, user);

			DatabaseService.users.push(user);
			return res.status(200).json(getSongInfoForUser(user));
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const userId = req.params.userId;
		const newUser = req.body;

		try {
			DatabaseService.users = DatabaseService.users.map((user) => {
				return user.id === userId ? newUser : user;
			});

			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const userId = req.params.userId;
		try {
			const users = DatabaseService.users;
			const userExists = users.map((u) => u.id).includes(userId);

			if (!userExists) {
				return res.sendStatus(404);
			}

			DatabaseService.users = users.filter((user) => user.id !== userId);

			return res.status(201);
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

function getSongInfoForUser(user) {
	const userWithSongInfo = Object.assign({}, user);

	userWithSongInfo.playlists.map(getSongInfoForPlaylist);

	return userWithSongInfo;
}

function getSongInfoForPlaylist(playlist) {
	const playlistWithSongInfo = Object.assign({}, playlist);

	playlistWithSongInfo.songs = DatabaseService.songs.filter((s) => {
		return playlistWithSongInfo.songs.includes(s.id);
	});

	return playlistWithSongInfo;
}

module.exports = new UserController();
