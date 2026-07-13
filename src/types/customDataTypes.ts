interface cardTypesData {
  id: number;
  imgSrc: string;
  education?: string;
  designation?: string;
  email?: string;
  orcid?: string;
  aboutData?: string;
  name?: string;
}

interface listItemTypes {
  id: number;
  listBold?: string;
  list?: string;
  boldList?: string;
  path?:string
}

interface listItemWithTitleTypes {
  id: number;
  title: string;
  listItem: listItemTypes[];
}

interface subListItemTypes {
  id: number;
  val: string;
}

interface paraContentTypes {
  id: number;
  content: string;
}

interface boldTextTypes {
  id: number;
  boldContent: string;
  path?: string;
}

interface boldItemTypes {
  id: number;
  icon?: string;
  boldText: boldTextTypes[];
}

interface tableDataTypes {
  slNo: number;
  nameOfBody: string;
  membershipMode: string;
  period: string;
  startFrom: string;
  membershipNo: string;
}

interface accordianDataType {
  id: number;
  contentType?: number;
  contentTitle: string;
  subParaContent?: string;
  listItem?: listItemTypes[];
  tableData?: tableDataTypes[];
}

export interface HoverCardTypes {
  frontImage: string;
  title: string;
  backContent: string;
}

interface contentType {
  id: number;
  contentItem: string;
}

export interface cardItemType {
  title: string;
  content: contentType[];
  imageUrl: string;
  index?: number | undefined;
}

interface galleryDataTypes {
  id: number;
  imgSrc: string;
}
interface vissionContentTypes {
  id: number;
  para: string;
}
interface missionContentTypes {
  id: number;
  para: string;
  bold: string;
}
interface vissionDataTypes {
  id: number;
  title: string;
  vissionContent?: vissionContentTypes[];
  missionContent?: missionContentTypes[];
}

interface awardChildSecondTypes {
  id: number;
  subTitle: string;
  paraContentChild: paraContentChildTypes[];
}
interface awardChildFirstTypes {
  id: number;
  subTitle?: string;
  paraContentChild: paraContentChildTypes[];
}
interface awardsDataTypes {
  id: number;
  mainTitle?: string;
  awardChildFirst: awardChildFirstTypes;
  awardChildSecond?: awardChildSecondTypes;
  imgSrc: string;
}
interface headerDataTypes {
  id: number;
  sNo: string;
  name: string;
  titleOfCertification?: string;
  typeOfCertification?: string;
  dateOfConduction?: string;
  organisedBy?: string;
  achievement?: string;
  yearOfAchievement?: string;
  
  detailsOfEvent?: string;
  rank?: string;
  organizer?: string;
  level?: string;
}
interface rowDataTypes {
  id: number;
  sNo: number;
  name: string;
  titleOfCertification?: string;
  typeOfCertification?: string;
  dateOfConduction?: string;
  organisedBy?: string;
  achievement?: string;
  yearOfAchievement?: string;
  detailsOfEvent?: string;
  rank?: string;
  organizer?: string;
  level?: string;
}
interface contentInnerDataTypes {
  headerData: headerDataTypes[];
  rowData: rowDataTypes[];
}
interface contentDataTypes {
  id: number;
  contentMainTitle: string;
  contentTitle: string;
  contentInnerData: contentInnerDataTypes;
}
interface contentObjectTypes {
  id: number;
  imgSrc?: string;
  title?: string;
  btnText?: string;
  path?: string;
  boldItem?: boldItemTypes;
  paraContent?: paraContentTypes[];
  listItem?: listItemTypes[];
  listItemWithTitle?: listItemWithTitleTypes[];
  subListItem?: subListItemTypes[];
  tableContent?: customLibraryDataType[];
  cardData?: cardTypesData[];
  accordianShow?: boolean;
  tableShow?: boolean;
  content?: string;
  accordianData?: accordianDataType[];
  cardItem?: cardItemType[];
  galleryData?: galleryDataTypes[];
  vissionData?: vissionDataTypes[];
  awardsData?: awardsDataTypes[];
  contentData?: contentDataTypes[];

}

