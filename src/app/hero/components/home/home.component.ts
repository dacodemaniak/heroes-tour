import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public heroService: HeroService
  ) { }

  ngOnInit(): void {}

}
