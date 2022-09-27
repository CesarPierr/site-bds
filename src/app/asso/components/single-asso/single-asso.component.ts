import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Assos } from '../../../core/models/assos.model';
import { AssoService } from '../../../core/services/asso.service';

@Component({
  selector: 'app-single-asso',
  templateUrl: './single-asso.component.html',
  styleUrls: ['./single-asso.component.scss']
})
export class SingleAssoComponent implements OnInit {

  asso$!:Observable<Assos>;
  constructor(private assoService  :AssoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const assoId = +this.route.snapshot.params['id'];
    this.asso$ = this.assoService.getAssoById(assoId);
  }

}
