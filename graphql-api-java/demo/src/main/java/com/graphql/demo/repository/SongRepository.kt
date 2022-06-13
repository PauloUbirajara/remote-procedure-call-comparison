package com.graphql.demo.repository

import com.graphql.demo.model.Song
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SongRepository : JpaRepository<Song?, Long?>