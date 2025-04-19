
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.api;
  constructor(
    private http: HttpClient,
    public utils: UtilsService
  ) {}


  // Método GET con parámetros y manejo de errores
  get(endpoint: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
    }
    return this.http.get(`${this.apiUrl}/${endpoint}`, { params: httpParams })
    .pipe(retry(3), // Reintenta la solicitud hasta 3 veces en caso de error
        catchError(this.handleError)
      );
  }

   // Método para manejar errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(this.utils)
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
      this.utils.toastShow('bottom', errorMessage, 'error');
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.utils.toastShow('bottom', errorMessage, 'error');
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // Método POST con manejo de errores
  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data)
    .pipe(
    catchError(this.handleError)
    );
  }
}
