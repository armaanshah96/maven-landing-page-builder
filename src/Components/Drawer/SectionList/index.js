import React from "react";
import { useContext } from "react";
import { OrderedSectionsContext } from "../../../contexts/OrderedSectionsProvider";
import Section from "./Section";
import "./SectionList.css";

const SectionList = () => {
  const orderedSectionsContext = useContext(OrderedSectionsContext);

  return (
    <div className="section-list">
      <h1 className="section-list-header">Sections</h1>
      <div className="section-card-list">
        {orderedSectionsContext.orderedSections.map((sectionId, index) => (
          <Section
            key={sectionId}
            listIndex={index}
            sectionId={sectionId}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionList;
