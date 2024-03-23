import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, Provider } from "@angular/core";
import { KeycloakBearerInterceptor, KeycloakService } from "keycloak-angular";



export class KeycloakInit {
}



export function initializeKeycloak(
    keycloak: KeycloakService
    ) {
      return () =>
        keycloak.init({
          config: {
            url: 'http://localhost:9999',
            realm: 'OneShoot',
            clientId: 'frontend_client',
          },
          loadUserProfileAtStartUp: true,
          initOptions: {
            pkceMethod: 'S256', 
            checkLoginIframe: false,
            //redirectUri: "http://localhost:4200/"
            },
        });
  }


// Provider for Keycloak Bearer Interceptor
export const KeycloakBearerInterceptorProvider: Provider = {
provide: HTTP_INTERCEPTORS,
useClass: KeycloakBearerInterceptor,
multi: true
};
   
// Provider for Keycloak Initialization
export const KeycloakInitializerProvider: Provider = {
provide:  APP_INITIALIZER,
useFactory: initializeKeycloak,
multi: true,
deps: [KeycloakService]
}
