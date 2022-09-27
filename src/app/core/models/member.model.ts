import { bureau } from "./bureau.model";

export class Member {
  id!:number;
  nom!:string;
  prenom!:string;
  poste!:bureau | string;
  imgLinks?:string[];
  description ?: string;
}
