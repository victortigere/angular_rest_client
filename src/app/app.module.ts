import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NotifierModule } from "angular-notifier";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientEditComponent } from './components/client-edit/client-edit.component';


const appRoutes: Routes = [
    {path: '' , component: ClientsComponent},
    {path: 'edit/:id' , component: ClientEditComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
