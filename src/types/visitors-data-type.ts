// type for visitors cards

export interface cardsType {
  id: number;
  heading: string;
  cardsContent: cardsContentType[];
  buttonText: string;
}
interface cardsContentType {
  id: number;
  img: string;
  name: string;
  designation: string;
}

// type for budget pdf download
export interface pdfDownloadType {
  id: number;
  title?: string;
  downloadText: string;
  childData: ChildDataType[];
}

interface ChildDataType {
  id: number;
  heading: string;
  buttonLink: string;
}
