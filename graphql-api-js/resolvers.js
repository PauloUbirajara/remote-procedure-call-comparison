import { database } from "./database.js";

export const resolvers = {
  Query: {
    getAllUsers: () => database.users,
    getAllPlaylists: () => database.playlists,
    getAllSongs: () => database.musics
  },
  Mutation: {
    saveUser: (_parent, args, _context, _info) => {
      const newUser = {
        ...args.userInput,
        id: database.users.length,
        playlists: []
      }
      database.users.push(newUser)
      return database.users[database.users.length-1]
    },
    savePlaylist: (_parent, args, _context, _info) => {
      const newPlaylist = {
        ...args.playlistInput,
        id: database.playlists.length,
        musics: []
      }
      const foundUser = database.users.find(user => user.id == args.userId)
      foundUser.playlists.push(newPlaylist)
      database.playlists.push(newPlaylist)
      return database.playlists[database.playlists.length-1]
    },
    saveSong: (_parent, args, _context, _info) => {
      const newSong = {
        ...args.songInput,
        id: database.musics.length
      }
      const foundUser = database.users.find(user => user.id == args.userId)
      if(foundUser){
        const foundPlaylist = foundUser.playlists.find(playlist => playlist.id == args.playlistId)
        if(foundPlaylist){
          foundPlaylist.musics.push(newSong)
          database.musics.push(newSong)
        }else{
          throw "playlist not found"
        }
      }else{
        throw "user not found"
      }
      
      
      return database.musics[database.musics.length-1]
    }
  }
};