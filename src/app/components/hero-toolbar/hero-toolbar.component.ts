import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-toolbar',
  templateUrl: './hero-toolbar.component.html',
  styleUrls: ['./hero-toolbar.component.scss']
})
export class HeroToolbarComponent implements OnInit {

  @Input() public heroes: Hero[] = [];
  public displayed: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.displayed = this.heroes.filter((item: Hero) => item.isMarvel).length;
  }

}
