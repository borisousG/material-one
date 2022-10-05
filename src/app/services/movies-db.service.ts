import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiEndpoints } from '../utils/api-endpoints.class';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constants.class';
import { IFFT } from '@tensorflow/tfjs';

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

  imageFormat(path : string){
    return Constants.IMAGE_MOVIE_URL + path;
  }
  
  addMovie(id : string) {
    let moviesListStorage = JSON.parse(localStorage.getItem('myList') ?? '[]');
    if(moviesListStorage.indexOf(id) == -1){
      moviesListStorage.push(id);
      localStorage.setItem('myList', JSON.stringify(moviesListStorage));
    }
  }

  removeMovie(id : string) {
    let moviesListStorage = JSON.parse(localStorage.getItem('myList') ?? '[]');
    const index = moviesListStorage.indexOf(id);
    if (index > -1) {
      moviesListStorage.splice(index, 1);
      localStorage.setItem('myList', JSON.stringify(moviesListStorage));
    }
  }

  checkMovie(id : string): boolean {
    let moviesListStorage = JSON.parse(localStorage.getItem('myList') ?? '[]');
    return (moviesListStorage.indexOf(id) >= 0);
  }

  addLike(id : string) {
    let moviesListStorage = JSON.parse(localStorage.getItem('likes') ?? '[]');
    if(moviesListStorage.indexOf(id) == -1){
      moviesListStorage.push(id);
      localStorage.setItem('likes', JSON.stringify(moviesListStorage));
    }
  }

  checkLike(id : string): boolean {
    let moviesListStorage = JSON.parse(localStorage.getItem('likes') ?? '[]');
    return (moviesListStorage.indexOf(id) >= 0);
  }

  removeLike(id : string) {
    let moviesListStorage = JSON.parse(localStorage.getItem('likes') ?? '[]');
    const index = moviesListStorage.indexOf(id);
    if (index > -1) {
      moviesListStorage.splice(index, 1);
      localStorage.setItem('likes', JSON.stringify(moviesListStorage));
    }
  }
}
