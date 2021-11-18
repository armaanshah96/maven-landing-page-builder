import { useContext, useState } from "react";
import { SectionsContext } from "../../../contexts/SectionsProvider";
import { ExpandedSectionContext } from "../../../contexts/ExpandedSectionProvider";
import ExpandedItem from "./ExpandedItem";
import ItemList from "./ItemList";
import BackArrow from "../../../assets/left-arrow.png";
import "./ExpandedSection.css";

const ExpandedSection = ({ sectionId }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const { updateExpandedSection } = useContext(ExpandedSectionContext);
  const sectionsContext = useContext(SectionsContext);

  const resetView = () => {
    updateExpandedSection(null);
    setExpandedItem(null);
  };

  return (
    <div className='expanded-section'>
      <div class="expanded-section-header">
        <button class="back-button" onClick={resetView}>
          <img src={BackArrow} alt="back" />
        </button>
        <h1>Section</h1>
      </div>

      <div className="heading">
        <p className="input-label">Section Heading</p>
        <input
          type="text"
          value={sectionsContext.sections[sectionId].heading}
          onChange={(e) =>
            sectionsContext.updateHeader(sectionId, e.target.value)
          }
        />
      </div>

      <ItemList sectionId={sectionId} expandedItem={expandedItem} setExpandedItem={setExpandedItem} />

      {expandedItem && <ExpandedItem expandedItemId={expandedItem} />}
    </div>
  );
};

export default ExpandedSection;
