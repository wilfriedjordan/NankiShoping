import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le token d'authentification
    const authToken = this.authService.getToken();

    // Cloner la requête et ajouter le header d'authentification si un token est disponible
    if (authToken) {
      const modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });

      // Passer la requête modifiée au prochain gestionnaire (interceptor ou backend)
      return next.handle(modifiedReq);
    }

    // Si aucun token n'est disponible, passer la requête d'origine au prochain gestionnaire
    return next.handle(req);
  }
}
