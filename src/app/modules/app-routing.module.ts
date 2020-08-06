import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: 'home/limit/:?limit/:?launch_year/:?launch_success/:?land_success',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
