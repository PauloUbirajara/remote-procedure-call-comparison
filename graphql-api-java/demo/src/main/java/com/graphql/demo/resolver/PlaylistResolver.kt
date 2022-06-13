package com.graphql.demo.resolver

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.graphql.demo.input.PlaylistInput
import com.graphql.demo.model.Playlist
import com.graphql.demo.repository.PersonRepository
import com.graphql.demo.repository.PlaylistRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class PlaylistResolver : GraphQLMutationResolver, GraphQLQueryResolver {
    @Autowired
    private val personRepository: PersonRepository? = null

    @Autowired
    private val playlistRepository: PlaylistRepository? = null
    fun findAllPlaylists(): MutableList<Playlist?> {
        return playlistRepository!!.findAll()
    }

    fun savePlaylist(input: PlaylistInput): Playlist {
//        val person = personRepository!!.findById(input.getPersonId()).get()
        val person = personRepository!!.findById(input.personId).get()
        val playlist = Playlist(input.name!!, person)
        return playlistRepository!!.save(playlist)
    }
}