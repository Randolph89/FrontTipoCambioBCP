import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { environment } from '../../environments/environment';

let httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiTC: string = environment.apiTC;

  constructor(
    private http: HttpClient //private sessionSt: SessionStorageService
  ) {}

  obtenerTipoCambio(valor1, valor2, valor3, token) {
    httpOptions.headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    });

    return this.http.get(
      '/api/TipoCambio/ObtenerTipoCambio/' +
        valor1 +
        '/' +
        valor2 +
        '/' +
        valor3,
      httpOptions
    );
  }

  listarTipoCambio(token) {
    httpOptions.headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    });

    return this.http.get('/api/TipoCambio/Listar', httpOptions);
  }

  login(datos) {
    console.log(datos);
    console.log('url: ' + this.apiTC + 'Login/Login');

    return this.http.post('/api/Login/Login', datos);
  }

  updateTC(datos) {
    return this.http.post(this.apiTC + 'TipoCambio/Actualizar', datos);
  }
}
