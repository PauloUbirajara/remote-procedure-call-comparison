# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: service-unary.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x13service-unary.proto\"\x07\n\x05\x45mpty\"@\n\x04User\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03\x61ge\x18\x03 \x01(\x05\x12\x11\n\tplaylists\x18\x04 \x03(\x05\"4\n\x08Playlist\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06musics\x18\x04 \x03(\x05\"1\n\x05Music\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06\x61rtist\x18\x03 \x01(\t\"\x1e\n\x10IdGenericRequest\x12\n\n\x02id\x18\x01 \x01(\x05\"-\n\x16\x41\x64\x64OrUpdateUserRequest\x12\x13\n\x04user\x18\x01 \x01(\x0b\x32\x05.User\"<\n\x16\x41\x64\x64UserPlaylistRequest\x12\x0e\n\x06userId\x18\x01 \x01(\x05\x12\x12\n\nplaylistId\x18\x02 \x01(\x05\"?\n\x19\x44\x65leteUserPlaylistRequest\x12\x0e\n\x06userId\x18\x01 \x01(\x05\x12\x12\n\nplaylistId\x18\x02 \x01(\x05\"9\n\x1a\x41\x64\x64OrUpdatePlaylistRequest\x12\x1b\n\x08playlist\x18\x01 \x01(\x0b\x32\t.Playlist\">\n\x17\x41\x64\x64PlaylistMusicRequest\x12\x12\n\nplaylistId\x18\x01 \x01(\x05\x12\x0f\n\x07musicId\x18\x02 \x01(\x05\"A\n\x1a\x44\x65letePlaylistMusicRequest\x12\x12\n\nplaylistId\x18\x01 \x01(\x05\x12\x0f\n\x07musicId\x18\x02 \x01(\x05\"0\n\x17\x41\x64\x64OrUpdateMusicRequest\x12\x15\n\x05music\x18\x01 \x01(\x0b\x32\x06.Music\"\x1f\n\x11IdGenericResponse\x12\n\n\x02id\x18\x01 \x01(\x05\"&\n\x0fGetUserResponse\x12\x13\n\x04user\x18\x01 \x01(\x0b\x32\x05.User\",\n\x14UsersGenericResponse\x12\x14\n\x05users\x18\x01 \x03(\x0b\x32\x05.User\"2\n\x13GetPlaylistResponse\x12\x1b\n\x08playlist\x18\x01 \x01(\x0b\x32\t.Playlist\"8\n\x18PlaylistsGenericResponse\x12\x1c\n\tplaylists\x18\x01 \x03(\x0b\x32\t.Playlist\")\n\x10GetMusicResponse\x12\x15\n\x05music\x18\x01 \x01(\x0b\x32\x06.Music\"/\n\x15MusicsGenericResponse\x12\x16\n\x06musics\x18\x01 \x03(\x0b\x32\x06.Music2\xd0\n\n\x07Spotify\x12\x30\n\x07GetUser\x12\x11.IdGenericRequest\x1a\x10.GetUserResponse\"\x00\x12.\n\x0bGetAllUsers\x12\x06.Empty\x1a\x15.UsersGenericResponse\"\x00\x12\x42\n\x10GetUserPlaylists\x12\x11.IdGenericRequest\x1a\x19.PlaylistsGenericResponse\"\x00\x12\x38\n\x07\x41\x64\x64User\x12\x17.AddOrUpdateUserRequest\x1a\x12.IdGenericResponse\"\x00\x12@\n\x0f\x41\x64\x64UserPlaylist\x12\x17.AddUserPlaylistRequest\x1a\x12.IdGenericResponse\"\x00\x12;\n\nUpdateUser\x12\x17.AddOrUpdateUserRequest\x1a\x12.IdGenericResponse\"\x00\x12\x35\n\nDeleteUser\x12\x11.IdGenericRequest\x1a\x12.IdGenericResponse\"\x00\x12\x46\n\x12\x44\x65leteUserPlaylist\x12\x1a.DeleteUserPlaylistRequest\x1a\x12.IdGenericResponse\"\x00\x12\x38\n\x0bGetPlaylist\x12\x11.IdGenericRequest\x1a\x14.GetPlaylistResponse\"\x00\x12\x36\n\x0fGetAllPlaylists\x12\x06.Empty\x1a\x19.PlaylistsGenericResponse\"\x00\x12@\n\x11GetPlaylistMusics\x12\x11.IdGenericRequest\x1a\x16.MusicsGenericResponse\"\x00\x12J\n\x18GetAllPlaylistsWithMusic\x12\x11.IdGenericRequest\x1a\x19.PlaylistsGenericResponse\"\x00\x12@\n\x0b\x41\x64\x64Playlist\x12\x1b.AddOrUpdatePlaylistRequest\x1a\x12.IdGenericResponse\"\x00\x12\x42\n\x10\x41\x64\x64PlaylistMusic\x12\x18.AddPlaylistMusicRequest\x1a\x12.IdGenericResponse\"\x00\x12\x43\n\x0eUpdatePlaylist\x12\x1b.AddOrUpdatePlaylistRequest\x1a\x12.IdGenericResponse\"\x00\x12\x39\n\x0e\x44\x65letePlaylist\x12\x11.IdGenericRequest\x1a\x12.IdGenericResponse\"\x00\x12H\n\x13\x44\x65letePlaylistMusic\x12\x1b.DeletePlaylistMusicRequest\x1a\x12.IdGenericResponse\"\x00\x12\x32\n\x08GetMusic\x12\x11.IdGenericRequest\x1a\x11.GetMusicResponse\"\x00\x12\x30\n\x0cGetAllMusics\x12\x06.Empty\x1a\x16.MusicsGenericResponse\"\x00\x12:\n\x08\x41\x64\x64Music\x12\x18.AddOrUpdateMusicRequest\x1a\x12.IdGenericResponse\"\x00\x12=\n\x0bUpdateMusic\x12\x18.AddOrUpdateMusicRequest\x1a\x12.IdGenericResponse\"\x00\x12\x36\n\x0b\x44\x65leteMusic\x12\x11.IdGenericRequest\x1a\x12.IdGenericResponse\"\x00\x62\x06proto3')



