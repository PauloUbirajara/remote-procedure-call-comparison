import { request, gql } from 'graphql-request'
import fs from 'fs';

let rawData = fs.readFileSync('database.json')
let database = JSON.parse(rawData)

let mutationUsers = database.users.map(user => gql`
mutation {
  savePerson(person: {
   name: "${user.name}",
   age: ${user.age}
  }){
   name
  }
}
`)
let mutationPlaylists = database.playlists.map((playlist, index) => gql`
mutation {
    savePlaylist(playlist: {
    personId: ${index%5+1},
    name: "${playlist.name}"
  }){
    name
  }
}
`)
let mutationSongs = database.musics.map((song, index) => gql`
mutation {
    saveSong(song: {
    idPlaylist: ${index%6+6},
    name: "${song.name}",
    artist: "${song.artist}"
  }){
    name
  }
}
`)
for(let mutation of mutationUsers){
  request('http://localhost:8080/graphql', mutation).then(data => console.log(data))
}
setTimeout(() => {
  console.log('rodou 1')
  for(let mutation of mutationPlaylists){
    request('http://localhost:8080/graphql', mutation).then(data => console.log(data))
  }
}, 1000)
setTimeout(() => {
  console.log('rodou 2')
  for(let mutation of mutationSongs){
    request('http://localhost:8080/graphql', mutation).then(data => console.log(data))
  }
}, 2000)