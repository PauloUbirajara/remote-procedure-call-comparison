package db.repositories;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import db.models.Song;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;

public class SongDao {
    ObjectMapper mapper = new ObjectMapper();

    private static SongDao uniqueInstance;

    public static synchronized SongDao getInstance() throws IOException, URISyntaxException {
        if (uniqueInstance == null)
            uniqueInstance = new SongDao();

        return uniqueInstance;
    }

    private List<Song> songs;

    private File file;

    public SongDao() throws IOException, URISyntaxException {
        URL resource = getClass().getClassLoader().getResource("songs_mock.json");
        if (resource == null) {
            throw new IllegalArgumentException("file not found!");
        } else {
            file = new File(resource.toURI());
        }
        songs = mapper.readValue(file, new TypeReference<List<Song>>() {
        });
    }

    public List<Song> getAll() {
        return songs;
    }

    //CRUD

    public Song addSong(Song s) {
        s.setId(songs.size());
        songs.add(s);
        return s;
    }

    public Song getById(Integer id) {
        for (Song s :
                songs) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null;
    }

    public Song updateSong(Song s) {
        for (Song song :
                songs) {
            if (s.getId() == song.getId()) {
                song.setArtist(s.getArtist());
                song.setName(s.getName());
                return s;
            }
        }
        return null;
    }

    public void deleteSong(Integer id) {
        for (Song song :
                songs) {
            if (song.getId() == id) {
                songs.remove(song);
            }
        }
    }

}
