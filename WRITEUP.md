Data Model:


Improvements I didn't get a chance to make:
- UX:
  - When user drops a draggable object, they should get feedback to know their action was successful
  - Titling of "sections" and "items" in their lists are vague as is and would not be clear to users on first glance what they include
  - scrolling to highlighted section
- CSS:
  - cleanup CSS for more consistent styling (i.e. potentially adding a theme)
  - follow figma designs more closely
- Implementation:
  - Duplication in how I update state and how drag and drop is implemented multiple times should be refactored
  - Re-assess whether Context is the right state management tool for this use case (assess excessive re-renders, complexity of state changes with future implementation)
  - Components like SectionList and ItemList are very similar and could be refactored