package com.graphql.demo.resolver;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.graphql.demo.input.PlaylistInput;
import com.graphql.demo.model.Person;
import com.graphql.demo.model.Playlist;
import com.graphql.demo.model.Song;
import com.graphql.demo.repository.PersonRepository;
import com.graphql.demo.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.CollationElementIterator;
import java.util.ArrayList;
import java.util.Collection;

@Component
public class PlaylistResolver implements GraphQLMutationResolver, GraphQLQueryResolver {

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private PlaylistRepository playlistRepository;

    public Collection<Playlist> findAllPlaylists(){
        return playlistRepository.findAll();
    }

    public Playlist savePlaylist(PlaylistInput input){
        Person person = personRepository.findById(input.getPersonId()).get();
        Playlist playlist = new Playlist(input.getName(), person);
        return playlistRepository.save(playlist);
    }
}
