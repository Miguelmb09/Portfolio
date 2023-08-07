import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent {

  selectedLanguage!: BehaviorSubject<string>;
  visible: boolean = false;

  constructor(
    private languageSvc: LanguageService,
  ) { }

  ngOnInit() {
    this.selectedLanguage = this.languageSvc.selectedLanguage;
  }


  setLanguage(lang: string) {
    this.languageSvc.setLanguage(lang);

  }

  showDialog() {
      this.visible = true;
  }



}
