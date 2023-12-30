import React from 'react';
import Button from './Button';

const list = ['All', 'Music', 'Live', 'Sports', 'Bollywood', 'Football', 'Javascript'];

const ButtonList = () => {
	return (
		<div className='flex p-2 shadow-inner'>
			{list.map((item) => (
				<Button key={item} name={item} />
			))}
		</div>
	);
};

export default ButtonList;
