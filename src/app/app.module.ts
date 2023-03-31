import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.modules';
import { FavorisComponent } from './components/favoris/favoris.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { CardFilmComponent } from './components/card-film/card-film.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavorisComponent,
    RechercheComponent,
    CardFilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
