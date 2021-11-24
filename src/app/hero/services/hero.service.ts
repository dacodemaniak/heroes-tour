import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ModelServiceInterface } from 'src/app/shared/interfaces/model-service-interface';
import { Hero } from '../models/hero';
import { environment } from 'src/environments/environment';

import { take, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService implements ModelServiceInterface<Hero> {

  private collection: Map<number, Hero> = new Map();

  constructor(
    private httpClient: HttpClient
  ) {
    //this._mock();
  }

  findAll(): Observable<Map<number, Hero>> | Observable<never> {
    return this.httpClient.get<any>(
      `${environment.api}hero`,
      {
        observe: 'response'
      }
    )
    .pipe(
      take(1),
      map((results: HttpResponse<any>) => {
        if (results.status === 200) {
          results.body.forEach((value: any) => {
            this.collection.set(value.id, new Hero().fromBackend(value));
          });
        }
        return this.collection;
      })
    );
  }

  findOne(id: number): Hero | undefined{
    return this.collection.get(id);
  }

  add(hero: Hero): Observable<Hero> {
    return this.httpClient.post<any>(
      `${environment.api}hero`,
      hero
    );
  }

  update(t: Hero): void {
    this.collection.set(t.getId(), t);
  }

  delete(id: number): void {
    this.httpClient.delete<any>(
      `${environment.api}hero/${id}`
    ).subscribe(() => {}, (error) => {})
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

