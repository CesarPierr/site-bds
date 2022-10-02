import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.model';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() l_cards$!: Observable<Card[]>;
  @Input() base_link !:String;
  constructor(private router : Router){}

  ngOnInit(): void {
  }
  onViewCard(id:number) : void{
    this.router.navigateByUrl(`${this.base_link}/${id}`);
  }
}

