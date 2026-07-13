interface cardTypesData {
  id: number;
  imgSrc: string;
  education: string;
  designation: string;
  email: string;
  orcid?: string;
  aboutData: string;
}

interface listItemTypes {
  id: number;
  list: string;
}
interface contentObjectTypes {
  id: number;
  listItem?: listItemTypes[];
  cardData?: cardTypesData[];
}
interface tabDataTypes {
  id: number;
  tab: string;
  contentObject: contentObjectTypes;
}
export interface departmentTabDataTypes {
  id: number;
  isDepartment: boolean;
  tabData: tabDataTypes[];
}
