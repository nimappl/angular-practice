import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('HTTP Request Sent');

        const modifiedRequest = req.clone({
            headers: req.headers.append('auth-key','xyz')
        });

        return next.handle(modifiedRequest);
    }
}