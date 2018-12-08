import axios from 'axios';

class GameService {
	constructor() {
		this.data = "Hello from GameService"
		this.getData = this.getData.bind(this)
	}

	getData() {
		const url = '/games'
		axios.get(url)
		.then(res => {
			console.log(res.data)
			return res.data
		})
	}
}

export default GameService