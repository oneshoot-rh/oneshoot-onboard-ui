import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContractsComponent } from './e-contracts.component';

describe('EContractsComponent', () => {
  let component: EContractsComponent;
  let fixture: ComponentFixture<EContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EContractsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
