import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournoi } from '../../../core/models/tournois.model';
import { TournoiService } from '../../../core/services/tournoi.service';

@Component({
  selector: 'app-single-tournoi',
  templateUrl: './single-tournoi.component.html',
  styleUrls: ['./single-tournoi.component.scss']
})
export class SingleTournoiComponent implements OnInit {

  tournoi$!:Observable<Tournoi>;
  constructor(private tournoiService  :TournoiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const sportId = +this.route.snapshot.params['id'];
    this.tournoi$ = this.tournoiService.getTournoiById(sportId);
  }

}
