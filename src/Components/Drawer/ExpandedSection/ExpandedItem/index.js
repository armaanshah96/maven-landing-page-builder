import { useContext } from "react";
import { ItemsContext } from "../../../../contexts/ItemsProvider";
import "./ExpandedItem.css";

const ExpandedItem = ({ expandedItemId }) => {
  const itemsContext = useContext(ItemsContext);

  return (
    <div>
      <div className="title">
        <p className="input-label">Item Title</p>
        <input
          type="text"
          value={itemsContext.items[expandedItemId].title}
          onChange={(e) =>
            itemsContext.updateTitle(expandedItemId, e.target.value)
          }
        />
      </div>
      <div className="description">
        <p className="input-label">Item Description</p>
        <input
          type="text"
          value={itemsContext.items[expandedItemId].description}
          onChange={(e) =>
            itemsContext.updateDescription(expandedItemId, e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default ExpandedItem;
