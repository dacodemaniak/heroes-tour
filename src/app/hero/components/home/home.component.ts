import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public heroesList: Map<number, Hero> = new Map();

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroService.findAll()
      .subscribe((heroes: Map<number, Hero>) => {
        this.heroesList = heroes;
      })
  }

  public remove(id: number): void {
    this.heroService.delete(id);
    this.heroesList.delete(id);
  }

  public navigateToAdd(): void {
    this.router.navigate(['/', 'add', 'hero']);
  }
}
