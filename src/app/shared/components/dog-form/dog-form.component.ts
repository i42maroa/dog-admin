import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { StorageService } from 'src/app/core/services/firestore/storage.service';
import { ValidationService } from 'src/app/core/services/validation/validation.service';
import { Dog } from '../../models/dog.interface';


@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {

  form!:FormGroup;
  sexOptions:{label:string, value:string}[] = []

  constructor(
    private readonly validationService:ValidationService,
    private readonly firestore:FirestoreService,
    private storage:StorageService
  ) { }

  preloadedFile:any;

  ngOnInit(): void {
    this.sexOptions.push({label:'Macho', value:'macho'});
    this.sexOptions.push({label:'Hembra', value:'hembra'});

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, this.validationService.commerceNumberValidate]),
      mainOwner: new FormControl('', Validators.required),
      sex: new FormControl('macho', Validators.required),
      
    });
  }

  submit(){
    console.log(this.form.value);
    this.mapToFirestoreDog();
  }

  mapToFirestoreDog(){
    const dog:Dog = {
      name:this.form.value.name,
      breed:'',
      owners:{
        mainOwner:this.form.value.mainOwner,
        secondaryOwner:[]
      },
      careDays:[],
      observations:[]
    }

    this.firestore.addDog(dog)
      .then(dog => {
        this.storage.uploadStorageFirebaseImage(this.preloadedFile, `${dog.id}/profile`, 'dogs')
          .then(_ =>console.log("Correct"))
          .catch(err => console.log(err))

        this.storage.uploadStorageFirebaseImage(this.preloadedFile, `profiles/${dog.id}`, 'dogs')
          .then(_ =>console.log("Correct"))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))  
  }

}
