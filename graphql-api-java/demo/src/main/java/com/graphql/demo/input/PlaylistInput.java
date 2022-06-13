package com.graphql.demo.input;

import graphql.schema.GraphQLInputType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlaylistInput implements GraphQLInputType {

    private Long personId;
    private String name;
}
