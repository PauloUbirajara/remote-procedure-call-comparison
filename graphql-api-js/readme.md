## Rota

A rota vai ta disponível em localhost:4000/

## Para rodar
```bash
yarn
yarn start
```

## Alguns exemplos de Queries e Mutations

```graphql
# mutation myMutation{
#   # savePlaylist(userId: "5", playlistInput: {
#   #   name: "capital"
#   # }) {
#   #   id
#   # }
#   # saveUser(userInput: {
#   #   name: "roger"
#   # }) {
#   #   name
#   # }
#   # saveSong(userId: "5", playlistId: "6", songInput: {
#   #   name: "new song teste"
#   # }) {
#   #   id
#   #   name
#   # }
# }

query MyQuery {
  getAllUsers {
    name
    id
    playlists {
      id
      name
      musics {
        id
        name
      }
    }
  }
  # getAllPlaylists {
  #   name
  #   musics {
  #     id
  #   }
  # }
  # getAllSongs {
  #   name
  # }
}
```