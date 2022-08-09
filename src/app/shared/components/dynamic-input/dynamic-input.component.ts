import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicInputComponent),
      multi:true
    }
  ]
})
export class DynamicInputComponent implements ControlValueAccessor  {

  @Input() labelText!:string;
  @Input() maxLengthInput!:number;

  valueInput:string = '';
  emitValueToParent: Function = () => {};

  constructor() { }

  writeValue(obj: any): void {
    this.valueInput = obj;
  }
  registerOnChange(fn: any): void {
    this.emitValueToParent = fn;
  }
  registerOnTouched(fn: any): void {
  }

  emitInputValue(){
    this.emitValueToParent(this.valueInput);
  }

}
