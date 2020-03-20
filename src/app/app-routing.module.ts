import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LightcreateComponent } from './pages/lightcreate/lightcreate.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: LightcreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
