import React from 'react';
import './MenuItem.scss';

const MenuItem = ( {title, imageUrl, large} ) => {
	return (
		<div 
		style={{backgroundImage: `url(${imageUrl})`
		
	}}  className={`${large} menu-item`} >

					<div className="content">
						<h1 className='title'>{title}</h1>
						<span className="subtitle">SHOP NOW</span>
					</div>
		</div>
		);
}

export default MenuItem;