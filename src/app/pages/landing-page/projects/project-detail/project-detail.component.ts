import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import SwiperCore, {SwiperOptions, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  projectId: string;
  projects: BehaviorSubject<any>;
  project: BehaviorSubject<any>;
  config: SwiperOptions

  router = inject(Router);
  constructor(
    private actRoute: ActivatedRoute,
    private langSvc: LanguageService
  ) {
    this.projectId = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.scrollToBottom();
    this.resizeSlider();
    this.projects = this.langSvc.projects;
    this.project = this.langSvc.projectDetail;
    this.project.next(this.projects.value.filter(project => project.id === this.projectId)[0])
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

    // ====== Scroll to bottom ======
    scrollToBottom() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


}
