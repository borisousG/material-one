import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../utils/constants.class';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newParams = new HttpParams({fromString: request.params.toString()});
    newParams = newParams.set('api_key', Constants.API_KEY);

    const requestClone = request.clone({
      params: newParams
    });
    return next.handle(requestClone);
  }
}
