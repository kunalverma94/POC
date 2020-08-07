import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/shared/not-found/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'query/', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
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
