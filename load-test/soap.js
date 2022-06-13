import { check } from 'k6';
import http from 'k6/http';


const load = __ENV.LOADPROFILE
const maxUsers = __ENV.MAX_USERS


const getUsuariosbody =
    "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:usu=\"http://usuario.main/\">\n" +
    "   <soapenv:Header/>\n" +
    "   <soapenv:Body>\n" +
    "      <usu:getAllUsuarios/>\n" +
    "   </soapenv:Body>\n" +
    "</soapenv:Envelope>"

const getSongsBody =
    "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:song=\"http://song.main/\">\n" +
    "   <soapenv:Header/>\n" +
    "   <soapenv:Body>\n" +
    "      <song:getAllMusicas/>\n" +
    "   </soapenv:Body>\n" +
    "</soapenv:Envelope>"

const getPlaylistsBody =
    "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:play=\"http://playlist.main/\">\n" +
    "   <soapenv:Header/>\n" +
    "   <soapenv:Body>\n" +
    "      <play:getAllPlaylist/>\n" +
    "   </soapenv:Body>\n" +
    "</soapenv:Envelope>"


export const options = {
    vus: maxUsers, // Número máximo de usuário concorrentes
    duration: '3m' // Duração máxima do teste (pode ser que o teste termine mais cedo devido o limite de iterações)
    // duration: '10s',
}

function cargaBaixa() {

    const responseUsers = http.post('http://127.0.0.1:9876/user', getUsuariosbody, { headers: { 'Content-Type': 'text/xml' } })

    check(responseUsers, {
        'responseUsers OK': (r) => {
            return r && r.status === 200
        }
    })
}

function cargaMedia() {
    const responseUsers = http.post('http://127.0.0.1:9876/user', getUsuariosbody, { headers: { 'Content-Type': 'text/xml' } })
    const responseSongs = http.post('http://127.0.0.1:9876/song', getSongsBody, { headers: { 'Content-Type': 'text/xml' } })

    check(responseUsers, {
        'responseUsers OK': (r) => {
            return r && r.status === 200
        }
    })

    check(responseSongs, {
        'responseSongs OK': (r) => {
            return r && r.status === 200
        }
    })
}

function cargaAlta() {
    const responseUsers = http.post('http://127.0.0.1:9876/user', getUsuariosbody, { headers: { 'Content-Type': 'text/xml' } })
    const responseSongs = http.post('http://127.0.0.1:9876/song', getSongsBody, { headers: { 'Content-Type': 'text/xml' } })
    const responsePlaylists = http.post('http://127.0.0.1:9876/playlist', getSongsBody, { headers: { 'Content-Type': 'text/xml' } })

    check(responseUsers, {
        'responseUsers OK': (r) => {
            return r && r.status === grpc.StatusOK
        }
    })

    check(responsePlaylists, {
        'responsePlaylists OK': (r) => {
            return r && r.status === grpc.StatusOK
        }
    })

    check(responseSongs, {
        'responseSongs OK': (r) => {
            return r && r.status === grpc.StatusOK
        }
    })
}

const cargas = {
    baixa: cargaBaixa,
    media: cargaMedia,
    alta: cargaAlta
}

export default () => {
    cargas[load]();
};