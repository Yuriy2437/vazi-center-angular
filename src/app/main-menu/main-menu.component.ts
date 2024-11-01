import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MainMenuComponent implements OnInit {
  showMenu = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // this.showMenu = event.url !== '/' && event.url !== '/menu';
        this.showMenu = !['/', '/menu'].includes(event.url);
      });
  }
}
