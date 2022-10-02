import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { last, map, Observable } from 'rxjs';
import { Assos } from 'src/app/core/models/assos.model';
import { Event } from 'src/app/core/models/event.model';
import { AssoService } from '../../../core/services/asso.service';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-assos',
  templateUrl: './assos.component.html',
  styleUrls: ['./assos.component.scss']
})
export class AssosComponent implements OnInit {

  assoForm!:FormGroup;
  events$!:Observable<Event[]| null>;
  imgs : String[] = [];
  @Input() asso! : Assos;
  constructor(private fb : FormBuilder, private assoService : AssoService, private eventService : EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventService.getbyIds(this.asso.linkedEventsId?this.asso.linkedEventsId:[]);
    this.imgs = this.asso.imgLinks?this.asso.imgLinks:[];
    this.assoForm.value["id"] = this.asso.id;
    this.assoForm.value["userId"] = this.asso.userId;
    this.assoForm = this.fb.group({
      title: [this.asso.title , Validators.required],
      description: [this.asso.description , Validators.required],
      imgLink: [this.asso.imgLink , Validators.required],
      logoLink: [this.asso.logoLink? this.asso.logoLink: null],
      facebookLink: [this.asso.facebookLink?this.asso.facebookLink: null],
      instaLink: [this.asso.instaLink?this.asso.instaLink: null],
      mailLink : [this.asso.mailLink?this.asso.mailLink:null],
      linkedinLink: [this.asso.linkedinLink?this.asso.linkedinLink: null],
      websiteLink: [this.asso.websiteLink?this.asso.websiteLink: null],
    });
  }
  onSubmitForm() {


    this.assoForm.value["imgLinks"] = this.imgs;
    const asso$ = this.assoService.changeAsso(this.assoForm.value);
    asso$.pipe(last()).subscribe(data => this.asso = data);
    console.log(this.assoForm.value);
  }

}
