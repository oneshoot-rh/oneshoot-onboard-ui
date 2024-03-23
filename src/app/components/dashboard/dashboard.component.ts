import { MatIconModule } from '@angular/material/icon';
import { KeycloakService } from 'keycloak-angular';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  username : string = "";

  constructor(private _keycloakService : KeycloakService) {}

  ngOnInit(): void {
    console.log(this._keycloakService.getUserRoles());
    
    this.username = this._keycloakService.isLoggedIn() ? this._keycloakService.getUsername() : "DEFAULT_USER";    
  }

}