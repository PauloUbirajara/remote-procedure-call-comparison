package com.graphql.demo.input

import lombok.Getter
import lombok.Setter

@Getter
@Setter
class SongInput {
    public val idPlaylist: Long? = null
    public val name: String? = null
    public val artist: String? = null
}