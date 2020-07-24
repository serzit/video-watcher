import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
	const renderedList = videos.map((videoElement) => {
		return <VideoItem
			key={videoElement.id.videoId}
			onVideoSelect={onVideoSelect}
			video={videoElement}/>
	})

	return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList