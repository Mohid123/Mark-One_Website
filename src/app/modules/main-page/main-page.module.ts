import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EstateCardComponent } from 'src/app/components/estate-card/estate-card.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HeaderComponent,
    NgOptimizedImage,
    EstateCardComponent,
    MatTabsModule
  ]
})
export class MainPageModule { }
