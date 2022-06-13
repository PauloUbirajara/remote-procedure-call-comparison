package main.song;

import db.models.Song;
import db.repositories.SongDao;

import javax.jws.WebService;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

@WebService(endpointInterface = "main.song.SongServer")
public class SongServerImpl implements SongServer{

    @Override
    public Object[] getAllMusicas() throws IOException, URISyntaxException {
        return SongDao.getInstance().getAll().toArray();
    }
}
