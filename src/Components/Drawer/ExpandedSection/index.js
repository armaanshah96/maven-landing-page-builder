import { useContext, useState } from "react";
import BackArrow from "../../../assets/left-arrow.png";
import { ExpandedSectionContext } from "../../../contexts/ExpandedSectionProvider";
import { SectionsContext } from "../../../contexts/SectionsProvider";
import ExpandedItem from "./ExpandedItem";
import "./ExpandedSection.css";
import ItemList from "./ItemList";

const ExpandedSection = ({ sectionId }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const { updateExpandedSection } = useContext(ExpandedSectionContext);
  const { sections, updateHeader } = useContext(SectionsContext);

  const resetView = () => {
    updateExpandedSection(null);
    setExpandedItem(null);
  };

  return (
    <div className="expanded-section">
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
          value={sections[sectionId].heading}
          onChange={(e) => updateHeader(sectionId, e.target.value)}
        />
      </div>

      <ItemList
        sectionId={sectionId}
        expandedItem={expandedItem}
        setExpandedItem={setExpandedItem}
      />

      {expandedItem && <ExpandedItem expandedItemId={expandedItem} />}
    </div>
  );
};

export default ExpandedSection;
