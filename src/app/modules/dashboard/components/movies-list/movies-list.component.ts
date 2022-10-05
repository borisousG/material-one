import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from 'src/app/models/movie-data.model';
import { MoviesDbService } from 'src/app/services/movies-db.service';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  currentId! : string;
  showDetail : boolean = false;
  movies : MovieData[] = [];

  constructor(public dialog: MatDialog, 
    private activatedRouter : ActivatedRoute,
    public moviesDb : MoviesDbService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(JSON.stringify(params)=='{}') {
        this.getTrending();
      }
      else {
        this.currentId = params['id'].toString();
        this.getMovies();
      }
    });
  }

  getMovies(){
    this.moviesDb.getMoviesByGenre(this.currentId)
    .subscribe( (response:any) => {
      this.movies = <MovieData[]>response['results'];
      console.log( this.movies );
    });
  }

  getTrending(){
    this.moviesDb.getTrending()
    .subscribe( (response:any) => {
      this.movies = <MovieData[]>response['results'];
      console.log( this.movies );
    });
  }

  openDialog(movie : MovieData): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '700px',
      width: '600px',
      data: movie,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
