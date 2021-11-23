import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  public formHero!: FormGroup;

  constructor(
    private builder: FormBuilder
  ) { }

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

}