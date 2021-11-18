import { useContext } from "react";
import { OrderedSectionsContext } from "../../contexts/OrderedSectionsProvider";
import "./LandingPage.css";
import LandingSection from "./LandingSection";

function LandingPage() {
  const { orderedSections } = useContext(OrderedSectionsContext);

  return (
    <div className="landing-page">
      {orderedSections.map((sectionId) => (
        <LandingSection sectionId={sectionId} />
      ))}
    </div>
  );
}

export default LandingPage;
