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

  constructor(
    public heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  public navigateToAdd(): void {
    this.router.navigate(['/', 'add', 'hero']);
  }
}
