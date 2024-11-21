import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuItems = [
    { name: 'About us', path: '/about' },
    { name: 'English Club', path: '/english-club' },
    { name: 'Lectorium', path: '/lectorium' },
    { name: 'Music Club', path: '/music-club' },
    { name: 'Psychology Club', path: '/psychology-club' },
    { name: 'Kids room', path: '/kids-room' },
    { name: 'All feedbacks', path: '/feedback' },
  ];

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
