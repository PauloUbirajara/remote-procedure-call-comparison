package db.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class User {
    private Integer id;
    private String name;
    private String username;
    private List<Playlist> playlists;
}
