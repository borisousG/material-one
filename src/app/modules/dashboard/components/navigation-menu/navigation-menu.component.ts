import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieType } from 'src/app/models/movie-categories.model';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  menus:any[] = [
    {
      title : 'Menu1',
      subtitle : 'subtitulo',
      section : 'Sección 1'
    },{
      title : 'Menu2',
      subtitle : 'subtitulo',
      section : 'Sección 1'
    },{
      title : 'Menu3',
      subtitle : 'subtitulo',
      section : 'Sección 1'
    },
  ];

  categories : MovieType[] = [
    {
      code: 'home',
      name: 'Inicio',
    },
    {
      code: 'anime',
      name: 'Animes',
    },
    {
      code: 'drama',
      name: 'Dramas',
    },
    {
      code: 'independent',
      name: 'Cine Independiente',
    },
    {
      code: 'intrigue',
      name: 'De Intriga',
    },
    {
      code: 'horror',
      name: 'Películas de terror',
    },
  ];

  constructor(private router : Router) { }

  goTo(menu: any){
    console.log(menu);
    this.router.navigate([menu.title]);
  }
}
