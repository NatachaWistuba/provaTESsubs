import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Computador } from "../model/Computador";

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {
  baseURL = "http://localhost:3000/"


  constructor(private http: HttpClient) {}

  listar(): Observable<Computador[]> {
    return this.http.get<Computador[]>(`${this.baseURL}computador/listar`);
  }

  cadastrar(cadastrar : Computador): Observable<Computador> {
      return this.http.post<Computador>(`${this.baseURL}computador/cadastrar`, cadastrar);
  }

  deletar(id: string): Observable<Computador>{
    return this.http.delete<Computador>(`${this.baseURL}computador/remover/${id}`);
  }
}
