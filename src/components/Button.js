import React from 'react';

const Button = ({ name }) => {
	return (
		<div>
			<button className='px-5 py-2 m-2 rounded-lg bg-gray-200 transition ease duration-300 hover:bg-gray-300 shadow-md'>
				{name}
			</button>
		</div>
	);
};

export default Button;
