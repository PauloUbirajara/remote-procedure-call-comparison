const DatabaseService = require('../services/DatabaseService');

class SongController {
	get(_req, res) {
		return res.json(DatabaseService.songs);
	}
create(req, res) {
		const song = req.body;
		try {
			DatabaseService.songs.push(song);
			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	update(req, res) {
		const songId = req.params.songId;
		const newsong = req.body;

		try {
			DatabaseService.songs = DatabaseService.songs.map((song) => {
				if (song.id === songId) {
					return newsong;
				}
				return song;
			});

			return res.sendStatus(200);
		} catch (e) {
			return res.sendStatus(500);
		}
	}

	delete(req, res) {
		const songId = req.params.songId;
		try {
			DatabaseService.songs = DatabaseService.songs.filter(
				(song) => song.id !== songId
			);
			return res.json(songId);
		} catch (e) {
			return res.sendStatus(500);
		}
	}


}

module.exports = new SongController();
