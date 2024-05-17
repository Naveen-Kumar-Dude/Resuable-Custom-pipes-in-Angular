import { Pipe, PipeTransform } from '@angular/core';

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

}
