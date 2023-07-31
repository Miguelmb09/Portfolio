import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  scrollToMyElement(elem: string) {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
  }

}
