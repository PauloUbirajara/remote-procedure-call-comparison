const DatabaseService = require('../services/DatabaseService');

class SongController {
	getAllSongs(_req, res) {
		return res.json(DatabaseService.songs);
	}

	create(req, res) {
		const { name, artist } = req.body;
		const song = {
			id: Math.max(...DatabaseService.songs.map((s) => s.id)) + 1,
			name,
			artist
		};
		DatabaseService.songs.push(song);
		return res.json(song);
	}

	getById(req, res) {
		const { songId } = req.params;

		try {
			const song = DatabaseService.songs.find((s) => s.id === parseInt(songId));
			return res.status(200).json(song);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const { songId } = req.params;

		try {
			const song = DatabaseService.songs.find((s) => s.id === parseInt(songId));
			if (!song) return res.sendStatus(404);
			DatabaseService.songs = DatabaseService.songs.filter(
				(s) => s.id !== song.id
			);
			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const { songId } = req.params;
		const { name, artist } = req.body;

		try {
			const song = DatabaseService.songs.find((s) => s.id === parseInt(songId));
			if (!song) return res.sendStatus(404);
			song.name = name;
			song.artist = artist;
			return res.sendStatus(204);
		} catch (e) {
			console.error(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = new SongController();
