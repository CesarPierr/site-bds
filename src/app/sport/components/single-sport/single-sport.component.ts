import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Sport } from '../../../core/models/sports.model';
import { SportService } from '../../../core/services/sport.service';

@Component({
  selector: 'app-single-sport',
  templateUrl: './single-sport.component.html',
  styleUrls: ['./single-sport.component.scss']
})
export class SingleSportComponent implements OnInit {

  sport$!:Observable<Sport>;
  constructor(private sportService:SportService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const sportId = +this.route.snapshot.params['id'];
    this.sport$ = this.sportService.getSportById(sportId);
  }

}
