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
@Table(name = "PLAYLIST")
public class Playlist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(mappedBy = "playlist")
    private List<Song> songs;

    @ManyToOne
    @JoinColumn( name = "PERSON_ID", nullable = false)
    private Person person;

    public Playlist(String name, Person person) {
        this.name = name;
        this.person = person;
    }
}
