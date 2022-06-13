package main.playlist;

import db.models.Playlist;
import db.models.Song;
import db.repositories.PlaylistDao;

import javax.jws.WebService;
import java.io.IOException;
import java.net.URISyntaxException;

@WebService(endpointInterface = "main.playlist.PlaylistServer")
public class PlaylistServerImpl implements PlaylistServer{

    @Override
    public Object[] getMusicas(Playlist p) throws IOException, URISyntaxException {
        return PlaylistDao.getInstance().getMusicas(p).toArray();
    }

    @Override
    public Object[] getPlaylistByMuscica(Song s) throws IOException, URISyntaxException {
        return PlaylistDao.getInstance().getPlaylistByMusica(s).toArray();
    }

    @Override
    public Object[] getAllPlaylist() throws IOException, URISyntaxException {
        return PlaylistDao.getInstance().getAllPlaylist().toArray();
    }
}
