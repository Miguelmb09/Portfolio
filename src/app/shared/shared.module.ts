import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './components/language/language.component';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  exports: [
    LanguageComponent,
    SwiperModule,
    TranslateModule,
    TooltipModule,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    OverlayPanelModule,
    DataViewModule,
    DataViewLayoutOptions
  ],
  declarations: [
    LanguageComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    TranslateModule,
    TooltipModule,
    ConfirmPopupModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    OverlayPanelModule,
    DataViewModule,
  ]
})
export class SharedModule { }
