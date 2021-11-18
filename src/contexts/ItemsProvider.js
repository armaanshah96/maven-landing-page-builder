import React, { useState } from "react";
import { initialItems } from "./initial-state";

export const ItemsContext = React.createContext({
  items: {},
  updateTitle: (sectionId, title) => {},
  updateDescription: (sectionId, description) => {},
});

const ItemsProvider = (props) => {
  const [items, setItems] = useState(initialItems);

  const updateTitleHandler = (itemId, title) => {
    setItems(prevItems => ({
      ...prevItems,
      [itemId]: {
        ...prevItems[itemId],
        title: title
      }
    }))
  };

  const updateDescriptionHandler = (itemId, description) => {
    setItems(prevItems => ({
      ...prevItems,
      [itemId]: {
        ...(prevItems[itemId]),
        description: description
      }
    }))
  };

  return (
    <ItemsContext.Provider
      value={{ items: items, updateTitle: updateTitleHandler, updateDescription: updateDescriptionHandler }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
