import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightComponent } from './components/light/light.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HomeComponent } from './pages/home/home.component';
import { LightcreateComponent } from './pages/lightcreate/lightcreate.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    HomeComponent,
    LightcreateComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,far);
  }
}
