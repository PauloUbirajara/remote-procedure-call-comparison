package com.graphql.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "SONG")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ARTIST")
    private String artist;

    @ManyToOne
    @JoinColumn(name="PLAYLIST_ID", nullable = false)
    private Playlist playlist;

    public Song(String name, String artist, Playlist playlist){
        this.name = name;
        this.artist = artist;
        this.playlist = playlist;
    }
}
