import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  usuario:any;
  baseUrl = 'http://127.0.0.1:8000'
  headerLogin = new HttpHeaders().set('Content-Type', 'application/json')
  optionsLogin = {headers:this.headerLogin}
  headerToken:any;
  tokenOptions:any;
  isAuthenticated: boolean = false;

  constructor(private http:HttpClient) { }

  login(data:any){
    let url = `${this.baseUrl}/token`
    let credenciales = JSON.stringify(data)
    this.usuario = this.http.post(url, credenciales, this.optionsLogin).pipe(catchError(this.handleError<any>()))
    if (this.usuario != undefined) {
      this.isAuthenticated = true
    }
    return this.usuario
  }

  // @ts-ignore
  get(endpoint:string):Observable<any[]> {
    let url = `${this.baseUrl}/${endpoint}/`
    return this.http.get(url, this.tokenOptions).pipe(catchError(this.handleError<any>()))
  }

  crearHeaders(token:any) {
    this.headerToken = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Token ${token}`)
    this.tokenOptions = {headers:this.headerToken}
    //Guardar en local storage
    localStorage.setItem('token', token)
    }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.error);
      return of(result as T);
    };
  }

  CheckIfAuthenticated() {
    if (localStorage.getItem('token') != null) {
      this.isAuthenticated = true
    }
  }

  getUser() {
    return this.usuario
  }
}
