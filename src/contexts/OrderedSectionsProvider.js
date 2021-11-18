import React, { useState } from "react";
import { initialOrderedSections } from "./initial-state";
import update from 'immutability-helper';

export const OrderedSectionsContext = React.createContext({
  orderedSections: [],
  moveSection: (draggedIndex, hoveredIndex) => {},
});

const OrderedSectionsProvider = (props) => {
  const [orderedSections, setOrderedSections] = useState(
    initialOrderedSections
  );

  const moveSection = (draggedIndex, hoveredIndex) => {
    const sectionId = orderedSections[draggedIndex];

    setOrderedSections(
      update(orderedSections, {
        $splice: [
          [draggedIndex, 1],
          [hoveredIndex, 0, sectionId],
        ],
      })
    );
  };
  return (
    <OrderedSectionsContext.Provider
      value={{
        orderedSections: orderedSections,
        moveSection: moveSection,
      }}
    >
      {props.children}
    </OrderedSectionsContext.Provider>
  );
};

export default OrderedSectionsProvider;
