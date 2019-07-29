import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectCollections} from '../../Redux/Shop/shop-selectors';

const CollectionOverview = ({collections}) => {
	return(
		<div>
			{
				collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))
			}
		</div>
		);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);