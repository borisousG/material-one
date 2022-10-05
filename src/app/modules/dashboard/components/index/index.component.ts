import { Component, OnInit } from '@angular/core';
import { MovieGenre } from 'src/app/models/movie-genre.model';
import { MoviesDbService } from 'src/app/services/movies-db.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  genres : MovieGenre[] = [];

  constructor(public moviesDb : MoviesDbService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(){
    this.moviesDb.getGenres()
    .subscribe( (response:any) => {
      this.genres = <MovieGenre[]>response['genres'];
    });
  }
}
