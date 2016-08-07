import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

import {AboutComponent} from '../about/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, AboutComponent]
})
export class HomeComponent {

  aboutText: string;

  constructor() {

    this.aboutText = 'HAKKIMIZDA LAN';
  }


}
