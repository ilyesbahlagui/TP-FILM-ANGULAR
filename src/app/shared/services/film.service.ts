import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Film } from '../models/film';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  public films$ = new BehaviorSubject<Film[]>([]);
  private _baseUrl = environment.urlApi + '/films';

  constructor(private _http: HttpClient) {}

  public findAll() {
    this._http.get<Film[]>(this._baseUrl).subscribe((listeFilmApi) => {
      this.films$.next(listeFilmApi);
    });
  }

  public selected(film: Film) {
    
    let titre=film.titre;
    this._http
      .get<Film[]>(`${this._baseUrl}?titre_like=${titre}`)
      .subscribe((listeFilmApi) => {
        console.log(listeFilmApi);
        this.films$.next(listeFilmApi);
      });
  }
  update(film: Film){
    this._http
    .put<Film>(`${this._baseUrl}/${film.id}`, film)
    .subscribe();
  }
  
  selectedFavoris(){
    this._http
      .get<Film[]>(`${this._baseUrl}?favoris=${true}`)
      .subscribe((listeFilmApi) => {
        console.log(listeFilmApi);
        this.films$.next(listeFilmApi);
      });
  }
}
