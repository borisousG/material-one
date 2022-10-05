export class ApiEndpoints {

    static GENRE_LIST = '/genre/movie/list?&language=es-MX';
    
    static getMoviesByGenre(id : string) {
        return `/discover/movie?language=es-MX&with_genres=${ id }`;
    } 

    static TRENDING = '/trending/all/day?&language=es-MX';

    static getMovieDetailEndpoint(id : string) {
        return `/movie/${ id }?&language=es-MX`;
    } 
    
    static getImage(path : string) {
        return `https://image.tmdb.org/t/p/original${ path }`;
    } 

}