import { Component, Input } from '@angular/core';
import { MovieGenre } from 'src/app/models/movie-genre.model';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  genres! : MovieGenre[];

  @Input()
  set data(param: MovieGenre[]){
    this.genres = param;
  }

}
