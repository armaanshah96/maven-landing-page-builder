import React, { useState } from "react";

export const ExpandedSectionContext = React.createContext({
  expandedSection: null,
  updateExpandedSection: (sectionId) => {},
});

const ExpandedSectionProvider = (props) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const updateExpandedSectionHandler = (sectionId) => {
    setExpandedSection(sectionId);
  }
  return (
    <ExpandedSectionContext.Provider
      value={{ expandedSection: expandedSection, updateExpandedSection: updateExpandedSectionHandler }}
    >
      {props.children}
    </ExpandedSectionContext.Provider>
  );
};

export default ExpandedSectionProvider;
