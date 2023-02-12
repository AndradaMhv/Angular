import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/auth.guard';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'',component: HomepageComponent,canActivate:[AuthGuard]
  },
  {
    path:'aboutme',component: AboutmeComponent,canActivate:[AuthGuard]
  },
  {path:'cardlist',component:CardlistComponent,canActivate:[AuthGuard], loadChildren: () => import('./home.module').then((m)=>m.HomeModule)}];


@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
