import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Partners, Projects, Proyectos, Socios } from 'src/assets/data/db';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selectedLanguage = new BehaviorSubject('');
  projects = new BehaviorSubject(null);
  partners = new BehaviorSubject(null);
  projectDetail = new BehaviorSubject(null);

  constructor(private translate: TranslateService) { }

  /**
   * If the user has a saved language, use that, otherwise use the browser's language
   */
  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang() as string;
    let savedLang = localStorage.getItem('language');

    if (savedLang) {
      this.translate.setDefaultLang(savedLang);
      this.setLanguage(savedLang);
    } else {
      this.translate.setDefaultLang(language);
      this.setLanguage(language);
    }


  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.selectedLanguage.next(lang);
    localStorage.setItem('language', lang);
    this.getProjects();
    this.getPartners();
  }

  getProjects() {

    if (this.selectedLanguage.value === 'es') this.projects.next(Proyectos);
    else this.projects.next(Projects);

    if (this.projectDetail.value) this.projectDetail.next(this.projects.value.filter(project => project.id === this.projectDetail.value.id)[0])
  }

  getPartners() {

    if (this.selectedLanguage.value === 'es') this.partners.next(Socios);
    else this.partners.next(Partners);
  }

    // ===== Translate text by key =======
    getTranslation(key: string) {
      return this.translate.instant(key)
    }
}