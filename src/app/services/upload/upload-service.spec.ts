import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';

describe('UploadServiceService', () => {
  let service: UploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
