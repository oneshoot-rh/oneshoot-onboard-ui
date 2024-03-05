import { MailingAutomationComponent } from './components/mailing-automation/mailing-automation.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { EmployeeOnboardingComponent } from './components/employee-onboarding/employee-onboarding.component';
import { AutomationComponent } from './components/automation/automation.component';
import { GenaiComponent } from './components/genai/genai.component';
import { EContractsComponent } from './components/e-contracts/e-contracts.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee-management', component: EmployeeManagementComponent },
    { path: 'employee-onboarding', component: EmployeeOnboardingComponent },
    { path: 'automation', component: AutomationComponent },
    { path: 'gen-ai', component: GenaiComponent },
    { path: 'mailing-automation', component: MailingAutomationComponent },
    { path: 'e-contracts', component: EContractsComponent },
];