_EMPTY = DESCRIPTOR.message_types_by_name['Empty']
_USER = DESCRIPTOR.message_types_by_name['User']
_PLAYLIST = DESCRIPTOR.message_types_by_name['Playlist']
_MUSIC = DESCRIPTOR.message_types_by_name['Music']
_IDGENERICREQUEST = DESCRIPTOR.message_types_by_name['IdGenericRequest']
_ADDORUPDATEUSERREQUEST = DESCRIPTOR.message_types_by_name['AddOrUpdateUserRequest']
_ADDUSERPLAYLISTREQUEST = DESCRIPTOR.message_types_by_name['AddUserPlaylistRequest']
_DELETEUSERPLAYLISTREQUEST = DESCRIPTOR.message_types_by_name['DeleteUserPlaylistRequest']
_ADDORUPDATEPLAYLISTREQUEST = DESCRIPTOR.message_types_by_name['AddOrUpdatePlaylistRequest']
_ADDPLAYLISTMUSICREQUEST = DESCRIPTOR.message_types_by_name['AddPlaylistMusicRequest']
_DELETEPLAYLISTMUSICREQUEST = DESCRIPTOR.message_types_by_name['DeletePlaylistMusicRequest']
_ADDORUPDATEMUSICREQUEST = DESCRIPTOR.message_types_by_name['AddOrUpdateMusicRequest']
_IDGENERICRESPONSE = DESCRIPTOR.message_types_by_name['IdGenericResponse']
_GETUSERRESPONSE = DESCRIPTOR.message_types_by_name['GetUserResponse']
_USERSGENERICRESPONSE = DESCRIPTOR.message_types_by_name['UsersGenericResponse']
_GETPLAYLISTRESPONSE = DESCRIPTOR.message_types_by_name['GetPlaylistResponse']
_PLAYLISTSGENERICRESPONSE = DESCRIPTOR.message_types_by_name['PlaylistsGenericResponse']
_GETMUSICRESPONSE = DESCRIPTOR.message_types_by_name['GetMusicResponse']
_MUSICSGENERICRESPONSE = DESCRIPTOR.message_types_by_name['MusicsGenericResponse']
Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:Empty)
  })
