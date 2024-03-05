import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingAutomationComponent } from './mailing-automation.component';

describe('MailingAutomationComponent', () => {
  let component: MailingAutomationComponent;
  let fixture: ComponentFixture<MailingAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailingAutomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailingAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
