import { Component } from '@angular/core';
import { MatPseudoCheckbox } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule, MatSelectionList} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-new-onboarding-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
    
  ],
  templateUrl: './new-onboarding-dialog.component.html',
  styleUrl: './new-onboarding-dialog.component.css'
})
export class NewOnboardingDialogComponent {
  public searchQuery: string = '';
  public onboardingSubject: string = '';
  public onboardingDateTime: string = '';
  public notifyCandidates: boolean = false;
  public selectedTemplate: string = '';
  public emailSubject: string = '';
  public selectedJobOffer: string = '';
  public jobOffers: any = [
    {
      title: 'Job Offer 1',
    },
    {
      title: 'Job Offer 2',
    },
    {
      title: 'Job Offer 3',
    }
  ];
  public emailTemplates: any = [
    {
      name: 'Template 1',
    },
    {
      name: 'Template 2',
    },
    {
      name: 'Template 3',
    }
  ];
  public data: any = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
    },
    {
      name: 'mounika',
      position: 'Software Engineer',
    }
  ];
  public filteredData: any = [];
  selectedCandidates: any[] = [];



  public addOnboarding() {
    console.log('New Onboarding Added');
  }

  public filterData() {
    this.filteredData = this.data.filter((item: any) => {
      return item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  handleSelectionChange(selectionList: MatSelectionList) {
    let selected = selectionList.selectedOptions.selected.map(option => option.value);
    let newArray = selected.concat(this.selectedCandidates);
    let uniqueArray = newArray.filter((item, index) => newArray.indexOf(item) === index);
    this.selectedCandidates = uniqueArray;
    this.data = this.data.filter((item: any) => {
      return !this.selectedCandidates.includes(item);
    });
  }

  public selectItem(item:any) {
   
  }

  public saveAsDraft() {
    console.log('New Onboarding Saved as Draft');
  }


}
