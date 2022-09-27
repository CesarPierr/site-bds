import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cfg } from '../../models/cfg.model';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cfg$ !: Observable<Cfg>;
  mail$ !: Observable<string>;
  constructor(private cfgService : ConfigService) { }

  ngOnInit(): void {
    this.cfg$ = this.cfgService.getConfig();
    this.mail$ = this.cfg$.pipe(map(value => `mailto:$(value.mail)`))
  }

}
