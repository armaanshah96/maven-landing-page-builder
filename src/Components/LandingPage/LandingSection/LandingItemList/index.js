import { useContext } from "react";
// import { SectionsContext } from "../../../../contexts/SectionsProvider";
// import { SectionsContext } from "../../../../contexts/SectionsProvider";
import { OrderedSectionItemsContext } from "../../../../contexts/OrderedSectionItemsProvider";
import LandingItem from "./LandingItem";
import "./LandingItemList.css";

function LandingItemList({ sectionId }) {
  const { orderedSectionItems } = useContext(OrderedSectionItemsContext);

  return (
    <div className="landing-item-list">
      {orderedSectionItems[sectionId].map((itemId) => (
        <LandingItem itemId={itemId} />
      ))}
    </div>
  );
}

export default LandingItemList;
