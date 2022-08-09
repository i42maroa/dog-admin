import { Component, Input, OnInit } from '@angular/core';

export enum BtnClass{
  noClass = '',
  submitBtn = 'submitBtn'
}

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss']
})
export class DynamicButtonComponent  {

  @Input() btnText!: string;
  @Input() btnDisabledState!: boolean;

  constructor() { }

}
