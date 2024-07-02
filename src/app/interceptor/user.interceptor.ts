import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  private readonly usuario: string = 'michelle.llano';
  private readonly key: string = 'user-request';
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const cloned = req.clone({
        headers: req.headers.append(this.key, this.usuario)
      });
      return next.handle(cloned);

  }
}
