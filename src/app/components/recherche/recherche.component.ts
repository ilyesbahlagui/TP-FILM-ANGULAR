import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from 'src/app/shared/services/film.service';
import { Film } from 'src/app/shared/models/film';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css'],
})
export class RechercheComponent {
 
  public film !: BehaviorSubject<Film[]>;

  constructor(private _filmService: FilmService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const film = new Film();
      film.titre = form.value.titre;
      console.log(film);
      this._filmService.selected(film);
      this.film=this._filmService.films$;
      form.reset();
    }
  }
}
