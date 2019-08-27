import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xx'
})
export class XxPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
