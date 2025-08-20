import { MovieService } from './services/movie.service';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [FormsModule, RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    constructor(
        public userService: UserService,
        public movieService: MovieService
    ) {}

    ngOnInit(): void {
        this.getTotalMovies();
        this.getTotalUsers();
    }

    getTotalMovies() {
        return this.movieService.getTotalMovies();
    }
    getTotalUsers() {}
}
