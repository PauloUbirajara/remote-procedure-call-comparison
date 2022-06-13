import grpc from 'k6/net/grpc';
import { check } from 'k6';

const client = new grpc.Client();
const protoFile = '../grpc-api/service-unary.proto';
client.load(['../grpc-api'], protoFile);

const maxUsers = 1;

export const options = {
    vus: maxUsers // Número máximo de usuário concorrentes
    // duration: '3m' // Duração máxima do teste (pode ser que o teste termine mais cedo devido o limite de iterações)
    // duration: '10s',
    // count: 1
};

export default () => {
    client.connect('localhost:50051', {
        plaintext: true
    });

    // const response = client.invoke('Spotify/GetAllUsers', {});
    // const response = client.invoke('Spotify/GetAllMusics', {});
    // const id = 1; const response = client.invoke('Spotify/GetUserPlaylists', {id});
    // const id = 1; const response = client.invoke('Spotify/GetPlaylistMusics', {id});
    // const id = 1; const response = client.invoke('Spotify/GetAllPlaylistsWithMusic', {id});

    check(response, {
        'status is OK': (r) => {
            console.log(r.message);
            return r && r.status === grpc.StatusOK;
        }
    });

    // console.log(JSON.stringify(response.message));

    client.close();
    // sleep(1);
};