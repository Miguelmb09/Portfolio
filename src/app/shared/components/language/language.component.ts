import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
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


