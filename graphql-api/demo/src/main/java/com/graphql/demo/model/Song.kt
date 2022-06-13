package com.graphql.demo.model

import lombok.Getter
import lombok.NoArgsConstructor
import lombok.Setter
import javax.persistence.*

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "SONG")
class Song(@field:Column(name = "NAME") private val name: String, @field:Column(name = "ARTIST") private val artist: String, @field:JoinColumn(name = "PLAYLIST_ID", nullable = false) @field:ManyToOne private val playlist: Playlist) {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private val id: Long? = null
}