import {Hero} from '../interfaces/hero';
import {HEROES} from '../mock/mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()

export class HeroService {


  getHeroes() {
	  console.log(Promise.resolve(HEROES));
    return Promise.resolve(HEROES);
  }

  getHero(id:number){
      return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id ===id)[0]
          );
  }

  // See the "Take it slow" appendix

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 1000) // 1 seconds
    );
  }
}