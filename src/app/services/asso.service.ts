import { Injectable } from '@angular/core';
import { Assos } from '../models/assos.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})


export class AssoService {
  lAsso : Assos[] = [
    {
      id : 0,
      title : "monTAgne",
      description : "Même sans neige, quel plaisir d'arpenter les sommets et de découvrir les massifs français avec Montagne.",
      imgLink : "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/104175265_177813680369430_5041853805834254743_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=njcd0wWWN3QAX-Md62F&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_N4GN3WjiKVGaZrFGoCNt2Bi9sWObIQ_i1uztrWhjMOw&oe=632EE539",
      logoLink : "https://bde.ensta-paris.fr/images/logo_associations/montagne.jpg",
      facebookLink : "https://www.facebook.com/ClubMontagneEnsta/",
      instaLink : "https://www.instagram.com/dplusta/"
    },

    {
      id : 1,
      title : "ensTAquet",
      description : "Amoureux ou curieux de la voile, ENSTAquet t'emmène en WES d'initiation à la voile et te fait profiter du milieu marin.",
      imgLink : "https://media-exp1.licdn.com/dms/image/C4E1BAQGM75wmZPwaMg/company-background_10000/0/1633202890793?e=2147483647&v=beta&t=zgBnl0GtQoHHQzmWOIeZqj-XvybbHppTZkS7OZY0SUs",
      logoLink : "data:image/png;base64,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",
      facebookLink : "https://www.facebook.com/EnstaquetVoileENSTAParis/",
      instaLink :"https://www.instagram.com/enstaquet/?hl=fr",
      mailLink : "enstaquet@ensta-paris.fr",
      websiteLink : "https://enstaquet.ensta-paris.fr/"


    },
    {
      id : 2,
      title : "TAkeoff",
      description : "Surfer sur les vagues, c'est ta passion ou ton rêve ? Rejoins TAkeoff.",
      imgLink : "https://i1.adis.ws/i/canon/canon-pro-ben-thouard-surfing-eos-1d-x-mark-iii-1-1140x760?$og-image$",
      facebookLink : "https://www.facebook.com/takeoff.ensta",
      logoLink : "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/275120136_324819779691942_3528810016263103574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zn90mNgS8AMAX8qTM-_&tn=3wSbAenq0pMl6euE&_nc_ht=scontent-cdg2-1.xx&oh=00_AT8bso6Modpcc-gtEESOKKF5TFR1mitfTwpY21MygoW6Zg&oe=630DE524",
    }
  ]

  getAllAssos() : Assos[] {
    return this.lAsso;
  }

  getAssosCard() : Card[] {
    return [this.lAsso[0],this.lAsso[1],this.lAsso[2]];
  }
}
