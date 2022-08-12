import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, list, listAll, ref, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  uploadStorageFirebaseImage(file: any, collection:string): Promise<any> {
    const imgRef = ref(this.storage, `${collection}/${file.name}`);
    return uploadBytes(imgRef, file);
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
    console.log(`${collection}/adas.PNG`)
    const imgRef = ref(this.storage, `${collection}/adas.PNG`);
    return listAll(imgRef)
      .then(async resp => {
        console.log(resp)
        return await getDownloadURL(resp.items[0]);    
      })
      .catch(err => console.log(err))
  }
}
