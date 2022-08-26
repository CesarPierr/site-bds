import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { event_type } from '../models/event_type.model';
import { Slide } from '../models/slide.model';
@Injectable({
  providedIn: 'root'
})


export class EventService {
  events: Event[] = [
    {
      id : 0,
      title : "Premier BBQ",
      description : "C'est le premier BBQ de l'année !! Pour cela nous avons requisitionné les 3 bbq entre les batiments. Une fabuleuse JAM était aussi la pour nous accompagner. Bilan : 150 hot dogs pour un maximum de plaisir",
      mainImgLink : "https://img-3.journaldesfemmes.fr/5YiALBso9fkqEqW_dhoLeDFAXf4=/1500x/smart/bf78a5ddd7964552b0e7121e6d693ccb/ccmcms-jdf/36590972.jpg",
      date : new Date(20220608),
      type : event_type.BDS,
      idType : 0,
      location : "ENSTA Paris"
    },
    {
      id : 1,
      title : "Coupe de l'X",
      description : "Premier tournois de l'année et pas des moindres : la coupe de l'X dans lequel nos compétiteurs ont remporté la médaille d'or en boxe et ont fait des performances honorables ailleur !!",
      mainImgLink : "https://www.ensta-paris.fr/sites/default/files/2022-05/relais_ENSTAParis.jpg",
      date : new Date(202110),
      type : event_type.Tournois,
      idType : 1,
      location : "Polytechnique"
    },
    {
      id : 2,
      title : "Croisière ENSTAQUET",
      description : "Cette croisiere de 5 jours en méditerannée est organisée chaque année par l'ENSTAQUET. Durant ces 5 jours, les étudiants participants sont encadrés par des membres de l'association et decouvrent les plaisirs de la voile.",
      mainImgLink : "https://enstaquet.ensta-paris.fr/images/hebergement/260.jpg",
      date : new Date(2022),
      type : event_type.Assos,
      idType : 1,
      location : "Méditerannée"
    }
  ]

  getCarousel() : Slide[] {
    this.events.sort((a,b) => {
      if (a.date < b.date){
        return -1;
      }else if (a.date === b.date) {
        return 0;
      }else{
        return 1;
      }
    }).reverse();

    return [this.events[0],this.events[1],this.events[2]]
  }
}
