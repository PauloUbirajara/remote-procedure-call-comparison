package com.graphql.demo.input;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SongInput {
    private Long idPlaylist;
    private String name;
    private String artist;
}
