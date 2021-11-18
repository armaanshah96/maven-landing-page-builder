import React from "react";
import { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { OrderedSectionItemsContext } from "../../../../../contexts/OrderedSectionItemsProvider";
import { ItemsContext } from "../../../../../contexts/ItemsProvider";
import DragIcon from "../../../../../assets/drag-indicator-gray.png";
import "./Item.css";

const ITEM_TYPE = "ITEM";

const Item = ({ sectionId, itemId, listIndex, isExpanded, setExpandedItem }) => {
  const ref = useRef(null);
  const { moveItems } = useContext(OrderedSectionItemsContext);
  const { items } = useContext(ItemsContext);

  const [_, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.listIndex;
      const hoverIndex = listIndex;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItems(sectionId, dragIndex, hoverIndex);
      item.listIndex = hoverIndex;
    },
  });

  const [collectedProps, drag] = useDrag({
    type: ITEM_TYPE,
    item: () => {
      return { itemId, listIndex };
    }
  });

  drag(drop(ref));

  const styleClasses = "item-card " + (isExpanded && "highlight-item")


  return (
    <div className={styleClasses} ref={ref} key={itemId} onClick={() => setExpandedItem(itemId)}>
      <div className="drag-indicator">
        <img src={DragIcon} alt="drag" />
      </div>
      <h3>{items[itemId].title}</h3>
    </div>
  );
};

export default Item;
