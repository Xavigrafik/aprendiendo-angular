import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppChildComponent } from './components/app-child/app-child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '00-xavi-angular';
}
