import React from 'react';

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className='p-2 px-2 m-2 w-72 shadow-lg border rounded-md transition ease duration-300 hover:bg-slate-200'>
			<img className='rounded-lg shadow' alt='thumbnail' src={thumbnails.medium.url} />
			<ul>
				<li className='font-bold py-2'>{title}</li>
				<li className=' text-sm'>{channelTitle}</li>
				<li className=' text-sm'>{statistics.viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;
