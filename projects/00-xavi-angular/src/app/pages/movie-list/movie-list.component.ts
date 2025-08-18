import { RouterLink } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
    constructor(public movieservice: MovieService) {
        
    }
}
