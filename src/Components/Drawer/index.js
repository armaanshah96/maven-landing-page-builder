import { useContext } from "react";
import { ExpandedSectionContext } from "../../contexts/ExpandedSectionProvider";
import "./Drawer.css";
import ExpandedSection from "./ExpandedSection";
import SectionList from "./SectionList";

function Drawer() {
  const { expandedSection } = useContext(ExpandedSectionContext);

  return (
    <div className="drawer-container">
      <div className="drawer">
        {expandedSection ? (
          <ExpandedSection sectionId={expandedSection} />
        ) : (
          <SectionList />
        )}
      </div>
    </div>
  );
}

export default Drawer;
