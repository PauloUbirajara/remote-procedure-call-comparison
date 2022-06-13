package db.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Song {
    private Integer id;
    private String name;
    private String artist;
}
