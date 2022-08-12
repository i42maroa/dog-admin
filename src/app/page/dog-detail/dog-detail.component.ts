import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { StorageService } from 'src/app/core/services/firestore/storage.service';
import { DOG_EXAMPLES } from 'src/app/shared/models/dog.examples';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private storage:StorageService
  ) { }

  image$:Observable<any> = new Observable();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    from(this.storage.getUrlFirebaseImage('profile', 'dogs/'+id!))
      .subscribe(
        urlImage => {
          console.log(urlImage)
          this.image$ = urlImage})
  }

  saveDog(){
    
  }

}
