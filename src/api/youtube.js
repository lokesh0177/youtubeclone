import axios from 'axios';

const KEY= 'AIzaSyDr8zZldTISxyYHc9u9WWzchElioeaeDnw'

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY

	}

});