package com.graphql.demo.input;

import graphql.schema.GraphQLInputType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonInput implements GraphQLInputType {

    private String name;
    private Integer age;
}
