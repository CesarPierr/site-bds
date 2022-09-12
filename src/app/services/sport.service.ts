import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Sport } from '../models/sports.model';

@Injectable({
  providedIn: 'root'
})


export class SportService {
  lSports : Sport[] = [
    {
      id : 0,
      title : "BasketBall",
      description : "2 équipes, une ambiance de malade et des matchs de folie. Qu'attendez vous ? Rejoingnez l'équipe.",
      imgLink : "https://www.liberation.fr/resizer/tH4MFP-tSvLCkAklCwBUVhmqHuQ=/arc-photo-liberation/eu-central-1-prod/public/JD57ELLGFBHLDBSWKDIXGY4ZQM.jpg",
      entraineurs : ["M. Messi", "Mme Obama"]
    },
    {
      id : 1,
      title : "Tennis",
      description : "Pratiqué sur les superbes cours de l'X, tu auras l'occasion de participer à de nombreux tournois donc n'hesite plus et devient le nouveau Nadal",
      imgLink : "http://www.slate.fr/sites/default/files/styles/1060x523/public/matthias-david-ee4hmhvms1m-unsplash.jpg",
      entraineurs : ["raphi nadoul"]
    },
    {
      id : 2,
      title : "Athlétisme",
      description : "Vient te défouler sur la piste avec nous, au programme des 100 200 400 et meme 10 pour les plus zinzins",
      imgLink : "https://www.sportstrategies.com/wp-content/uploads/2021/06/120126089_1748579861957348_2371668299852805317_o-1024x681-1.jpg",
      respo : ["Bastien TESS"]
    }
  ]

  getAllSports() : Sport[] {
    return this.lSports;
  }

  getSportCards() : Card[] {
    return [this.lSports[0],this.lSports[1],this.lSports[2]];
  }
}
