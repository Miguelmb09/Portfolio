import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import SwiperCore, {SwiperOptions, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

config: SwiperOptions

  projects: BehaviorSubject<any>

  constructor(
    private langSvc: LanguageService
  ) { }

  ngOnInit() {
    this.resizeSlider();
    this.projects = this.langSvc.projects;
  }

  

  // ====== Swiper slider ======
  resizeSlider(event?: any) {

    let x: number = window.innerWidth;

    if (event) x = event.target.innerWidth;


    let slidesPerViewValue: any = (x / 390).toFixed(2);

    this.config = {
      slidesPerView: slidesPerViewValue,
      spaceBetween: 10,
      pagination: {clickable:true}
    };
  }


 
}
