import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 1: return 'Half hour';
      case 2: return 'One hour';
      case 3: return 'Half day';
      case 4: return 'Full day';
      default: return value.toString();
    }
  }

}
