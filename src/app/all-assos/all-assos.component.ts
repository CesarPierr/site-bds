import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { AssoService } from 'src/app/services/asso.service';

@Component({
  selector: 'app-all-assos',
  templateUrl: './all-assos.component.html',
  styleUrls: ['./all-assos.component.scss']
})
export class AllAssosComponent implements OnInit {

  constructor(private assoService : AssoService) { }
  allAssos !: Card[];
  ngOnInit(): void {
    this.allAssos = this.assoService.getAllAssos()
  }

}
