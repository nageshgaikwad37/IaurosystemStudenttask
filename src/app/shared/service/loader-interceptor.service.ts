import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpcallsService } from './http.service';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private _http:HttpcallsService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        this._http.loader.next(true)
        if(event.type == HttpEventType.Response){
          if(event.status){
          this._http.loader.next(false)
          }
        }
      })
    )
  }
}
