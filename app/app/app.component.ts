import {Component} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';
import {HeroService} from '../services/hero.service';
import {HeroesComponent} from '../hero/hero.components';
import {DashboardComponent} from '../layout/dashboard.component';
import {HeroDetailComponent} from '../hero_detail/hero-detail.component';

@Component({
  selector: 'my-app',
  templateUrl:'app/app/app.component.html',
  styleUrls: ['app/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      HeroService
      ]
})

@RouteConfig([
    { 
        path: '/heroes', 
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },{
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
    
])

export class AppComponent {
  title = 'Tour of Heroes';
}