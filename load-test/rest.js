import http from 'k6/http';
import { check, sleep } from 'k6';

const load = __ENV.LOADPROFILE;
const maxUsers = __ENV.MAX_USERS;

export const options = {
	vus: maxUsers, // Número máximo de usuário concorrentes
	duration: '3m' // Duração máxima do teste (pode ser que o teste termine mais cedo devido o limite de iterações)
};

const PORT = 5000;
const baseURL = `http://localhost:${PORT}`;

function cargaBaixa() {
	const responseUsers = http.get(`${baseURL}/users`);

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200;
		}
	});
}

function cargaMedia() {
	const responseUsers = http.get(`${baseURL}/users`);
	const responsePlaylists = http.get(`${baseURL}/playlists`);

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200;
		}
	});

	check(responsePlaylists, {
		'responsePlaylists OK': (r) => {
			return r && r.status === 200;
		}
	});
}

function cargaAlta() {
	const responseUsers = http.get(`${baseURL}/users`);
	const responsePlaylists = http.get(`${baseURL}/playlists`);
	const responseSongs = http.get(`${baseURL}/songs`);

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200;
		}
	});

	check(responsePlaylists, {
		'responsePlaylists OK': (r) => {
			return r && r.status === 200;
		}
	});

	check(responseSongs, {
		'responseSongs OK': (r) => {
			return r && r.status === 200;
		}
	});
}

const cargas = {
	baixa: cargaBaixa,
	media: cargaMedia,
	alta: cargaAlta
};

export default () => {
	cargas[load]();
	sleep(1);
};
