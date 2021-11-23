import { Injectable } from '@angular/core';
import { ModelServiceInterface } from 'src/app/shared/interfaces/model-service-interface';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements ModelServiceInterface<Hero> {

  private collection: Map<number, Hero> = new Map();

  constructor() {
    console.log('Hello HeroService');
    this._mock();
  }
  findAll(): Map<number, Hero> {
    return this.collection;
  }
  findOne(id: number): Hero | undefined{
    return this.collection.get(id);
  }

  add(t: Hero): Hero {
    this.collection.set(t.getId(), t);
    return t;
  }

  update(t: Hero): void {
    this.collection.set(t.getId(), t);
  }
  delete(id: number): void {
    this.collection.delete(id);
  }
  size(): number {
    return this.collection.size;
  }

  private _mock(): void {
    const hero: Hero = new Hero();
    hero.setId(1);
    hero.name = 'Superman';
    hero.setBirthDate(new Date(1936, 5, 30));

    this.add(hero);
  }
}
