import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { DOG_EXAMPLES } from 'src/app/shared/models/dog.examples';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private firestoore:FirestoreService
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

  saveDog(){
    this.firestoore.addDog(DOG_EXAMPLES[1]).subscribe(
      data => {
        console.log(data)
      },
      erro => console.log(erro)
    )
  }

}
