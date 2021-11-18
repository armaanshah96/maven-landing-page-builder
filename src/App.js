import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import OrderedSectionsProvider from "./contexts/OrderedSectionsProvider";
import SectionsProvider from "./contexts/SectionsProvider";
import ItemsProvider from "./contexts/ItemsProvider";
import OrderedSectionItemsProvider from "./contexts/OrderedSectionItemsProvider";
import Drawer from "./Components/Drawer";
import LandingPage from "./Components/LandingPage";
import ExpandedSectionProvider from "./contexts/ExpandedSectionProvider";

function App() {
  return (
    <SectionsProvider>
      <OrderedSectionsProvider>
        <ItemsProvider>
          <OrderedSectionItemsProvider>
            <ExpandedSectionProvider>
              <DndProvider backend={HTML5Backend}>
                <div className="app">
                  <Drawer />
                  <LandingPage />
                </div>
              </DndProvider>
            </ExpandedSectionProvider>
          </OrderedSectionItemsProvider>
        </ItemsProvider>
      </OrderedSectionsProvider>
    </SectionsProvider>
  );
}

export default App;
