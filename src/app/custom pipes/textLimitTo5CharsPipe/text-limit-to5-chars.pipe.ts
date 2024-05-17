import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
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

}
