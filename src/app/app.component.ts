import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MainMenuComponent],
})
// export class AppComponent {}
export class AppComponent {
  title = 'vazi-center2';
}
