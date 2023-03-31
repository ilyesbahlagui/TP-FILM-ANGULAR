import { Component } from '@angular/core';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent {
  films$ = this._filmService.films$;
  
  constructor(private _filmService: FilmService) {
    this._filmService.selectedFavoris();

  }
}
