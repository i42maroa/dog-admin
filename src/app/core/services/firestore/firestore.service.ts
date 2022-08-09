import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, deleteDoc, orderBy, doc, } from '@angular/fire/firestore';
import { query, updateDoc } from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import { Dog } from 'src/app/shared/models/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( 
    private readonly firestore:Firestore ) { }


    addDog(dog:Dog){
      const place = collection(this.firestore, 'dog');
      return from(addDoc(place, dog) )
    }

    getDogs(){
      const place = collection(this.firestore, 'dog', );
      // const q = query(place, orderBy("name"), limit(3));
      //const q = query(citiesRef, where("population", ">", 100000), orderBy("population"), limit(2));
      const q = query(place, orderBy("name", "asc"));
      return from(collectionData(q, {idField:'id'} )) as Observable<Dog[]>
    }

    deleteDog(id:string){
      const place = doc(this.firestore, `dog/${id}`);
      return deleteDoc(place);  
    }

    updateDog(dog:Dog){
      const place = doc(this.firestore, `dog/${dog.id!}`);
      return updateDoc(place, {...dog})
    }

    async subirImagen(nombre: string, imgBase64: any) {
      // const storareRef = this.firestore.app().storage().ref();
      // try {
      //   let respuesta = await storareRef.child("users/" + nombre).putString(imgBase64, 'data_url');
      //   console.log(respuesta);
      //   return await respuesta.ref.getDownloadURL();
      // } catch (err) {
      //   console.log(err);
      //   return null;
      // }
  
    }
}
