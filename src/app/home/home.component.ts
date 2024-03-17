import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { UploadsComponent } from '../components/uploads/uploads.component';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
