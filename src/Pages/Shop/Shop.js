import React from 'react';
import Shop_Items from './Shop_Items.js'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class Shop extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		products: Shop_Items
	};
}


render() {
	return(
		<div>
			{
				this.state.products.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))
			}
		</div>
		);
}
}

export default Shop;