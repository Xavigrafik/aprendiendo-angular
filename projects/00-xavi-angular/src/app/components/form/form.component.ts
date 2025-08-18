import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';
// Importa las clases necesarias para crear formularios reactivos.
// 'FormControl' gestiona un campo de formulario individual.
// 'FormGroup' agrupa múltiples 'FormControl's en un solo formulario.
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'my-form',
    standalone: true,
    // CORRECCIÓN: Se importa el módulo 'ReactiveFormsModule'.
    // Este módulo es el que proporciona las directivas necesarias para usar [formGroup] y formControlName en el HTML.
    // Las clases 'FormGroup' y 'FormControl' se importan solo para la lógica de TypeScript, no para este array.
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    // Define un 'FormGroup' para agrupar los campos del formulario.
    // Esto nos permite gestionar el formulario en su totalidad (por ejemplo, validar, resetear, etc.).
    movieForm: FormGroup;
    // Declara los 'FormControl' para cada campo del formulario.
    // Cada uno gestionará el valor, el estado y la validación de un campo de entrada específico.
    name: FormControl;
    duration: FormControl;
    director: FormControl;

    // El constructor es el lugar donde se inicializan las propiedades del componente.
    constructor(public movieservice:MovieService) {
        // Inicializa cada 'FormControl' con un valor inicial, en este caso, una cadena vacía.
        this.name = new FormControl('', Validators.required);
        this.duration = new FormControl('', [
            Validators.required,
            Validators.max(300),
            Validators.min(1),
            Validators.pattern("^[0-9]*$") // Esta expresión regular valida que solo se ingresen dígitos.
        ]);
        this.director = new FormControl('');

        // Inicializa el 'FormGroup' agrupando los 'FormControl' declarados anteriormente.
        // Las claves (name, duration, director) en el objeto deben coincidir con
        // los 'formControlName' en tu plantilla HTML.
        this.movieForm = new FormGroup({
            name: this.name,
            duration: this.duration,
            director: this.director,
        });
    }
    

    handleSubmit(): void {
        this.movieservice.addMovie(this.movieForm.value)
        this.movieForm.reset();
    }
}
