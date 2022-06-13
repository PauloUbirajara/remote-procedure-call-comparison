package com.graphql.demo.resolver;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.graphql.demo.input.SongInput;
import com.graphql.demo.model.Playlist;
import com.graphql.demo.model.Song;
import com.graphql.demo.repository.PlaylistRepository;
import com.graphql.demo.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class SongResolver implements GraphQLMutationResolver, GraphQLQueryResolver {

    @Autowired
    private PlaylistRepository playlistRepository;
    @Autowired
    private SongRepository songRepository;

    public Collection<Song> findAllSongs(){
        return songRepository.findAll();
    }

    public Song saveSong(SongInput songInput){
        Playlist playlist = playlistRepository.findById(songInput.getIdPlaylist()).get();
        return songRepository.save(new Song(songInput.getName(), songInput.getArtist(), playlist));
    }
}
