import gRPC
from concurrent import futures
import service_unary_pb2 as pb2
import service_unary_pb2_grpc as pb2_grpc


class Spotify(pb2_grpc.SpotifyServicer):
    def GetUser(self, request, context):
        print(request.user_id)
        return pb2.User(name="John")
