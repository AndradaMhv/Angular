import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandmarksRoutingModule } from './landmarks-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { CardComponent } from './card/card.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button'


@NgModule({
  declarations: [
    HomepageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    LandmarksRoutingModule,
    NzModalModule,
    NzCardModule,
    NzButtonModule
  ],
  exports:[
    HomepageComponent
  ]

})
export class LandmarksModule { }
