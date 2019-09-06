import React from 'react';
import {Route} from 'react-router';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../Redux/Shop/shop-actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../Redux/Shop/shop-selectors';
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../Components/WithSpinner/WithSpinner';
import CollectionOverviewContainer from '../../Components/CollectionOverview/CollectionOverviewContainer';
import CategoryContainer from '../../Pages/Category/CategoryContainer';

class Shop extends React.Component {

	 componentDidMount() {
	   const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync();
     }

	  render() {
	  	const {match} = this.props;
		return (
			<div className='shop-page'>
	        <Route
	          exact
	          path={`${match.path}`}
			  component={CollectionOverviewContainer}
	        />
	        <Route
	          path={`${match.path}/:categoryId`}
	          component={CategoryContainer}
	        />
	       </div>
			);
	}
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null,mapDispatchToProps)(Shop);