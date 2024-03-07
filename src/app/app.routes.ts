import { MailingAutomationComponent } from './components/mailing-automation/mailing-automation.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { EmployeeOnboardingComponent } from './components/employee-onboarding/employee-onboarding.component';
import { AutomationComponent } from './components/automation/automation.component';
import { GenaiComponent } from './components/genai/genai.component';
import { EContractsComponent } from './components/e-contracts/e-contracts.component';
import { EmployeesComponent } from './components/employee-management/employees/employees.component';
import { JobsComponent } from './components/employee-management/jobs/jobs.component';
import { DepartmentsComponent } from './components/employee-management/departments/departments.component';
import { BenchmarksComponent } from './components/employee-management/benchmarks/benchmarks.component';
import { InternshipsComponent } from './components/employee-management/internships/internships.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee-management', component: EmployeeManagementComponent,
        children:[
            { path: '', redirectTo: 'employees', pathMatch: 'full' },
            { path: 'employees', component: EmployeesComponent},
            { path: 'departments', component: DepartmentsComponent},
            { path: 'jobs', component: JobsComponent},
            { path: 'benchmarks', component: BenchmarksComponent},
            { path: 'internships', component: InternshipsComponent}
        ]
    },
    { path: 'employee-onboarding', component: EmployeeOnboardingComponent },
    { path: 'automation', component: AutomationComponent },
    { path: 'gen-ai', component: GenaiComponent },
    { path: 'mailing-automation', component: MailingAutomationComponent },
    { path: 'e-contracts', component: EContractsComponent },
];
