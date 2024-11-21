import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './app/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // Добавьте другие провайдеры здесь, если они нужны
  ],
}).catch((err) => console.error(err));
