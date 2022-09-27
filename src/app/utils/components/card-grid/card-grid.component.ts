import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from '../../../core/models/card.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

  constructor(private router : Router) { }
  @Input() Cards$!: Observable<Card[]>;
  @Input() base_link!: string;
  ngOnInit(): void {
  }

  clickFunction(id:number) : void {
    this.router.navigateByUrl(`${this.base_link}${id}`);
  }
}
