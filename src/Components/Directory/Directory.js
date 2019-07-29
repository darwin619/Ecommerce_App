import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import {connect} from 'react-redux';
import { selectSections } from '../../Redux/Directory/directory-selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => {
      return (
			<div className="Directory">
				{sections.map(( {title, id, imageUrl, size, linkUrl} ) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} large={size} linkUrl={linkUrl} />
				)) }
			</div>

			);
	}

const mapstateToProps = createStructuredSelector({
	sections: selectSections
})

export default connect(mapstateToProps)(Directory);