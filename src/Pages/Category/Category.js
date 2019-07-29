import React from 'react';
import './Category.scss';

import {selectCollection} from '../../Redux/Shop/shop-selectors';
import { connect } from 'react-redux';


const Category = ({category}) => {
	console.log(category)
	return(
		<div>
			<h1>wow</h1>
		</div>
		);
}

const mapStateToProps = (state, ownProps) => ({
	category: selectCollection(ownProps.match.params.categoryId)(state)
});


export default connect(mapStateToProps)(Category);