export interface cardContentChildTypes {
  id: number;
  imgSrc: string;
  title: string;
  date: string;
  btnTitle: string;
  path?: string;
}
export interface paraContentChildTypes {
  id: number;
  value: string;
  bold?: string;
}
export interface contentTypes {
  id: number;
  title: string;
  paraContentChild: paraContentChildTypes[];
  cardContentChild?: cardContentChildTypes[];
}

interface LaboratoriesContentTypes {
  id?: number;
  para1?: string;
  subtitle?: string;
  paraContentChild?: paraContentChildTypes[];
}

interface contentCardTypes {
  id: number;
  title?: string;
  imgSrc?: string;
  paraContent?: paraContentTypes[];
  LaboratoriesContent?: LaboratoriesContentTypes[];
  laboratory_desc?: string;
  subtitle?: string;
  paraContentChild?: paraContentChildTypes[];
}

interface contetWithBoldTypes {
  id: 0;
  boldValue: string;
  value: string;
}
interface contentPdfDataTypes {
  id: number;
  value?: string;
  path?: string;
  boldValue?: string;
  imgsrc1?: string;
  imgsrc2?: string;
  contetWithBold?: contetWithBoldTypes[];
}
interface contentPdfObjectTypes {
  id: number;
  subtitle?: string;
  contentPdfData: contentPdfDataTypes[];
}
interface contentWithPdfTypes {
  id: number;
  title?: string;
  contentPdfObject: contentPdfObjectTypes;
}
interface tabDataTypes {
  id: number;
  tab: string;
  content?: contentTypes[];
  isMode?: boolean;
  contentObject?: contentObjectTypes;
  contentCard?: contentCardTypes[];
  contentWithPdf?: contentWithPdfTypes[];
  isLesscontent?: boolean;
}
export interface customTabDataTypes {
  id: number;
  isAnualFast?: boolean;
  tabData: tabDataTypes[];
  isDepartment?: boolean;
}

interface imagesTypes {
  id: number;
  src: string;
  alt: string;
}

export interface CustomLibraryContentTypes {
  data: {
    paraContent: paraContentTypes[];
    images: imagesTypes[];
  };
}

export interface customLibraryDataType {
  category: string;
  noOfBooks: number | string;
  retentionPeriod: string;
  renewalPeriod: string;
  fineFirst7Days: string;
  fineAfter7Days: string;
}

export interface LinkItem {
  slides: slidesType[];
}

interface slidesType {
  name: string;
  logo: string;
  url: string;
}

interface TimingItem {
  label: string;
  time: string;
}

interface QRCodeItem {
  src: string; // QR code image URL
  email: string; // Email address
}

export interface CustomCounselingSectionTypes {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  imageUrl: imagesTypes[];
  backgroundImage: string;
}
export interface customTimingsSectionTypes {
  timings: TimingItem[];
  qrCodes: QRCodeItem[];
  registrationPdf: string; // URL for self-registration PDF
  userGuidePdf: string; // URL for user guide PDF
  backgroundImage: string;
  clockImage: string;
  registrationPdfPath: string;
}

export interface FacilityTypes {
  title: string;
  description: string;
  imageUrl: string;
}

export interface CustomFacilitiesTypes {
  facilities: FacilityTypes[];
  layoutData: otherFacilitiesCardLayoutDataTypes;
}
export interface OutreachImage {
  src: string;
  alt?: string;
}

export interface OutreachImage2 {
  id: number;
  imgSrc: string;
  bigImgSrc?: string;
}

export interface FacilitiesContentDataType {
  id: number;
  content: string;
  listItems: listItemTypes[];
}

export interface CustomCardTypes {
  title: string;
  icon: string;
  description: string;
  content?: any;
  isMode?: string;
}

export interface CustomCardGridDataTypes {
  icon: string;
  title: string;
  pdf: string;
  backgroundImage: string;
}

interface contentItem {
  M_name: string;
  M_mobNo: string;
  C_name: string;
  C_mobNo: string;
}

export interface transportationDataTypes {
  content: string;
  src: string;
  alt: string;
  contentItem: contentItem[];
}

export interface TableRow {
  slNo: number;
  nameOfBody: string;
  membershipMode: string;
  period: string;
  startFrom: string;
  membershipNo: string;
}

export interface otherFacilitiesCardLayoutDataTypes {
  title: string;
  content: string;
}
