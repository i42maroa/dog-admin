import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation/validation.service';


@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {

  form!:FormGroup;
  

  constructor(
    private readonly validationService:ValidationService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, this.validationService.commerceNumberValidate]),
      raza: new FormControl('', Validators.required),
    });
  }

}
