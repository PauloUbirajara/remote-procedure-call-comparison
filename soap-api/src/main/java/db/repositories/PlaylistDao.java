package db.repositories;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import db.models.Playlist;
import db.models.Song;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class PlaylistDao {
    ObjectMapper mapper = new ObjectMapper();

    private static PlaylistDao uniqueStance;

    public static synchronized PlaylistDao getInstance() throws IOException, URISyntaxException {
        if (uniqueStance == null)
            uniqueStance = new PlaylistDao();

        return uniqueStance;
    }

    private List<Playlist> playlists;

    private File file;

    public PlaylistDao() throws IOException, URISyntaxException {

        URL resource = getClass().getClassLoader().getResource("playlist_mock.json");
        if (resource == null) {
            throw new IllegalArgumentException("file not found!");
        } else {
            file = new File(resource.toURI());
        }

        playlists = mapper.readValue(file, new TypeReference<List<Playlist>>() {
        });
    }

    public List<Song> getMusicas(Playlist p) throws IOException, URISyntaxException {
        List<Song> res = new ArrayList<>();

        for (Playlist playlist :
                playlists) {
            if (playlist.getId() == p.getId()) {
                for (Integer i :
                        playlist.getSongs()) {
                    SongDao s = SongDao.getInstance();
                    res.add(s.getById(i));
                }
            }
        }
        return res;
    }

    public List<Playlist> getAllPlaylist() {
        return playlists;
    }

    public List<Playlist> getPlaylistByMusica(Song s) {
        List<Playlist> res = new ArrayList<>();
        for (Playlist p :
                playlists) {
            if (p.getSongs().contains(s.getId())) {
                res.add(p);
            }
        }
        return res;
    }

    //CRUD

    public Playlist getById(Integer i) {
        for (Playlist p :
                playlists) {
            if (p.getId() == i) {
                return p;
            }
        }

        return null;
    }

    public Playlist addPlaylist(Playlist p){
        p.setId(playlists.size());
        playlists.add(p);
        return p;
    }

    public Playlist updatePlaylist(Playlist p){
        for (Playlist playlist :
                playlists) {
            if (playlist.getId() == p.getId()){
                playlist.setName(p.getName());
                playlist.setSongs(p.getSongs());
                return playlist;
            }
        }
        return null;
    }

    public void deletePlaylist(Integer id){
        for (Playlist p :
                playlists) {
            if (p.getId() == id){
                playlists.remove(p);
            }
        }
    }

}
