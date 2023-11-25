import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface User {
  "id": string,
  "username": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "gender": string,
  "image": string,
  "token": string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //Definimos nuestra función
  login(username: string, password: string): Observable<User> {
    //Este encabezado informa al servidor que el cuerpo de la solicitud contiene datos JSON
    const headers = new HttpHeaders({ "Content-Type": "application/json" })

    // Me devuelve un observable 
    return this.http.post<User>(
      "https://dummyjson.com/auth/login",
      JSON.stringify({username, password}),
      {
        headers
      }
    )

  }

}