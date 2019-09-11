import React from "react";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../Redux/Shop/shop-selectors";

import { CollectionOverviewContainer } from "./CollectionOverview.styles";

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
