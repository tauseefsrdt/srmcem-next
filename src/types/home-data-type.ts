// for homepage alumni  section

export interface Alumni {
  name: string;
  degree?: string;
  designation?: string;
  company?: string;
  contact?: string;
  email?: string;
  passoutYear?: string;
  location?: string;
  package?: string;
  image?: string;
  image1?: string;
  name1?: string;
  degree1?: string;
  company1?: string;
  content: string;
}

// for homepage banner  section
export interface BannerContent {
  title: string;
  subtitle: string[];
  description: string;
  buttonText: string;
}

// for homepage courses tab layout section
export interface tabDataType {
  heading: headingType[];
  tabs: tabsType[];
}
interface tabsType {
  id: number;
  title: string;
  content: React.ReactNode;
}
interface headingType {
  h1: string;
  para: string;
}

interface listContentTypes {
  id: number,
  boldItem: string,
  item: string
}
export interface otherDataTypes {
  id: number,
  paraContent: string[],
  listContent?: listContentTypes[],
  eligibility?: string
}
export interface customeOverViewType {
  heading: string;
  content: string
  otherData?: otherDataTypes[]
}
