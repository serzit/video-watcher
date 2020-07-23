import React from 'react';
import SearchBar from './SearchBars';
import youtube from '../api/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyAsZ9m9I5VvFyAoJhQ157iuIlCmekbrCpA';


class App extends React.Component {
	state = {
		videos: []
	};


	onInputSubmit = async input => {
		const response = await youtube.get('/search', {
			params: {
				q: input,
				part: 'snippet',
				type: 'video',
				maxResults: 5,
				key: KEY
			}
		})

		this.setState({
			videos: response.data.items
		});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onInputSubmit={this.onInputSubmit}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

export default App;