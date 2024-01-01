import React from 'react';
import { formatNumber } from '../utils/helper';

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className='p-2 px-2 m-2 w-72 min-h-80 shadow-lg rounded-md transition ease duration-300 hover:bg-gray-100'>
			<img className='rounded-lg shadow' alt='thumbnail' src={thumbnails.medium.url} />
			<ul>
				<li className='font-bold py-2'>{title}</li>
				<li className=' text-gray-600 text-sm font-bold opacity-75'>{channelTitle}</li>
				<li className=' text-gray-600 text-sm font-bold opacity-75'>
					{formatNumber(statistics.viewCount)} views
				</li>
			</ul>
		</div>
	);
};

export default VideoCard;
