import {Pipe, PipeTransform} from '@angular/core';
import {Person} from "./person";

@Pipe({name: 'contentFilter'})
export class ContentFilterPipe implements PipeTransform {
  transform(value: Person[], searchFor: string) : Person[] {
    if (!searchFor) return value;
    searchFor = searchFor.toLowerCase();
    return value.filter(person =>
    //person.site.toLowerCase().indexOf(searchFor) >= 0 ||
    //person.location.toLowerCase().indexOf(searchFor) >= 0 ||
    //person.depth.toString().indexOf(searchFor) >= 0 ||
    person.name.toString().indexOf(searchFor) >= 0);
  }
}
