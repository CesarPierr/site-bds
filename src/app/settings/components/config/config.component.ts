import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { first, last, map, Observable } from 'rxjs';
import { Assos } from 'src/app/core/models/assos.model';
import { AssoService } from 'src/app/core/services/asso.service';
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
  globalForm!:UntypedFormGroup;
  selected!:number[];
  cfg$!: Observable<Cfg>;
  events$!:Observable<Event[]>;
  assos!:Assos[];
  selectedAsso!: Assos|null;
  constructor(private fb : UntypedFormBuilder, private cfgService : ConfigService, private eventService : EventService, private assoService : AssoService) {}

  ngOnInit(): void {
    this.rights = 'admin';
    this.cfg$ = this.cfgService.getConfig();
    this.events$ = this.eventService.getAllEvents();
    this.assoService.getAllAssos().pipe(last()).subscribe(data => this.assos = data);
    this.selectedAsso = null;
    this.cfg$.pipe(first()).subscribe(data => {
      this.globalForm = this.fb.group({
        instaLink: [data.instaLink],
        linkedinLink: [data.linkedinLink, [Validators.required]],
        facebookLink: [data.facebookLink, [Validators.required]],
        mail : [data.mail, [Validators.required]],
        logoLink : [data.logoLink,[Validators.required]]
      });
      this.selected = data.mainImagesIds;
    })
  }

  onClick(id :number) :void {

    if (this.selected.includes(id)) {
      this.selected = this.selected.filter(item => item != id);
    }else{
      this.selected.push(id);
    }

  }

  onSelectAsso(asso:Assos) : void {
    this.selectedAsso = asso;
    console.log(asso);
  }
  onSubmitForm() {


    this.globalForm.value["mainImagesIds"] = this.selected;
    this.cfg$ = this.cfgService.changeCfg(this.globalForm.value);
    console.log(this.globalForm.value);
  }

}
