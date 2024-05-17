import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-pipes-page',
  templateUrl: './custom-pipes-page.component.html',
  styleUrls: ['./custom-pipes-page.component.scss']
})
export class CustomPipesPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  pipesForm!: FormGroup;
  codeFor5CharPipe =
    '\n' + `import {Pipe, PipeTransform} from '@angular/core';` + '\n' +
    `@Pipe({
   name: 'textLimitTo5Chars'
 })
 export class TextLimitTo5CharsPipe implements PipeTransform {
   transform(value: any) {
     value = String(value);
     if (value.length > 5) {
       return value.substr(0, 5);
     }
     return value;
   }
 }`;

 codeForSignedDecimalPipe =
 '\n' + `import { Pipe, PipeTransform } from '@angular/core';
 @Pipe({
   name: 'signedDecimalNumberPipe'
 })
 export class SignedDecimalNumberPipePipe implements PipeTransform {
   private readonly regexOnInput: RegExp = new RegExp(/^\d+(\.)?(\d+)?$/);
   transform(value: any, ...args: unknown[]): any {
     const initialValue = value;
     if (initialValue && (initialValue[0] === '+' || initialValue[0] === '-')) {
       const firstValue = initialValue[0];
       const restValue = initialValue.substr(1);
       const matchArray = restValue.match(this.regexOnInput);
       if (matchArray === null) {
         return 'Not a signed decimal number';
       }
       value = firstValue + restValue;
       return value;
     } else if (!initialValue) {
       return null;
     } else {
       const matchArray = initialValue.match(this.regexOnInput);
       if (matchArray === null) {
         return 'Not a signed decimal number';
       }
       return value;
     }
   }
 }`;

  ngOnInit(): void {
    this.pipesForm = this.formBuilder.group({
      textField1: [''],
      textField2: [''],
      textField3: ['']
    });
  }

}
