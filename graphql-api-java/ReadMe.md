# Query

```graphql
{
  findAllPeople{
    id
    name
    age
    playlists{
      id
      name
      songs{
        id
        name
        artist
      }
    }
  }
  findAllSongs{
    id
    name
    artist
  }
  findAllPlaylists{
    id
    name
  }
}
```

# Mutations

```graphql
mutation {
  # savePlaylist(playlist: {
  #   personId: 1,
  #   name: "play1"
  # }){
  #   name
  # }
  savePerson(person: {
    name: "John"
    age: 20
  }){
    name
  }
  # saveSong(song: {
  #   idPlaylist: 2,
  #   name: "alo"
  #   artist: "homeland"
  # }){
  #   id
  # }
}

```