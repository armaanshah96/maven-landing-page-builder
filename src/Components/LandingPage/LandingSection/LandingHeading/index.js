import { useContext } from "react";
import { SectionsContext } from "../../../../contexts/SectionsProvider";
import "./LandingHeading.css";

function LandingHeading({ sectionId }) {
  const { sections } = useContext(SectionsContext);
  return <h1 className="landing-heading">{sections[sectionId].heading}</h1>;
}

export default LandingHeading;
