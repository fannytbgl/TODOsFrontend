import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
  })

export class TransformPipe implements PipeTransform{
    
    transform(value: any): string {
        return this.replaceToDo(value);
      }

    private replaceToDo(value: string): string {
        return value.replace(/TO_DO/g, 'To do');
      }

}
