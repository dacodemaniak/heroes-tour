import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const routes: Map<any, any> = new Map()
  .set('heroes', {
    path: /\api\/v1\/hero+$/,
    method: 'GET',
    action: () => {
      return of(
        new HttpResponse({ status: 200, body: []})
      )
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
      return action();
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}
