package com.graphql.demo.resolver;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.graphql.demo.input.PersonInput;
import com.graphql.demo.model.Person;
import com.graphql.demo.model.Playlist;
import com.graphql.demo.repository.PersonRepository;
import com.graphql.demo.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Component
public class PersonResolver implements GraphQLQueryResolver, GraphQLMutationResolver {

    @Autowired
    private PersonRepository repository;
    @Autowired
    private PlaylistRepository playlistRepository;

    public Collection<Person> findAllPeople(){
        return repository.findAll();
    }

    public Person savePerson(PersonInput input){
        return repository.save(new Person(input.getName(), input.getAge()));
    }

    public Person findPersonByName(String name){
        for(Person p:repository.findAll()){
            if(p.getName().equals(name)){
                return p;
            }
        }
        return null;
    }
}
