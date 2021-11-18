import React, { useState } from "react";
import update from 'immutability-helper';
import { initialOrderedSectionItems } from "./initial-state";

export const OrderedSectionItemsContext = React.createContext({
  orderedSectionItems: [],
  moveItems: (sectionId, draggedIndex, hoveredIndex) => {},
});

const OrderedSectionItemsProvider = (props) => {
  const [orderedSectionItems, setOrderedSectionItems] = useState(
    initialOrderedSectionItems
  );

  const moveItems = (sectionId, draggedIndex, hoveredIndex) => {
    const itemId = orderedSectionItems[sectionId][draggedIndex];

    setOrderedSectionItems(prevOrderedItems => ({
      ...prevOrderedItems,
      [sectionId]: update(orderedSectionItems[sectionId], {
        $splice: [
          [draggedIndex, 1],
          [hoveredIndex, 0, itemId],
        ],
      })
    }));
  };

  return (
    <OrderedSectionItemsContext.Provider
      value={{
        orderedSectionItems: orderedSectionItems,
        moveItems: moveItems,
      }}
    >
      {props.children}
    </OrderedSectionItemsContext.Provider>
  );
};

export default OrderedSectionItemsProvider;
