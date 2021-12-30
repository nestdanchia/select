import { Component,Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'pipe'
})
export class PipePipe extends  DatePipe implements PipeTransform{

    transform(value: any, args?: any): any {
      return super.transform(value, "yyyy-mm-ddthh:mm:ss");
    }

}
