import { Component } from '@angular/core';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  films$ = this._filmService.films$;
  
  constructor(private _filmService: FilmService) {
    this._filmService.findAll();
  }
}
