package com.graphql.demo.resolver

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.graphql.demo.input.PersonInput
import com.graphql.demo.model.Person
import com.graphql.demo.repository.PersonRepository
import com.graphql.demo.repository.PlaylistRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

@Component
class PersonResolver : GraphQLQueryResolver, GraphQLMutationResolver {
    @Autowired
    private val repository: PersonRepository? = null

    @Autowired
    private val playlistRepository: PlaylistRepository? = null
    fun findAllPeople(): Collection<Person?> {
        return repository!!.findAll()
    }

    fun savePerson(input: PersonInput): Person {
//        return repository!!.save(Person(input.name!!, input.getAge()))
        return repository!!.save(Person(input.name!!, input.age!!))
    }

    fun findPersonByName(name: String?): Person? {
        for (p in repository!!.findAll()) {
//            if (p.getName().equals(name)) {
            if (p != null) {
                if (p.name == name) {
                    return p
                }
            }
        }
        return null
    }
}