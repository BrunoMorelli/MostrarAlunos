import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../modelos/Alunos';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http:HttpClient) { }

  listar() {
    return this.http.get<Aluno[]>("http://gilsonpolito-api.herokuapp.com/alunos");
  }
}
