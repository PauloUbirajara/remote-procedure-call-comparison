import grpc from 'k6/net/grpc'
import { check } from 'k6'

const client = new grpc.Client()
const protoFile = '../grpc-api/service-unary.proto'
const load = __ENV.LOADPROFILE
const maxUsers = __ENV.MAX_USERS

client.load(['../grpc-api'], protoFile)

export const options = {
	vus: maxUsers, // Número máximo de usuário concorrentes
	duration: '3m' // Duração máxima do teste (pode ser que o teste termine mais cedo devido o limite de iterações)
	// duration: '10s',
}

function cargaBaixa() {
	const responseUsers = client.invoke('Spotify/GetAllUsers', {})

	check(responseUsers, {
		'responseUsers OK': (r) => {
			return r && r.status === grpc.StatusOK
		}
	})
}

function cargaMedia() {
	const responseUsers = client.invoke('Spotify/GetAllUsers', {})
	const responsePlaylists = client.invoke('Spotify/GetAllPlaylists', {})

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
}

function cargaAlta() {
	const responseUsers = client.invoke('Spotify/GetAllUsers', {})
	const responsePlaylists = client.invoke('Spotify/GetAllPlaylists', {})
	const responseMusics = client.invoke('Spotify/GetAllMusics', {})

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

	check(responseMusics, {
		'responseMusics OK': (r) => {
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
	client.connect('localhost:50051', {
		plaintext: true
	})

	cargas[load]()

	// console.log(JSON.stringify(response.message));

	client.close()
	// sleep(1);
}
