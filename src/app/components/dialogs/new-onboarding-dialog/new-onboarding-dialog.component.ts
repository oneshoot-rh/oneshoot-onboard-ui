import { Component, OnInit } from '@angular/core';
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
import { JobOfferService } from '../../../services/employees/job-offer.service';
import { MailServiceService } from '../../../services/mail/mail-service.service';
import { CandidateService } from '../../../services/candidates/candidate.service';
import { OnboardingService } from '../../../services/candidates/onboarding.service';
import { onboardingPlanRequest } from '../../../types/types';


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
export class NewOnboardingDialogComponent implements OnInit {
  public searchQuery: string = '';
  public onboardingSubject: string = '';
  public onboardingDate: Date = new Date(); 
  public notifyCandidates: boolean = false;
  public selectedTemplate: number = 0; 
  public emailSubjectName: string = '';  
  public selectedJobOffer: number = 0; 
  public jobOffers: any = [];
  public emailTemplates: any = [];
  public data: any = [];
  public submitted: boolean = false;
  public filteredData: any = [];
  selectedCandidates: any[] = [];


  constructor(
    private _jobOfferService : JobOfferService,
    private _mailService: MailServiceService,
    private candidateService: CandidateService,
    private _onboardingService: OnboardingService
  ) { }

  public addOnboarding() {
    // date should be in this format yyyy-MM-dd-HH-mm-ss
    const onDate = this.onboardingDate.toISOString().split('.')[0];
    const onboardingPlanRequest : onboardingPlanRequest= {
      onboardingSubject: this.onboardingSubject,
      onboardingDate: onDate,
      notifyCandidates: this.notifyCandidates,
      emailTemplateId: this.selectedTemplate,
      emailSubjectName: this.emailSubjectName,
      jobOfferId: this.selectedJobOffer,
      candidatesIds: this.selectedCandidates.map((candidate: any) => candidate.id)
    };
    console.log('request',onboardingPlanRequest);
    this._onboardingService.addOnboardingPlan(onboardingPlanRequest).subscribe(
      data => {
        this.submitted = true;
        console.log(data);
      }
    );

  }

  public filterData() {
    this.filteredData = this.data.filter((item: any) => {
      const fullName = item.firstName + ' ' + item.lastName;
      return fullName.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('onboardingPlanDraft')) {
      const draft = JSON.parse(localStorage.getItem('onboardingPlanDraft') || '{}');
      this.onboardingSubject = draft.onboardingSubject;
      this.onboardingDate = draft.onboardingDate;
      this.notifyCandidates = draft.notifyCandidates;
      this.selectedTemplate = draft.selectedTemplate;
      this.emailSubjectName = draft.emailSubjectName;
      this.selectedJobOffer = draft.selectedJobOffer;
      this.selectedCandidates = draft.selectedCandidates;
    }
    this._jobOfferService.getJobOffers().subscribe(
      data => {
        console.log(data);
        this.jobOffers = data;
      }
    );
    this._mailService.getEmailTemplates().subscribe(
      data => {
        console.log(data);
        this.emailTemplates = data;
      }
    );
    this.candidateService.getCandidates().subscribe(
      data => {
        console.log(data.content);
        this.data = data.content;
      }
    );
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
    // save in local storage
    const draft = {
      onboardingSubject: this.onboardingSubject,
      onboardingDate: this.onboardingDate,
      notifyCandidates: this.notifyCandidates,
      selectedTemplate: this.selectedTemplate,
      emailSubjectName: this.emailSubjectName,
      selectedJobOffer: this.selectedJobOffer,
      selectedCandidates: this.selectedCandidates
    };
    localStorage.setItem('onboardingPlanDraft', JSON.stringify(draft));
  }


}
