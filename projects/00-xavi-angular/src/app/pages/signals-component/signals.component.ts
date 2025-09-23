import { FormComponent } from '../../components/form/form.component';
import { Component, computed, signal } from '@angular/core';
import { AppChildComponent } from '../../components/app-child/app-child.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import IProduct from '../../models/Product';
import { UpperCasePipe } from '@angular/common';


interface Animal {
  id: number;
  name: string;
  img: string;
}


@Component({
        selector: 'signals',
         imports: [ FormsModule, UpperCasePipe],
     templateUrl: './signals.component.html',
        styleUrl: './signals.component.scss'
})
export class SignalsComponent {
    
    // Definición de tipados
    name = signal('Xavi');
    age = signal(41);

    capitalizedName = computed(() => this.name().toUpperCase());

    heroDescription = computed(() => {
        const desc = `${this.name()} - ${this.age()}`
        return desc;
    })


    changeAge() {
        this.age.set(60)
    }

    reset() {
        this.age.set(40)
        this.name.set('Xavi Reset')
    }
        
        ngOnInit(): void {
            // console.log('ngOnInit');
    }


        constructor() {}
    
    
}
