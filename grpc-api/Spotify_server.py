import grpc
from concurrent import futures
import service_unary_pb2 as pb2
import service_unary_pb2_grpc as pb2_grpc
from Mock_Controller import Mock


class SpotifyServer(pb2_grpc.SpotifyServicer):
    def __init__(self):
        self.mock = Mock()

    def GetUser(self, request, context):
        return pb2.GetUserResponse(user=self.mock.getUser(request.id))

    def GetAllUsers(self, request, context):
        return pb2.UsersGenericResponse(users=self.mock.getAllUsers())

    def GetUserPlaylists(self, request, context):
        return pb2.PlaylistsGenericResponse(playlists=self.mock.getUserPlaylists(request.id))

    def AddUser(self, request, context):
        self.mock.addUser(request)
        return pb2.IdGenericResponse(id=request.id)

    def AddUserPlaylist(self, request, context):
        self.mock.addUserPlaylist(request.userId, request.playlistId)
        return pb2.IdGenericResponse(id=request.playlistId)

    def UpdateUser(self, request, context):
        self.mock.updateUser(request)
        return pb2.IdGenericResponse(id=request.id)

    def DeleteUser(self, request, context):
        self.mock.deleteUser(request.id)
        return pb2.IdGenericResponse(id=request.id)

    def DeleteUserPlaylist(self, request, context):
        self.mock.deleteUserPlaylist(request.userId, request.playlistId)
        return pb2.IdGenericResponse(id=request.playlistId)

    def GetPlaylist(self, request, context):
        return pb2.GetPlaylistResponse(playlist=self.mock.getPlaylist(request.id))

    def GetAllPlaylists(self, request, context):
        return pb2.PlaylistsGenericResponse(playlists=self.mock.getAllPlaylists())

    def GetPlaylistMusics(self, request, context):
        return pb2.MusicsGenericResponse(musics=self.mock.getPlaylistMusics(request.id))

    def GetAllPlaylistsWithMusic(self, request, context):
        return pb2.PlaylistsGenericResponse(playlists=self.mock.getAllPlaylistsWithMusic(request.id))

    def AddPlaylist(self, request, context):
        self.mock.addPlaylist(request)
        return pb2.IdGenericResponse(id=request.id)

    def AddPlaylistMusic(self, request, context):
        self.mock.addPlaylistMusic(request.playlistId, request.musicId)
        return pb2.IdGenericResponse(id=request.musicId)

    def UpdatePlaylist(self, request, context):
        self.mock.updatePlaylist(request)
        return pb2.IdGenericResponse(id=request.id)

    def DeletePlaylist(self, request, context):
        self.mock.deletePlaylist(request.id)
        return pb2.IdGenericResponse(id=request.id)

    def DeletePlaylistMusic(self, request, context):
        self.mock.deletePlaylistMusic(request.playlistId, request.musicId)
        return pb2.IdGenericResponse(id=request.musicId)

    def GetMusic(self, request, context):
        return pb2.GetUserResponse(user=self.mock.getMusic(request.id))

    def GetAllMusics(self, request, context):
        return pb2.MusicsGenericResponse(musics=self.mock.getAllMusics())

    def AddMusic(self, request, context):
        self.mock.addMusic(request)
        return pb2.IdGenericResponse(id=request.id)

    def UpdateMusic(self, request, context):
        self.mock.updateMusic(request)
        return pb2.IdGenericResponse(id=request.id)

    def DeleteMusic(self, request, context):
        self.mock.deleteMusic(request.id)
        return pb2.IdGenericResponse(id=request.id)


def serve():
    print("Starting server...")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=32))
    pb2_grpc.add_SpotifyServicer_to_server(SpotifyServer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