_sym_db.RegisterMessage(Empty)

User = _reflection.GeneratedProtocolMessageType('User', (_message.Message,), {
  'DESCRIPTOR' : _USER,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:User)
  })
_sym_db.RegisterMessage(User)

Playlist = _reflection.GeneratedProtocolMessageType('Playlist', (_message.Message,), {
  'DESCRIPTOR' : _PLAYLIST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:Playlist)
  })
_sym_db.RegisterMessage(Playlist)

Music = _reflection.GeneratedProtocolMessageType('Music', (_message.Message,), {
  'DESCRIPTOR' : _MUSIC,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:Music)
  })
_sym_db.RegisterMessage(Music)

IdGenericRequest = _reflection.GeneratedProtocolMessageType('IdGenericRequest', (_message.Message,), {
  'DESCRIPTOR' : _IDGENERICREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:IdGenericRequest)
  })
_sym_db.RegisterMessage(IdGenericRequest)

AddOrUpdateUserRequest = _reflection.GeneratedProtocolMessageType('AddOrUpdateUserRequest', (_message.Message,), {
  'DESCRIPTOR' : _ADDORUPDATEUSERREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:AddOrUpdateUserRequest)
  })
_sym_db.RegisterMessage(AddOrUpdateUserRequest)

AddUserPlaylistRequest = _reflection.GeneratedProtocolMessageType('AddUserPlaylistRequest', (_message.Message,), {
  'DESCRIPTOR' : _ADDUSERPLAYLISTREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:AddUserPlaylistRequest)
  })
_sym_db.RegisterMessage(AddUserPlaylistRequest)

DeleteUserPlaylistRequest = _reflection.GeneratedProtocolMessageType('DeleteUserPlaylistRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEUSERPLAYLISTREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:DeleteUserPlaylistRequest)
  })
_sym_db.RegisterMessage(DeleteUserPlaylistRequest)

AddOrUpdatePlaylistRequest = _reflection.GeneratedProtocolMessageType('AddOrUpdatePlaylistRequest', (_message.Message,), {
  'DESCRIPTOR' : _ADDORUPDATEPLAYLISTREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:AddOrUpdatePlaylistRequest)
  })
_sym_db.RegisterMessage(AddOrUpdatePlaylistRequest)

AddPlaylistMusicRequest = _reflection.GeneratedProtocolMessageType('AddPlaylistMusicRequest', (_message.Message,), {
  'DESCRIPTOR' : _ADDPLAYLISTMUSICREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:AddPlaylistMusicRequest)
  })
_sym_db.RegisterMessage(AddPlaylistMusicRequest)

DeletePlaylistMusicRequest = _reflection.GeneratedProtocolMessageType('DeletePlaylistMusicRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEPLAYLISTMUSICREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:DeletePlaylistMusicRequest)
  })
_sym_db.RegisterMessage(DeletePlaylistMusicRequest)

AddOrUpdateMusicRequest = _reflection.GeneratedProtocolMessageType('AddOrUpdateMusicRequest', (_message.Message,), {
  'DESCRIPTOR' : _ADDORUPDATEMUSICREQUEST,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:AddOrUpdateMusicRequest)
  })
_sym_db.RegisterMessage(AddOrUpdateMusicRequest)

IdGenericResponse = _reflection.GeneratedProtocolMessageType('IdGenericResponse', (_message.Message,), {
  'DESCRIPTOR' : _IDGENERICRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:IdGenericResponse)
  })
_sym_db.RegisterMessage(IdGenericResponse)

GetUserResponse = _reflection.GeneratedProtocolMessageType('GetUserResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETUSERRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:GetUserResponse)
  })
_sym_db.RegisterMessage(GetUserResponse)

