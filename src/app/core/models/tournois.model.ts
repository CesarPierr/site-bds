export class Tournoi {
  id!:number;
  title!:string;
  description!:string;
  imgLink!:string;
  userId!:string;
  linkedEventsId!:[number] | null;
  location?:string;
  pageLink?:string;
  imgLinks?:string[];
}
