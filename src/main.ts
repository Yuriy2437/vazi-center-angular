import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { AppModule } from './app/app.module';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [importProvidersFrom(AppModule), provideAnimationsAsync()],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppModule)],
}).catch((err) => console.error(err));
