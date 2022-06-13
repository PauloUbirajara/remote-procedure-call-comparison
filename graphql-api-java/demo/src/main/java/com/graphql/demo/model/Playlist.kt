package com.graphql.demo.model

import lombok.Getter
import lombok.NoArgsConstructor
import lombok.Setter
import javax.persistence.*

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "PLAYLIST")
class Playlist(
        @field:Column(name = "NAME")
        private val name: String,

        @field:JoinColumn(name = "PERSON_ID", nullable = false)
        @field:ManyToOne
        private val person: Person
) {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public val id: Long? = null

    @OneToMany(mappedBy = "playlist")
    private val songs: List<Song>? = null
}