import { FormUserComponent } from '../../components/form-user/form-user.component';
import { FormComponent }     from './../../components/form/form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-form-page',
  imports: [FormComponent, FormUserComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.scss'
})
export class MovieFormPageComponent {

    constructor() {
        
    }

}
