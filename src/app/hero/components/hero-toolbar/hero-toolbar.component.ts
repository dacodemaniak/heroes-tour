import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/hero/models/hero';

@Component({
  selector: 'app-hero-toolbar',
  templateUrl: './hero-toolbar.component.html',
  styleUrls: ['./hero-toolbar.component.scss']
})
export class HeroToolbarComponent implements OnInit {

  @Input() public heroes: Hero[] = [];
  @Output() public filterChange: EventEmitter<number> = new EventEmitter();
  @Output() public reset: EventEmitter<void> = new EventEmitter();

  public displayed: number = 0;
  private _filter: number = 0;

  constructor() { }

  public set filter(filterValue: number) {
    this._filter = filterValue;
    this.filterChange.emit(this._filter);
    if (filterValue === 0) {
      this.displayed = this.heroes.length;
    } else {
      this.displayed = this.heroes.filter((item: Hero) => {
        let value: number = filterValue - 1;
        let comparator: boolean = value === 0;
        return item.isMarvel === comparator;
      }).length;

      this.displayed = filterValue === 0 ? this.heroes.length : 0;
      for (let hero of this.heroes) {
        if (filterValue === 1 && hero.isMarvel || filterValue === 2 && !hero.isMarvel) {
          this.displayed++;
        }
      }
    }
  }

  public get filter(): number {
    return this._filter;
  }
  ngOnInit(): void {
    this.displayed = this.heroes.length;
  }

}
