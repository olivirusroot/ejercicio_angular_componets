import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { arrayCharacters } from '../../models/rick.interface';

@Injectable({
  providedIn: 'root'
})


export class RickandmortyService {

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<arrayCharacters>{
    return this.http.get<arrayCharacters>('https://rickandmortyapi.com/api/character');
  }


}
