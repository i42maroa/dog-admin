import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { from } from 'rxjs';

@Component({
  selector: 'app-dynamic-image-input',
  templateUrl: './dynamic-image-input.component.html',
  styleUrls: ['./dynamic-image-input.component.scss']
})
export class DynamicImageInputComponent implements OnInit {
  constructor(private storage: Storage) {
  }
  ngOnInit(): void {
   // this.getImages()
  }



  uploadImage(event: any) {
    const file = event.target.files[0];
    console.log(file)
    const imgRef = ref(this.storage, `dogs/${file.name}`)
    uploadBytes(imgRef, file)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }

  getImages(){
    const imgRef = ref(this.storage, `dogs`);
    listAll(imgRef)
      .then( async resp => {
        console.log(resp);
        for(let item of resp.items){
          const url = await getDownloadURL(item)
          console.log(url)
        } 
        
      })
      .catch(err => console.log(err))
  }
}
