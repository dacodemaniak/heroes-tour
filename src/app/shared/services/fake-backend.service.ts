import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/hero/models/hero';

const routes: Map<any, any> = new Map()
  .set('heroes', {
    path: /\api\/v1\/hero+$/,
    method: 'GET',
    action: () => {
      const heroes: any[] = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : [];
      return of(
        new HttpResponse({ status: 200, body: heroes})
      )
    }
  })
  .set(
    'add_hero', {
      path: /\api\/v1\/hero+$/,
      method: 'POST',
      action: (...args: any[]) => {
        // Récupérer une éventuelle donnée dans localStorage
        const heroes: any[] = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : [];
        const hero: Hero = args[0];
        const nextId: number = heroes.length ?
          heroes.sort((h1: any, h2: any) => h2.id - h1.id)[0].id + 1 :
          1;
        hero.setId(nextId);
        heroes.push(hero);
        localStorage.setItem('heroes', JSON.stringify(heroes));
        return of(
          new HttpResponse({ status: 201, body: hero})
        )
      }
    }
  )
  .set('delete_hero', {
    path: /\/api\/v1\/hero\/\d+$/,
    method: 'DELETE',
    action: (...args: any[])=> {
      const parsedURI: string[] = args[1].split('/');
      const rawId: number = +parsedURI.pop();

      const heroes: any[] = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : [];
      
      const index: number = heroes.findIndex((hero: any) => hero.id === rawId);

      if (index !== -1) {
        heroes.splice(index, 1);
        localStorage.setItem('heroes', JSON.stringify(heroes));
        return of(new HttpResponse({status: 204}));
      } else {
        
        return of(new HttpResponse({status: 404}));
      }
    }
  })
@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements HttpInterceptor  {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body} = request;

    console.log(`URI : ${url}, method : ${method}`);

    let routeFound: boolean = false;
    let action: any = null;
    routes.forEach((value: any, key: string) => {
      if (value.path.test(url) && value.method === method) {
        routeFound = true;
        action = value.action;
      }
    })
    if (!routeFound)
      return next.handle(request);
    else
      return action(body, url);
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}
