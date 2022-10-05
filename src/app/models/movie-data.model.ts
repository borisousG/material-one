export class MovieData {
    constructor(
      public id: string,
      public title: string,
      public overview: string,
      public release_date: string,
      public vote_average: string,
      public poster_path: string,
      public backdrop_path: string,
    ){}
}