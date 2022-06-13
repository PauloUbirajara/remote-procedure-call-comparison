package com.graphql.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "PEOPLE")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME", unique = true)
    private String name;

    @Column(name = "AGE")
    private Integer age;

    @OneToMany(mappedBy = "person")
    private Collection<Playlist> playlists;
    public Person(String name, Integer age) {
        this.name = name;
        this.age = age;
    }
}
