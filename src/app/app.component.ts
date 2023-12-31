import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-miguel';
  constructor(
    private languageService: LanguageService,

  ) {
    this.initializeApp()
  }

  initializeApp() {
    this.languageService.setInitialAppLanguage();
  }
}
