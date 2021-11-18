import React, { useState } from "react";
import { initialSections } from "./initial-state";

export const SectionsContext = React.createContext({
  sections: {},
  updateHeader: (sectionId, headerText) => {},
});

const SectionsProvider = (props) => {
  const [sections, setSections] = useState(initialSections);

  const updateHeaderHandler = (sectionId, heading) => {
    setSections((prevSections) => ({
      ...prevSections,
      [sectionId]: {
        heading: heading,
      },
    }));
  };

  return (
    <SectionsContext.Provider
      value={{ sections: sections, updateHeader: updateHeaderHandler }}
    >
      {props.children}
    </SectionsContext.Provider>
  );
};

export default SectionsProvider;
