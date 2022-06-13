package com.graphql.demo.resolver

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.graphql.demo.input.SongInput
import com.graphql.demo.model.Song
import com.graphql.demo.repository.PlaylistRepository
import com.graphql.demo.repository.SongRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class SongResolver : GraphQLMutationResolver, GraphQLQueryResolver {
    @Autowired
    private val playlistRepository: PlaylistRepository? = null

    @Autowired
    private val songRepository: SongRepository? = null
    fun findAllSongs(): MutableList<Song?> {
        return songRepository!!.findAll()
    }

    fun saveSong(songInput: SongInput): Song {
//        val playlist = playlistRepository!!.findById(songInput.getIdPlaylist()).get()
        val playlist = playlistRepository!!.findById(songInput.idPlaylist).get()
//        return songRepository!!.save(Song(songInput.getName(), songInput.getArtist(), playlist))
        return songRepository!!.save(Song(songInput.name!!, songInput.artist!!, playlist))
    }
}