import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../core/models/card.model';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {

  @Input() card!: Card;
  printAll : boolean = false;
  buttonText!:string;
  constructor() { }

  ngOnInit(): void {
    this.printAll = this.card.description.length < 300
    this.buttonText = this.printAll ? "voir moins" : "voir plus";
  }

  wholeText() : void {
    if (this.printAll) {
      this.printAll = false;
      this.buttonText = "voir plus";

    }else {
      this.printAll= true;
      this.buttonText = "voir moins";

    }
  }
}
