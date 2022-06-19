import { readFileSync } from "fs";

export const database = JSON.parse(readFileSync('./mock.json'));


for(const user of database.users){
  let playlists = []
  for(const playlistId of user.playlists){
    let songs = []
    const foundPlaylist = database.playlists.find(playlist => playlist.id === playlistId)
    playlists.push(foundPlaylist)
    for(const songId of foundPlaylist.musics){
      const foundSong = database.musics.find(music => music.id === songId)
      if(foundSong){
        songs.push(foundSong)
      }
    }
    foundPlaylist.musics = songs
    songs = []
  }
  user.playlists = playlists
  playlists = []
}

