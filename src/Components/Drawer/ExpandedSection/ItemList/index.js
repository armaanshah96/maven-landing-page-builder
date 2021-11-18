import React from "react";
import { useContext } from "react";
import { OrderedSectionItemsContext } from "../../../../contexts/OrderedSectionItemsProvider";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ sectionId, expandedItem, setExpandedItem }) => {
  const { orderedSectionItems } = useContext(OrderedSectionItemsContext);

  return (
    <div className="item-list">
      <h4 className="item-list-heading">Section Items</h4>
      {orderedSectionItems[sectionId].map((itemId, index) => (
        <Item
          key={itemId}
          listIndex={index}
          sectionId={sectionId}
          itemId={itemId}
          isExpanded={expandedItem === itemId}
          setExpandedItem={setExpandedItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
