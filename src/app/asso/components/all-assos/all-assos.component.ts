import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.model';
import { AssoService } from 'src/app/core/services/asso.service';

@Component({
  selector: 'app-all-assos',
  templateUrl: './all-assos.component.html',
  styleUrls: ['./all-assos.component.scss']
})
export class AllAssosComponent implements OnInit {

  constructor(private assoService : AssoService) { }
  allAssos$ !: Observable<Card[]>;
  ngOnInit(): void {
    this.allAssos$ = this.assoService.getAllAssos();
  }

}
