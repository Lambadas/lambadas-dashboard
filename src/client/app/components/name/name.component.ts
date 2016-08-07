import {Component, OnInit, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NameListService} from "../../services/name-list/name-list.service";
import {CacheService} from "ng2-cache/src/services/cache.service";

@Component({
  moduleId: module.id,
  selector: 'name',
  templateUrl: 'name.component.html',
  providers: [CacheService]
})

export class NameComponent implements OnInit {
  @Input() deneme: string;
  response: string[];
  error: string[];
  name: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nameListService: NameListService,
              private cacheService: CacheService) {
    this.route = route;
    this.router = router;
    this.nameListService = nameListService;
    this.cacheService = cacheService;
  }

  private init() {

    if (!!this.cacheService.get("fakeData")) {
      this.response = this.cacheService.get("fakeData");
    }
    else {
      this.nameListService.get()
        .subscribe(response=> {

            this.response = response;
            this.cacheService.set("fakeData",this.response);
          },
          err =>this.error = err
        )
    }

  }


  ngOnInit(): any {

    this.init();


  }

  setValueText(item: string) {

    console.log(item);
  }

  add(item: string): void {
    if (!!item) {
      this.response.push(item);
      this.cacheService.set("fakeData",this.response);

    }
  }

  goToHome(): void {
    this.router.navigate(['']);
  }
}
