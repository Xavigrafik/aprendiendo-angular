import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { CajonDesastreComponent } from './pages/cajon-desastre/cajon-desastre.component';

export const routes: Routes = [
    { path: '',       component:HomeComponent },
    { path: 'movies', component:MovieListComponent },
    { path: 'form',   component:MovieFormPageComponent },
    { path: 'cajon',  component:CajonDesastreComponent },
    
];
