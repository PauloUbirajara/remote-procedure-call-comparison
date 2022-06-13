package main.song;

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
public interface SongServer {
    @WebMethod
    Object[] getAllMusicas() throws IOException, URISyntaxException;

}
