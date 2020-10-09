import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { LocalStorageUtils } from '../utils/localstorage';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    localStorageUtil = new LocalStorageUtils();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // processe e manipule quando ter erros
        return next.handle(req).pipe(catchError(error => {

            if (error instanceof HttpErrorResponse) {
                // limpar dados mesmo sem saber se ele ta logado ou nao, pode ter expirado ou invalido o token
                if (error.status === 401) {
                    this.localStorageUtil.limparDadosLocaisUsuario();
                    this.router.navigate(['/conta/login'], { queryParams: { returnUrl: this.router.url }});
                } // se ele for conhecido, retorno ele pra navegação acesso negado 
                if (error.status === 403) {
                    this.router.navigate(['/acesso-negado']);
                }  
            }
            // se nenhuma das duas retornarem, retorno throw error
            return throwError(error);
        }));
    }

}