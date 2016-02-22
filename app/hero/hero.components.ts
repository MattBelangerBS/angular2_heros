import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from '../interfaces/hero';
import {HeroService} from '../services/hero.service';
import {HeroDetailComponent} from '../hero_detail/hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl : `app/hero/hero.component.html`,
    styleUrls:  ['app/hero/hero.component.css'],
    directives:[HeroDetailComponent]
})



export class HeroesComponent implements OnInit { 
	public heroes:Hero[];
	public selectedHero: Hero;

	constructor(
        private _router: Router,
        private _heroService: HeroService) { }

	getHeroes() {
    	this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}

  	ngOnInit() {
    	this.getHeroes();
  	}
  	onSelect(hero: Hero) { 
		this.selectedHero = hero; 
	}
    gotoDetail(){
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }


}

