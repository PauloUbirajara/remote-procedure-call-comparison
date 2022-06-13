package com.graphql.demo.input

import graphql.schema.GraphQLInputType
import lombok.Getter
import lombok.Setter

@Getter
@Setter
class PlaylistInput : GraphQLInputType {
    public val personId: Long? = null
    private val name: String? = null
    override fun getName(): String? {
        return this.name
    }
}