import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import { selectCollection } from "../../Redux/Shop/shop-selectors";

import {
  CategoryPageContainer,
  CategoryTitle,
  CategoryItemsContainer
} from './Category.styles';

const Category = ({ category }) => {
  const { title, items } = category;
  return (
    <CategoryPageContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <CategoryItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CategoryItemsContainer>
    </CategoryPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);
