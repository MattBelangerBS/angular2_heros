import {Component, OnInit} from 'angular2/core';
//import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_BINDINGS, COMMON_PIPES, FORM_DIRECTIVES} from 'angular2/common';
import {Hero} from '../interfaces/hero';
import {HeroService} from '../services/hero.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl:'app/layout/dashboard.component.html',
  styleUrls: ['app/layout/dashboard.component.css']
  
})

export class DashboardComponent {
	   heroes: Hero[] = [];
       constructor(
           private _router: Router,
           private _heroService: HeroService) {
           }
       
       ngOnInit(){
           this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
       }
       
       gotoDetail(hero: Hero){
           let link = ['HeroDetail', {id : hero.id}];
           this._router.navigate(link);
       }
    
}