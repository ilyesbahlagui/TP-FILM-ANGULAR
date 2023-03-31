import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavorisComponent } from './components/favoris/favoris.component';
import { HomeComponent } from './components/home/home.component';
import { RechercheComponent } from './components/recherche/recherche.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
