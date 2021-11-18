import "./LandingItem.css";

import { useContext } from "react";
import { ItemsContext } from "../../../../../contexts/ItemsProvider";

function LandingItem({ itemId }) {
  const { items } = useContext(ItemsContext);
  return (
              <div className='landing-item'>
                <h2>{items[itemId].title}</h2>
                <div className='landing-item-description'>{items[itemId].description}</div>
              </div>
  );
}

export default LandingItem;
