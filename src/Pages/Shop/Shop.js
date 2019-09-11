import React, { lazy, Suspense } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../Redux/Shop/shop-actions";
import Spinner from "../../Components/Spinner/Spinner";

const CollectionOverviewContainer = lazy(() =>
  import("../../Components/CollectionOverview/CollectionOverviewContainer")
);
const CategoryContainer = lazy(() => import("../Category/CategoryContainer"));

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Suspense
          fallback={
            <div>
              {" "}
              <Spinner />
            </div>
          }
        >
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:categoryId`}
            component={CategoryContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
