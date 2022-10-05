export class MovieData {
    constructor(
      public id: string,
      public title: string,
      public overview: string,
      public release_date: string,
      public vote_average: number,
      public poster_path: string,
      public backdrop_path: string,
    ){}
}