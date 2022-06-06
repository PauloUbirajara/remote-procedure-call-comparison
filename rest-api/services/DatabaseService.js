class DatabaseService {
	constructor() {
		this.users = [];
		this.playlists = [];
		this.songs = [];

		this.setupMockDatabase();
	}

	setupMockDatabase() {
		const { users, playlists, songs } = require('../mock/mock-database.json');
		this.users = users;
		this.playlists = playlists;
		this.songs = songs;
	}
}

module.exports = new DatabaseService();
