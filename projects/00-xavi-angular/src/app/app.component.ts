import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
        // console.log('ngOnInit');
    }

    constructor() {}
}
