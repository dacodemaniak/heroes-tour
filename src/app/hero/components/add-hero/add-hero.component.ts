import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  public formHero!: FormGroup;
  public showPassword: boolean = false;

  constructor(
    private builder: FormBuilder,
    private heroService: HeroService,
    private router: Router
  ) { }

  public isMarvel(): boolean {
    return this.formHero.controls.isMarvel.value;
  }

  public get controls(): {[key: string]: AbstractControl} {
    return this.formHero.controls;
  }

  ngOnInit(): void {
    this.formHero = this.builder.group({
      name: [
        '',
        Validators.required
      ],
      isMarvel: [
        true
      ],
      birthDate: [
        new Date(),
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  public onSubmit(): void {
    if (this.formHero.valid) {
      const hero: Hero = new Hero().deserialize(this.formHero.value);
      console.log(JSON.stringify(this.formHero.value));
      this.heroService.add(hero);
      this.router.navigate(['/', 'home', 'hero']);
    }
  }
}