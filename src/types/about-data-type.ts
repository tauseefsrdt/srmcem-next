export interface aboutUsDataType {
  aboutData: aboutDataType[];
  cardData: CardType[];
  studentData: studentDataType[];
  ramswaroopInfo: RamswaroopInfoType[];
}

export interface aboutDataType {
  heading: string;
  para: string;
  img: string;
}

interface CardType {
  id: number;
  head1: string;
  head2: string;
  paragraph: string;
}

interface studentDataType {
  id: number;
  value: string;
  label: string;
}

interface RamswaroopInfoType {
  ramswaroopHead1: string;
  age: string;
  img: string;
  para: string;
}
