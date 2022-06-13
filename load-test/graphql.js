import http from 'k6/http'
import { check, sleep } from 'k6'

const load = __ENV.LOADPROFILE
const maxUsers = __ENV.MAX_USERS

export const options = {
	vus: maxUsers, // Número máximo de usuário concorrentes
	duration: '3m' // Duração máxima do teste (pode ser que o teste termine mais cedo devido o limite de iterações)
}

{
	findAllPeople{
		id
		name
		age
	  playlists{
			id
			name
		songs{
				id
				name
				artist
			}
		}
	}
	findAllSongs{
		id
		name
		artist
	}
	findAllPlaylists{
		id
		name
	}
}

function cargaBaixa() {
	const queryGetAllUser = "{ findAllPeople{ id name age playlists{ id name songs{ id name artist } } } }"

	const responseUsers = http.post("http://localhost:8080/graphql", JSON.stringify({ query: queryGetAllUser }), {
		headers: headers,
	})

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200
		}
	})
}

function cargaMedia() {
	const queryGetAllUser = "{ findAllPeople{ id name age playlists{ id name songs{ id name artist } } } }"
	const queryGetAllPlaylists = "{ findAllPlaylists{ id name } }"

	const responseUsers = http.post("http://localhost:8080/graphql", JSON.stringify({ query: queryGetAllUser }), {
		headers: headers,
	})

	const responsePlaylists = http.post("http://localhost:8080/graphql", JSON.stringify({ query: queryGetAllPlaylists }), {
		headers: headers,
	})

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200
		}
	})

	check(responsePlaylists, {
		'responsePlaylists OK': (r) => {
			return r && r.status === 200
		}
	})
}

function cargaAlta() {
	const queryGetAllUser = "{ findAllPeople{ id name age playlists{ id name songs{ id name artist } } } }";
	const queryGetAllPlaylists = "{ findAllPlaylists{ id name } }";
	const queryGetAllSongs = "{ findAllSongs{ id name artist } }";

	const responseUsers = http.post("http://localhost:8080/graphql", JSON.stringify({ query: queryGetAllUser }), {
		headers: headers,
	})

	const responsePlaylists = http.post("http://localhost:8080/graphql", JSON.stringify({ query: queryGetAllPlaylists }), {
		headers: headers,
	})

	const responseSongs = http.post("http://localhost:8080/graphql", JSON.stringify({ query: queryGetAllSongs }), {
		headers: headers,
	})

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === 200
		}
	})

	check(responsePlaylists, {
		'responsePlaylists OK': (r) => {
			return r && r.status === 200
		}
	})

	check(responseSongs, {
		'responseSongs OK': (r) => {
			return r && r.status === 200
		}
	})
}

const cargas = {
	baixa: cargaBaixa,
	media: cargaMedia,
	alta: cargaMedia
}

export default () => {
	cargas[load]()
	sleep(1)
}