UsersGenericResponse = _reflection.GeneratedProtocolMessageType('UsersGenericResponse', (_message.Message,), {
  'DESCRIPTOR' : _USERSGENERICRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:UsersGenericResponse)
  })
_sym_db.RegisterMessage(UsersGenericResponse)

GetPlaylistResponse = _reflection.GeneratedProtocolMessageType('GetPlaylistResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETPLAYLISTRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:GetPlaylistResponse)
  })
_sym_db.RegisterMessage(GetPlaylistResponse)

PlaylistsGenericResponse = _reflection.GeneratedProtocolMessageType('PlaylistsGenericResponse', (_message.Message,), {
  'DESCRIPTOR' : _PLAYLISTSGENERICRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:PlaylistsGenericResponse)
  })
_sym_db.RegisterMessage(PlaylistsGenericResponse)

GetMusicResponse = _reflection.GeneratedProtocolMessageType('GetMusicResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETMUSICRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:GetMusicResponse)
  })
_sym_db.RegisterMessage(GetMusicResponse)

MusicsGenericResponse = _reflection.GeneratedProtocolMessageType('MusicsGenericResponse', (_message.Message,), {
  'DESCRIPTOR' : _MUSICSGENERICRESPONSE,
  '__module__' : 'service_unary_pb2'
  # @@protoc_insertion_point(class_scope:MusicsGenericResponse)
  })
_sym_db.RegisterMessage(MusicsGenericResponse)

_SPOTIFY = DESCRIPTOR.services_by_name['Spotify']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _EMPTY._serialized_start=23
  _EMPTY._serialized_end=30
  _USER._serialized_start=32
  _USER._serialized_end=96
  _PLAYLIST._serialized_start=98
  _PLAYLIST._serialized_end=150
  _MUSIC._serialized_start=152
  _MUSIC._serialized_end=201
  _IDGENERICREQUEST._serialized_start=203
  _IDGENERICREQUEST._serialized_end=233
  _ADDORUPDATEUSERREQUEST._serialized_start=235
  _ADDORUPDATEUSERREQUEST._serialized_end=280
  _ADDUSERPLAYLISTREQUEST._serialized_start=282
  _ADDUSERPLAYLISTREQUEST._serialized_end=342
  _DELETEUSERPLAYLISTREQUEST._serialized_start=344
  _DELETEUSERPLAYLISTREQUEST._serialized_end=407
  _ADDORUPDATEPLAYLISTREQUEST._serialized_start=409
  _ADDORUPDATEPLAYLISTREQUEST._serialized_end=466
  _ADDPLAYLISTMUSICREQUEST._serialized_start=468
  _ADDPLAYLISTMUSICREQUEST._serialized_end=530
  _DELETEPLAYLISTMUSICREQUEST._serialized_start=532
  _DELETEPLAYLISTMUSICREQUEST._serialized_end=597
  _ADDORUPDATEMUSICREQUEST._serialized_start=599
  _ADDORUPDATEMUSICREQUEST._serialized_end=647
  _IDGENERICRESPONSE._serialized_start=649
  _IDGENERICRESPONSE._serialized_end=680
  _GETUSERRESPONSE._serialized_start=682
  _GETUSERRESPONSE._serialized_end=720
  _USERSGENERICRESPONSE._serialized_start=722
  _USERSGENERICRESPONSE._serialized_end=766
  _GETPLAYLISTRESPONSE._serialized_start=768
  _GETPLAYLISTRESPONSE._serialized_end=818
  _PLAYLISTSGENERICRESPONSE._serialized_start=820
  _PLAYLISTSGENERICRESPONSE._serialized_end=876
  _GETMUSICRESPONSE._serialized_start=878
  _GETMUSICRESPONSE._serialized_end=919
  _MUSICSGENERICRESPONSE._serialized_start=921
  _MUSICSGENERICRESPONSE._serialized_end=968
  _SPOTIFY._serialized_start=971
  _SPOTIFY._serialized_end=2331
# @@protoc_insertion_point(module_scope)
