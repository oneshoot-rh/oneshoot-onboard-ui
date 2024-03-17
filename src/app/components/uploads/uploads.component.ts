import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload/upload.service';

@Component({
  selector: 'app-uploads',
  standalone: true,
  imports: [],
  templateUrl: './uploads.component.html',
  styleUrl: './uploads.component.css'
})
export class UploadsComponent implements OnInit{


  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.uploadService.getUploads().subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    }
    );
  }


}
