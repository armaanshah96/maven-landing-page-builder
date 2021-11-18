import { v4 as uuidv4 } from "uuid";

const INITIAL_SECTIONS = 4;
const INITIAL_ITEMS_PER_SECTION = 3;

const sectionIds = Array.from(Array(4)).map((_) => uuidv4());
console.log(sectionIds)
const itemIds = Array.from(
  Array(INITIAL_ITEMS_PER_SECTION * INITIAL_SECTIONS)
).map((_) => uuidv4());

export const initialSections = {
  [sectionIds[0]]: {
    heading: "Section Heading",
  },
  [sectionIds[1]]: {
    heading: "Section Heading",
  },
  [sectionIds[2]]: {
    heading: "Section Heading",
  },
  [sectionIds[3]]: {
    heading: "Section Heading",
  },
};

export const initialItems = {
  [itemIds[0]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[1]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[2]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[3]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[4]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[5]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[6]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[7]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[8]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[9]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[10]]: {
    title: "Item name",
    description: "Item description",
  },
  [itemIds[11]]: {
    title: "Item name",
    description: "Item description",
  },
};

export const initialOrderedSections = [...sectionIds];
export const initialOrderedSectionItems = {
  [sectionIds[0]]: itemIds.slice(0, 3),
  [sectionIds[1]]: itemIds.slice(3, 6),
  [sectionIds[2]]: itemIds.slice(6, 9),
  [sectionIds[3]]: itemIds.slice(9),
};
