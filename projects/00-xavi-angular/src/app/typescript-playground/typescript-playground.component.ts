import { Component }        from '@angular/core';
import { Usuario, Product}          from '../../practicas-typescript/interfaces';
import { Administrador, logCosas, taxCalculation }    from '../../practicas-typescript/functions';



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
        console.log('------------------ START typescript-playground.component ---------------------');

        logCosas();


        // taxCalculation ///////////////////////
        const shoppingCart: Product[] = [
            {
                description: 'nokia',
                price : 100
            },
            {
                description: 'ipad',
                price : 220
            }
        ]


        const [total, totalEffective] = taxCalculation({
            products: shoppingCart,
            // tax: 0.333
        });
        console.log("taxCalculation total:" ,total,  totalEffective);
        

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
