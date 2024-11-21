// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private isAdminSubject = new BehaviorSubject<boolean>(false);
//   isAdmin$: Observable<boolean> = this.isAdminSubject.asObservable();

//   constructor(private router: Router) {
//     this.initializeAdminStatus();
//   }

//   initializeAdminStatus(): void {
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';
//     this.isAdminSubject.next(isAdmin);
//   }

//   login(username: string, password: string): boolean {
//     if (username === 'Yuriy2437' && password === 'Luther13579246!') {
//       localStorage.setItem('isAdmin', 'true');
//       this.isAdminSubject.next(true);
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     localStorage.removeItem('isAdmin');
//     this.isAdminSubject.next(false);
//   }

//   isAdmin(): boolean {
//     return this.isAdminSubject.value;
//   }

//   getAdminStatus(): Observable<boolean> {
//     return this.isAdmin$;
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private adminLoggedIn = false;

  login(username: string, password: string): boolean {
    // Здесь должна быть реальная логика аутентификации
    if (username === 'Yuriy2437' && password === 'Luther13579246!') {
      this.adminLoggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this.adminLoggedIn = false;
  }

  isAdmin(): boolean {
    return this.adminLoggedIn;
  }
}
