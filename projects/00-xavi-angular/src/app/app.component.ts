import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { AppChildComponent } from './components/app-child/app-child.component';
import IProduct from './models/Product';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [AppChildComponent, FormsModule, FormComponent, NgClass, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

    
    ngOnInit(): void {
        // console.log('ngOnInit');
    }

    constructor() {}
}
