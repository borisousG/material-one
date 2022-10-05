import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiEndpoints } from '../utils/api-endpoints.class';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constants.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesDbService {

  constructor(public http : HttpClient) { }

  getGenres() : Observable<Object> {
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.GENRE_LIST);    
  }

  getMoviesByGenre(genre : string) : Observable<Object> {
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.getMoviesByGenre(genre));    
  }

  getTrending() : Observable<Object> {
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.TRENDING);
  }

  imageFormat(path : string){
    return Constants.IMAGE_MOVIE_URL + path;
  }
  
  addMovie(id : string) {
    this.addStorage('myList', id);
  }

  removeMovie(id : string) {
    this.removeStorage('myList', id);
  }

  checkMovie(id : string): boolean {
    return this.checkStorage('myList', id);
  }

  addLike(id : string) {
    this.addStorage('likes', id);
  }

  checkLike(id : string): boolean {
    return this.checkStorage('likes', id);
  }

  removeLike(id : string) {
    this.removeStorage('likes', id);
  }

  addStorage(key : string, id : string) {
    let moviesListStorage = JSON.parse(localStorage.getItem(key) ?? '[]');
    if(moviesListStorage.indexOf(id) == -1){
      moviesListStorage.push(id);
      localStorage.setItem(key, JSON.stringify(moviesListStorage));
    }
  }

  checkStorage(key : string, id : string): boolean {
    let moviesListStorage = JSON.parse(localStorage.getItem(key) ?? '[]');
    return (moviesListStorage.indexOf(id) >= 0);
  }

  removeStorage(key : string, id : string) {
    let moviesListStorage = JSON.parse(localStorage.getItem(key) ?? '[]');
    const index = moviesListStorage.indexOf(id);
    if (index > -1) {
      moviesListStorage.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(moviesListStorage));
    }
  }
}
