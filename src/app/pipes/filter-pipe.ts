import { Pipe, PipeTransform } from '@angular/core';
import { SpaceShuttle } from 'src/app/models/SpaceShuttle';

@Pipe({
  name: 'filterPipe',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  public transform(value: SpaceShuttle[], filters: any) {
    console.log(value, filters);
    if (!filters || filters.length === 0 || !value) {
      return value;
    }
    return value.filter((x) => filters.find((y) => y === x.flight_number));
  }
}
