import React, { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import DragIcon from "../../../../assets/drag-indicator-gray.png";
import RightChevron from "../../../../assets/right-chevron.png";
import { ExpandedSectionContext } from "../../../../contexts/ExpandedSectionProvider";
import { OrderedSectionsContext } from "../../../../contexts/OrderedSectionsProvider";
import { SectionsContext } from "../../../../contexts/SectionsProvider";
import "./Section.css";

const SECTION_TYPE = "SECTION";

const Section = ({ listIndex, sectionId }) => {
  const ref = useRef(null);
  const { sections } = useContext(SectionsContext);
  const { updateExpandedSection } = useContext(ExpandedSectionContext);
  const { moveSection } = useContext(OrderedSectionsContext);

  // eslint-disable-next-line no-unused-vars
  const [_, drop] = useDrop({
    accept: SECTION_TYPE,
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
      moveSection(dragIndex, hoverIndex);
      item.listIndex = hoverIndex;
    },
  });

  // eslint-disable-next-line no-unused-vars
  const [collected, drag] = useDrag({
    type: SECTION_TYPE,
    item: () => {
      return { sectionId, listIndex };
    },
  });

  drag(drop(ref));

  return (
    <div
      className="section-card"
      ref={ref}
      onClick={() => updateExpandedSection(sectionId)}
    >
      <div className="section-card-heading">
        <div className="drag-indicator">
          <img src={DragIcon} alt="drag" />
        </div>
        <h3>{sections[sectionId].heading}</h3>
      </div>
      <div className="right-chevron">
        <img src={RightChevron} alt="select" />
      </div>
    </div>
  );
};

export default Section;
