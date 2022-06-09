import grpc
import service_unary_pb2 as pb2
import service_unary_pb2_grpc as pb2_grpc

class SpotifyClient(object):
    def __init__(self, server_address, server_port):
        self.server_address = server_address
        self.port = server_port
        self.channel = grpc.insecure_channel(self.server_address + ':' + self.port)
        self.stub = pb2_grpc.SpotifyStub(self.channel)

    def getUser(self, id):
        return self.stub.GetUser(pb2.IdGenericRequest(id=id))

    def getAllUsers(self):
        return self.stub.GetAllUsers(pb2.Empty())

    def getUserPlaylists(self, id):
        return self.stub.GetUserPlaylists(pb2.IdGenericRequest(id=id))

    def addUser(self, user):
        return self.stub.AddUser(pb2.AddOrUpdateUserRequest(user))

    def addUserPlaylist(self, userId, playlistId):
        return self.stub.AddUserPlaylist(pb2.AddUserPlaylistRequest(userId=userId, playlistId=playlistId))

    def updateUser(self, user):
        return self.stub.UpdateUser(pb2.AddOrUpdateUserRequest(user))

    def deleteUser(self, id):
        return self.stub.DeleteUser(pb2.IdGenericRequest(id=id))

    def deleteUserPlaylist(self, userId, playlistId):
        return self.stub.DeleteUserPlaylist(pb2.DeleteUserPlaylistRequest(userId=userId, playlistId=playlistId))

    def getPlaylist(self, id):
        return self.stub.GetPlaylist(pb2.IdGenericRequest(id=id))

    def getAllPlaylists(self):
        return self.stub.GetAllPlaylists(pb2.Empty())

    def getPlaylistMusics(self, id):
        return self.stub.GetPlaylistMusics(pb2.IdGenericRequest(id=id))

    def getAllPlaylistsWithMusic(self, id):
        return self.stub.GetAllPlaylistsWithMusic(pb2.IdGenericRequest(id=id))

    def addPlaylist(self, playlist):
        return self.stub.AddPlaylist(pb2.AddOrUpdatePlaylistRequest(playlist))

    def addPlaylistMusic(self, playlistId, musicId):
        return self.stub.AddPlaylistMusic(pb2.AddPlaylistMusicRequest(playlistId=playlistId, musicId=musicId))

    def updatePlaylist(self, playlist):
        return self.stub.UpdatePlaylist(pb2.AddOrUpdatePlaylistRequest(playlist))

    def deletePlaylist(self, id):
        return self.stub.DeletePlaylist(pb2.IdGenericRequest(id=id))

    def deletePlaylistMusic(self, playlistId, musicId):
        return self.stub.DeletePlaylistMusic(pb2.DeletePlaylistMusicRequest(playlistId=playlistId, musicId=musicId))

    def getMusic(self, id):
        return self.stub.GetMusic(pb2.IdGenericRequest(id=id))

    def getAllMusics(self):
        return self.stub.GetAllMusics(pb2.Empty())

    def addMusic(self, music):
        return self.stub.AddMusic(pb2.AddOrUpdateMusicRequest(music))

    def updateMusic(self, music):
        return self.stub.UpdateMusic(pb2.AddOrUpdateMusicRequest(music))

    def deleteMusic(self, id):
        return self.stub.DeleteMusic(pb2.IdGenericRequest(id=id))

    def close(self):
        self.channel.close()


if __name__ == '__main__':
    client = SpotifyClient('localhost', '50051')
    print(client.getUser(1))
    print(client.getAllUsers())
    print(client.getUserPlaylists(1))
    # print(client.addUser({'id': 2, 'name': 'teste', 'email': '}'}))
    # print(client.updateUser({'id': 2, 'name': 'teste', 'email': '
    #print(client.deleteUser(1))
    #print(client.deleteUserPlaylist(1, 2))
    print(client.getPlaylist(1))
    print(client.getAllPlaylists())
    print(client.getPlaylistMusics(1))
    print(client.getAllPlaylistsWithMusic(1))
    # print(client.addPlaylist({'id': 2, 'name': 'teste', 'email': '
    print(client.addPlaylistMusic(1, 2))
    # print(client.updatePlaylist({'id': 2, 'name': 'teste', 'email': '
    client.close()
    print('done')
