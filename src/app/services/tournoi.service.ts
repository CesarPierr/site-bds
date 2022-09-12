import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Tournoi } from '../models/tournois.model';
@Injectable({
  providedIn: 'root'
})


export class TournoiService {
  lTournois : Tournoi[] = [
    {
      id : 0,
      title : "Coupe de l'X",
      description : "La coupe de l'X c'est LA compétition sportive inter-écoles à ne pas manquer cet automne. Avec près de 2000 sportifs venus de 19 écoles, c'est une occasion de défendre nos couleurs ! ",
      imgLink : "https://www.mondedesgrandesecoles.fr/wp-content/uploads/elementor/thumbs/La-Kes-2-cEcole-polytechnique-J.Barande-scaled-e1649153529963-pmww23ys9dtg83uq0qhalcvlb0oss9d1ek2et5f4o4.jpg",
      location : "Polytechnique",
      pageLink : "https://coupedelx.binets.fr/"
    },
    {
      id : 1,
      title : "CCL",
      description : "Challenge Centrale Lyon : le plus grand tournoi sportif des grandes écolesen France. Organisé par des élèves de l’École Centrale de Lyon, le Challenge Centrale Lyon est l’un des plus importants tournois sportifs étudiants de France. Créé en 1983, il rassemble désormais chaque année sur deux jours plus de 2000 élèves venu·es de grandes écoles françaises et étrangères. Réuni·es dans différents lieux partenaires de la Métropole de Lyon, les élèves s’affrontent autour des valeurs sportives, handisportives et de développement durable",
      imgLink : "https://www.planetegrandesecoles.com/wp-content/uploads/2022/03/cover_fb_1-850x560.jpg",
      location : "Centrale Lyon"
    },
    {
      id : 2,
      title : "TOSS",
      description : "Organisé par le Bureau des Sports de CentraleSupélec, le TOSS est depuis plusieurs années le plus grand tournoi omnisports étudiant de France. Ouvert à toutes les écoles et universités, il réunit chaque année des milliers de participants venus de la France entière, mais aussi d'universités étrangères, sur le campus de Paris-Saclay. ",
      imgLink : "https://www.cs-sports.fr/toss/img/presentation/image1.jpg",
      location : "centrale Supelec",
      pageLink : "https://www.cs-sports.fr/toss/"
    }
  ]

  getAllTournois() : Tournoi[] {
    return this.lTournois;
  }

  getTournoisCards() : Card[] {
    return [this.lTournois[0],this.lTournois[1],this.lTournois[2]];
  }
}
