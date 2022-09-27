import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { first, map, Observable } from 'rxjs';
import { Cfg } from '../../../core/models/cfg.model';
import {Event} from '../../../core/models/event.model'
import { ConfigService } from '../../../core/services/config.service';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})

export class ConfigComponent implements OnInit {

  rights !: string;
  globalForm!:FormGroup;
  cfg$!: Observable<Cfg>;
  events$!:Observable<Event[]>;

  constructor(private fb : FormBuilder, private cfgService : ConfigService, private eventService : EventService) {}

  ngOnInit(): void {
    this.rights = 'admin';
    this.cfg$ = this.cfgService.getConfig();
    this.events$ = this.eventService.getAllEvents();

    this.cfg$.pipe(first()).subscribe(data => {
      this.globalForm = this.fb.group({
        instaLink: [data.instaLink],
        linkedinLink: [data.linkedinLink, [Validators.required]],
        facebookLink: [data.facebookLink, [Validators.required]],
        mail : [data.mail, [Validators.required]],
        logoLink : [data.logoLink,[Validators.required]]
      })
    })
  }

  onClick(id :number) :void {

    this.cfg$ = this.cfgService.changeId(id);
    console.log("clicked")
  }

  onSubmitForm() {
    console.log(this.globalForm.value);
  }

}
