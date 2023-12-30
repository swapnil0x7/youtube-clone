import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className='grid grid-flow-col p-5 shadow-lg'>
			<div className='flex gap-4'>
				<img
					onClick={() => toggleMenuHandler()}
					className='h-8 cursor-pointer rounded-full transition ease duration-300 hover:bg-gray-200'
					alt='menu-icon'
					src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'
				/>
				<img
					className='h-8 p-[2px]'
					alt='youtube-icon'
					src='https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png'
				/>
			</div>
			<div className='col-span-12 text-center px-12'>
				<input
					className=' border border-gray-300 w-1/2 rounded-l-full p-2 pl-5'
					type='text'
					placeholder='search'
				/>
				<button
					type='button'
					className='border bg-gray-100 border-gray-300 p-2 px-4 rounded-r-full border-l-0 hover:bg-gray-200'>
					Search
				</button>
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
