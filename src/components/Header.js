import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);

	const dispatch = useDispatch();
	const searchCache = useSelector((store) => store.search);

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSearchSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestion();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestion = async () => {
		console.log('API CALL - ', searchQuery);
		const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const data = await response.json();
		setSearchSuggestions(data[1]);
		dispatch(
			cacheResults({
				[searchQuery]: data[1],
			})
		);
	};

	return (
		<div className='grid grid-flow-col p-5 shadow-lg z-10 fixed w-full h-20 bg-white'>
			<div className='flex gap-4'>
				<img
					onClick={() => toggleMenuHandler()}
					className='h-8 cursor-pointer rounded-full transition ease duration-300 hover:bg-gray-200'
					alt='menu-icon'
					src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'
				/>

				<a href='/'>
					<img
						className='h-8 p-[2px] cursor-pointer'
						alt='youtube-icon'
						src='https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png'
					/>
				</a>
			</div>
			<div className='col-span-12 px-12'>
				<div>
					<input
						className='border border-gray-300 w-1/2 rounded-l-full p-2 pl-5'
						type='text'
						placeholder='search'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button
						type='button'
						className='border bg-gray-100 border-gray-300 p-2 px-4 rounded-r-full border-l-0 hover:bg-gray-200'>
						Search
					</button>
				</div>
				{showSuggestions && searchSuggestions.length > 1 && (
					<div className='absolute w-1/3 rounded-xl shadow-lg mx-1 px-4 py-4 bg-white border-gray-100'>
						<ul>
							{searchSuggestions.map((item) => (
								<li key={item} className='p-1 hover:bg-gray-100 rounded-md'>
									{item}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className=''>
				<img
					className='h-8'
					alt='user-icon'
					src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
				/>
			</div>
		</div>
	);
};

export default Header;
