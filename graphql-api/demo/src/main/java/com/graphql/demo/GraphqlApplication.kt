package com.graphql.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class Application {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            runApplication<Application>(*args)
        }
    }
}

class GraphqlApplication {
     fun run(args: Array<String>) {
        runApplication<Application>(*args)
    }
}