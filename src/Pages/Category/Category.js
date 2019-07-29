import React from 'react';
import './Category.scss';
import CollectionItem from '../../Components/CollectionItem/CollectionItem';
import {selectCollection} from '../../Redux/Shop/shop-selectors';
import { connect } from 'react-redux';


const Category = ({category}) => {
	const {title, items} = category
	return(
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
			{
				items.map(item => <CollectionItem key={item.id} item={item} />)
			}
			</div>
		</div>
		);
}

const mapStateToProps = (state, ownProps) => ({
	category: selectCollection(ownProps.match.params.categoryId)(state)
});


export default connect(mapStateToProps)(Category);