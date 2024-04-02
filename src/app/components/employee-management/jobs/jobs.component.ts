import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../services/upload/upload.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

  public uploadHistory: any = [];

  constructor(private _uploadService: UploadService){}

  ngOnInit(): void {
    this._uploadService.getUploads().subscribe((data) => {
      this.uploadHistory = data;
    });
  }

}
