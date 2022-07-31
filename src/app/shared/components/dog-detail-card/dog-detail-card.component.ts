import { Component, Input, OnInit } from '@angular/core';
import { DOG_EXAMPLES } from '../../models/dog.examples';
import { Dog } from '../../models/dog.interface';

@Component({
  selector: 'app-dog-detail-card',
  templateUrl: './dog-detail-card.component.html',
  styleUrls: ['./dog-detail-card.component.scss']
})
export class DogDetailCardComponent implements OnInit {

  constructor() { }

  dog:Dog = DOG_EXAMPLES[0]

  ngOnInit(): void {
  }

}
