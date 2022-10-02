export class Sport {
  id!:number;
  title!:string;
  description!:string;
  imgLink!:string;
  userId!:string;
  linkedEventsId!:[number]| null;
  imgLinks?:string[];
  entraineurs?:string[];
  respo?:string[];
}
