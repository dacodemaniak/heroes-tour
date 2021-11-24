import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/models/hero';
import { HeroService } from './hero/services/hero.service';
import { environment } from 'src/environments/environment';
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

  public constructor() { }

  ngOnInit(): void {}
}