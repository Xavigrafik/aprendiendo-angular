import { MovieService } from './../../services/movie.service';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    constructor(public userService:UserService, public movieService: MovieService) {
        
    }


    getTotalMovies() {
        return this.movieService.getTotalMovies();
    }
    getTotalUsers() {
        return this.userService.getTotalUsers();
    }
}
