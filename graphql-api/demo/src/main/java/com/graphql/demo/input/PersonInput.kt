package com.graphql.demo.input

import graphql.schema.GraphQLInputType
import lombok.Getter
import lombok.Setter

@Getter
@Setter
class PersonInput : GraphQLInputType {
    private val name: String? = null
    public val age: Int? = null
    override fun getName(): String? {
        return this.name
    }
}