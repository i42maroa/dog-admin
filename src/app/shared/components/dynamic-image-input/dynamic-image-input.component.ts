import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/firestore/storage.service';

@Component({
  selector: 'app-dynamic-image-input',
  templateUrl: './dynamic-image-input.component.html',
  styleUrls: ['./dynamic-image-input.component.scss']
})
export class DynamicImageInputComponent implements OnInit {

  constructor(private storage:StorageService) {
  }
  ngOnInit(): void {
  }

  url:string = './assets/';
  preloadImg = false;

  uploadImage(event: any) {
    const file = event.target.files[0];
    this.previewImage(file);
    this.storage.uploadStorageFirebaseImage(file, 'nuevoArchivo', 'dogs')
      
  }

  previewImage(file:any){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) =>{
      this.preloadImg = true
      this.url = event.target.result
    }
  }
}
