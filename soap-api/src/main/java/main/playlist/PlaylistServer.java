package main.playlist;

import db.models.Playlist;
import db.models.Song;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlElement;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public interface PlaylistServer {
    @WebMethod
    Object[] getMusicas(Playlist p) throws IOException, URISyntaxException;

    @WebMethod
    Object[] getPlaylistByMuscica(Song s) throws IOException, URISyntaxException;

    @WebMethod
    Object[] getAllPlaylist() throws IOException, URISyntaxException;
}
