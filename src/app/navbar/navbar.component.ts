import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'navbar',
    templateUrl:'app/navbar/navbar.html',
})
export class NavbarComponent{
  constructor(private translate: TranslateService) {
      translate.addLangs(["en", "fr"]);
      translate.setDefaultLang('en');

      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
}
