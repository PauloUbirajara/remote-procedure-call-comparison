import json


class Mock:
    def __init__(self):
        self.mockData = self.loadMockData()

    def loadMockData(self):
        with open("mock-database.json", 'r', encoding="utf-8") as f:
            mockData = json.load(f)
        return mockData

    def saveMockData(self):
        with open("mock-database.json", 'w', encoding="utf-8") as f:
            json.dump(self.mockData, f)

    def getMockData(self, key):
        return self.mockData[key]

    def getUser(self, userId):
        return self.getMockData("users")[userId]

    def getAllUsers(self):
        return self.getMockData("users")

    def getUserPlaylists(self, userId):
        return [i for i in self.getAllPlaylists() if i["id"] in self.getUser(userId)["playlists"]]

    def addUser(self, user):
        self.getMockData("users").append(user)
        self.saveMockData()

    def addUserPlaylist(self, userId, playlistId):
        self.getUser(userId)["playlists"].append(playlistId)
        self.saveMockData()

    def updateUser(self, user):
        self.getMockData("users")[user.id] = user
        self.saveMockData()

    def deleteUser(self, userId):
        del self.getMockData("users")[userId]
        self.saveMockData()

    def deleteUserPlaylist(self, userId, playlistId):
        userPlaylistsIds = self.getUser(userId)["playlists"]

        for i in range(len(userPlaylistsIds)):
            if userPlaylistsIds[i] == playlistId:
                del userPlaylistsIds[i]
                break

        self.saveMockData()

    def getPlaylist(self, playlistId):
        return self.getMockData("playlists")[playlistId]

    def getAllPlaylists(self):
        return self.getMockData("playlists")

    def getPlaylistMusics(self, playlistId):
        playlistMusicsIds = self.getMockData("playlists")[playlistId]["musics"]
        playlistMusics = [i for i in self.getAllMusics() if i["id"] in playlistMusicsIds]

        return playlistMusics

    def getAllPlaylistsWithMusic(self, musicId):
        return [i for i in self.getAllPlaylists() if musicId in i["musics"]]

    def addPlaylist(self, playlist):
        self.getMockData("playlists").append(playlist)
        self.saveMockData()

    def addPlaylistMusic(self, playlistId, musicId):
        self.getMockData("playlists")[playlistId]["musics"].append(musicId)
        self.saveMockData()

    def updatePlaylist(self, playlist):
        self.getMockData("playlists")[playlist.id] = playlist
        self.saveMockData()

    def deletePlaylist(self, playlistId):
        del self.getMockData("playlists")[playlistId]
        self.saveMockData()

    def deletePlaylistMusic(self, playlistId, musicId):
        playlistMusicsIds = self.getMockData("playlists")[playlistId]["musics"]

        for i in range(len(playlistMusicsIds)):
            if playlistMusicsIds[i] == musicId:
                del playlistMusicsIds[i]
                break

        self.saveMockData()

    def getMusic(self, musicId):
        return self.getMockData("musics")[musicId]

    def getAllMusics(self):
        return self.getMockData("musics")

    def addMusic(self, music):
        self.getMockData("musics").append(music)
        self.saveMockData()

    def updateMusic(self, music):
        self.getMockData("musics")[music.id] = music
        self.saveMockData()

    def deleteMusic(self, musicId):
        del self.getMockData("musics")[musicId]
        self.saveMockData()
