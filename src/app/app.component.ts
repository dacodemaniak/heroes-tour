import { Component, OnInit } from '@angular/core';

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

  public heroes: string[];

  public constructor() {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.title = 'Heroes Tour';

    this.heroes.push('Superman');
    this.heroes.push('Batman');
    this.heroes.push('Spiderman');
  }
}
