import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { DOG_EXAMPLES } from 'src/app/shared/models/dog.examples';
import { Dog } from 'src/app/shared/models/dog.interface';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListPageComponent implements OnInit {

  dogsList:Dog[] =[];
  
  constructor(
    private router:Router,
    private firestore:FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestore.getDogs().subscribe(dogs => this.dogsList = dogs)
  }
  
  cardClick(id:string){
    this.router.navigateByUrl(`/dog-detail/${id}`)
  }
}
