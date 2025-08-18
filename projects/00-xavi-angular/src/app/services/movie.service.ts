import { Injectable } from '@angular/core';
import IMovie from '../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    movies: IMovie[];

    constructor() {
      
        this.movies = [
            {
                name: "Lotr",
                duration: 300,
                director: "Peter"
            },
            {   
                name: "El Hobbit",
                duration: 200,
                director: "Paco"
            },
        ] 

    }
    
    addMovie(movie:IMovie){
        this.movies.push(movie);
    }

    getMovie(name:string):(IMovie | undefined){
        return this.movies.find((movie) => movie.name === name);
    }
    
}
