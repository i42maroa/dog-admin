import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dynamic-datepicker-range',
  templateUrl: './dynamic-datepicker-range.component.html',
  styleUrls: ['./dynamic-datepicker-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicDatepickerRangeComponent),
      multi:true
    }
  ]
})
export class DynamicDatepickerRangeComponent implements ControlValueAccessor  {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  emitValueToParent: Function = () => {};

  constructor() { }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
    this.emitValueToParent = fn;
  }
  registerOnTouched(fn: any): void {
  }

  emitInputValue(){
    this.emitValueToParent(this.range.value);
  }
}
