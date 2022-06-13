package main.usuario;

import db.models.Playlist;
import db.models.User;
import db.repositories.UserDao;

import javax.jws.WebService;
import java.io.IOException;
import java.net.URISyntaxException;

@WebService(endpointInterface = "main.usuario.UsuarioServer")
public class UsuarioServerImpl implements UsuarioServer{

    @Override
    public Object[] getAllUsuarios() throws IOException, URISyntaxException {
        return UserDao.getInstance().getAll().toArray();
    }

    @Override
    public Object[] getPlaylists(User u) throws IOException, URISyntaxException {
        return UserDao.getInstance().getPlaylist(u).toArray();
    }
}
