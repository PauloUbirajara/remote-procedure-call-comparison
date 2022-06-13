package com.graphql.demo.model

import lombok.Getter
import lombok.NoArgsConstructor
import lombok.Setter
import javax.persistence.*

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "PEOPLE")
class Person(@field:Column(name = "NAME", unique = true) public val name: String, @field:Column(name = "AGE") private val age: Int) {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public val id: Long? = null

    @OneToMany(mappedBy = "person")
    public val playlists: Collection<Playlist>? = null
}