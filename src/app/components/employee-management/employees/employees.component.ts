import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EmployeeStatsComponent } from '../../charts/employee-stats/employee-stats.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NewOnboardingDialogComponent } from '../../dialogs/new-onboarding-dialog/new-onboarding-dialog.component';
import { EmployeeService } from '../../../services/employees/employee.service';
import { OnboardingService } from '../../../services/candidates/onboarding.service';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    EmployeeStatsComponent,
    MatButtonModule
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements AfterViewInit,OnInit {
  public chart: any;
  displayedColumns: string[] = ['ECode', 'Name', 'Email', 'Role'];
  displayedColumnOnboarding: string[] = ['id', 'name', 'date', 'invitees'];
  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);
  public onboardingPlans= new MatTableDataSource<any>();


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public dialog: MatDialog,
    private  _employeeService : EmployeeService,
    private _onboardingService: OnboardingService
    
    ) {}

  openDialog() {
    this.dialog.open(NewOnboardingDialogComponent,{
      width: '700px',
      autoFocus: true

    });
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
     this._employeeService.getEmployees().subscribe(
        data => {
          console.log(data.content);
          this.dataSource.data = data.content
        }
      );
    this._onboardingService.getOnboardingPlans().subscribe(
      data => {
        console.log(data);
        this.onboardingPlans.data=data;
        console.log(this.onboardingPlans.data);
        
      }
    );
  }
}


export interface Employee {
  ECode: string;
  Name: string;
  Email: string;
  Role: string;
}


const ELEMENT_DATA: Employee[] = [
  {
    ECode: 'E001',
    Name: 'John Doe',
    Email: 'JohnDoe@Gmail.com',
    Role: 'Software Developer'
  },
  {
    ECode: 'E002',
    Name: 'Jane Yang',
    Email: 'Yang@gMAIL.com',
    Role: 'Software Developer'
  }
];
