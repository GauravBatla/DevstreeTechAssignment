import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    status: any
    constructor(private _http: HttpClient) {
        this.status = localStorage.getItem('loginError')
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        var Bearer = "Bearer "
        var token = window.sessionStorage.getItem('token')
        var auth = Bearer + token
        // console.log(auth,"ok");
        const user = new HttpHeaders({
            'authorization': `${auth}`,
        })
        const header = req.clone({ headers: user })
        return next.handle(header)
    }
}