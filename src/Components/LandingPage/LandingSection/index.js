import "./LandingSection.css";
import LandingHeading from "./LandingHeading";
import LandingItemList from "./LandingItemList";
import { useContext, useEffect, useRef } from "react";
import { ExpandedSectionContext } from "../../../contexts/ExpandedSectionProvider";

function LandingSection({ sectionId }) {
  const { expandedSection } = useContext(ExpandedSectionContext);
  const ref = useRef(null);
  const isHighlighted = expandedSection === sectionId;

  useEffect(() => {
    isHighlighted && ref.current.scrollIntoView({ behavior: "smooth" });
  }, [isHighlighted]);

  const sectionStyles =
    "landing-section " + (isHighlighted && "landing-section-highlighted");
  return (
    <div className={sectionStyles} ref={ref}>
      <LandingHeading sectionId={sectionId} />
      <LandingItemList sectionId={sectionId} />
    </div>
  );
}

export default LandingSection;
