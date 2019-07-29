import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../Redux/Shop/shop-selectors';

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
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);