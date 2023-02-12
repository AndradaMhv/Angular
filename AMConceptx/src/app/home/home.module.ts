  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
  import { HomeRoutingModule } from './home-routing.module';
  import { NzCardModule } from 'ng-zorro-antd/card';
  import { NzGridModule } from 'ng-zorro-antd/grid';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './card/card.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { OrdertableComponent } from './ordertable/ordertable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FooterComponent } from './footer/footer.component';

  @NgModule({
    declarations: [HomepageComponent,
      AboutmeComponent,CardlistComponent, CardComponent, OrdertableComponent, FooterComponent
    ],
    imports: [
      CommonModule,
  HomeRoutingModule,
  RouterModule,
  NzCardModule,
  NzGridModule,
  NzModalModule,
  NzFormModule,
  ReactiveFormsModule,
  FormsModule
    ],
    exports:[HomepageComponent,AboutmeComponent,CardlistComponent ]
  })
  export class HomeModule { }
