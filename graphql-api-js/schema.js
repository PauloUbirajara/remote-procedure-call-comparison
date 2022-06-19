import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Song {
    id: ID!
    name: String
    artist: String
  }

  type Playlist {
    id: ID!
    name: String
    musics: [Song]
  }

  type User {
    id: ID!
    name: String
    age: Int
    playlists: [Playlist]
  }

  type Query {
    getAllUsers: [User]
    getAllPlaylists: [Playlist]
    getAllSongs: [Song]
  }

  input UserInput {
    name: String
    age: Int
  }

  input PlaylistInput {
    name: String
  }

  input SongInput {
    name: String
    artist: String
  }

  type Mutation {
    saveUser(userInput: UserInput): User
    savePlaylist(userId: ID!, playlistInput: PlaylistInput): Playlist
    saveSong(userId: ID!, playlistId: ID!, songInput: SongInput): Song
  }
`