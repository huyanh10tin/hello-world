import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formathuyanh'
})
export class FormatHuyAnh implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return null;
    }
    const preposisitions = ['of', 'the'];
    const word = value.split(' ');
    for (let index = 0; index < word.length; index++) {
      const element = word[index];
      if ((index > 0) && preposisitions.includes(element)) {
        word[index] = element.toLowerCase();
      } else {
        word[index] = element.substr(0, 1).toUpperCase() + element.substr(1).toLowerCase();
      }
    }
    return word.join(' ');
  }
}
