import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieData } from 'src/app/models/movie-data.model';
import { MoviesDbService } from 'src/app/services/movies-db.service';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.scss']
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public moviesDb : MoviesDbService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieData,
  ) {}

  toogleMovie(){
    if(this.moviesDb.checkMovie(this.data.id)) {
      this.moviesDb.removeMovie(this.data.id);
    } else {
      this.moviesDb.addMovie(this.data.id);
    }
  }

  toogleLike(){
    if(this.moviesDb.checkLike(this.data.id)) {
      this.moviesDb.removeLike(this.data.id);
    } else {
      this.moviesDb.addLike(this.data.id);
    }
  }
}
