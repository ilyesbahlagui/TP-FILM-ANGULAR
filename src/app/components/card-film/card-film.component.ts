import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Film } from 'src/app/shared/models/film';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css'],
})
export class CardFilmComponent {
  @Input()
  films$!: BehaviorSubject<Film[]>;

  constructor(private _filmService: FilmService) {}


  updateFavoris(film: Film) {

    film.favoris = !film.favoris;
    this._filmService.update(film);
  }
}
