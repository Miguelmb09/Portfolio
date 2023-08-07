import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {


  partners: BehaviorSubject<any>

  constructor(
    private langSvc: LanguageService
  ) { }


  ngOnInit() {
    this.partners = this.langSvc.partners;
  }


  goToLink(url: string){
    window.open(url, "_blank");
}



}
