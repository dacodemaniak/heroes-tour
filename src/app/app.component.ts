import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * main title
   * @var string
   */
  public title!: string;


  public heroes: Hero[];

  public filter: number = 0;
  public displayMarvel: boolean = true;

  public constructor() {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.title = 'Heroes Tour';

    const superman = new Hero();
    superman.name = 'Superman';

    const batman = new Hero();
    batman.name = 'Batman';
    batman.isMarvel = false;

    const thor = new Hero();
    thor.name = 'Thor';
    thor.isMarvel = true;

    const spiderman: Hero = new Hero();
    spiderman.name = 'Spiderman';
    spiderman.isMarvel = true;

    this.heroes.push(superman);
    this.heroes.push(batman);
    this.heroes.push(thor);
    this.heroes.push(spiderman);
  }

  public addHero(): void {
    const hero: Hero = new Hero();
    hero.name = 'Joker';
    hero.isMarvel = false;
    this.heroes.push(hero);
  }

  public remove(hero: Hero): void {
    const index: number = this.heroes.findIndex((item: Hero) => {
      return item.name === hero.name
    });

    this.heroes.splice(
      index,
      1
    );
  }

  public onFilterChange(event: any): void {
    console.log(`Recieved ${event}`);
    console.log('Je reçois ' + event);
    this.filter = event;
    if (event === 1) {
      this.displayMarvel = true;
    } else {
      this.displayMarvel = false;
    }
  }
}