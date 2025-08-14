import { Component, OnInit } from '@angular/core';
import { AppChildComponent } from './components/app-child/app-child.component';
import { FormsModule } from '@angular/forms';
import Product from './models/Product';

interface Animal {
  id: number;
  name: string;
  img: string;
}

@Component({
  selector: 'app-root',
  imports: [AppChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

    // Definición de tipados
    title: string;
    variableCustom: string;
    isTrue: boolean;
    number: number;
    items: string[] = ['item1', 'item2', 'item3'];
    objectExample:Product


    // Array para guardar los datos de los animales
    animals: Animal[] = [
        {
            "id": 1,
            "name": "León",
            "img": "https://placedog.net/100/100"
        },
        {
            "id": 2,
            "name": "Tigre",
            "img": "https://placedog.net/100/100"
        },
        {
            "id": 3,
            "name": "Elefante",
            "img": "https://placedog.net/100/100"
        }
    ];

    addOne() {
        this.number++;
    }
    resetNum() {
        this.number = 0;
    }

    // 1. Variable para almacenar el mensaje del hijo
    mensajeDelHijo:string = '';
    // 2. Método para manejar el evento del hijo y recibir los datos
    manejarEvento(mensaje: string): void {
        this.mensajeDelHijo = mensaje;
        console.log('Mensaje recibido:', mensaje);
    }

    
    ngOnInit(): void {
        console.log('ngOnInit');
        
    }

    constructor() {
        // Inicializa las variables del componente, Se pueden delcarar en el constructor o en ngOnInit
        this.title = '00-xavi-angular';
        this.variableCustom = 'Esta es mi variableCustom desde el padre';
        this.isTrue = true;
        this.number = 0;
        this.objectExample = {
            id: 1,
            price: 100,
            isForSale: true,
            items: ['item1', 'item2', 'item3'],
        }
    }
}
