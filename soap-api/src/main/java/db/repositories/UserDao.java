package db.repositories;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import db.models.Playlist;
import db.models.User;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;

public class UserDao {

    ObjectMapper mapper = new ObjectMapper();

    private static UserDao uniqueStance;

    public static synchronized UserDao getInstance() throws IOException, URISyntaxException {
        if (uniqueStance == null)
            uniqueStance = new UserDao();

        return uniqueStance;
    }


    private List<User> usuarios;

    private File file;

    public UserDao() throws IOException, URISyntaxException {
        URL resource = getClass().getClassLoader().getResource("users_mock.json");
        if (resource == null) {
            throw new IllegalArgumentException("file not found!");
        } else {
            file = new File(resource.toURI());
        }
        usuarios = mapper.readValue(file, new TypeReference<List<User>>() {
        });
    }

    public List<User> getAll() {
        return usuarios;
    }

    public List<Playlist> getPlaylist(User u) {
        for (User usuario :
                usuarios) {
            if (usuario.getId() == u.getId()) {
                return usuario.getPlaylists();
            }
        }
        return null;
    }

    // CRUD

    public User addUsuario(User u) {
        u.setId(usuarios.size());
        usuarios.add(u);
        return u;
    }

    public void removeUsuario(Integer id) {
        for (User user :
                usuarios) {
            if (user.getId() == id) {
                usuarios.remove(user);
            }
        }
    }

    public User updateUsuario(User u) {
        for (User user :
                usuarios) {
            if (u.getId() == user.getId()) {
                user.setName(u.getName());
                user.setPlaylists(user.getPlaylists());
                user.setUsername(u.getUsername());
                return user;
            }
        }
        return null;
    }

}
