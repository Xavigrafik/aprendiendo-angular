import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovie from '../../models/Movies';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

    selectedMovie?: IMovie;

    constructor(
        private route: ActivatedRoute,
        private movieservice: MovieService
    ) {

        console.log(route.snapshot.params['movieName']);
        const movieName = route.snapshot.params['movieName'];
        this.selectedMovie = movieservice.getMovie(movieName);
    }
}
