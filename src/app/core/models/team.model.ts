export class Team {
  id!:number;
  membersId!:number[];
  name!:string;
  description!:string;
  imgLink!:string;
  annee!:Date;
  linkedEventsId!:[number] | null;
  clip ?: string;
  location?:string;
  imgLinks?:string[];
}
