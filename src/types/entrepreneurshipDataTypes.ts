
interface dataTypes{
id:number,
imgSrc:string,
content:string
heading?:string;
}
export interface innovationsAndActivitiesDataTypes {
  id: number;
  title: string;
  data: dataTypes[];
}

export interface AchievementsDataTypes {
  AchievementsData: dataTypes[];
}