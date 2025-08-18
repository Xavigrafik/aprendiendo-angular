import { FormComponent } from './../../components/form/form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-form-page',
  imports: [FormComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.scss'
})
export class MovieFormPageComponent {

    constructor() {
        
    }

}
