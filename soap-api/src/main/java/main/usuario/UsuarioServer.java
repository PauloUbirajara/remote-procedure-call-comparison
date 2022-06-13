package main.usuario;

import db.models.Playlist;
import db.models.User;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import java.io.IOException;
import java.net.URISyntaxException;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public interface UsuarioServer {
    @WebMethod
    Object[] getAllUsuarios() throws IOException, URISyntaxException;

    @WebMethod
    Object[] getPlaylists(User u) throws IOException, URISyntaxException;

}
