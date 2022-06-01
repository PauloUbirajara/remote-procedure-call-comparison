const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/UserRoutes');
const playlistRoutes = require('./routes/PlaylistRoutes');
const songRoutes = require('./routes/SongRoutes');

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/playlists', playlistRoutes);
app.use('/songs', songRoutes);


app.listen(3000, () => console.log('Servidor aberto - http://localhost:3000'));
