import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { KeycloakBearerInterceptorProvider, KeycloakInitializerProvider, initializeKeycloak } from './init/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { TokenInterceptor } from './guard/TokenInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    KeycloakInitializerProvider, // Initializes Keycloak
    KeycloakBearerInterceptorProvider, // Provides Keycloak Bearer Interceptor
    KeycloakService, // Service for Keycloak 
  ]
};
