import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service'; // Asegúrate de que la ruta sea correcta

@Component({
    selector: 'app-form-user',
    standalone: true,
    // Asegúrate de importar 'ReactiveFormsModule' para que las directivas del formulario funcionen.
    // También se necesita 'CommonModule' para las directivas como @if.
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './form-user.component.html',
    styleUrl: './form-user.component.scss',
})
export class FormUserComponent implements OnInit {
    // Declara la propiedad del formulario, pero no la inicialices aquí.
    userForm!: FormGroup;

    // Inyecta el servicio de usuario en el constructor.
    constructor(private userService: UserService) {}

    // 'ngOnInit' es el lugar ideal para inicializar el formulario.
    ngOnInit(): void {
        // Inicializa el 'FormGroup' con todos los 'FormControl' anidados.
        // Esto asegura que cada control se crea y vincula correctamente.
        this.userForm = new FormGroup({
            // CORRECCIÓN: Se asigna un ID automáticamente usando la marca de tiempo actual.
            // `Date.now()` devuelve un número único en milisegundos.
            id: new FormControl(Date.now()),
            name: new FormControl(''),
            email: new FormControl(''),

            // Se inicializa el 'FormGroup' anidado para la dirección.
            address: new FormGroup({
                city: new FormControl(''),
                street: new FormControl(''),
            }),
        });
    }

    // Método para enviar el formulario.
    postUser() {
        console.log('Formulario enviado:', this.userForm.value);

        // Asegúrate de que el formulario es válido antes de enviar los datos.
        if (this.userForm.valid) {
            this.userService.postUser(this.userForm.value).subscribe({
                next: (data) => {
                    console.log('Datos enviados correctamente:', data);
                    // Opcional: recargar la lista de usuarios o navegar a otra página.
                    this.userService.getUsers();
                },
                error: (error) => {
                     if (error.status == 429 ) {
                        console.log('Tas queado SIN REQUESTS... desde user-list.component', error);
                    } else {
                        console.log('Error al enviar datos:', error);
                    }
                },
            });
        } else {
            console.log('El formulario no es válido.');
        }
    }
}
