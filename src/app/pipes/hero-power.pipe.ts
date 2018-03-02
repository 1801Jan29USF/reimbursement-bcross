import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../beans/hero';

@Pipe({
  name: 'heroPower'
})
export class HeroPowerPipe implements PipeTransform {

  transform(heroes: Array<Hero>, power: number): Array<Hero> {
    return heroes.filter( hero => hero.power >= power);
  }

}
