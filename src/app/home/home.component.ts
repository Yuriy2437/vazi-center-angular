import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class HomeComponent {
  showAdminLogin = false;
  login: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  handleAdminLogin() {
    if (this.login === 'Yuriy2437' && this.password === 'Luther13579246!') {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/menu'], { queryParams: { admin: 'true' } });
    } else {
      this.errorMessage = 'Incorrect Login or Password';
    }
  }

  handleEntranceForAll() {
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/menu']);
  }
}
