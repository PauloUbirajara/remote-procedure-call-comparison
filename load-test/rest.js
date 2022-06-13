import http from 'k6/http';
import { check } from 'k6';

const load = __ENV.LOADPROFILE;
const maxUsers = __ENV.MAX_USERS;

export const options = {
	vus: maxUsers, // Número máximo de usuário concorrentes
	duration: '3m' // Duração máxima do teste (pode ser que o teste termine mais cedo devido o limite de iterações)
};

function cargaBaixa() {
	const responseUsers = http.get('http://localhost:3000/users');

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200;
		}
	});
}

function cargaMedia() {
	const responseUsers = http.get('http://localhost:3000/users');
	const responsePlaylists = http.get('http://localhost:3000/playlists');

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
	const responseUsers = http.get('http://localhost:3000/users');
	const responsePlaylists = http.get('http://localhost:3000/playlists');
	const responseSongs = http.get('http://localhost:3000/songs');

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
	alta: cargaMedia
};

export default () => {
	cargas[load]();
};
