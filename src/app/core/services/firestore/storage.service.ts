import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, list, listAll, ref, StorageReference, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  uploadStorageFirebaseImage(file: any, nameFile:string, collection:string): Promise<any> {

    const imgRef = ref(this.storage, `${collection}/${nameFile}`);
    return uploadBytes(imgRef, file)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }


  getFirebaseListImages(collection:string): Promise<any> {
    const urlImg: string[] = [];
    const imgRef = ref(this.storage, collection);
    return listAll(imgRef)
      .then( async resp => {
        resp.items.forEach(async item => {
          const url = await getDownloadURL(item);
          urlImg.push(url)
        }) 
        return urlImg;
      })
      .catch(err => console.log(err))
  }

  getUrlFirebaseImage(collection:string, imgName:string):Promise<any> {
    const imgRef = ref(this.storage, collection);
    return listAll(imgRef)
    .then(async  resp => {
      let url = '';
      for(let item of resp.items){
        if( item.name.toUpperCase() === imgName.toUpperCase()){
          url = await getDownloadURL(item); 
        }
      }
      return url;
    })
    .catch(err => console.log(err))
  }



}
