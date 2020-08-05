import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'booleanEmojiPipe' })
export class BooleanEmojiPipe implements PipeTransform {
  transform(value: boolean): any {
    return value ? '✔️' : '❌';
    // return value ? 'Yes' : 'No';
  }
}
