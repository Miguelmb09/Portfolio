import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  isDark: boolean = false;
  
  goToLink(url: string) {
    window.open(url, "_blank");
  }


  setTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.isDark = true;
    });
  }
}
