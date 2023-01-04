import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [{path:'homepage' , component:HomepageComponent, loadChildren: () => import ('./landmarks.module').then(m => m.LandmarksModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandmarksRoutingModule { }
