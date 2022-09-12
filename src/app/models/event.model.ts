import { event_type } from "./event_type.model";

export class Event {
  id!:number;
  title!:string;
  description!:string;
  imgLink!:string;
  date!: Date;
  type!:event_type;
  idType!:number;
  link?:string;
  imgLinks?:string[];
  location?:string;
}
