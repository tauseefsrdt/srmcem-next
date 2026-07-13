export interface achievementsItemsTypes {
  id: number;
  contentTitle: string;
  content: contentTypes[];
}
export interface accordionContentTypes {
  content1: string;
  content2: string;
}
interface childContentListTypes {
  id: number;
  list: string;
  icons?: boolean;
  pdfurl?: string;
}
interface subContentChildTypes {
  id: number;
  subContentChildContent: string;
}

interface paraWithImgTypes {
  id: number;
  paraContent: string;
}
interface headingTypes {
  id: number;
  headingContent: string;
}
interface rowDataTypes {
  id: number;
  rowContent: string;
}
interface rowTypes {
  id: number;
  rowData: rowDataTypes[];
}
interface contentChildTableTypes {
  id: 0;
  heading: headingTypes[];
  row: rowTypes[];
}
interface paraChildBoldTypes {
  id: number;
  textBod: string;
}

export interface nestedItemsTypes {
  itemsData?: Array<string>;
  subItemsData?: Array<string>;
}
export interface contentTypes {
  id?: number;
  childContent?: string;
  subContentChild?: subContentChildTypes[];
  childContentList?: childContentListTypes[];
  childContentPara?: string[];
  childContentParaBold?: string[];
  paraWithImg?: paraWithImgTypes[];
  contentChildTable?: contentChildTableTypes[];
  paraChildBold?: paraChildBoldTypes[];
  title?: string;
  items?: string[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  description?: string;
  listItems?: { content: string }[];
  nestedItems?: nestedItemsTypes[];
}

interface listItemTypes {
  id: number;
  list: string;
}

export interface accordionItemsTypes {
  listItem?: listItemTypes[];
  id?: number;
  contentTitle?: string;
  contentType?: number;
  subParaContent?: string;
  content?: contentTypes[];
  tableData?: tableDataTypes[];
}

interface tableDataTypes {
  slNo: number;
  nameOfBody: string;
  membershipMode: string;
  period: string;
  startFrom: string;
  membershipNo: string;
}

interface Achievement {
  sNo: number; // Serial Number
  rollNo: string; // Roll Number
  name: string; // Student Name
  session?: string; // Academic Session
  courses?: string; // Course Name
  marks?: number | string; // Percentage Marks
  semYear?: string,
  rank?: string,

}

interface achievementsTableHeaderTypes {
  sNo: string; // Serial Number
  rollNo: string; // Roll Number
  name: string; // Student Name
  session?: string; // Academic Session
  courses?: string; // Course Name
  marks?: number | string; // Percentage Marks
  semYear?: string,
  rank?: string
}
export interface achievementsTableDataTypes {
  title: string; // Section title
  achievementsTableHeader?: achievementsTableHeaderTypes[]
  achievementsTableContent: Achievement[]; // Array of table rows
}

interface ChildDataType {
  id: number;
  heading: string;
  buttonLink: string;
}

interface TableDataType {
  id: number;
  title: string;
  downloadText: string;
  childData: ChildDataType[];
}

export interface CampusTourAccordianitemType {
  contentTitle: string;
  content: string;
  aicteSesion: string;
  aicteSesion2?: string;
  tableData: TableDataType[];
  file?: string;
  file2?: string
}
