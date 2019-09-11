import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selectSections } from "../../Redux/Directory/directory-selectors";
import { createStructuredSelector } from "reselect";

import { DirectoryMenuContainer } from "./Directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapstateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapstateToProps)(Directory);
