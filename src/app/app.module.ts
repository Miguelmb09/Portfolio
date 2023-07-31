import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/landing-page/hero/hero.component';
import { ProjectsComponent } from './pages/landing-page/projects/projects.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

// Translate module
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './pages/landing-page/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectDetailComponent } from './pages/landing-page/projects/project-detail/project-detail.component';
import { NavbarComponent } from './pages/landing-page/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnersComponent } from './pages/landing-page/partners/partners.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProjectsComponent,
    FooterComponent,
    LandingPageComponent,
    ProjectDetailComponent,
    NavbarComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
