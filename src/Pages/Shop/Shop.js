import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import {Route} from 'react-router';
import Category from '../../Pages/Category/Category';



const Shop = ({match}) => {
	return(
		<div>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:categoryId`} component={Category} />
		</div>
		);
}


export default Shop;