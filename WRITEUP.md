## UI Architecture
The UI is built in two parts:
  - The left pane as the "Drawer" which has all user interaction and state management logic. 
  - The right pane as the "LandingPage" which is "dumb" and has no user interaction, simply rendering the output of the user's updates in the "Drawer"

## Data Model and State Management:
- The data model was designed from principles used in database design, aiming to normalize state. Concepts are relational and represented in separate table-like objects, i.e. items and sections (see `src/contexts/initial-state.js`). 
- In addition to the `concept` state objects, a separate set of data objects are used to manage ordinality of `concepts`. This is to simplify data transformations when sections or items are re-ordered, helping keep the code performant and readable.
- To prevent prop-drilling, I used React Context API to manage state. It's worth re-assessing whether using Context in this use-case is optimal or if it will lead to future performance and complexity issues. 

### Tradeoffs to Data Model
- Though, the existing data model makes rendering components easier, the normalized structure can make readability harder and requires managing multiple contexts throughout the entire app
- In a real world scenario where a backend API is sending and receiving state, ensuring low-complexity data transformations per fetch and `post` of data on the UI side will be important. The current data model may not be optimal depending on the constraints of our backend
## Future Feature Readiness:
- The data model will lend well to extending features such as adding, removing, duplicating sections and items because of it's normalized structure.
- Having different item `types` in sections would require some rework, though it should be relatively straightforward by adding a "type" field to the `sections` data object to allow UI to render based on section "type"
- To support instructor branding, the current implementation is lacking. The implementation would need styles relating to brand (i.e. font, colors) to be represented in a style theme to make branding changes easier.

## Areas of improvement
- Using theme for CSS styles (will help instructors introduce their brand)
- Refactoring Drag/Drop implementation, duplicated currently
- Re-usable UI components (input components, draggable elements in a list)
- Re-assess whether Context is the right approach for state management
- Dragging UX: more user feedback
- Tests :)


Note: I heavily followed react-dnd examples for the list drag and drop implementation