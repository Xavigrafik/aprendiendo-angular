import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { CajonDesastreComponent } from './pages/cajon-desastre/cajon-desastre.component';
import { SignalsComponent } from './pages/signals-component/signals.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

export const routes: Routes = [
    { path: '',       component:HomeComponent },
    { path: 'cajon', component: CajonDesastreComponent },
    { path: 'signals', component:SignalsComponent },
    
    { path: 'movies', component:MovieListComponent },
    { path: 'movies/:movieName', component:MovieDetailsComponent },
    { path: 'form',   component:MovieFormPageComponent },
    
    { path: 'users', component:UserListComponent },
    { path: 'users/:id', component:UserDetailComponent },
    
];
