import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Drawer from "./Components/Drawer";
import LandingPage from "./Components/LandingPage";
import ExpandedSectionProvider from "./contexts/ExpandedSectionProvider";
import ItemsProvider from "./contexts/ItemsProvider";
import OrderedSectionItemsProvider from "./contexts/OrderedSectionItemsProvider";
import OrderedSectionsProvider from "./contexts/OrderedSectionsProvider";
import SectionsProvider from "./contexts/SectionsProvider";

function App() {
  return (
    <SectionsProvider>
      <OrderedSectionsProvider>
        <ItemsProvider>
          <OrderedSectionItemsProvider>
            <ExpandedSectionProvider>
              <div className="app">
                <DndProvider backend={HTML5Backend}>
                  <Drawer />
                </DndProvider>
                <LandingPage />
              </div>
            </ExpandedSectionProvider>
          </OrderedSectionItemsProvider>
        </ItemsProvider>
      </OrderedSectionsProvider>
    </SectionsProvider>
  );
}

export default App;
