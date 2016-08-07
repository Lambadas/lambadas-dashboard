import {Component, OnInit, Input} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({

  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class AboutComponent implements OnInit {


  @Input() aboutText: any;

  ngOnInit(): any {
    return null;
  }
}
