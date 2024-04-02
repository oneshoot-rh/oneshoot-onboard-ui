import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmployeeStatsComponent } from '../charts/employee-stats/employee-stats.component';
import { ProjectService } from '../../services/projects/project.service';

@Component({
  selector: 'app-project-assignation',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    EmployeeStatsComponent,
    MatButtonModule
  ],
  templateUrl: './project-assignation.component.html',
  styleUrl: './project-assignation.component.css'
})
export class ProjectAssignationComponent implements OnInit{
  public projectAssignations = new MatTableDataSource<any>();
  displayedColumns: string[] = ['Project','Deployed Employees', 'Status', 'Project Family', 'Project Manager'];

  constructor(private _projectService: ProjectService) { }

  public openDialog() {
  }

  ngOnInit(): void {
    this._projectService.getAllProjectAssignations().subscribe(data => {
      this.projectAssignations.data = data;
    });   
  }

}
