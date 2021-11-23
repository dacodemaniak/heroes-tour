import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let dimension: number = 1;
    if (args.length) {
      dimension = +args[0];
    }
    return value.substring(0,dimension);
  }

}
