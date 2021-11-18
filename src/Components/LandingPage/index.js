import { useContext } from "react";
import "./LandingPage.css";
import LandingSection from "./LandingSection";
import { OrderedSectionsContext  } from "../../contexts/OrderedSectionsProvider";

function LandingPage() {
  const { orderedSections } = useContext(OrderedSectionsContext)

  return (
    <div className="landing-page">
      {orderedSections.map((sectionId) => <LandingSection sectionId={sectionId}/> )}
    </div>
  );
}

export default LandingPage;
