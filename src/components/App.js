import React from 'react';
import SearchBar from './SearchBars';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAsZ9m9I5VvFyAoJhQ157iuIlCmekbrCpA';


class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	componentDidMount() {
		this.onInputSubmit('music')
	}

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
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video})
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onInputSubmit={this.onInputSubmit}/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo}/>
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;