import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddrecipesComponent } from './addrecipes/addrecipes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewrecipesComponent } from './viewrecipes/viewrecipes.component'


const link:Routes=[
  {path:"",component:AddrecipesComponent},
  {path:"view",component:ViewrecipesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddrecipesComponent,
    ViewrecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
