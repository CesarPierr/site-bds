import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  l_cards!: Card[];

  ngOnInit(): void {
    this.l_cards = [
      {
        title : "title1",
        description : "desc1",
        img : "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320",
        link : "#"
      },
      {
        title : "title2",
        description : "desc1",
        img : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        link : "#"
      },
      {
        title : "title3",
        description : "desc1",
        img : "https://www.affluences.ca/upload/2019/07/site-web-525X300-1.png",
        link : "#"
      }
    ]
  }

}
