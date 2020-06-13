import { IntroComponent } from './intro/intro.component';
import { WorksComponent } from './works/works.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , pathMatch: 'full', redirectTo:'/'},
  {path: 'works', component: WorksComponent},
  {path: 'services', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
