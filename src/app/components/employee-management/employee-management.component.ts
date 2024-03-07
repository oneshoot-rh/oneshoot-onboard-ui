import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RouterModule, RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent  {
}