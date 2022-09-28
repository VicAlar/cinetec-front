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
  loading:boolean = false

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
    if (this.tokenOptions == undefined) {
      this.crearHeaders(localStorage.getItem('token'))
    }
    let url = `${this.baseUrl}/${endpoint}/`
    return this.http.get(url, this.tokenOptions).pipe(catchError(this.handleError<any>()))
  }

  add(endpoint:string, data:any) {
    let url = `${this.baseUrl}/${endpoint}/`
    let token = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`)
    let options = {headers:token}

    return this.http.post<any>(url, data, options).pipe(catchError(this.handleError<any>()))
  }

  addBoleta(endpoint:string, data:any) {
    let url = `${this.baseUrl}/${endpoint}/`
    let token = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`)
    let options = {headers:token}

    return this.http.post<any>(url, data, options).pipe(catchError(this.handleError<any>()))
  }

  put(endpoint:string, data:any) {
    let url = `${this.baseUrl}/${endpoint}/`
    let token = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`)
    let options = {headers:token}

    return this.http.put<any>(url, data, options).pipe(catchError(this.handleError<any>()))
  }

  delete(endpoint:string) {
    let url =`${this.baseUrl}/${endpoint}/`
    let header = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`)
    let options = {headers: header}
    return this.http.delete<any>(url, options).pipe(catchError(this.handleError<any>()))
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

}
