import 'whatwg-fetch';

class GameService {
	constructor() {
		this.data = "Hello from GameService"
		this.getData = this.getData.bind(this)
	}

	getData() {
		const url = '/games'
		window.fetch(url)
		.then(res => {
			console.log(res.data)
			return res.data
		})
		.catch(error => {
			console.err(error)
		})
	}
}

export default GameService