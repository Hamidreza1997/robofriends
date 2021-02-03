import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
	return (
		<React.StrictMode>
		{
			robots.map((user, i) => {
				return ( 
					<Card 
						key={robots.id} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>
				);
			})
		}
	  	</React.StrictMode>
	);
}


export default CardList;

