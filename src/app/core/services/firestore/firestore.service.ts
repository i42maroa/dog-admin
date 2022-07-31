import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, deleteDoc, orderBy, doc, } from '@angular/fire/firestore';
import { query, updateDoc } from 'firebase/firestore';
import { Dog } from 'src/app/shared/models/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( 
    private readonly firestore:Firestore ) { }


    addDog(dog:Dog){
      const place = collection(this.firestore, 'dog');
      return addDoc(place, dog) 
    }

    getDogs(){
      const place = collection(this.firestore, 'dog', );
      // const q = query(place, orderBy("name"), limit(3));
      //const q = query(citiesRef, where("population", ">", 100000), orderBy("population"), limit(2));
      const q = query(place, orderBy("name", "asc"));
      return collectionData(q, {idField:'id'} )
    }

    deleteDog(id:string){
      const place = doc(this.firestore, `dog/${id}`);
      return deleteDoc(place);  
    }

    updateDog(dog:Dog){
      const place = doc(this.firestore, `dog/${dog.id!}`);
      return updateDoc(place, {...dog})
    }
}
