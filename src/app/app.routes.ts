import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  // Добавьте другие маршруты здесь
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Маршрут по умолчанию
  { path: '**', redirectTo: '/menu' }, // Маршрут для обработки несуществующих путей
];
