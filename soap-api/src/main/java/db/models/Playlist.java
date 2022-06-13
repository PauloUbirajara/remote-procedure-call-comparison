package db.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class Playlist {
    private Integer id;
    private String name;
    private List<Integer> songs;
}
