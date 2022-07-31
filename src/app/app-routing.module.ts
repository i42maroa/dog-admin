import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogDetailPageComponent } from './page/dog-detail/dog-detail.component';
import { DogsListPageComponent } from './page/dogs-list/dogs-list.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'dogs-list', component: DogsListPageComponent },
  { path: 'dog-detail/:id', component: DogDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
