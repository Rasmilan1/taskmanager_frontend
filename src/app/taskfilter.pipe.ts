import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskfilter'
})
export class TaskfilterPipe implements PipeTransform {

  transform(value: any[], ...args: any): any[] {


    var searchText = args[0].toLowerCase();

    return value.filter(a =>
      a.title.toLowerCase().includes(searchText) ||
      a.description.toLowerCase().includes(searchText)
    );
  }
}
