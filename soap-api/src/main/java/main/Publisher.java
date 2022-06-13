package main;

import main.playlist.PlaylistServerImpl;
import main.song.SongServerImpl;
import main.usuario.UsuarioServerImpl;

import javax.xml.ws.Endpoint;

public class Publisher {
    public static void main(String[] args)
    {
        Endpoint.publish("http://127.0.0.1:9876/play",
                new PlaylistServerImpl());
        Endpoint.publish("http://127.0.0.1:9876/song",
                new SongServerImpl());
        Endpoint.publish("http://127.0.0.1:9876/user",
                new UsuarioServerImpl());
    }
}
