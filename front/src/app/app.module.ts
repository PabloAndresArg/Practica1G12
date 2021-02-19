import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuCrudComponent } from './components/menu-crud/menu-crud.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateComponent } from './components/create/create.component';

import { HttpClientModule } from '@angular/common/http';


// PARA EL NG-MODEL
import {FormsModule} from '@angular/forms'; // enlaca mi objeto con el formulario y la base de datos


@NgModule({
  declarations: [
    AppComponent,
    MenuCrudComponent,
    FooterComponent,
    CreateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
