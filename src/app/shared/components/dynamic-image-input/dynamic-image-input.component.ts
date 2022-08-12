import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { from } from 'rxjs';
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
    this.previewImage(event.target.files[0]);
    this.storage.uploadStorageFirebaseImage(event.target.files[0], 'dogs')
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
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
