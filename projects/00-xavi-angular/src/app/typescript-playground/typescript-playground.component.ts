import { Component }        from '@angular/core';
import { Usuario }          from '../../practicas-typescript/interfaces';
import { Administrador, logCosas }    from '../../practicas-typescript/functions';



@Component({
    selector: 'app-typescript-playground',
    imports: [],
    templateUrl: './typescript-playground.component.html',
    styleUrl: './typescript-playground.component.scss'
})
    
export class TypescriptPlaygroundComponent {

    title: string;

    constructor() { 

        this.title = 'typescript-playground.component';
    }

    ngOnInit(): void {
        logCosas();

        const admin: Administrador = new Administrador(1, 'Carlos', 'carlos@example.com');
        //admin.mostrarDatos();

        const usuarioGenerico: Usuario = {
            id: 2,
            nombre: 'Ana',
            email: 'ana@example.com'
        };
        //console.log('Usuario genérico:', usuarioGenerico);


        console.log('------------------ END typescript-playground.component ---------------------');

    }
}
