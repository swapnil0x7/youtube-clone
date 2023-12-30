import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	return (
		isMenuOpen && (
			<div className='w-48 p-5 shadow-lg'>
				<div>
					<ul>
						<li>Home</li>
						<li>Shorts</li>
						<li>Videos</li>
						<li>Live</li>
					</ul>
					<div className='font-bold pt-5'>Subscriptions</div>
					<ul>
						<li>Sports</li>
						<li>Music</li>
						<li>Gaming</li>
						<li>Movies</li>
					</ul>
					<div className='font-bold pt-5'>Subscriptions</div>
					<ul>
						<li>Sports</li>
						<li>Music</li>
						<li>Gaming</li>
						<li>Movies</li>
					</ul>
				</div>
			</div>
		)
	);
};

export default SideBar;
