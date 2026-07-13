interface cardTypes {
  id: number;
  imgSrc: string;
  bigImgSrc: string;
}
interface listTypes {
  id: number;
  listContent: string;
}
export interface listAndCardDataTypes {
  id: number;
  list?: listTypes[];
  card: cardTypes[];
}
