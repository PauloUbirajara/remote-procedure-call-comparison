import http from 'k6/http'
import { check, sleep } from 'k6'

const load = __ENV.LOADPROFILE
const maxUsers = __ENV.MAX_USERS

export const options = {
	scenarios: {
		contacts: {
			executor: 'constant-vus',
			vus: maxUsers,
			duration: '10s',
			// duration: '3m',
			gracefulStop: '0s'
		}
	}
}

const queryGetAllUser = '{getAllUsers { name id age playlists { id name musics { id artist name } } }}'
const queryGetAllPlaylists = '{getAllPlaylists { id musics { name artist id } name }}'
const queryGetAllSongs = '{getAllSongs { id name artist }}'
const URL = 'http://localhost:4000/'

function cargaBaixa() {
	const responseUsers = http.post(
		URL,
		JSON.stringify({ query: queryGetAllUser }),
		{headers: { 'Content-Type': 'application/json'}}
	)

	check(responseUsers, {
		URL: (r) => {
			return r && r.status === 200
		}
	})
}

function cargaMedia() {
	const responseUsers = http.post(
		URL,
		JSON.stringify({ query: queryGetAllUser }),
		{headers: { 'Content-Type': 'application/json'}}
	)

	const responsePlaylists = http.post(
		URL,
		JSON.stringify({ query: queryGetAllPlaylists }),
		{headers: { 'Content-Type': 'application/json'}}
	)

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
	const responseUsers = http.post(
		URL,
		JSON.stringify({ query: queryGetAllUser }),
		{headers: { 'Content-Type': 'application/json'}}
	)

	const responsePlaylists = http.post(
		URL,
		JSON.stringify({ query: queryGetAllPlaylists }),
		{headers: { 'Content-Type': 'application/json'}}
	)

	const responseSongs = http.post(
		URL,
		JSON.stringify({ query: queryGetAllSongs }),
		{headers: { 'Content-Type': 'application/json'}}
	)

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
	alta: cargaAlta
}

export default () => {
	cargas[load]()
	sleep(1)
}
