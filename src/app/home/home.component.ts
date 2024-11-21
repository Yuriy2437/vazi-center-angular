import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HomeComponent {
  showAdminLogin = false;
  login = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  handleAdminLogin() {
    if (this.authService.login(this.login, this.password)) {
      this.router.navigate(['/menu'], { queryParams: { admin: 'true' } });
    } else {
      this.errorMessage = 'Incorrect Login or Password';
    }
  }

  handleEntranceForAll() {
    this.authService.logout();
    this.router.navigate(['/menu']);
  }
}
