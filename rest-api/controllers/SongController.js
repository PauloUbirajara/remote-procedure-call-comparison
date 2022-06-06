const DatabaseService = require('../services/DatabaseService');

class SongController {
	get(_req, res) {
		return res.json(DatabaseService.songs);
	}
}

module.exports = new SongController();
