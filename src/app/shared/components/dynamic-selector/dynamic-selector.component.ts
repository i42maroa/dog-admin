import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dynamic-selector',
  templateUrl: './dynamic-selector.component.html',
  styleUrls: ['./dynamic-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicSelectorComponent),
      multi:true
    }
  ]
})
export class DynamicSelectorComponent implements ControlValueAccessor {

  @Input() labelText!:string;
  @Input() optionSelect!: {label:any, value:any}[];
  @Input() disabled: boolean = false;

  selectedValue:string = "";
  emitValueToParent!:Function;

  constructor() { }

  writeValue(obj: any): void {
    this.selectedValue = obj;
  }
  registerOnChange(fn: any): void {
    this.emitValueToParent = fn
  }
  registerOnTouched(fn: any): void {
  }

  emitSelectValue(){
    this.emitValueToParent(this.selectedValue);
  }

}
